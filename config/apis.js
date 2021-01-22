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

/**@constant
 * @description An object contains sidebar content for every api controller and function
 * if an api is a general get/put/post call with simple type parameters (2-column format)
 *. call general api caller. Use endpoint value and string value of DISPLAYCOLUMNS
 * @type {!Object}
 */
const CANVASAPIS={
  "assignments":[
    {
      "display_name":"0: get_assignments",
      "description":"Searh and list assignments in a course.",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',0);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('GET /api/v1/courses/:course_id/assignments','assignment_list',null);})();return false;\">Call API</button>"
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
            "desc":"Determines the order of the assignments. Defaults to “position”. position|name|due_at",
            "example":"position"
          }
        ]
      }
    },
    {
      "display_name":"1: get_assignment_overrides",
      "description":"Get assignment dates overrides.",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',1);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('GET /api/v1/courses/:course_id/pages/:assignment_id/overrides','overrides_list',null);})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"get_assignment_overrides",
        "endpoint":"GET /api/v1/courses/:course_id/pages/:assignment_id/overrides",
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
      "description":"Create an assignment overrides by providing override dates.",
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
      "description":"Update an assignment overrides by providing override dates.",
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
      "display_name":"4: list_assignments_in_course", 
      "description":"List all assignments in a course by course id.",
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
      "display_name":"5: update_assignments_dates",
      "description":"Update dates for selected assignments.",
      "automated":"false",
      "guide":[
        "Select a range with assignments info. Include a header row with required columns: course_id, id, due_at, lock_at, unlock_at",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).updateAssignmentsDates();})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"update_assignments_dates",
        "endpoint":"PUT /api/v1/courses/:course_id/assignments/bulk_update",
        "reference":"https://canvas.instructure.com/doc/api/assignments.html#method.assignments_api.bulk_update",
        "required_columns":["course_id","id","due_at","lock_at","unlock_at"]
      }
    },
    {
      "display_name":"6: shift_assignments_dates", 
      "description":"Shift all assignments dates in a course.",
      "automated":"false",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('assignments',6);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).shiftAssignmentDates();})();return false;\">Call API</button>"
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
      "description":"Get all account of the token owner.",
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
      "description":"Get sub account of an account.",
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
      "description":"Search and list courses in an account including sub accounts.",
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
          },
          {
            "name":"enrollment_term_id",
            "type":"number",
            "default_value":"",
            "desc":"If set, only includes courses from the specified term.",
            "example":"1"
          }
        ]
      }
    }
  ],
  "blueprints":[
    {
      "display_name":"0: get_blueprint_information",
      "description":"Get blue print information, including sync status.",
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
      "description":"Associate and unassociate courses.",
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
      "description":"Sync associated courses of a blueprint course.",
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
      "description":"Get active courses of the token owner.",
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
      "description":"Get a single course by course id.",
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
    },
    { 
      "display_name":"2: publish_courses",
      "description":"Bulk publish courses by select a column of course ids.",
      "automated":"false",
      "guide":[
        "Select a column with course ids listed in rows",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).publishCourses('offer');})();return false;\">publish</button>"
      ],
      "api":{
        "name":"publish_courses",
        "endpoint":"PUT /api/v1/accounts/:account_id/courses",
        "reference":"https://canvas.instructure.com/doc/api/courses.html#method.courses.show",
        "params":[
          {
            "name":"account_id",
            "type":"number",
            "default_value":"1",
            "desc":"account id",
            "example":"1"
          },
          {
            "name":"course_ids[]",
            "type":"array",
            "default_value":"[]",
            "desc":"List of ids of courses to update. At most 500 courses may be updated in one call.",
            "example":"[83,84,85]"
          },
          {
            "name":"event",
            "type":"string",
            "default_value":"",
            "desc":"Allowed values: offer (publish), conclude, delete, undelete",
            "example":"offer"
          }
        ]
      }
    },
    { 
      "display_name":"3: update_a_course",
      "description":"Update a course name, code, start_at, and end_at",
      "automated":"true",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('courses',3);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithRangeParams('GPUT /api/v1/courses/:id',null,null);})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"update_a_course",
        "endpoint":"PUT /api/v1/courses/:id",
        "reference":"https://canvas.instructure.com/doc/api/courses.html#method.courses.update",
        "params":[
          {
            "name":"id",
            "type":"number",
            "default_value":"",
            "desc":"course id",
            "example":"1"
          },
          {
            "name":"course.name",
            "type":"string",
            "default_value":"",
            "desc":"The name of the course. If omitted, the course will be named “Unnamed Course.",
            "example":"name"
          },
          {
            "name":"course.course_code",
            "type":"string",
            "default_value":"",
            "desc":"The course code for the course.",
            "example":"abc-3456"
          },
          {
            "name":"course.start_at",
            "type":"DateTime",
            "default_value":"",
            "desc":"Course start date in ISO8601 format",
            "example":"2011-01-01T01:00Z"
          },
          {
            "name":"course.end_at",
            "type":"DateTime",
            "default_value":"",
            "desc":"Course start date in ISO8601 format",
            "example":"2011-01-01T01:00Z"
          },
        ]
      }
    }
  ],
  "pages":[
    { 
      "display_name":"0: list_pages",
      "description":"Searh and list pages in a course.",
      "automated":"false",
      "guide":[
        "Select an empty cell to start",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnGenTemp\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).generateParamTemplate('pages',0);})();return false;\">Get parameters</button>",
        "Enter values",
        "Select the range of the light blue area of the parameter template",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).listPagesWithCourseID();})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"list_pages",
        "endpoint":"GET /api/v1/courses/:course_id/pages",
        "reference":"https://canvas.instructure.com/doc/api/pages.html#method.wiki_pages_api.index",
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
            "desc":"The partial title of the pages to match and return.",
            "example":"quiz"
          },
          {
            "name":"sort",
            "type":"string",
            "default_value":"title",
            "desc":"Determines the order of the assignments. Defaults to “title”. title|created_at|updated_at",
            "example":"title"
          },
          {
            "name":"published",
            "type":"boolean",
            "default_value":"true",
            "desc":"If true, include only published paqes. If false, exclude published pages. If not present, do not filter on published status.",
            "example":"title"
          }
        ]
      }
    },
    {
      "display_name":"1: list_pages_in_course", 
      "description":"List all pages in a course.",
      "automated":"true",
      "guide":[
        "Select a cell with a course id",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).callCanvasAPIwithSingleParam('GET /api/v1/courses/:course_id/pages','course_id');})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"list_pages_in_course",
        "endpoint":"GET /api/v1/courses/:course_id/pages",
        "reference":"https://canvas.instructure.com/doc/api/pages.html#method.wiki_pages_api.index",
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
      "display_name":"2: update_pages_todo_date",
      "description":"Update todo_date of selected pages",
      "automated":"false",
      "guide":[
        "Select a range with page info. Include a header row with required columns: course_id, url, todo_date",
        "<button type=\"button\" class=\"btn btn-primary\" id=\"btnCallAPI\" onclick=\"(function (){onCall();google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).updatePagesToDoDates();})();return false;\">Call API</button>"
      ],
      "api":{
        "name":"update_pages_todo_date",
        "endpoint":"PUT /api/v1/courses/:course_id/pages/:url",
        "reference":"https://canvas.instructure.com/doc/api/pages.html#method.wiki_pages_api.update",
        "required_columns":["course_id","url","todo_date"]
      }
    }
  ]
};
