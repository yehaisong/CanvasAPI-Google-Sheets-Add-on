/*
hy 2020-12
for Canvas AccountsController
*/


//show all account api wrapper in a sidebar
function accounts_guide()
{
  SideBar.show("Accounts");
}

/*
List accounts
GET /api/v1/accounts
A paginated list of accounts that the current user can view or manage. Typically, students and even teachers will get an empty list in response, only account admins can view the accounts that they are in.
*/
function get_accounts()
{
  var endpoint="GET /api/v1/accounts";
  var data=canvasAPI(endpoint);
  var cell=SpreadsheetApp.getCurrentCell();
  Helper.fillValuesFromJsonList(cell.getRow(),cell.getColumn(),data);
}

/*
Get the sub-accounts of an account
GET /api/v1/accounts/:account_id/sub_accounts
List accounts that are sub-accounts of the given account.
*/
function get_sub_accounts()
{
  var endpoint="GET /api/v1/accounts/:account_id/sub_accounts";
  var cell=SpreadsheetApp.getCurrentCell();
  var account_id=cell.getValue();
  var opts = {
			'account_id' : account_id
		};
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonList(cell.getRow()+1,cell.getColumn(),data)
}

/*
List active courses in an account
GET /api/v1/accounts/:account_id/courses
Retrieve a paginated list of courses in this account.
*/
function get_courses_in_account()
{
  var endpoint="GET /api/v1/accounts/:account_id/courses";
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.range_to_json(param_range);
  var data=canvasAPI(endpoint,opts);
  var columns=displayColumns["course_list"];
  Helper.fillValuesFromJsonList(param_range.getLastRow()+1,param_range.getColumn(),data,null,columns)
}