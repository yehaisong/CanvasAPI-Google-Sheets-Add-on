/**
 * @fileoverview This file defines api specifications
 * @author hye@cedarville.edu (Haisong Ye)
 */


/** 
How to make an automated api call:
Pre-condition:
-The api needs no parameters or only simple types of parameters.
Procedure:
1. Determine the type of call
  - no parameter: callCanvasAPINoParam (endpoint#requred,columns,bgcolor)
  - single parameter: callCanvasAPIwithSingleParam (endpoint#requred,default_param#requred,columns,bgcolor)
  - multiple parameters: callCanvasAPIwithRangeParams (endpoint#requred,columns,bgcolor)
2. Assign the general api caller to the onclick event of the Call API button.
*/

/**
 * An object contains sidebar content for every api controller and function
 * if an api is a general get/put/post call with simple type parameters (2-column format)
 *. call general api caller. Use endpoint value and string value of displayColumns
 * @type {!Object}
 */
const canvasAPITemplate={
  "assignments":[
    {
      "display_name":"0: get_assignments",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',0);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('GET /api/v1/courses/:course_id/assignments','assignment_list');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_assignments",
        "endpoint":"GET /api/v1/courses/:course_id/assignments",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          },
          {
            "name":"search_term",
            "type":"string",
            "default_value":"",
            "desc":"The partial title of the assignments to match and return.",
            "example":"quiz"
          },
          {
            "name":"order_by",
            "type":"string",
            "default_value":"position",
            "desc":"Determines the order of the assignments. Defaults to “position”. position|name|due_date",
            "example":"position"
          }
        ]
      }
    },
    {
      "display_name":"1: get_assignment_overrides",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',1);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('GET /api/v1/courses/:course_id/assignments/:assignment_id/overrides','overrides_list');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_assignment_overrides",
        "endpoint":"GET /api/v1/courses/:course_id/assignments/:assignment_id/overrides",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.index",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          },
          {
            "name":"assignment_id",
            "type":"number",
            "default_value":"",
            "desc":"assignment id",
            "example":"1234"
          }
        ]
      }
    },
    {
      "display_name":"2: create_an_assignment_override", 
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',2);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('POST /api/v1/courses/:course_id/assignments/:assignment_id/overrides',null,null);})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"create_an_assignment_override",
        "endpoint":"POST /api/v1/courses/:course_id/assignments/:assignment_id/overrides",
      "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.create",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          },
          {
            "name":"assignment_id",
            "type":"number",
            "default_value":"",
            "desc":"assignment id",
            "example":"1234"
          },
          {
            "name":"assignment_override.title",
            "type":"string",
            "default_value":"",
            "desc":"The title of the adhoc assignment override. Required if student_ids is present, ignored otherwise (the title is set to the name of the targetted group or section instead).",
            "example":"one student"
          },
          {
            "name":"assignment_override.lock_at",
            "type":"number",
            "default_value":"",
            "desc":"The day/time the overridden assignment becomes locked. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect the lock date. May be present but null to indicate the override removes any previous lock date.",
            "example":"2020-01-25T23:59:59Z"
          },
          {
            "name":"assignment_override.due_at",
            "type":"datetime",
            "default_value":"",
            "desc":"The day/time the overridden assignment is due. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect due date. May be present but null to indicate the override removes any previous due date.",
            "example":"2020-01-25T23:59:59Z"
          },
          {
            "name":"assignment_override.unlock_at",
            "type":"number",
            "default_value":"",
            "desc":"The day/time the overridden assignment becomes unlocked. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect the unlock date. May be present but null to indicate the override removes any previous unlock date.",
            "example":"2020-01-25T23:59:59Z"
          },
          {
            "name":"assignment_override.student_ids[]",
            "type":"number",
            "default_value":"",
            "desc":"The IDs of the override's target students. One student per row. If present, the IDs must each identify a user with an active student enrollment in the course that is not already targetted by a different adhoc override.",
            "example":"[123,456]"
          }
        ]
      }
    },
    {
      "display_name":"3: update_an_assignment_override", 
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',3);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('PUT /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id',null,null);})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"update_an_assignment_override",
        "endpoint":"PUT /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignment_overrides.update",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          },
          {
            "name":"assignment_id",
            "type":"number",
            "default_value":"",
            "desc":"assignment id",
            "example":"1234"
          },
          {
            "name":"id",
            "type":"number",
            "default_value":"",
            "desc":"override id",
            "example":"26789"
          },
          {
            "name":"assignment_override.title",
            "type":"string",
            "default_value":"",
            "desc":"The title of the adhoc assignment override. Required if student_ids is present, ignored otherwise (the title is set to the name of the targetted group or section instead).",
            "example":"one student"
          },
          {
            "name":"assignment_override.lock_at",
            "type":"number",
            "default_value":"",
            "desc":"The day/time the overridden assignment becomes locked. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect the lock date. May be present but null to indicate the override removes any previous lock date.",
            "example":"2020-01-25T23:59:59Z"
          },
          {
            "name":"assignment_override.due_at",
            "type":"datetime",
            "default_value":"",
            "desc":"The day/time the overridden assignment is due. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect due date. May be present but null to indicate the override removes any previous due date.",
            "example":"2020-01-25T23:59:59Z"
          },
          {
            "name":"assignment_override.unlock_at",
            "type":"number",
            "default_value":"",
            "desc":"The day/time the overridden assignment becomes unlocked. Accepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z. If absent, this override will not affect the unlock date. May be present but null to indicate the override removes any previous unlock date.",
            "example":"2020-01-25T23:59:59Z"
          },
          {
            "name":"assignment_override.student_ids[]",
            "type":"number",
            "default_value":"",
            "desc":"The IDs of the override's target students. One student per row. If present, the IDs must each identify a user with an active student enrollment in the course that is not already targetted by a different adhoc override.",
            "example":"[123,456]"
          }
        ]
      }
    },
    {
      "display_name":"4: list_assignments_date", 
      "automated":"false",
      "guide":[
        "Select a cell with a course id",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).listAssignmentsDate();})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"list_assignments_date",
        "endpoint":"GET /api/v1/courses/:course_id/assignments",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.index",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          }
        ]
      }
    },
    {
      "display_name":"5: shift_assignments_dates", 
      "automated":"false",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',5);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).shifAssignmentDates();})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"shift_assignments_dates",
        "endpoint":"PUT /api/v1/courses/:course_id/assignments/bulk_update",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.bulk_update",
        "desc":"Update due dates and availability dates for multiple assignments in a course by shifting a specific number of days.",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          },
          {
            "name":"num_of_days",
            "type":"number",
            "default_value":"",
            "desc":"number of days to shift",
            "example":"30"
          }
        ]
      }
    }
  ],
  "accounts":[
    { 
      "display_name":"0: get_accounts",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
          "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPINoParam('GET /api/v1/accounts');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_accounts",
        "endpoint":"GET /api/v1/accounts",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "params":[]
      }
    },
    {
      "display_name":"1: get_sub_accounts",
      "automated":"true",
      "guide":[
        "Select a cell with an account id",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithSingleParam('GET /api/v1/accounts/:account_id/sub_accounts','account_id');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_sub_accounts",
        "endpoint":"GET /api/v1/accounts/:account_id/sub_accounts",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "params":[
          {
            "name":"account_id",
            "type":"number",
            "default_value":"",
            "desc":"account id",
            "example":"1"
          }
        ]
      }
    },
    {
      "display_name":"2: get_courses_in_account",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('accounts',2);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('GET /api/v1/accounts/:account_id/courses','course_list');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_courses_in_account",
        "endpoint":"GET /api/v1/accounts/:account_id/courses",
        "reference":"https://canvas.instructure.com/doc/api/accounts.html#method.accounts.courses_api",
        "params":[
          {
            "name":"account_id",
            "type":"number",
            "default_value":"1",
            "desc":"account id",
            "example":"1"
          },
          {
            "name":"search_term",
            "type":"string",
            "default_value":"",
            "desc":"The partial course name, code, or full ID to match and return in the results list. Must be at least 3 characters.",
            "example":"GEDE-2300"
          },
          {
            "name":"search_by",
            "type":"string",
            "default_value":"course",
            "desc":"The filter to search by. course|teacher. “course” searches for course names, course codes, and SIS IDs. “teacher” searches for teacher names",
            "example":"course"
          },
          {
            "name":"blueprint",
            "type":"boolean",
            "default_value":"",
            "desc":"If true, include only blueprint courses. If false, exclude them. If not present, do not filter on this basis.",
            "example":"true"
          }
        ]
      }
    }
  ],
  "blueprints":[
    {
      "display_name":"0: get_blueprint_information",
      "automated":"true",
      "guide":[
        "Select a cell with a course id",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithSingleParam('GET /api/v1/courses/:course_id/blueprint_templates/default','course_id');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_blueprint_information",
        "endpoint":"GET /api/v1/courses/:course_id/blueprint_templates/default",
        "reference":"https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.show",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          }
        ]
      }
    },
    {
      "display_name":"1: update_associated_courses",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('blueprints',1);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('PUT /api/v1/courses/:course_id/blueprint_templates/default/update_associations',null,null);})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"update_associated_courses",
        "endpoint":"PUT /api/v1/courses/:course_id/blueprint_templates/default/update_associations",
        "reference":"https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.update_associations",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          },
          {
            "name":"course_ids_to_add[]",
            "type":"Array",
            "default_value":"",
            "desc":"Courses to add as associated courses",
            "example":"[1,2]"
          }
          ,{
            "name":"course_ids_to_remove[]",
            "type":"Array",
            "default_value":"",
            "desc":"Courses to remove as associated courses",
            "example":"[1,2]"
          }
        ]
      }
    },
    {
      "display_name":"2: sync_associated_courses",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('blueprints',2);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('POST /api/v1/courses/:course_id/blueprint_templates/default/migrations',null,null);})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"sync_associated_courses",
        "endpoint":"POST /api/v1/courses/:course_id/blueprint_templates/default/migrations",
        "reference":"https://canvas.instructure.com/doc/api/blueprint_courses.html#method.master_courses/master_templates.queue_migration",
        "params":[
          {
            "name":"course_id",
            "type":"number",
            "default_value":"",
            "desc":"blueprint course id",
            "example":""
          },
          {
            "name":"comment",
            "type":"string",
            "default_value":"",
            "desc":"An optional comment to be included in the sync history.",
            "example":"comment"
          },
          {
            "name":"send_notification",
            "type":"boolean",
            "default_value":"false",
            "desc":"Send a notification to the calling user when the sync completes.",
            "example":"true|false"
          },
          {
            "name":"copy_settings",
            "type":"boolean",
            "default_value":"false",
            "desc":"Whether course settings should be copied over to associated courses. Defaults to true for newly associated courses.",
            "example":"true|false"
          },
          {
            "name":"publish_after_initial_sync",
            "type":"boolean",
            "default_value":"false",
            "desc":"If set, newly associated courses will be automatically published after the sync completes",
            "example":"true|false"
          }
        ]
      }
    }
  ],
  "courses":[
    { 
      "display_name":"0: get_your_active_courses",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPINoParam('GET /api/v1/courses','course_list');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_your_active_courses",
        "endpoint":"GET /api/v1/courses",
        "reference":"https://canvas.instructure.com/doc/api/courses.html#method.courses.user_index",
        "params":[]
      }
    },
    { 
      "display_name":"1: get_single_course",
      "automated":"true",
      "guide":[
        "Select a cell with a course id",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithSingleParam('GET /api/v1/courses/:id','id');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_single_course",
        "endpoint":"GET /api/v1/courses/:id",
        "reference":"https://canvas.instructure.com/doc/api/courses.html#method.courses.show",
        "params":[
          {
            "name":"id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"83"
          }
        ]
      }
    }
  ]
};
