/*
hy 2020-12
for Canvas AssignmentController
https://canvas.instructure.com/doc/api/assignments.html
*/

//show all assignment api in a sidebar
function assignments_guide()
{
  SideBar.show("Assignments");
}

/*
List assignments
GET /api/v1/courses/:course_id/assignments
--GET /api/v1/courses/:course_id/assignment_groups/:assignment_group_id/assignments
Returns the paginated list of assignments for the current course or assignment group.
*/
function get_assignments ()
{
  var endpoint="GET /api/v1/courses/:course_id/assignments"; //specify api
  var columns=displayColumns["assignment_list"];//specify display columns for returned data
  Helper.callCanvasAPIwithRangeParams(endpoint,columns);
}
/* not using
function get_assignments_guide()
{
  var html = HtmlService.createHtmlOutputFromFile('assignments/get_assignments_sidebar');
  SpreadsheetApp.getUi().showSidebar(html);
}*/


/*
List assignment overrides
GET /api/v1/courses/:course_id/assignments/:assignment_id/overrides
Returns the paginated list of overrides for this assignment that target sections/groups/students visible to the current user.
Returns a list of AssignmentOverrides
*/
function get_assignment_overrides()
{
  var endpoint="GET /api/v1/courses/:course_id/assignments/:assignment_id/overrides"; //specify api
  var columns=displayColumns["overrides_list"];//specify columns for return data
  Helper.callCanvasAPIwithRangeParams(endpoint,columns);
}
/* not using
function get_assignment_overrides_guide()
{
  var html = HtmlService.createHtmlOutputFromFile('assignments/get_assignment_overrides_siderbar');
  SpreadsheetApp.getUi().showSidebar(html);
}
*/

/*
Create an assignment override
POST /api/v1/courses/:course_id/assignments/:assignment_id/overrides
One of student_ids, group_id, or course_section_id must be present. 
At most one should be present; if multiple are present only the most specific (student_ids first, then group_id, then course_section_id) is used and any others are ignored.
Returns a AssignmentOverride
*/
function create_an_assignment_override()
{
  Browser.msgBox("Not implemented.");
}

/*
Delete an assignment override
DELETE /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
Deletes an override and returns its former details.
Returns a AssignmentOverride
*/
function delete_an_assignment_override()
{
  Browser.msgBox("Not implemented.");
}


/*
Batch create overrides in a course
POST /api/v1/courses/:course_id/assignments/overrides

Creates the specified overrides for each assignment. Handles creation in a transaction, so all records are created or none are.
One of student_ids, group_id, or course_section_id must be present. At most one should be present; if multiple are present only the most specific (student_ids first, then group_id, then course_section_id) is used and any others are ignored.
Errors are reported in an errors attribute, an array of errors corresponding to inputs. Global errors will be reported as a single element errors array
Returns a list of AssignmentOverrides

Request Parameters:
Parameter       		Type    	
assignment_overrides[]	Required|AssignmentOverride
*/
function batch_create_assignments_overrides()
{
  Browser.msgBox("Not implemented.");
}
