/**
 * @fileoverview
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Show the sidebar for courses APIs
 */
function showCoursesGuide()
{
  SideBar.show("Courses");
}

/**
 * Update multiple courses in an account. Operates asynchronously; 
 * Use the progress endpoint to query the status of an operation.
 * The action to take on each course. Must be one of 'offer', 'conclude', 'delete', or 'undelete'.
 * PUT /api/v1/accounts/:account_id/courses
 * @param {string} event 
 */
function updateCourses(event)
{
  //get the selected column. If no selected column or more than one column selected, return error.
  let rng=SpreadsheetApp.getActiveSheet().getActiveRange();
  if(rng.getNumColumns()>1){
    Browser.msgBox("Only one column allowed.");
    return;
  }
  //prepare opts
  let opts={
    "account_id":1,
    "event":event,
    "course_ids":[]
  }
  for(let i=1;i<=rng.getNumRows();i++){
    opts.course_ids.push(rng.getCell(i,1).getValue());
  }
  //get endpoint
  let endpoint=Helper.getAPIAction("courses","update_courses").endpoint;
  //call endpoint
  let data= canvasAPI(endpoint,opts);
  //handle progress
  Helper.showProgress(rng,data);
}