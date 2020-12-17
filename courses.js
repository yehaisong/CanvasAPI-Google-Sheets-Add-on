/**
 * @fileoverview
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Show the sidebar for courses APIs
 */
function courses_guide()
{
  SideBar.show("Courses");
}

/**
 * List your courses
 * url:GET /api/v1/courses
 * Returns the paginated list of active courses for the current user.
 * change per_page in canvasAPI.gs
 */
function get_your_active_courses()
{
  //var endpoint="GET /api/v1/courses";
  var endpoint=Helper.getEndpoint("courses","get_your_active_courses");
  var cell=SpreadsheetApp.getCurrentCell();
  var data=canvasAPI(endpoint);
  Helper.fillValuesFromJsonList(cell.getRow(),cell.getColumn(),data,null,course_list);
}

/**
 * Get a single course
 * GET /api/v1/courses/:id
 * Return information on a single course.
 */
function get_single_course()
{
  //var endpoint="GET /api/v1/courses/:id";
  var endpoint=Helper.getEndpoint("courses","get_single_course");
  //course id
  var cell=SpreadsheetApp.getCurrentCell();
  var course_id=cell.getValue();
  //options
  var opts = {
			'id' : course_id
		};
  
  var data=canvasAPI(endpoint,opts);
  var cell=SpreadsheetApp.getCurrentCell();
  Helper.fillValuesFromJsonObject(cell.getRow()+1,cell.getColumn(),data,null,null);
}