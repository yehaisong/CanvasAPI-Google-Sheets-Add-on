/**
 * @fileoverview Wrapping assignments APIs
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Show the sidebar for assignments APIs
 */
function assignments_guide()
{
  SideBar.show("Assignments");
}


/**
 * Get all assignments in a course and list all due dates, unlock dates, and lock dates
 * GET /api/v1/courses/:course_id/assignments
 * Returns the paginated list of assignments for the current course or assignment group.
 */
function listAssignmentsDate()
{
  //get course id
  var cell=SpreadsheetApp.getCurrentCell();
  var course_id=cell.getValue();
  var data=getAssginmentsDate(course_id);
  //handle data
  Helper.fillValues(cell.getRow()+1,cell.getColumn(),data,"assignment_dates",null);
}

/**
 * Get all assignments dates in a course
 * @param {number} course_id 
 */
function getAssginmentsDate(course_id)
{
  var endpoint=Helper.getAPIAction("assignments","list_assignments_date").endpoint;
  //create opts
  var opts ={};
  opts["course_id"]=course_id;
  //opts.include.push("all_dates");
  //call api
  var data=canvasAPI(endpoint,opts);
  //handle data
  return data
}


/**
 * Add number of days to the current assignments dates
 * Bulk update assignment dates
 * PUT /api/v1/courses/:course_id/assignments/bulk_update
 * Update due dates and availability dates for multiple assignments in a course.
 * Accepts a JSON array of objects containing two keys each: id, the assignment id, and all_dates, an array of AssignmentDate structures containing the base and/or override dates for the assignment, as returned from the List assignments endpoint with include[]=all_dates.
 * Override dates are not handled.
 */
/*
'[{
      "id": 1, //asignment id
      "all_dates": 
      [{
        "base": true, //default value
        "due_at": "2020-08-29T23:59:00-06:00" //new date
      }
    }]'
*/
function shifAssignmentDates()
{
  //endpoint
  var endpoint=Helper.getAPIAction("assignments","shift_assignments_dates").endpoint;
  //params:courseid, number of days
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.range_to_json(param_range);
  
  //verify opts
  if(opts["course_id"]==null || opts["num_of_days"]==null){
    Browser.msgBox("Invalid parameters.")
  }
    

  //call get assignment api
  var original_dates=getAssginmentsDate(opts.course_id);
  
  //var total=original_dates.length;
  let date_opts={
    "course_id":opts.course_id,
    "dlist":[]
    };
  //updage assignments
  var assignments=[];
  for(var i=0;i<original_dates.length;i++){//check all assignments  
        let new_date={
          "id":original_dates[i].id.toString(),
          "all_dates":[{
            "base":true
          }]
        }
        //due_at
        if(original_dates[i].due_at!=null){
          new_date.all_dates[0].due_at=shiftDate(original_dates[i].due_at,opts.num_of_days);
        }
        //lock_at
        if(original_dates[i].lock_at!=null){
          new_date.all_dates[0].lock_at=shiftDate(original_dates[i].lock_at,opts.num_of_days);
        }
        //unlock_at
        if(original_dates[i].unlock_at!=null){
          new_date.all_dates[0].unlock_at=shiftDate(original_dates[i].unlock_at,opts.num_of_days);
        } 

        if(new_date.all_dates[0].due_at!=null || new_date.all_dates[0].lock_at!=null || new_date.all_dates[0].unlock_at!=null)
          date_opts.dlist.push(new_date);
  }
  //call bulkUpdate api
  //Helper.log(date_opts);
  let data=canvasAPI(endpoint,date_opts);
  //handle data
  Helper.fillValues(param_range.getLastRow()+1,param_range.getColumn(),data,"progress","#e1eec7");
  Utilities.sleep(500);
  //show progress
  var cell1=SpreadsheetApp.getActiveSheet().getRange(param_range.getLastRow()+2,param_range.getColumn());
  cell1.setValue("completion");
  var cell2=SpreadsheetApp.getActiveSheet().getRange(param_range.getLastRow()+2,param_range.getColumn()+1);
  queryProgress(data.id,cell2);
  //Helper.fillValues(param_range.getLastRow()+1,param_range.getColumn(),assignments,"assignment_dates","#e1eec7");
}

/**
 * Shift days
 * @param {string} olddatestr 
 * @param {Number} num_of_days 
 */
function shiftDate(olddatestr,num_of_days)
{
  let result=new Date(olddatestr);
  let olddate=new Date(olddatestr);
  result.setDate(olddate.getDate()+num_of_days);
  return result.toISOString();
}

/**
 * Delete an assignment override
 * DELETE /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
 * Deletes an override and returns its former details.
 * Returns an AssignmentOverride
 */
function delete_an_assignment_override()
{
  Browser.msgBox("Not implemented.");
}


/**
*Batch create overrides in a course
*POST /api/v1/courses/:course_id/assignments/overrides
*
*Creates the specified overrides for each assignment. Handles creation in a transaction, so all records are created or none are.
*One of student_ids, group_id, or course_section_id must be present. 
*. At most one should be present; if multiple are present only the most specific 
*. (student_ids first, then group_id, then course_section_id) is used and any others are ignored.
* Errors are reported in an errors attribute, an array of errors corresponding to inputs. Global errors will be reported as a single element errors array
* Returns a list of AssignmentOverrides
*/
function batch_create_assignments_overrides()
{
  Browser.msgBox("Not implemented.");
  /* copied from create an override
  //var endpoint="POST /api/v1/courses/:course_id/assignments/:assignment_id/overrides"; //specify api
  var endpoint=Helper.getAPIAction("assignments","create_an_assignment_override").endpoint;
  Helper.log("Call create_an_assignment_override().")
  var range=SpreadsheetApp.getActiveRange();
  var data=range.getValues();

  //create items. Assume columns are in order and with header
  var opts={};


  //extract data
  for(var r=1;r<data.length;r++)
  {
    Helper.log("row: "+r);
    Helper.log("typeof opts: "+typeof opts);
    if(opts.course_id==null)
    {
      opts={
        "course_id":data[r][0],
        "assignment_id":data[r][1],
        "assignment_override":{
          "title":data[r][2],
          "due_at":data[r][3],
          "unlock_at":data[r][4],
          "lock_at":data[r][5],
          "student_ids":[data[r][6]]
        }
      };
    }else
    {
      if((opts["course_id"]==data[r][0]||data[r][0]=="")
          &&(opts["assignment_id"]==data[r][1]||data[r][1]=="")
          &&(opts["assignment_override"]["title"]==data[r][2]||data[r][2]=="")
          &&(opts["assignment_override"]["due_at"]==data[r][3]||data[r][3]=="")
          &&(opts["assignment_override"]["unlock_at"]==data[r][4]||data[r][4]=="")
          &&(opts["assignment_override"]["lock_at"]==data[r][5]||data[r][5]=="")
          )//same override
      {
        if(data[r][6]!="")
          opts.assignment_override.student_ids.push(data[r][6]);
      }
      else//different orverride
      {
        Browser.msgBox("There are more than one overrides in the selected range.");
        Helper.log ('There are more than one overrides in the selected range. End call.');
        return false;
      }
    }
  }
  
  Helper.log("opts: "+JSON.stringify(opts));
  var result=canvasAPI(endpoint,opts);
  Helper.log("result: "+JSON.stringify(result));
  Helper.fillValuesFromJsonObject(range.getLastRow()+1,range.getColumn(),result,null,null);
  Helper.log("End call create_an_assignment_override().");
  */
  
}
