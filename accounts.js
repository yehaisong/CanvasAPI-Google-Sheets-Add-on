/**
 * @fileoverview Wrapping accounts APIs
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Show the sidebar for accounts APIs
 */
function accounts_guide()
{
  SideBar.show("Accounts");
}

/**
 * List accounts
 * GET /api/v1/accounts
 * A paginated list of accounts that the current user can view or manage. 
 *  Typically, students and even teachers will get an empty list in response, 
 *. only  account admins can view the accounts that they are in. 
 */
/* automated
function get_accounts()
{
  var endpoint=Helper.getAPIAction("accounts","get_accounts").endpoint;
  var data=canvasAPI(endpoint);
  var cell=SpreadsheetApp.getCurrentCell();
  Helper.fillValuesFromJsonList(cell.getRow(),cell.getColumn(),data,null,null);
}
*/

/**
 * Get the sub-accounts of an account
 * GET /api/v1/accounts/:account_id/sub_accounts
 * List accounts that are sub-accounts of the given account.
 */
/*automated
function get_sub_accounts()
{
  var endpoint=Helper.getAPIAction("accounts","get_sub_accounts").endpoint;
  var cell=SpreadsheetApp.getCurrentCell();
  var account_id=cell.getValue();
  var opts = {
			'account_id' : account_id
		};
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonList(cell.getRow()+1,cell.getColumn(),data,null,null)
}
*/

/**
 * List active courses in an account
 * GET /api/v1/accounts/:account_id/courses
 * Retrieve a paginated list of courses in this account.
 */
/* automated
function get_courses_in_account()
{
  var endpoint=Helper.getAPIAction("accounts","get_courses_in_account").endpoint;
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.range_to_json(param_range);
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonList(param_range.getLastRow()+1,param_range.getColumn(),data,null,"course_list")
}
*/