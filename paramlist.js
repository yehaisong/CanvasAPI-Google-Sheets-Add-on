/*
hy 2020-12
define the param list
*/

class SideBar{
  static getAPIWrapper(name)
  {
    return paramList[name];
  }
  static show(name)
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('template/api_sidebar');
    htmlTemplate.data=SideBar.getAPIWrapper(name.toLowerCase());
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setTitle(name));
  }
}

var paramList={
    "assignments":[
      { 
        "api":"get_assignments",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index",
        "guide":[
          "Select an empty cell to start",
          "Click the button to generate the params template: <button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('get_assignments',2)\">Generate Template</button>",
          "Enter values",
          "Select the range of the params names and values",
          "Click the button to call API <button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_assignments()\">Call API</button>"
        ],
        "template":{
          "course_id desc":"course id, e.g., 83",
          "search_term desc":"partial text of the assignment title, e.g., test",
          "order_by desc":"default name, allowed values: position|name|due_date",
          "-----":"-----",
          "course_id":"",
          "search_term":"",
          "order_by":"name"
        }
      },
      {
        "api":"get_assignment_overrides",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.index",
        "guide":[
          "Select a cell with an account id",
          "Click the button to generate the params template: <button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('get_assignment_overrides',1)\">Generate Template</button>",
          "Enter values",
          "Select the range of the params names and values",
          "Click the button to call API <button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_assignment_overrides()\">Call API</button>"
        ],
        "template":{
          "api":"get_assignment_overrides",
          "course_id desc":"course id, e.g., 83",
          "assignment_id desc":"assignment id, e.g., 1234. Find the assignment id first using get_assignments",
          "-----":"-----",
          "course_id":"",
          "assignment_id":""
        }
      }
    ],
    "accounts":[
      { 
        "api":"get_accounts",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "guide":[
            "Select an empty cell to start",
            "Click the button to call API <button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_accounts()\">Call API</button>"
        ],
        "template":{}
      },
      {
        "api":"get_sub_accounts",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "guide":[
            "Select a cell with an account id",
            "Click the button to call API <button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_sub_accounts()\">Call API</button>"
        ],
        "template":{}
      },
      {
        "api":"get_courses_in_account",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "guide":[
          "Select an empty cell to start",
          "Click the button to generate the params template: <button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('get_courses_in_account',3)\">Generate Template</button>",
          "Enter values",
          "Select the range of the params names and values",
          "Click the button to call API <button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_courses_in_account()\">Call API</button>"
        ],
        "template":{
          "api":"get_courses_in_account",
          "account_id desc":"account id, default 1",
          "search_term desc":"partial text of course title, code, and id; or teacher's name",
          "search_by desc":"default course, allowed values: course|teacher",
          "blueprint desc":"default empty, allowed values: true|false",
          "-----":"-----",
          "account_id":"1",
          "search_term":"",
          "search_by":"course",
          "blueprint":""
        }
      }
    ]
  };

var displayColumns={
"assignment_list":["course_id","id","name","assignment_group_id","submission_type","due_at","unlock_at","lock_at","points_possible","has_overrides","html_url","workflow_state"],
"course_list":["account_id","id","name","course_code","is_public","enrollment_term_id","sis_course_id","start_at","end_at","time_zone","workflow_state"],
}