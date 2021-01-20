
/**
 * @fileoverview Defines client funcs related to assignments
 * @author hye@cedarville.edu (Haisong Ye)
 */
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
  var data=Assignments.getCourseAssginments(course_id);
  //handle data
  /* fill data is handling this date issue
  for(let i=0;i<data.length;i++){
    data[i].due_at=Helper.getLocalDate(data[i].due_at);
    data[i].unlock_at=Helper.getLocalDate(data[i].unlock_at);
    data[i].lock_at=Helper.getLocalDate(data[i].lock_at);
  }*/
  Helper.fillValues(cell.getRow()+1,cell.getColumn(),data,"assignment_dates",null);
}

/**
 * Add number of days to the current assignments dates
 * Bulk update assignment dates
 * Update due dates and availability dates for multiple assignments in a course.
 * Accepts a JSON array of objects containing two keys each: id, the assignment id, and all_dates, an array of AssignmentDate structures containing the base and/or override dates for the assignment, as returned from the List assignments endpoint with include[]=all_dates.
 * Override dates are not handled.
*/
function shiftAssignmentDates()
{
  //params:courseid, number of days
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.parseRangeToJson(param_range);
  
  //verify opts
  if(opts["course_id"]==null || opts["num_of_days"]==null){
    Browser.msgBox("Invalid parameters.")
    return;
  }
  //call get assignment api
  var assignments=Assignments.getCourseAssginments(opts.course_id);
  
  //get bulk assignment date opts
  let date_opts=Assignments.getBulkAssignmentDateOpts(opts.course_id,assignments,opts.num_of_days);
  
  //call bulkUpdate api
  //Helper.log(date_opts);
  let data=Assignments.bulkUpdateAssignmentDate(date_opts);
  //handle data
  Helper.showProgress(param_range,data);
}

/**
 * Update assignments dates: due_at, lock_at, unlock_at. Not for overrides
 * @param {String} range_notation A1 Notation, e.g. A1:B6. A cell range with headers, must include course_id, id, due_at, lock_at, and unlock_at
 */
function updateAssignmentsDates(range_notation)
{
    throw "Not implemented!"
    /*
    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    //check for requred columns
    const action=Helper.getAPIAction2(APIAction.PAGES.UPDATE_PAGES_TODO);
    if(!Helper.checkRequiredColumns(range,action.required_columns)){
        //Browser.msgBox("Please select a range with the required columns: "+action.required_columns.toString());
        return;
    }
        
    //get pages with todo_date
    let pages=Helper.convertRangeToObjectArray(range);
    let return_pages=[];
    //for each page with todo_date
    for(let i=0;i<pages.length;i++){
        
        //call update page api
        let data=Pages.updatePageToDoDate(pages[i],pages[i].course_id);
        //toast msg
        if(data.url!=null){
            Helper.toast(data.url+" "+data.todo_date,"Page todo_date updated", 3);
            return_pages.push(data);
        }
        else{
            Helper.toast(data,"Error",3);
        }
        Utilities.sleep(1000);
    }
    Helper.fillValues(range.getLastRow()+1,range.getColumn(),return_pages,"page_list",null);
    */

}