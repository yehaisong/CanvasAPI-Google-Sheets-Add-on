
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
    updateduedate=truer;
  }
  //prepare course data
  let courses=Helper.convertRangeToObjectArray(range);
  let results=[];

  //update each coure
  for(let n=0;n<courses.length;n++){
    //get course data
    const update_course=courses[n];
    const current_course=Courses.getCourseById(update_course.id);
    
    //check if start_at and end_at changed
    if(Helper.timeDiff(current_course.start_at,update_course.start_at)==0 && Helper.timeDiff(current_course.end_at,update_course.end_at)==0){
      Helper.toast(current_course.course_code+" start and end times were not changed.", null,3);
      results.push({"message":"Course "+current_course.course_code+" was skipped."});
    }
    else{
      if(current_course.id!=null){//exising course
        //1. update course **************************************************//
        //update a course call api
        const return_course=Courses.updateCourse(update_course);
        if(return_course.id==null)//something is wrong and the return_course must be an error message.
        {
          Helper.toast(current_course.course_code+" update failed. "+return_course.message);
          results.push({"message":"Course "+current_course.course_code+" update failed. Error: "+return_course.message});
        }
        else{//a course object will be return if the update was done successfully
          Helper.toast(return_course.course_code+" updated.", null,3);
          results.push({"message":"Course "+return_course.course_code+" was updated."});
          //2. update due dates **************************************************//
          //starting update due dates
          //calculate datediff between current start_at and update start_at
          const num_of_days=Helper.daysDiff(current_course.start_at,update_course.start_at);
          Helper.log("date diff: "+num_of_days);
          if(num_of_days!=0 && updateduedate){
            //2.1. update assignment due dates **************************************************//
            //update assignment dates
            //get all assignments
            //call get assignment api
            var assignments=Assignments.getCourseAssginments(current_course.id);
            //get bulk assignment date opts api
            let date_opts=Assignments.getBulkAssignmentDateOpts(current_course.id,assignments,num_of_days);
            //call api bulk date change
            let progress_data=Assignments.bulkUpdateAssignmentDate(date_opts);
            Helper.toast("Update assignments in "+return_course.course_code+". Status: "+progress_data.workflow_state,null,3);
            
            //check progress. It will take some times to wait for the queued tasks. The following two lines can be removed if check progress is not necessary.***//
            let progress_result=queryProgress(progress_data.id);
            results.push({"message": "Course "+return_course.course_code+" assignments updating "+progress_result.workflow_state+" "+JSON.stringify(progress_result.results)});

            //2.2. update page due dates **************************************************//
            //update pages dates
            //get all pages api
            let pages=Pages.listPages(return_course.id,null,null,null);
            //loop in each page
            for(let i=0;i<pages.length;i++){
              if(pages[i].todo_date!=null && pages[i].todo_date.trim().toLowerCase()!="null"){
                pages[i].todo_date=Helper.shiftDate(pages[i].todo_date,num_of_days);
                //call api
                let page_result=Pages.changePageToDoDate(pages[i],return_course.id);
                if(page_result.url!=null){
                  Helper.toast("Processing "+page_result.url+" in course "+return_course.course_code+": "+page_result.todo_date,null,3);
                }
              }
            }
            results.push({"message":"Course "+return_course.course_code+" pages were updated."});
            results.push({"message":num_of_days+" days shifted."});
          }
        }
      }
    }  
  }
  //generate report
  const rs=SpreadsheetApp.getActiveSpreadsheet().insertSheet();
  Helper.fillValues(1,1,results,null,null,false);
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
      let rtn_courses=Accounts.getCoursesByName(courses[i].name,1,"course",null,null);
      for(let i=0;i<rtn_courses.length;i++)
      {
        queued_courses.push(rtn_courses[i]);
      }
    }
    Helper.toast("getting info: "+courses[i].name,"Progress",2)
  }
  Helper.fillValues(range.getLastRow()+1,range.getColumn(),queued_courses,"course_list_changedate",null);
  //fill data
}

/**
 * Publish multiple courses in an account. Operates asynchronously; 
 * Use the progress endpoint to query the status of an operation.
 * The action to take on each course. Must be one of 'offer', 'conclude', 'delete', or 'undelete'.
 * PUT /api/v1/accounts/:account_id/courses
 * @param {string} event 
 */
function publishCourses(event)
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
  let endpoint=Helper.getAPIAction2(APIAction.COURSES.PUBLISH_COURSES).endpoint;
  //call endpoint
  let data= canvasAPI(endpoint,opts);
  //handle progress
  Helper.showProgress(rng,data);
}