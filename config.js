/**
 * @fileoverview This file defines configuration functions and consts.
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * My config class
 */
class MyConfig
{
  static logCustomMessage(){
    return true;
  }
}

/**
 * Show a input dialog for user token.
 * The user token is stored in UserProperties["token"].
 */
function setToken_() {
  var token = Browser.inputBox('Set Token', 'Current Token: ['+PropertiesService.getUserProperties().getProperty("token")+']', Browser.Buttons.OK_CANCEL);
  if(token && token != "cancel") {
    PropertiesService.getUserProperties().setProperty("token", token);
  } 
}

/**
 * Show a input dialog for Canvas URL.
 * The host URL is stored in UserProperties["host"].
 */
function setHost_() {
  var host = Browser.inputBox("Set Host ('https://yourschool.instructure.com')", 'Current Host: [hidden]', Browser.Buttons.OK_CANCEL);
  if(host && host != "cancel") {
    if(!host.match(/http/)) {
      host = "https://" + host;
    }
    host = host.replace(/\/$/, '');
    PropertiesService.getUserProperties().setProperty("host", host);
  } 
}

/**
 * An object contains sidebar content for every api controller and function
 * if an api is a general get/put/post call with simple type parameters (2-column format)
 *. call Helper.callCanvasAPIwithRangeParams(endpoint, columns). Use endpoint value and string value of displayColumns
 * @type {!Object}
 */
const paramList={
    "assignments":[
      {//0
        "api":"0: get_assignments",
        "endpoint":"GET /api/v1/courses/:course_id/assignments",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index",
        "guide":[
          "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('assignments',0)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_assignments()\">Call API</button>"
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
      {//1
        "api":"1: get_assignment_overrides",
        "endpoint":"GET /api/v1/courses/:course_id/assignments/:assignment_id/overrides",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.index",
        "guide":[
          "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('assignments',1)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_assignment_overrides()\">Call API</button>"
        ],
        "template":{
          "api":"get_assignment_overrides",
          "course_id desc":"course id, e.g., 83",
          "assignment_id desc":"assignment id, e.g., 1234. Find the assignment id first using get_assignments",
          "-----":"-----",
          "course_id":"",
          "assignment_id":""
        }
      },
      {//2
        "api":"2: create_an_assignment_override",
        "endpoint":"POST /api/v1/courses/:course_id/assignments/:assignment_id/overrides",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.create",
        "guide":[
          "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateArrayParamTemplate('assignments',2)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.create_an_assignment_override()\">Call API</button>"
        ],
        "template":{
          "api":"create_an_assignment_override",
          "desc":[
            {
              "course_id desc":"83",
              "assignment_id desc":"1234",
              "assignment_override[title] desc":"title",
              "assignment_override[due_at] desc":"2020-01-25T23:59:59Z",
              "assignment_override[unlock_at] desc":"2020-01-25T23:59:59Z",
              "assignment_override[lock_at] desc":"2020-01-25T23:59:59Z",
              "assignment_override[student_ids][] desc":"student ids, one student per row"
            }
          ],
          "params":[
            {
              "course_id":"",
              "assignment_id":"",
              "assignment_override[title]":"",
              "assignment_override[due_at]":"",
              "assignment_override[unlock_at]":"",
              "assignment_override[lock_at]":"",
              "assignment_override[student_ids][]":""
            }
          ]
        }
      },
      {//3
        "api":"3: update_an_assignment_override",
        "endpoint":"PUT /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.update",
        "guide":[
          "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateArrayParamTemplate('assignments',3)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.update_an_assignment_override()\">Call API</button>"
        ],
        "template":{
          "api":"update_an_assignment_override",
          "desc":[
            {
              "course_id desc":"83",
              "assignment_id desc":"1234",
              "assignment_override[title] desc":"title",
              "assignment_override[due_at] desc":"2020-01-25T23:59:59Z",
              "assignment_override[unlock_at] desc":"2020-01-25T23:59:59Z",
              "assignment_override[lock_at] desc":"2020-01-25T23:59:59Z",
              "assignment_override[student_ids][] desc":"student ids, one student per row"
            }
          ],
          "params":[
            {
              "course_id":"",
              "assignment_id":"",
              "assignment_override[title]":"",
              "assignment_override[due_at]":"",
              "assignment_override[unlock_at]":"",
              "assignment_override[lock_at]":"",
              "assignment_override[student_ids][]":""
            }
          ]
        }
      }
    ],
    "accounts":[
      { //0
        "api":"0: get_accounts",
        "endpoint":"GET /api/v1/accounts",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "guide":[
            "Select an empty cell to start",
            "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_accounts()\">Call API</button>"
        ],
        "template":{}
      },
      {//1
        "api":"1: get_sub_accounts",
        "endpoint":"GET /api/v1/accounts/:account_id/sub_accounts",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "guide":[
            "Select a cell with an account id",
            "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_sub_accounts()\">Call API</button>"
        ],
        "template":{}
      },
      {//2
        "api":"2: get_courses_in_account",
        "endpoint":"GET /api/v1/accounts/:account_id/courses",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "guide":[
          "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('accounts',2)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_courses_in_account()\">Call API</button>"
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
    ],
    "blueprints":[
      {//0 
        "api":"0: get_blueprint_information",
        "endpoint":"GET /api/v1/courses/:course_id/blueprint_templates/default",
        "reference":"https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.show",
        "guide":[
            "Select a cell with a course id",
            "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_blueprint_information()\">Call API</button>"
        ],
        "template":{}
      },
      {//1
        "api":"1:update_associated_courses",
        "endpoint":"PUT /api/v1/courses/:course_id/blueprint_templates/default/update_associations",
        "reference":"https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.update_associations",
        "guide":[
            "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('blueprints',1)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.update_associated_courses()\">Call API</button>"
        ],
        "template":{
          "api":"update_associated_courses",
          "course_id desc":"account id, default 1",
          "course_ids_to_add desc":"The course id that need to be associated to the blueprint course. Leave it empty if n/a",
          "course_ids_to_remove desc":"The course id that need to be unassociated to the blueprint course. Leave it empty if n/a",
          "-----":"-----",
          "course_id":"1",
          "course_ids_to_add[]":"",
          "course_ids_to_remove[]":""
        }
      },
      {//2
        "api":"2: sync_associated_courses",
        "endpoint":"POST /api/v1/courses/:course_id/blueprint_templates/default/migrations",
        "reference":"https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.queue_migration",
        "guide":[
          "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"google.script.run.generateParamTemplate('blueprints',2)\">Get parameters</button>",
          "Enter values",
          "Select the range of the params names and values",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.sync_associated_courses()\">Call API</button>"
        ],
        "template":{
          "api":"sync_associated_courses",
          "course_id desc":"blueprint course id",
          "comment desc":"An optional comment to be included in the sync history.",
          "send_notification desc":"Send a notification to the calling user when the sync completes, allowed values: true|false",
          "copy_settings desc":"Whether course settings should be copied over to associated courses. Defaults to true for newly associated courses, allowed values: true|false",
          "publish_after_initial_sync desc":"If set, newly associated courses will be automatically published after the sync completes, allowed values: true|false",
          "-----":"-----",
          "course_id":"",
          "comment":"initial sync",
          "send_notification":"false",
          "copy_settings":"false",
          "publish_after_initial_sync":"false"
        }
      }
    ],
    "courses":[
      { //0
        "api":"0: get_your_active_courses",
        "endpoint":"GET /api/v1/courses",
        "reference":"https://canvas.instructure.com/doc/api/courses.html#method.courses.user_index",
        "guide":[
            "Select an empty cell to start",
            "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_your_active_courses()\">Call API</button>"
        ],
        "template":{}
      },
      { //1
        "api":"1: get_single_course",
        "endpoint":"GET /api/v1/courses/:id",
        "reference":"https://canvas.instructure.com/doc/api/courses.html#method.courses.show",
        "guide":[
            "Select a cell with a course id",
            "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"google.script.run.get_single_course()\">Call API</button>"
        ],
        "template":{}
      }
    ]
  };


/**
 * An object contains columns that will be displayed in sheet
 * @type {!Object}
 */
const displayColumns={
"assignment_list":["course_id","id","name","assignment_group_id","submission_type","due_at","unlock_at","lock_at","points_possible","has_overrides","html_url","workflow_state"],
"course_list":["account_id","id","name","course_code","is_public","enrollment_term_id","sis_course_id","start_at","end_at","time_zone","workflow_state"],
}