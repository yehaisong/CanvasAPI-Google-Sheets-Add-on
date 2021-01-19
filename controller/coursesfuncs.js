
/**
 * @fileoverview Defines client funcs related to courses
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Batch update course dates
 * @param {String} range_notation The range of course ids, e.g. A1:B2. If not provided, use the current selected range.
 * @param {boolean} updateduedate Update due date or not. Default is true.
 */
function updateCourseDates(range_notation,updateduedate)
{
  //get range
  let range=SpreadsheetApp.getActiveSheet().getActiveRange();
  if(range_notation!=null)
    range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
  //check header
  if(!Helper.checkRequiredColumns(range,["id","start_at","end_at"])){
    //Browser.msgBox("Please select a range with the required column: id, start_at, end_at");
    return;
  }
  //set updateduate
  if(updateduedate==null){
    updateduedate=ture;
  }
  //get course data
  let courses=Helper.convertRangeToObjectArray(range);
  let results=[];

  for(let n=0;n<courses.length;n++){
    //update each course
    const update_course=courses[n];
    const current_course=Courses.getCourseById(update_course.id);
    if(current_course.id!=null){//exising course
      const return_course=Courses.updateCourse(update_course);
      results.push({"result":return_course.id+" dates updated."});
      //calculate datediff between current start_at and update start_at
      const num_of_days=Helper.daysDiff(current_course.start_at,update.start_at);
      if(num_of_days!=0 && updateduedate){
        //update assignment dates
        //get all assignments
        //call get assignment api
        var assignments=Assignments.getCourseAssginments(current_course.id);
        //get bulk assignment date opts
        let date_opts=getBulkAssignmentDateOpts(assignments,num_of_days);
        //call api bulk date change
        var endpoint=Helper.getAPIAction("assignments","shift_assignments_dates").endpoint;

        //update pages dates
        //get all pages
        //loop in each page
        //construct ops each page with student_todo
        //call api
      }
    }  
  }
  
  //generate report
}

/**
 * Get full course information using course name or course id
 * @param {string} range_notation A1 Notation. If not provided, use the current selected range.
 */
function getCoursesInfo(range_notation)
{
  //get range
  let range=SpreadsheetApp.getActiveSheet().getActiveRange();
  if(range_notation!=null)
    range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
  //check header
  if(!Helper.checkRequiredColumns(range,["name"])){
    //Browser.msgBox("Please select a range with the required column: name");
    return;
  }
  //get course data
  let courses=Helper.convertRangeToObjectArray(range);
  let queued_courses=[];
  
  for(let i=0;i<courses.length;i++){
    if(courses[i].id!=null){
      //if course ids are provided
      let course=Courses.getCourseById(courses[i].id);
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