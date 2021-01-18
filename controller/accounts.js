/**
 * @fileoverview Wrapping accounts APIs
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Show the sidebar for accounts APIs
 */
function showAccountsGuide()
{
  SideBar.show("Accounts");
}

/**
 * Fill a spread sheet range with course info
 * @param {String} range A1 Notation e.g. A1:A13
 */
function getCoursesInfo(range)
{
  //get all courses
  //display courses
}

/**
 * Get courses by names
 * @param {array} names A list of course names
 * @returns {array} A list of courses
 */
function searchCoursesByNames(names)
{
  //for each name in the names, get courses
  //return courses
}

/**
 * Get courses that match the criteria.
 * @param {string} search_term The partial course name, code, or full ID to match and return in the results list. Must be at least 3 characters. e.g., GEDE-2300
 * @param {*} account_id account id e.g., 1
 * @param {*} search_by The filter to search by. course|teacher. “course” searches for course names, course codes, and SIS IDs. “teacher” searches for teacher names e.g., course
 * @param {*} blueprint If true, include only blueprint courses. If false, exclude them. If not present, do not filter on this basis. e.g., true
 * @param {*} enrollment_term_id If set, only includes courses from the specified term. e.g., 1
 * @return {array} A list of courses
 */
function getCoursesInAccount(search_term,account_id,search_by,blueprint,enrollment_term_id)
{
  //call api to get courses
  //return data
}
