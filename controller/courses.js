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

/**
 * Get courses by ids
 * "GET /api/v1/courses/:id"
 * @param {number} id Course id
 */
function getCourseById(id)
{
  //get get_single_course action
  let action=Helper.getAPIAction(APIController.COURSES,APIAction.COURSES.GET_SINGLE_COURSE);
  //call canvasAPI
  let course=canvasAPI(action.endpoint,{"id":id});
  return course;
}

/**
 * Batch update course dates
 * @param {String} range_notation The range of course ids, e.g. A1:B2. If not provided, use the current selected range.
 * @param {boolean} updateduedate Update due date or not. Default is true.
 */
function updateCourseDates(range_notation,updateduedate)
{
  throw "Not implemented!";
}

function getCoursesInfo(range_notation)
{
  //get range
  let range=SpreadsheetApp.getActiveSheet().getActiveRange();
  if(range_notation!=null)
      range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
  //check header
  if(!Helper.checkRequiredColumns(range,["name"])){
    Browser.msgBox("Please select a range with the required column: name");
    return;
  }
  //get course data
  let courses=Helper.convertRangeToObjectArray(range);
  let queued_courses=[];
  
  for(let i=0;i<courses.length;i++){
    if(courses[i].id!=null){
      //if course ids are provided
      let course=getCourseById(courses[i].id);
      if(course.name!=null){
        queued_courses.push(course);
      }
    }
    else if(courses[i].name!=null){
      //search course by name
      let rtn_courses=getCoursesByName(courses[i].name,1,"course",null,null);
      for(let i=0;i<rtn_courses.length;i++)
      {
        queued_courses.push(rtn_courses[i]);
      }
    }
    Helper.toast("getting info: "+courses[i].name,"Progress",2)
  }
  Helper.fillValues(range.getLastRow()+1,range.getColumn(),queued_courses,"course_list",null);
  //fill data
}