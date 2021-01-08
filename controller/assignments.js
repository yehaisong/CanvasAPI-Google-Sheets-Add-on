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
  var endpoint=Helper.getAPIAction("assignments","list_assignments_date").endpoint;
  //get course id
  var cell=SpreadsheetApp.getCurrentCell();
  var param_value=cell.getValue();
  //create opts
  var opts ={};
  opts["course_id"]=param_value;
  //opts.include.push("all_dates");
  //call api
  var data=canvasAPI(endpoint,opts);
  //handle data
  Helper.fillValues(cell.getRow()+1,cell.getColumn(),data,"assignment_dates",null);
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
function shiftAssignmentsDate()
{
  //endpoint
  //params:courseid, number of days
  //create opts for get assignments
  //call get assignment api
  //create opts for bulkUpdate
  //call bulkUpdate api
  //handle data
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
