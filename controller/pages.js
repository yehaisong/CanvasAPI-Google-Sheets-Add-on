/**
 * @fileoverview Pages API
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Show the sidebar for courses APIs
 */
function showPagesGuide()
{
  SideBar.show("pages");
}

/**
 * A cell range with headers, must include url and todo_date
 * @param {String} range A1 Notation, e.g. A1:B6
 */
function updatePageToDoDate(range){
    throw "Not implemented!";
    //get range
    //for each row in the range
    //get course_id, url
    //get todo_date - wiki_page.student_todo_at
    //call update page api
    //toast msg
    //handle return data
}