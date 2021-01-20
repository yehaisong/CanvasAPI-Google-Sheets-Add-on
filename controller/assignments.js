/**
 * @fileoverview Wrapping assignments APIs
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Show the sidebar for assignments APIs
 */
function showAssignmentsGuide()
{
  SideBar.show("Assignments");
}

/**
 * The Assignments class
 */
class Assignments{
  /**
   * Get all assignments dates in a course
   * @param {number} course_id 
   * @returns {object} a list of assignments
   */
  static getCourseAssginments(course_id)
  {
    var endpoint=Helper.getAPIAction2(APIAction.ASSIGNMENGS.GET_ASSIGNMENTS).endpoint;
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
   * Bulk update assignment dates
   * PUT /api/v1/courses/:course_id/assignments/bulk_update
   * @param {object} date_opts bulk assignment date update options object.
   * @returns {object} A progress object. Use the id to track the progress.
   */
  static bulkUpdateAssignmentDate(date_opts)
  {
    const endpoint=Helper.getAPIAction2(APIAction.ASSIGNMENGS.SHIFT_ASSIGNMENTS_DATES).endpoint;
    return canvasAPI(endpoint,date_opts);
  }

  /**
   * Construct a bulk assignment date update options object.
   * @param {number} course_id
   * @param {array<assignment>} assignments 
   * @param {number} num_of_days
   * @returns {object} 
   * '[{
        "id": 1, //asignment id
        "all_dates": 
        [{
          "base": true, //default value
          "due_at": "2020-08-29T23:59:00-06:00" //new date
        }
      }]'
  */
  static getBulkAssignmentDateOpts(course_id,assignments,num_of_days)
  {
    let date_opts={
      "course_id":course_id,
      "dlist":[]
      };
    
    for(var i=0;i<assignments.length;i++){//check all assignments  
      let new_date={
        "id":assignments[i].id.toString(),
        "all_dates":[{
          "base":true
        }]
      }
      //due_at
      if(assignments[i].due_at!=null){
        new_date.all_dates[0].due_at=Helper.shiftDate(assignments[i].due_at,num_of_days);
      }
      //lock_at
      if(assignments[i].lock_at!=null){
        new_date.all_dates[0].lock_at=Helper.shiftDate(assignments[i].lock_at,num_of_days);
      }
      //unlock_at
      if(assignments[i].unlock_at!=null){
        new_date.all_dates[0].unlock_at=Helper.shiftDate(assignments[i].unlock_at,num_of_days);
      } 

      if(new_date.all_dates[0].due_at!=null || new_date.all_dates[0].lock_at!=null || new_date.all_dates[0].unlock_at!=null)
        date_opts.dlist.push(new_date);
    }
    return date_opts;
  }

}














/**
 * Delete an assignment override
 * DELETE /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
 * Deletes an override and returns its former details.
 * Returns an AssignmentOverride
 * [Not implemented]
 */
function deleteAssignmentOverride()
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
[Not implemented]
*/
function batchCreateAssignmentsOverrides()
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
