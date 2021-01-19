/** Function to pick the selected range from the Google Sheet
  * This returns the picked range, so that the client-side JS 
  * function (in HTML file) can populate it in the text field **/
function getSelectedRange(){
    var selected = SpreadsheetApp.getActiveSheet().getActiveRange(); // Gets the selected range
    var rangeString = selected.getA1Notation(); // converts it to the A1 type notation
    return rangeString;
}

/**
 * Shift a list of dates by adding/substracing days
 * @param {string} range_notation A1 Notation
 */
function shiftDates(range_notation){
    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    
    //get days
    let days=parseInt(Browser.inputBox("How many days?"));
    if(days!=null){
        //get dates
        let dates=range.getValues();
        for(let r=0;r<dates.length;r++){
            for(let c=0;c<dates[r].length;c++){
                dates[r][c]=Helper.getLocalDate(shiftDate(dates[r][c],days));
            }
        }
        range.setValues(dates);
    }
}

/**
 * A cell range with headers, must include url and todo_date
 * @param {String} range_notation A1 Notation, e.g. A1:B6
 */
function updatePageToDoDate(range_notation){
    //get API info
    const action=Helper.getAPIAction("pages","update_pages_todo");

    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    //check for requred columns
    if(!Helper.checkRequiredColumns(range,action.required_columns)){
        //Browser.msgBox("Please select a range with the required columns: "+action.required_columns.toString());
        return;
    }
        
    //get pages with todo_date
    let pages=Helper.convertRangeToObjectArray(range);
    
    let opts={
        "course_id":"",
        "url":"",
        "wiki_page":{
            "student_todo_at":""
        }
    };

    let return_pages=[];
  
    //for each page with todo_date
    for(let i=0;i<pages.length;i++){
        //get course_id, url
        opts.course_id=pages[i].course_id;
        opts.url=encodeURI(pages[i].url);
        //get todo_date - wiki_page.student_todo_at
        opts.wiki_page.student_todo_at=Helper.getISODate(pages[i].todo_date);
        //call update page api
        let data=canvasAPI(action.endpoint,opts);
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
    
    //handle return data
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
  let date_opts=getBulkAssignmentDateOpts(assignments,opts.num_of_days);
  
  //call bulkUpdate api
  //Helper.log(date_opts);
  let data=bulkUpdateAssignmentDate(date_opts);
  //handle data
  Helper.showProgress(param_range,data);
}