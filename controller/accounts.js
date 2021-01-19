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
 * The Accounts class
 */
class Accounts
{
  /**
   * Get courses that match the criteria.
   * @param {string} search_term The partial course name, code, or full ID to match and return in the results list. Must be at least 3 characters. e.g., GEDE-2300
   * @param {number} account_id account id e.g., 1
   * @param {string} search_by The filter to search by. course|teacher. “course” searches for course names, course codes, and SIS IDs. “teacher” searches for teacher names e.g., course
   * @param {boolean} blueprint If true, include only blueprint courses. If false, exclude them. If not present, do not filter on this basis. e.g., true
   * @param {number} enrollment_term_id If set, only includes courses from the specified term. e.g., 1
   * @return {Array<object>} A list of courses
   */
  static getCoursesByName(search_term,account_id,search_by,blueprint,enrollment_term_id)
  {
    //call api to get courses
    const action=Helper.getAPIAction(APIController.ACCOUNTS,APIAction.ACCOUNTS.GET_COURSES_IN_ACCOUNT);
    const opts={
      "search_term":search_term,
      "account_id":account_id,
      "search_by":search_by,
      "blueprint":blueprint,
      "enrollment_term_id":enrollment_term_id
    };
    let data=canvasAPI(action.endpoint,opts);
    //return data
    return data;
  }

}



