/** 
 * @fileoverview This file defines original Canvas api 
 * @author hye@cedarville.edu (Haisong Ye) 
 */
const RAWCANVASAPIS = {
  "accounts": [
    {
      "display_name": "List accounts",
      "controller": "accounts",
      "description": "A paginated list of accounts that the current user can view or manage.\nTypically, students and even teachers will get an empty list in response,\nonly account admins can view the accounts that they are in.",
      "name": "list_accounts",
      "endpoint": "GET /v1/accounts",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"lti_guid\":: the 'tool_consumer_instance_guid' that will be sent for this account on LTI launches\n\"registration_settings\":: returns info about the privacy policy and terms of use\n\"services\":: returns services and whether they are enabled (requires account management permissions)",
          "example": [
            "lti_guid",
            "registration_settings",
            "services"
          ]
        }
      ]
    },
    {
      "display_name": "List accounts for course admins",
      "controller": "accounts",
      "description": "A paginated list of accounts that the current user can view through their\nadmin course enrollments. (Teacher, TA, or designer enrollments).\nOnly returns \"id\", \"name\", \"workflow_state\", \"root_account_id\" and \"parent_account_id\"",
      "name": "list_accounts_for_course_admins",
      "endpoint": "GET /v1/course_accounts",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": []
    },
    {
      "display_name": "Get a single account",
      "controller": "accounts",
      "description": "Retrieve information on an individual account, given by id or sis\nsis_account_id.",
      "name": "get_single_account",
      "endpoint": "GET /v1/accounts/:id",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Permissions",
      "controller": "accounts",
      "description": "Returns permission information for the calling user and the given account.\nYou may use `self` as the account id to check permissions against the domain root account.\nThe caller must have an account role or admin (teacher/TA/designer) enrollment in a course\nin the account.\n\nSee also the {api:CoursesController#permissions Course} and {api:GroupsController#permissions Group}\ncounterparts.",
      "name": "permissions",
      "endpoint": "GET /v1/accounts/:account_id/permissions",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "permissions[]",
          "type": "array",
          "default_value": "",
          "desc": "List of permissions to check against the authenticated user.\nPermission names are documented in the {api:RoleOverridesController#add_role Create a role} endpoint.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get the sub-accounts of an account",
      "controller": "accounts",
      "description": "List accounts that are sub-accounts of the given account.",
      "name": "get_sub_accounts_of_account",
      "endpoint": "GET /v1/accounts/:account_id/sub_accounts",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "recursive",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the entire account tree underneath\nthis account will be returned (though still paginated). If false, only\ndirect sub-accounts of this account will be returned. Defaults to false.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get the Terms of Service",
      "controller": "accounts",
      "description": "Returns the terms of service for that account",
      "name": "get_terms_of_service",
      "endpoint": "GET /v1/accounts/:account_id/terms_of_service",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get help links",
      "controller": "accounts",
      "description": "Returns the help links for that account",
      "name": "get_help_links",
      "endpoint": "GET /v1/accounts/:account_id/help_links",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List active courses in an account",
      "controller": "accounts",
      "description": "Retrieve a paginated list of courses in this account.",
      "name": "list_active_courses_in_account",
      "endpoint": "GET /v1/accounts/:account_id/courses",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "with_enrollments",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only courses with at least one enrollment.  If false,\ninclude only courses with no enrollments.  If not present, do not filter\non course enrollment status.",
          "example": ""
        },
        {
          "name": "enrollment_type[]",
          "type": "array",
          "default_value": "",
          "desc": "If set, only return courses that have at least one user enrolled in\nin the course with one of the specified enrollment types.",
          "example": [
            "teacher",
            "student",
            "ta",
            "observer",
            "designer"
          ]
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only published courses.  If false, exclude published\ncourses.  If not present, do not filter on published status.",
          "example": ""
        },
        {
          "name": "completed",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only completed courses (these may be in state\n'completed', or their enrollment term may have ended).  If false, exclude\ncompleted courses.  If not present, do not filter on completed status.",
          "example": ""
        },
        {
          "name": "blueprint",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only blueprint courses. If false, exclude them.\nIf not present, do not filter on this basis.",
          "example": ""
        },
        {
          "name": "blueprint_associated",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only courses that inherit content from a blueprint course.\nIf false, exclude them. If not present, do not filter on this basis.",
          "example": ""
        },
        {
          "name": "by_teachers[]",
          "type": "array",
          "default_value": "",
          "desc": "List of User IDs of teachers; if supplied, include only courses taught by\none of the referenced users.",
          "example": ""
        },
        {
          "name": "by_subaccounts[]",
          "type": "array",
          "default_value": "",
          "desc": "List of Account IDs; if supplied, include only courses associated with one\nof the referenced subaccounts.",
          "example": ""
        },
        {
          "name": "hide_enrollmentless_courses",
          "type": "boolean",
          "default_value": "",
          "desc": "If present, only return courses that have at least one enrollment.\nEquivalent to 'with_enrollments=true'; retained for compatibility.",
          "example": ""
        },
        {
          "name": "state[]",
          "type": "array",
          "default_value": "",
          "desc": "If set, only return courses that are in the given state(s). By default,\nall states but \"deleted\" are returned.",
          "example": [
            "created",
            "claimed",
            "available",
            "completed",
            "deleted",
            "all"
          ]
        },
        {
          "name": "enrollment_term_id",
          "type": "integer",
          "default_value": "",
          "desc": "If set, only includes courses from the specified term.",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial course name, code, or full ID to match and return in the results list. Must be at least 3 characters.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- All explanations can be seen in the {api:CoursesController#index Course API index documentation}\n- \"sections\", \"needs_grading_count\" and \"total_scores\" are not valid options at the account level",
          "example": [
            "syllabus_body",
            "term",
            "course_progress",
            "storage_quota_used_mb",
            "total_students",
            "teachers",
            "account_name",
            "concluded"
          ]
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "The column to sort results by.",
          "example": [
            "course_name",
            "sis_course_id",
            "teacher",
            "account_name"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The order to sort the given column by.",
          "example": [
            "asc",
            "desc"
          ]
        },
        {
          "name": "search_by",
          "type": "string",
          "default_value": "",
          "desc": "The filter to search by. \"course\" searches for course names, course codes,\nand SIS IDs. \"teacher\" searches for teacher names",
          "example": [
            "course",
            "teacher"
          ]
        },
        {
          "name": "starts_before",
          "type": "Date",
          "default_value": "",
          "desc": "If set, only return courses that start before the value (inclusive)\nor their enrollment term starts before the value (inclusive)\nor both the course's start_at and the enrollment term's start_at are set to null.\nThe value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        },
        {
          "name": "ends_after",
          "type": "Date",
          "default_value": "",
          "desc": "If set, only return courses that end after the value (inclusive)\nor their enrollment term ends after the value (inclusive)\nor both the course's end_at and the enrollment term's end_at are set to null.\nThe value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an account",
      "controller": "accounts",
      "description": "Update an existing account.",
      "name": "update_account",
      "endpoint": "PUT /v1/accounts/:id",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "account.name",
          "type": "string",
          "default_value": "",
          "desc": "Updates the account name",
          "example": ""
        },
        {
          "name": "account.sis_account_id",
          "type": "string",
          "default_value": "",
          "desc": "Updates the account sis_account_id\nMust have manage_sis permission and must not be a root_account.",
          "example": ""
        },
        {
          "name": "account.default_time_zone",
          "type": "string",
          "default_value": "",
          "desc": "The default time zone of the account. Allowed time zones are\n{http://www.iana.org/time-zones IANA time zones} or friendlier\n{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.",
          "example": ""
        },
        {
          "name": "account.default_storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The default course storage quota to be used, if not otherwise specified.",
          "example": ""
        },
        {
          "name": "account.default_user_storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The default user storage quota to be used, if not otherwise specified.",
          "example": ""
        },
        {
          "name": "account.default_group_storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The default group storage quota to be used, if not otherwise specified.",
          "example": ""
        },
        {
          "name": "account.settings.restrict_student_past_view.value",
          "type": "boolean",
          "default_value": "",
          "desc": "Restrict students from viewing courses after end date",
          "example": ""
        },
        {
          "name": "account.settings.restrict_student_past_view.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.settings.restrict_student_future_view.value",
          "type": "boolean",
          "default_value": "",
          "desc": "Restrict students from viewing courses before start date",
          "example": ""
        },
        {
          "name": "account.settings.restrict_student_future_view.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.settings.lock_all_announcements.value",
          "type": "boolean",
          "default_value": "",
          "desc": "Disable comments on announcements",
          "example": ""
        },
        {
          "name": "account.settings.lock_all_announcements.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.settings.usage_rights_required.value",
          "type": "boolean",
          "default_value": "",
          "desc": "Copyright and license information must be provided for files before they are published.",
          "example": ""
        },
        {
          "name": "account.settings.usage_rights_required.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.settings.restrict_student_future_listing.value",
          "type": "boolean",
          "default_value": "",
          "desc": "Restrict students from viewing future enrollments in course list",
          "example": ""
        },
        {
          "name": "account.settings.restrict_student_future_listing.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.settings.lock_outcome_proficiency.value",
          "type": "boolean",
          "default_value": "",
          "desc": "[DEPRECATED] Restrict instructors from changing mastery scale",
          "example": ""
        },
        {
          "name": "account.lock_outcome_proficiency.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "[DEPRECATED] Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.settings.lock_proficiency_calculation.value",
          "type": "boolean",
          "default_value": "",
          "desc": "[DEPRECATED] Restrict instructors from changing proficiency calculation method",
          "example": ""
        },
        {
          "name": "account.lock_proficiency_calculation.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "[DEPRECATED] Lock this setting for sub-accounts and courses",
          "example": ""
        },
        {
          "name": "account.services",
          "type": "Hash",
          "default_value": "",
          "desc": "Give this a set of keys and boolean values to enable or disable services matching the keys",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a user from the root account",
      "controller": "accounts",
      "description": "Delete a user record from a Canvas root account. If a user is associated\nwith multiple root accounts (in a multi-tenant instance of Canvas), this\naction will NOT remove them from the other accounts.\n\nWARNING: This API will allow a user to remove themselves from the account.\nIf they do this, they won't be able to make API calls or log into Canvas at\nthat account.",
      "name": "delete_user_from_root_account",
      "endpoint": "DELETE /v1/accounts/:account_id/users/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a new sub-account",
      "controller": "accounts",
      "description": "Add a new sub-account to a given account.",
      "name": "create_new_sub_account",
      "endpoint": "POST /v1/accounts/:account_id/sub_accounts",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "account.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the new sub-account.",
          "example": ""
        },
        {
          "name": "account.sis_account_id",
          "type": "string",
          "default_value": "",
          "desc": "The account's identifier in the Student Information System.",
          "example": ""
        },
        {
          "name": "account.default_storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The default course storage quota to be used, if not otherwise specified.",
          "example": ""
        },
        {
          "name": "account.default_user_storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The default user storage quota to be used, if not otherwise specified.",
          "example": ""
        },
        {
          "name": "account.default_group_storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The default group storage quota to be used, if not otherwise specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a sub-account",
      "controller": "accounts",
      "description": "Cannot delete an account with active courses or active sub_accounts.\nCannot delete a root_account",
      "name": "delete_sub_account",
      "endpoint": "DELETE /v1/accounts/:account_id/sub_accounts/:id",
      "reference": "https://canvas.instructure.com/doc/api/accounts.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "admins": [
    {
      "display_name": "Make an account admin",
      "controller": "admins",
      "description": "Flag an existing user as an admin within the account.",
      "name": "make_account_admin",
      "endpoint": "POST /v1/accounts/:account_id/admins",
      "reference": "https://canvas.instructure.com/doc/api/admins.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the user to promote.",
          "example": ""
        },
        {
          "name": "role",
          "type": "string",
          "default_value": "",
          "desc": "[DEPRECATED] The user's admin relationship with the account will be\ncreated with the given role. Defaults to 'AccountAdmin'.",
          "example": ""
        },
        {
          "name": "role_id",
          "type": "integer",
          "default_value": "",
          "desc": "The user's admin relationship with the account will be created with the\ngiven role. Defaults to the built-in role for 'AccountAdmin'.",
          "example": ""
        },
        {
          "name": "send_confirmation",
          "type": "boolean",
          "default_value": "",
          "desc": "Send a notification email to\nthe new admin if true. Default is true.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Remove account admin",
      "controller": "admins",
      "description": "Remove the rights associated with an account admin role from a user.",
      "name": "remove_account_admin",
      "endpoint": "DELETE /v1/accounts/:account_id/admins/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/admins.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "role",
          "type": "string",
          "default_value": "",
          "desc": "[DEPRECATED] Account role to remove from the user. Defaults to\n'AccountAdmin'. Any other account role must be specified explicitly.",
          "example": ""
        },
        {
          "name": "role_id",
          "type": "integer",
          "default_value": "",
          "desc": "The user's admin relationship with the account will be created with the\ngiven role. Defaults to the built-in role for 'AccountAdmin'.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List account admins",
      "controller": "admins",
      "description": "A paginated list of the admins in the account",
      "name": "list_account_admins",
      "endpoint": "GET /v1/accounts/:account_id/admins",
      "reference": "https://canvas.instructure.com/doc/api/admins.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id[]",
          "type": "array",
          "default_value": "",
          "desc": "Scope the results to those with user IDs equal to any of the IDs specified here.",
          "example": ""
        }
      ]
    }
  ],
  "analytics": [
    {
      "display_name": "Get department-level participation data",
      "controller": "analytics",
      "description": "Returns page view hits summed across all courses in the department. Two\ngroupings of these counts are returned; one by day (+by_date+), the other\nby category (+by_category+). The possible categories are announcements,\nassignments, collaborations, conferences, discussions, files, general,\ngrades, groups, modules, other, pages, and quizzes.\n\nThis and the other department-level endpoints have three variations which\nall return the same style of data but for different subsets of courses. All\nshare the prefix /api/v1/accounts/<account_id>/analytics. The possible\nsuffixes are:\n\n * /current: includes all available courses in the default term\n * /completed: includes all concluded courses in the default term\n * /terms/<term_id>: includes all available or concluded courses in the\n   given term.\n\nCourses not yet offered or which have been deleted are never included.\n\n/current and /completed are intended for use when the account has only one\nterm. /terms/<term_id> is intended for use when the account has multiple\nterms.\n\nThe action follows the suffix.",
      "name": "get_department_level_participation_data_terms",
      "endpoint": "GET /v1/accounts/:account_id/analytics/terms/:term_id/activity",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "term_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level participation data",
      "controller": "analytics",
      "description": "Returns page view hits summed across all courses in the department. Two\ngroupings of these counts are returned; one by day (+by_date+), the other\nby category (+by_category+). The possible categories are announcements,\nassignments, collaborations, conferences, discussions, files, general,\ngrades, groups, modules, other, pages, and quizzes.\n\nThis and the other department-level endpoints have three variations which\nall return the same style of data but for different subsets of courses. All\nshare the prefix /api/v1/accounts/<account_id>/analytics. The possible\nsuffixes are:\n\n * /current: includes all available courses in the default term\n * /completed: includes all concluded courses in the default term\n * /terms/<term_id>: includes all available or concluded courses in the\n   given term.\n\nCourses not yet offered or which have been deleted are never included.\n\n/current and /completed are intended for use when the account has only one\nterm. /terms/<term_id> is intended for use when the account has multiple\nterms.\n\nThe action follows the suffix.",
      "name": "get_department_level_participation_data_current",
      "endpoint": "GET /v1/accounts/:account_id/analytics/current/activity",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level participation data",
      "controller": "analytics",
      "description": "Returns page view hits summed across all courses in the department. Two\ngroupings of these counts are returned; one by day (+by_date+), the other\nby category (+by_category+). The possible categories are announcements,\nassignments, collaborations, conferences, discussions, files, general,\ngrades, groups, modules, other, pages, and quizzes.\n\nThis and the other department-level endpoints have three variations which\nall return the same style of data but for different subsets of courses. All\nshare the prefix /api/v1/accounts/<account_id>/analytics. The possible\nsuffixes are:\n\n * /current: includes all available courses in the default term\n * /completed: includes all concluded courses in the default term\n * /terms/<term_id>: includes all available or concluded courses in the\n   given term.\n\nCourses not yet offered or which have been deleted are never included.\n\n/current and /completed are intended for use when the account has only one\nterm. /terms/<term_id> is intended for use when the account has multiple\nterms.\n\nThe action follows the suffix.",
      "name": "get_department_level_participation_data_completed",
      "endpoint": "GET /v1/accounts/:account_id/analytics/completed/activity",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level grade data",
      "controller": "analytics",
      "description": "Returns the distribution of grades for students in courses in the\ndepartment.  Each data point is one student's current grade in one course;\nif a student is in multiple courses, he contributes one value per course,\nbut if he's enrolled multiple times in the same course (e.g. a lecture\nsection and a lab section), he only constributes on value for that course.\n\nGrades are binned to the nearest integer score; anomalous grades outside\nthe 0 to 100 range are ignored. The raw counts are returned, not yet\nnormalized by the total count.\n\nShares the same variations on endpoint as the participation data.",
      "name": "get_department_level_grade_data_terms",
      "endpoint": "GET /v1/accounts/:account_id/analytics/terms/:term_id/grades",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "term_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level grade data",
      "controller": "analytics",
      "description": "Returns the distribution of grades for students in courses in the\ndepartment.  Each data point is one student's current grade in one course;\nif a student is in multiple courses, he contributes one value per course,\nbut if he's enrolled multiple times in the same course (e.g. a lecture\nsection and a lab section), he only constributes on value for that course.\n\nGrades are binned to the nearest integer score; anomalous grades outside\nthe 0 to 100 range are ignored. The raw counts are returned, not yet\nnormalized by the total count.\n\nShares the same variations on endpoint as the participation data.",
      "name": "get_department_level_grade_data_current",
      "endpoint": "GET /v1/accounts/:account_id/analytics/current/grades",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level grade data",
      "controller": "analytics",
      "description": "Returns the distribution of grades for students in courses in the\ndepartment.  Each data point is one student's current grade in one course;\nif a student is in multiple courses, he contributes one value per course,\nbut if he's enrolled multiple times in the same course (e.g. a lecture\nsection and a lab section), he only constributes on value for that course.\n\nGrades are binned to the nearest integer score; anomalous grades outside\nthe 0 to 100 range are ignored. The raw counts are returned, not yet\nnormalized by the total count.\n\nShares the same variations on endpoint as the participation data.",
      "name": "get_department_level_grade_data_completed",
      "endpoint": "GET /v1/accounts/:account_id/analytics/completed/grades",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level statistics",
      "controller": "analytics",
      "description": "Returns numeric statistics about the department and term (or filter).\n\nShares the same variations on endpoint as the participation data.",
      "name": "get_department_level_statistics_terms",
      "endpoint": "GET /v1/accounts/:account_id/analytics/terms/:term_id/statistics",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "term_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level statistics",
      "controller": "analytics",
      "description": "Returns numeric statistics about the department and term (or filter).\n\nShares the same variations on endpoint as the participation data.",
      "name": "get_department_level_statistics_current",
      "endpoint": "GET /v1/accounts/:account_id/analytics/current/statistics",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get department-level statistics",
      "controller": "analytics",
      "description": "Returns numeric statistics about the department and term (or filter).\n\nShares the same variations on endpoint as the participation data.",
      "name": "get_department_level_statistics_completed",
      "endpoint": "GET /v1/accounts/:account_id/analytics/completed/statistics",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get course-level participation data",
      "controller": "analytics",
      "description": "Returns page view hits and participation numbers grouped by day through the\nentire history of the course. Page views is returned as a hash, where the\nhash keys are dates in the format \"YYYY-MM-DD\". The page_views result set\nincludes page views broken out by access category. Participations is\nreturned as an array of dates in the format \"YYYY-MM-DD\".",
      "name": "get_course_level_participation_data",
      "endpoint": "GET /v1/courses/:course_id/analytics/activity",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get course-level assignment data",
      "controller": "analytics",
      "description": "Returns a list of assignments for the course sorted by due date. For\neach assignment returns basic assignment information, the grade breakdown,\nand a breakdown of on-time/late status of homework submissions.",
      "name": "get_course_level_assignment_data",
      "endpoint": "GET /v1/courses/:course_id/analytics/assignments",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "async",
          "type": "boolean",
          "default_value": "",
          "desc": "If async is true, then the course_assignments call can happen asynch-\nronously and MAY return a response containing a progress_url key instead\nof an assignments array. If it does, then it is the caller's\nresponsibility to poll the API again to see if the progress is complete.\nIf the data is ready (possibly even on the first async call) then it\nwill be passed back normally, as documented in the example response.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get course-level student summary data",
      "controller": "analytics",
      "description": "Returns a summary of per-user access information for all students in\na course. This includes total page views, total participations, and a\nbreakdown of on-time/late status for all homework submissions in the course.\n\nEach student's summary also includes the maximum number of page views and\nparticipations by any student in the course, which may be useful for some\nvisualizations (since determining maximums client side can be tricky with\npagination).",
      "name": "get_course_level_student_summary_data",
      "endpoint": "GET /v1/courses/:course_id/analytics/student_summaries",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "sort_column",
          "type": "string",
          "default_value": "",
          "desc": "The order results in which results are returned.  Defaults to \"name\".",
          "example": [
            "name",
            "name_descending",
            "score",
            "score_descending",
            "participations",
            "participations_descending",
            "page_views",
            "page_views_descending"
          ]
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "If set, returns only the specified student.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get user-in-a-course-level participation data",
      "controller": "analytics",
      "description": "Returns page view hits grouped by hour, and participation details through the\nentire history of the course.\n\n`page_views` are returned as a hash, where the keys are iso8601 dates, bucketed by the hour.\n`participations` are returned as an array of hashes, sorted oldest to newest.",
      "name": "get_user_in_a_course_level_participation_data",
      "endpoint": "GET /v1/courses/:course_id/analytics/users/:student_id/activity",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get user-in-a-course-level assignment data",
      "controller": "analytics",
      "description": "Returns a list of assignments for the course sorted by due date. For\neach assignment returns basic assignment information, the grade breakdown\n(including the student's actual grade), and the basic submission\ninformation for the student's submission if it exists.",
      "name": "get_user_in_a_course_level_assignment_data",
      "endpoint": "GET /v1/courses/:course_id/analytics/users/:student_id/assignments",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get user-in-a-course-level messaging data",
      "controller": "analytics",
      "description": "Returns messaging \"hits\" grouped by day through the entire history of the\ncourse. Returns a hash containing the number of instructor-to-student messages,\nand student-to-instructor messages, where the hash keys are dates\nin the format \"YYYY-MM-DD\". Message hits include Conversation messages and\ncomments on homework submissions.",
      "name": "get_user_in_a_course_level_messaging_data",
      "endpoint": "GET /v1/courses/:course_id/analytics/users/:student_id/communication",
      "reference": "https://canvas.instructure.com/doc/api/analytics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "announcements": [
    {
      "display_name": "List announcements",
      "controller": "announcements",
      "description": "Returns the paginated list of announcements for the given courses and date range.  Note that\na +context_code+ field is added to the responses so you can tell which course each announcement\nbelongs to.",
      "name": "list_announcements",
      "endpoint": "GET /v1/announcements",
      "reference": "https://canvas.instructure.com/doc/api/announcements.html",
      "params": [
        {
          "name": "context_codes[]",
          "type": "array",
          "default_value": "",
          "desc": "List of context_codes to retrieve announcements for (for example, +course_123+). Only courses\nare presently supported. The call will fail unless the caller has View Announcements permission\nin all listed courses.",
          "example": ""
        },
        {
          "name": "start_date",
          "type": "Date",
          "default_value": "",
          "desc": "Only return announcements posted since the start_date (inclusive).\nDefaults to 14 days ago. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        },
        {
          "name": "end_date",
          "type": "Date",
          "default_value": "",
          "desc": "Only return announcements posted before the end_date (inclusive).\nDefaults to 28 days from start_date. The value should be formatted as: yyyy-mm-dd or ISO 8601 YYYY-MM-DDTHH:MM:SSZ.\nAnnouncements scheduled for future posting will only be returned to course administrators.",
          "example": ""
        },
        {
          "name": "active_only",
          "type": "boolean",
          "default_value": "",
          "desc": "Only return active announcements that have been published.\nApplies only to requesting users that have permission to view\nunpublished items.\nDefaults to false for users with access to view unpublished items,\notherwise true and unmodifiable.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Optional list of resources to include with the response. May include\na string of the name of the resource. Possible values are:\n\"sections\", \"sections_user_count\"\nif \"sections\" is passed, includes the course sections that are associated\nwith the topic, if the topic is specific to certain sections of the course.\nIf \"sections_user_count\" is passed, then:\n  (a) If sections were asked for *and* the topic is specific to certain\n      course sections sections, includes the number of users in each\n      section. (as part of the section json asked for above)\n  (b) Else, includes at the root level the total number of users in the\n      topic's context (group or course) that the topic applies to.",
          "example": ""
        }
      ]
    }
  ],
  "assignment_groups": [
    {
      "display_name": "List assignment groups",
      "controller": "assignment_groups",
      "description": "Returns the paginated list of assignment groups for the current context.\nThe returned groups are sorted by their position field.",
      "name": "list_assignment_groups",
      "endpoint": "GET /v1/courses/:course_id/assignment_groups",
      "reference": "https://canvas.instructure.com/doc/api/assignment_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group. \"discussion_topic\", \"all_dates\", \"can_edit\",\n\"assignment_visibility\" & \"submission\" are only valid if \"assignments\" is also included.\n\"score_statistics\" requires that the \"assignments\" and \"submission\" options are included.\nThe \"assignment_visibility\" option additionally requires that the Differentiated Assignments course feature be turned on.\nIf \"observed_users\" is passed along with \"assignments\" and \"submission\", submissions for observed users will also be included as an array.",
          "example": [
            "assignments",
            "discussion_topic",
            "all_dates",
            "assignment_visibility",
            "overrides",
            "submission",
            "observed_users",
            "can_edit",
            "score_statistics"
          ]
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If \"assignments\" are included, optionally return only assignments having their ID in this array. This argument may also be passed as\na comma separated string.",
          "example": ""
        },
        {
          "name": "exclude_assignment_submission_types[]",
          "type": "array",
          "default_value": "",
          "desc": "If \"assignments\" are included, those with the specified submission types\nwill be excluded from the assignment groups.",
          "example": [
            "online_quiz",
            "discussion_topic",
            "wiki_page",
            "external_tool"
          ]
        },
        {
          "name": "override_assignment_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Apply assignment overrides for each assignment, defaults to true.",
          "example": ""
        },
        {
          "name": "grading_period_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the grading period in which assignment groups are being requested\n(Requires grading periods to exist.)",
          "example": ""
        },
        {
          "name": "scope_assignments_to_student",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, all assignments returned will apply to the current user in the\nspecified grading period. If assignments apply to other students in the\nspecified grading period, but not the current user, they will not be\nreturned. (Requires the grading_period_id argument and grading periods to\nexist. In addition, the current user must be a student.)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get an Assignment Group",
      "controller": "assignment_groups",
      "description": "Returns the assignment group with the given id.",
      "name": "get_assignment_group",
      "endpoint": "GET /v1/courses/:course_id/assignment_groups/:assignment_group_id",
      "reference": "https://canvas.instructure.com/doc/api/assignment_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group. \"discussion_topic\" and \"assignment_visibility\" and \"submission\"\nare only valid if \"assignments\" is also included. \"score_statistics\" is only valid if \"submission\" and\n\"assignments\" are also included. The \"assignment_visibility\" option additionally requires that the Differentiated Assignments\ncourse feature be turned on.",
          "example": [
            "assignments",
            "discussion_topic",
            "assignment_visibility",
            "submission",
            "score_statistics"
          ]
        },
        {
          "name": "override_assignment_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Apply assignment overrides for each assignment, defaults to true.",
          "example": ""
        },
        {
          "name": "grading_period_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the grading period in which assignment groups are being requested\n(Requires grading periods to exist on the account)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create an Assignment Group",
      "controller": "assignment_groups",
      "description": "Create a new assignment group for this course.",
      "name": "create_assignment_group",
      "endpoint": "POST /v1/courses/:course_id/assignment_groups",
      "reference": "https://canvas.instructure.com/doc/api/assignment_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The assignment group's name",
          "example": ""
        },
        {
          "name": "position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of this assignment group in relation to the other assignment groups",
          "example": ""
        },
        {
          "name": "group_weight",
          "type": "number",
          "default_value": "",
          "desc": "The percent of the total grade that this assignment group represents",
          "example": ""
        },
        {
          "name": "sis_source_id",
          "type": "string",
          "default_value": "",
          "desc": "The sis source id of the Assignment Group",
          "example": ""
        },
        {
          "name": "integration_data",
          "type": "Object",
          "default_value": "",
          "desc": "The integration data of the Assignment Group",
          "example": ""
        },
        {
          "name": "rules",
          "type": "string",
          "default_value": "",
          "desc": "The grading rules that are applied within this assignment group\nSee the Assignment Group object definition for format",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Edit an Assignment Group",
      "controller": "assignment_groups",
      "description": "Modify an existing Assignment Group.\nAccepts the same parameters as Assignment Group creation",
      "name": "edit_assignment_group",
      "endpoint": "PUT /v1/courses/:course_id/assignment_groups/:assignment_group_id",
      "reference": "https://canvas.instructure.com/doc/api/assignment_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Destroy an Assignment Group",
      "controller": "assignment_groups",
      "description": "Deletes the assignment group with the given id.",
      "name": "destroy_assignment_group",
      "endpoint": "DELETE /v1/courses/:course_id/assignment_groups/:assignment_group_id",
      "reference": "https://canvas.instructure.com/doc/api/assignment_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "move_assignments_to",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of an active Assignment Group to which the assignments that are\ncurrently assigned to the destroyed Assignment Group will be assigned.\nNOTE: If this argument is not provided, any assignments in this Assignment\nGroup will be deleted.",
          "example": ""
        }
      ]
    }
  ],
  "assignments": [
    {
      "display_name": "Delete an assignment",
      "controller": "assignments",
      "description": "Delete the given assignment.",
      "name": "delete_assignment",
      "endpoint": "DELETE /v1/courses/:course_id/assignments/:id",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List assignments",
      "controller": "assignments",
      "description": "Returns the paginated list of assignments for the current course or assignment group.",
      "name": "list_assignments_assignments",
      "endpoint": "GET /v1/courses/:course_id/assignments",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Optional information to include with each assignment:\nsubmission:: The current user's current +Submission+\nassignment_visibility:: An array of ids of students who can see the assignment\nall_dates:: An array of +AssignmentDate+ structures, one for each override, and also a +base+ if the assignment has an \"Everyone\" / \"Everyone Else\" date\noverrides:: An array of +AssignmentOverride+ structures\nobserved_users:: An array of submissions for observed users\ncan_edit:: an extra Boolean value will be included with each +Assignment+ (and +AssignmentDate+ if +all_dates+ is supplied) to indicate whether the caller can edit the assignment or date. Moderated grading and closed grading periods may restrict a user's ability to edit an assignment.\nscore_statistics:: An object containing min, max, and mean score on this assignment. This will not be included for students if there are less than 5 graded assignments or if disabled by the instructor. Only valid if 'submission' is also included.",
          "example": [
            "submission",
            "assignment_visibility",
            "all_dates",
            "overrides",
            "observed_users",
            "can_edit",
            "score_statistics"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the assignments to match and return.",
          "example": ""
        },
        {
          "name": "override_assignment_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Apply assignment overrides for each assignment, defaults to true.",
          "example": ""
        },
        {
          "name": "needs_grading_count_by_section",
          "type": "boolean",
          "default_value": "",
          "desc": "Split up \"needs_grading_count\" by sections into the \"needs_grading_count_by_section\" key, defaults to false",
          "example": ""
        },
        {
          "name": "bucket",
          "type": "string",
          "default_value": "",
          "desc": "If included, only return certain assignments depending on due date and submission status.",
          "example": [
            "past",
            "overdue",
            "undated",
            "ungraded",
            "unsubmitted",
            "upcoming",
            "future"
          ]
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "if set, return only assignments specified",
          "example": ""
        },
        {
          "name": "order_by",
          "type": "string",
          "default_value": "",
          "desc": "Determines the order of the assignments. Defaults to \"position\".",
          "example": [
            "position",
            "name",
            "due_at"
          ]
        },
        {
          "name": "post_to_sis",
          "type": "boolean",
          "default_value": "",
          "desc": "Return only assignments that have post_to_sis set or not set.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List assignments",
      "controller": "assignments",
      "description": "Returns the paginated list of assignments for the current course or assignment group.",
      "name": "list_assignments_assignment_groups",
      "endpoint": "GET /v1/courses/:course_id/assignment_groups/:assignment_group_id/assignments",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Optional information to include with each assignment:\nsubmission:: The current user's current +Submission+\nassignment_visibility:: An array of ids of students who can see the assignment\nall_dates:: An array of +AssignmentDate+ structures, one for each override, and also a +base+ if the assignment has an \"Everyone\" / \"Everyone Else\" date\noverrides:: An array of +AssignmentOverride+ structures\nobserved_users:: An array of submissions for observed users\ncan_edit:: an extra Boolean value will be included with each +Assignment+ (and +AssignmentDate+ if +all_dates+ is supplied) to indicate whether the caller can edit the assignment or date. Moderated grading and closed grading periods may restrict a user's ability to edit an assignment.\nscore_statistics:: An object containing min, max, and mean score on this assignment. This will not be included for students if there are less than 5 graded assignments or if disabled by the instructor. Only valid if 'submission' is also included.",
          "example": [
            "submission",
            "assignment_visibility",
            "all_dates",
            "overrides",
            "observed_users",
            "can_edit",
            "score_statistics"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the assignments to match and return.",
          "example": ""
        },
        {
          "name": "override_assignment_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Apply assignment overrides for each assignment, defaults to true.",
          "example": ""
        },
        {
          "name": "needs_grading_count_by_section",
          "type": "boolean",
          "default_value": "",
          "desc": "Split up \"needs_grading_count\" by sections into the \"needs_grading_count_by_section\" key, defaults to false",
          "example": ""
        },
        {
          "name": "bucket",
          "type": "string",
          "default_value": "",
          "desc": "If included, only return certain assignments depending on due date and submission status.",
          "example": [
            "past",
            "overdue",
            "undated",
            "ungraded",
            "unsubmitted",
            "upcoming",
            "future"
          ]
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "if set, return only assignments specified",
          "example": ""
        },
        {
          "name": "order_by",
          "type": "string",
          "default_value": "",
          "desc": "Determines the order of the assignments. Defaults to \"position\".",
          "example": [
            "position",
            "name",
            "due_at"
          ]
        },
        {
          "name": "post_to_sis",
          "type": "boolean",
          "default_value": "",
          "desc": "Return only assignments that have post_to_sis set or not set.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List assignments for user",
      "controller": "assignments",
      "description": "Returns the paginated list of assignments for the specified user if the current user has rights to view.\nSee {api:AssignmentsApiController#index List assignments} for valid arguments.",
      "name": "list_assignments_for_user",
      "endpoint": "GET /v1/users/:user_id/courses/:course_id/assignments",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Duplicate assignnment",
      "controller": "assignments",
      "description": "Duplicate an assignment and return a json based on result_type argument.",
      "name": "duplicate_assignnment",
      "endpoint": "POST /v1/courses/:course_id/assignments/:assignment_id/duplicate",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "result_type",
          "type": "string",
          "default_value": "",
          "desc": "Optional information:\nWhen the root account has the feature `newquizzes_on_quiz_page` enabled\nand this argument is set to \"Quiz\" the response will be serialized into a\nquiz format({file:doc/api/quizzes.html#Quiz});\nWhen this argument isn't specified the response will be serialized into an\nassignment format;",
          "example": [
            "Quiz"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single assignment",
      "controller": "assignments",
      "description": "Returns the assignment with the given id.",
      "name": "get_single_assignment",
      "endpoint": "GET /v1/courses/:course_id/assignments/:id",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the assignment. The \"assignment_visibility\" option\nrequires that the Differentiated Assignments course feature be turned on. If\n\"observed_users\" is passed, submissions for observed users will also be included.\nFor \"score_statistics\" to be included, the \"submission\" option must also be set.",
          "example": [
            "submission",
            "assignment_visibility",
            "overrides",
            "observed_users",
            "can_edit",
            "score_statistics"
          ]
        },
        {
          "name": "override_assignment_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Apply assignment overrides to the assignment, defaults to true.",
          "example": ""
        },
        {
          "name": "needs_grading_count_by_section",
          "type": "boolean",
          "default_value": "",
          "desc": "Split up \"needs_grading_count\" by sections into the \"needs_grading_count_by_section\" key, defaults to false",
          "example": ""
        },
        {
          "name": "all_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "All dates associated with the assignment, if applicable",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create an assignment",
      "controller": "assignments",
      "description": "Create a new assignment for this course. The assignment is created in the\nactive state.",
      "name": "create_assignment",
      "endpoint": "POST /v1/courses/:course_id/assignments",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment.name",
          "type": "string",
          "default_value": "",
          "desc": "The assignment name.",
          "example": ""
        },
        {
          "name": "assignment.position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of this assignment in the group when displaying\nassignment lists.",
          "example": ""
        },
        {
          "name": "assignment.submission_types[]",
          "type": "array",
          "default_value": "",
          "desc": "List of supported submission types for the assignment.\nUnless the assignment is allowing online submissions, the array should\nonly have one element.\n\nIf not allowing online submissions, your options are:\n  \"online_quiz\"\n  \"none\"\n  \"on_paper\"\n  \"discussion_topic\"\n  \"external_tool\"\n\nIf you are allowing online submissions, you can have one or many\nallowed submission types:\n\n  \"online_upload\"\n  \"online_text_entry\"\n  \"online_url\"\n  \"media_recording\" (Only valid when the Kaltura plugin is enabled)",
          "example": [
            "online_quiz",
            "none",
            "on_paper",
            "discussion_topic",
            "external_tool",
            "online_upload",
            "online_text_entry",
            "online_url",
            "media_recording"
          ]
        },
        {
          "name": "assignment.allowed_extensions[]",
          "type": "array",
          "default_value": "",
          "desc": "Allowed extensions if submission_types includes \"online_upload\"\n\nExample:\n  allowed_extensions: [\"docx\",\"ppt\"]",
          "example": ""
        },
        {
          "name": "assignment.turnitin_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "Only applies when the Turnitin plugin is enabled for a course and\nthe submission_types array includes \"online_upload\".\nToggles Turnitin submissions for the assignment.\nWill be ignored if Turnitin is not available for the course.",
          "example": ""
        },
        {
          "name": "assignment.vericite_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "Only applies when the VeriCite plugin is enabled for a course and\nthe submission_types array includes \"online_upload\".\nToggles VeriCite submissions for the assignment.\nWill be ignored if VeriCite is not available for the course.",
          "example": ""
        },
        {
          "name": "assignment.turnitin_settings",
          "type": "string",
          "default_value": "",
          "desc": "Settings to send along to turnitin. See Assignment object definition for\nformat.",
          "example": ""
        },
        {
          "name": "assignment.integration_data",
          "type": "string",
          "default_value": "",
          "desc": "Data used for SIS integrations. Requires admin-level token with the \"Manage SIS\" permission. JSON string required.",
          "example": ""
        },
        {
          "name": "assignment.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "Unique ID from third party integrations",
          "example": ""
        },
        {
          "name": "assignment.peer_reviews",
          "type": "boolean",
          "default_value": "",
          "desc": "If submission_types does not include external_tool,discussion_topic,\nonline_quiz, or on_paper, determines whether or not peer reviews\nwill be turned on for the assignment.",
          "example": ""
        },
        {
          "name": "assignment.automatic_peer_reviews",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether peer reviews will be assigned automatically by Canvas or if\nteachers must manually assign peer reviews. Does not apply if peer reviews\nare not enabled.",
          "example": ""
        },
        {
          "name": "assignment.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, Canvas will send a notification to students in the class\nnotifying them that the content has changed.",
          "example": ""
        },
        {
          "name": "assignment.group_category_id",
          "type": "integer",
          "default_value": "",
          "desc": "If present, the assignment will become a group assignment assigned\nto the group.",
          "example": ""
        },
        {
          "name": "assignment.grade_group_students_individually",
          "type": "integer",
          "default_value": "",
          "desc": "If this is a group assignment, teachers have the options to grade\nstudents individually. If false, Canvas will apply the assignment's\nscore to each member of the group. If true, the teacher can manually\nassign scores to each member of the group.",
          "example": ""
        },
        {
          "name": "assignment.external_tool_tag_attributes",
          "type": "string",
          "default_value": "",
          "desc": "Hash of external tool parameters if submission_types is [\"external_tool\"].\nSee Assignment object definition for format.",
          "example": ""
        },
        {
          "name": "assignment.points_possible",
          "type": "number",
          "default_value": "",
          "desc": "The maximum points possible on the assignment.",
          "example": ""
        },
        {
          "name": "assignment.grading_type",
          "type": "string",
          "default_value": "",
          "desc": "The strategy used for grading the assignment.\nThe assignment defaults to \"points\" if this field is omitted.",
          "example": [
            "pass_fail",
            "percent",
            "letter_grade",
            "gpa_scale",
            "points",
            "not_graded"
          ]
        },
        {
          "name": "assignment.due_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the assignment is due. Must be between the lock dates if there are lock dates.\nAccepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.",
          "example": ""
        },
        {
          "name": "assignment.lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the assignment is locked after. Must be after the due date if there is a due date.\nAccepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.",
          "example": ""
        },
        {
          "name": "assignment.unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the assignment is unlocked. Must be before the due date if there is a due date.\nAccepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.",
          "example": ""
        },
        {
          "name": "assignment.description",
          "type": "string",
          "default_value": "",
          "desc": "The assignment's description, supports HTML.",
          "example": ""
        },
        {
          "name": "assignment.assignment_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The assignment group id to put the assignment in.\nDefaults to the top assignment group in the course.",
          "example": ""
        },
        {
          "name": "assignment.assignment_overrides[]",
          "type": "array",
          "default_value": "",
          "desc": "List of overrides for the assignment.",
          "example": ""
        },
        {
          "name": "assignment.only_visible_to_overrides",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is only visible to overrides\n(Only useful if 'differentiated assignments' account setting is on)",
          "example": ""
        },
        {
          "name": "assignment.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is published.\n(Only useful if 'draft state' account setting is on)\nUnpublished assignments are not visible to students.",
          "example": ""
        },
        {
          "name": "assignment.grading_standard_id",
          "type": "integer",
          "default_value": "",
          "desc": "The grading standard id to set for the course.  If no value is provided for this argument the current grading_standard will be un-set from this course.\nThis will update the grading_type for the course to 'letter_grade' unless it is already 'gpa_scale'.",
          "example": ""
        },
        {
          "name": "assignment.omit_from_final_grade",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is counted towards a student's final grade.",
          "example": ""
        },
        {
          "name": "assignment.quiz_lti",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment should use the Quizzes 2 LTI tool. Sets the\nsubmission type to 'external_tool' and configures the external tool\nattributes to use the Quizzes 2 LTI tool configured for this course.\nHas no effect if no Quizzes 2 LTI tool is configured.",
          "example": ""
        },
        {
          "name": "assignment.moderated_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is moderated.",
          "example": ""
        },
        {
          "name": "assignment.grader_count",
          "type": "integer",
          "default_value": "",
          "desc": "The maximum number of provisional graders who may issue grades for this\nassignment. Only relevant for moderated assignments. Must be a positive\nvalue, and must be set to 1 if the course has fewer than two active\ninstructors. Otherwise, the maximum value is the number of active\ninstructors in the course minus one, or 10 if the course has more than 11\nactive instructors.",
          "example": ""
        },
        {
          "name": "assignment.final_grader_id",
          "type": "integer",
          "default_value": "",
          "desc": "The user ID of the grader responsible for choosing final grades for this\nassignment. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.grader_comments_visible_to_graders",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if provisional graders' comments are visible to other\nprovisional graders. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.graders_anonymous_to_graders",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if provisional graders' identities are hidden from\nother provisional graders. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.graders_names_visible_to_final_grader",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if provisional grader identities are visible to the\nthe final grader. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.anonymous_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if the assignment is graded anonymously. If true,\ngraders cannot see student identities.",
          "example": ""
        },
        {
          "name": "assignment.allowed_attempts",
          "type": "integer",
          "default_value": "",
          "desc": "The number of submission attempts allowed for this assignment. Set to -1 for unlimited attempts.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Edit an assignment",
      "controller": "assignments",
      "description": "Modify an existing assignment.",
      "name": "edit_assignment",
      "endpoint": "PUT /v1/courses/:course_id/assignments/:id",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment.name",
          "type": "string",
          "default_value": "",
          "desc": "The assignment name.",
          "example": ""
        },
        {
          "name": "assignment.position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of this assignment in the group when displaying\nassignment lists.",
          "example": ""
        },
        {
          "name": "assignment.submission_types[]",
          "type": "array",
          "default_value": "",
          "desc": "List of supported submission types for the assignment.\nUnless the assignment is allowing online submissions, the array should\nonly have one element.\n\nIf not allowing online submissions, your options are:\n  \"online_quiz\"\n  \"none\"\n  \"on_paper\"\n  \"discussion_topic\"\n  \"external_tool\"\n\nIf you are allowing online submissions, you can have one or many\nallowed submission types:\n\n  \"online_upload\"\n  \"online_text_entry\"\n  \"online_url\"\n  \"media_recording\" (Only valid when the Kaltura plugin is enabled)",
          "example": [
            "online_quiz",
            "none",
            "on_paper",
            "discussion_topic",
            "external_tool",
            "online_upload",
            "online_text_entry",
            "online_url",
            "media_recording"
          ]
        },
        {
          "name": "assignment.allowed_extensions[]",
          "type": "array",
          "default_value": "",
          "desc": "Allowed extensions if submission_types includes \"online_upload\"\n\nExample:\n  allowed_extensions: [\"docx\",\"ppt\"]",
          "example": ""
        },
        {
          "name": "assignment.turnitin_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "Only applies when the Turnitin plugin is enabled for a course and\nthe submission_types array includes \"online_upload\".\nToggles Turnitin submissions for the assignment.\nWill be ignored if Turnitin is not available for the course.",
          "example": ""
        },
        {
          "name": "assignment.vericite_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "Only applies when the VeriCite plugin is enabled for a course and\nthe submission_types array includes \"online_upload\".\nToggles VeriCite submissions for the assignment.\nWill be ignored if VeriCite is not available for the course.",
          "example": ""
        },
        {
          "name": "assignment.turnitin_settings",
          "type": "string",
          "default_value": "",
          "desc": "Settings to send along to turnitin. See Assignment object definition for\nformat.",
          "example": ""
        },
        {
          "name": "assignment.sis_assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "The sis id of the Assignment",
          "example": ""
        },
        {
          "name": "assignment.integration_data",
          "type": "string",
          "default_value": "",
          "desc": "Data used for SIS integrations. Requires admin-level token with the \"Manage SIS\" permission. JSON string required.",
          "example": ""
        },
        {
          "name": "assignment.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "Unique ID from third party integrations",
          "example": ""
        },
        {
          "name": "assignment.peer_reviews",
          "type": "boolean",
          "default_value": "",
          "desc": "If submission_types does not include external_tool,discussion_topic,\nonline_quiz, or on_paper, determines whether or not peer reviews\nwill be turned on for the assignment.",
          "example": ""
        },
        {
          "name": "assignment.automatic_peer_reviews",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether peer reviews will be assigned automatically by Canvas or if\nteachers must manually assign peer reviews. Does not apply if peer reviews\nare not enabled.",
          "example": ""
        },
        {
          "name": "assignment.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, Canvas will send a notification to students in the class\nnotifying them that the content has changed.",
          "example": ""
        },
        {
          "name": "assignment.group_category_id",
          "type": "integer",
          "default_value": "",
          "desc": "If present, the assignment will become a group assignment assigned\nto the group.",
          "example": ""
        },
        {
          "name": "assignment.grade_group_students_individually",
          "type": "integer",
          "default_value": "",
          "desc": "If this is a group assignment, teachers have the options to grade\nstudents individually. If false, Canvas will apply the assignment's\nscore to each member of the group. If true, the teacher can manually\nassign scores to each member of the group.",
          "example": ""
        },
        {
          "name": "assignment.external_tool_tag_attributes",
          "type": "string",
          "default_value": "",
          "desc": "Hash of external tool parameters if submission_types is [\"external_tool\"].\nSee Assignment object definition for format.",
          "example": ""
        },
        {
          "name": "assignment.points_possible",
          "type": "number",
          "default_value": "",
          "desc": "The maximum points possible on the assignment.",
          "example": ""
        },
        {
          "name": "assignment.grading_type",
          "type": "string",
          "default_value": "",
          "desc": "The strategy used for grading the assignment.\nThe assignment defaults to \"points\" if this field is omitted.",
          "example": [
            "pass_fail",
            "percent",
            "letter_grade",
            "gpa_scale",
            "points",
            "not_graded"
          ]
        },
        {
          "name": "assignment.due_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the assignment is due.\nAccepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.",
          "example": ""
        },
        {
          "name": "assignment.lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the assignment is locked after. Must be after the due date if there is a due date.\nAccepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.",
          "example": ""
        },
        {
          "name": "assignment.unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the assignment is unlocked. Must be before the due date if there is a due date.\nAccepts times in ISO 8601 format, e.g. 2014-10-21T18:48:00Z.",
          "example": ""
        },
        {
          "name": "assignment.description",
          "type": "string",
          "default_value": "",
          "desc": "The assignment's description, supports HTML.",
          "example": ""
        },
        {
          "name": "assignment.assignment_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The assignment group id to put the assignment in.\nDefaults to the top assignment group in the course.",
          "example": ""
        },
        {
          "name": "assignment.assignment_overrides[]",
          "type": "array",
          "default_value": "",
          "desc": "List of overrides for the assignment.\nIf the +assignment[assignment_overrides]+ key is absent, any existing\noverrides are kept as is. If the +assignment[assignment_overrides]+ key is\npresent, existing overrides are updated or deleted (and new ones created,\nas necessary) to match the provided list.",
          "example": ""
        },
        {
          "name": "assignment.only_visible_to_overrides",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is only visible to overrides\n(Only useful if 'differentiated assignments' account setting is on)",
          "example": ""
        },
        {
          "name": "assignment.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is published.\n(Only useful if 'draft state' account setting is on)\nUnpublished assignments are not visible to students.",
          "example": ""
        },
        {
          "name": "assignment.grading_standard_id",
          "type": "integer",
          "default_value": "",
          "desc": "The grading standard id to set for the course.  If no value is provided for this argument the current grading_standard will be un-set from this course.\nThis will update the grading_type for the course to 'letter_grade' unless it is already 'gpa_scale'.",
          "example": ""
        },
        {
          "name": "assignment.omit_from_final_grade",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is counted towards a student's final grade.",
          "example": ""
        },
        {
          "name": "assignment.moderated_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this assignment is moderated.",
          "example": ""
        },
        {
          "name": "assignment.grader_count",
          "type": "integer",
          "default_value": "",
          "desc": "The maximum number of provisional graders who may issue grades for this\nassignment. Only relevant for moderated assignments. Must be a positive\nvalue, and must be set to 1 if the course has fewer than two active\ninstructors. Otherwise, the maximum value is the number of active\ninstructors in the course minus one, or 10 if the course has more than 11\nactive instructors.",
          "example": ""
        },
        {
          "name": "assignment.final_grader_id",
          "type": "integer",
          "default_value": "",
          "desc": "The user ID of the grader responsible for choosing final grades for this\nassignment. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.grader_comments_visible_to_graders",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if provisional graders' comments are visible to other\nprovisional graders. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.graders_anonymous_to_graders",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if provisional graders' identities are hidden from\nother provisional graders. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.graders_names_visible_to_final_grader",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if provisional grader identities are visible to the\nthe final grader. Only relevant for moderated assignments.",
          "example": ""
        },
        {
          "name": "assignment.anonymous_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Boolean indicating if the assignment is graded anonymously. If true,\ngraders cannot see student identities.",
          "example": ""
        },
        {
          "name": "assignment.allowed_attempts",
          "type": "integer",
          "default_value": "",
          "desc": "The number of submission attempts allowed for this assignment. Set to -1 or null for\nunlimited attempts.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Bulk update assignment dates",
      "controller": "assignments",
      "description": "Update due dates and availability dates for multiple assignments in a course.\n\nAccepts a JSON array of objects containing two keys each: +id+, the assignment id,\nand +all_dates+, an array of +AssignmentDate+ structures containing the base and/or override\ndates for the assignment, as returned from the {api:AssignmentsApiController#index List assignments}\nendpoint with +include[]=all_dates+.\n\nThis endpoint cannot create or destroy assignment overrides; any existing assignment overrides\nthat are not referenced in the arguments will be left alone. If an override is given, any dates\nthat are not supplied with it will be defaulted. To clear a date, specify null explicitly.\n\nAll referenced assignments will be validated before any are saved. A list of errors will\nbe returned if any provided dates are invalid, and no changes will be saved.\n\nThe bulk update is performed in a background job, use the {api:ProgressController#show Progress API}\nto check its status.",
      "name": "bulk_update_assignment_dates",
      "endpoint": "PUT /v1/courses/:course_id/assignments/bulk_update",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List assignment overrides",
      "controller": "assignments",
      "description": "Returns the paginated list of overrides for this assignment that target\nsections/groups/students visible to the current user.",
      "name": "list_assignment_overrides",
      "endpoint": "GET /v1/courses/:course_id/assignments/:assignment_id/overrides",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single assignment override",
      "controller": "assignments",
      "description": "Returns details of the the override with the given id.",
      "name": "get_single_assignment_override",
      "endpoint": "GET /v1/courses/:course_id/assignments/:assignment_id/overrides/:id",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Redirect to the assignment override for a group",
      "controller": "assignments",
      "description": "Responds with a redirect to the override for the given group, if any\n(404 otherwise).",
      "name": "redirect_to_assignment_override_for_group",
      "endpoint": "GET /v1/groups/:group_id/assignments/:assignment_id/override",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Redirect to the assignment override for a section",
      "controller": "assignments",
      "description": "Responds with a redirect to the override for the given section, if any\n(404 otherwise).",
      "name": "redirect_to_assignment_override_for_section",
      "endpoint": "GET /v1/sections/:course_section_id/assignments/:assignment_id/override",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create an assignment override",
      "controller": "assignments",
      "description": "One of student_ids, group_id, or course_section_id must be present. At most\none should be present; if multiple are present only the most specific\n(student_ids first, then group_id, then course_section_id) is used and any\nothers are ignored.",
      "name": "create_assignment_override",
      "endpoint": "POST /v1/courses/:course_id/assignments/:assignment_id/overrides",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_override.student_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "The IDs of\nthe override's target students. If present, the IDs must each identify a\nuser with an active student enrollment in the course that is not already\ntargetted by a different adhoc override.",
          "example": ""
        },
        {
          "name": "assignment_override.title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the adhoc\nassignment override. Required if student_ids is present, ignored\notherwise (the title is set to the name of the targetted group or section\ninstead).",
          "example": ""
        },
        {
          "name": "assignment_override.group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the\noverride's target group. If present, the following conditions must be met\nfor the override to be successful:\n\n1. the assignment MUST be a group assignment (a group_category_id is assigned to it)\n2. the ID must identify an active group in the group set the assignment is in\n3. the ID must not be targetted by a different override\n\nSee {Appendix: Group assignments} for more info.",
          "example": ""
        },
        {
          "name": "assignment_override.course_section_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID\nof the override's target section. If present, must identify an active\nsection of the assignment's course not already targetted by a different\noverride.",
          "example": ""
        },
        {
          "name": "assignment_override.due_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time\nthe overridden assignment is due. Accepts times in ISO 8601 format, e.g.\n2014-10-21T18:48:00Z. If absent, this override will not affect due date.\nMay be present but null to indicate the override removes any previous due\ndate.",
          "example": ""
        },
        {
          "name": "assignment_override.unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time\nthe overridden assignment becomes unlocked. Accepts times in ISO 8601\nformat, e.g. 2014-10-21T18:48:00Z. If absent, this override will not\naffect the unlock date. May be present but null to indicate the override\nremoves any previous unlock date.",
          "example": ""
        },
        {
          "name": "assignment_override.lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time\nthe overridden assignment becomes locked. Accepts times in ISO 8601\nformat, e.g. 2014-10-21T18:48:00Z. If absent, this override will not\naffect the lock date. May be present but null to indicate the override\nremoves any previous lock date.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an assignment override",
      "controller": "assignments",
      "description": "All current overridden values must be supplied if they are to be retained;\ne.g. if due_at was overridden, but this PUT omits a value for due_at,\ndue_at will no longer be overridden. If the override is adhoc and\nstudent_ids is not supplied, the target override set is unchanged. Target\noverride sets cannot be changed for group or section overrides.",
      "name": "update_assignment_override",
      "endpoint": "PUT /v1/courses/:course_id/assignments/:assignment_id/overrides/:id",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_override.student_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "The IDs of the\noverride's target students. If present, the IDs must each identify a\nuser with an active student enrollment in the course that is not already\ntargetted by a different adhoc override. Ignored unless the override\nbeing updated is adhoc.",
          "example": ""
        },
        {
          "name": "assignment_override.title",
          "type": "string",
          "default_value": "",
          "desc": "The title of an adhoc\nassignment override. Ignored unless the override being updated is adhoc.",
          "example": ""
        },
        {
          "name": "assignment_override.due_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time\nthe overridden assignment is due. Accepts times in ISO 8601 format, e.g.\n2014-10-21T18:48:00Z. If absent, this override will not affect due date.\nMay be present but null to indicate the override removes any previous due\ndate.",
          "example": ""
        },
        {
          "name": "assignment_override.unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time\nthe overridden assignment becomes unlocked. Accepts times in ISO 8601\nformat, e.g. 2014-10-21T18:48:00Z. If absent, this override will not\naffect the unlock date. May be present but null to indicate the override\nremoves any previous unlock date.",
          "example": ""
        },
        {
          "name": "assignment_override.lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time\nthe overridden assignment becomes locked. Accepts times in ISO 8601\nformat, e.g. 2014-10-21T18:48:00Z. If absent, this override will not\naffect the lock date. May be present but null to indicate the override\nremoves any previous lock date.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete an assignment override",
      "controller": "assignments",
      "description": "Deletes an override and returns its former details.",
      "name": "delete_assignment_override",
      "endpoint": "DELETE /v1/courses/:course_id/assignments/:assignment_id/overrides/:id",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Batch retrieve overrides in a course",
      "controller": "assignments",
      "description": "Returns a list of specified overrides in this course, providing\nthey target sections/groups/students visible to the current user.\nReturns null elements in the list for requests that were not found.",
      "name": "batch_retrieve_overrides_in_course",
      "endpoint": "GET /v1/courses/:course_id/assignments/overrides",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_overrides.id[]",
          "type": "array",
          "default_value": "",
          "desc": "Ids of overrides to retrieve",
          "example": ""
        },
        {
          "name": "assignment_overrides.assignment_id[]",
          "type": "array",
          "default_value": "",
          "desc": "Ids of assignments for each override",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Batch create overrides in a course",
      "controller": "assignments",
      "description": "Creates the specified overrides for each assignment.  Handles creation in a\ntransaction, so all records are created or none are.\n\nOne of student_ids, group_id, or course_section_id must be present. At most\none should be present; if multiple are present only the most specific\n(student_ids first, then group_id, then course_section_id) is used and any\nothers are ignored.\n\nErrors are reported in an errors attribute, an array of errors corresponding\nto inputs.  Global errors will be reported as a single element errors array",
      "name": "batch_create_overrides_in_course",
      "endpoint": "POST /v1/courses/:course_id/assignments/overrides",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_overrides[]",
          "type": "array",
          "default_value": "",
          "desc": "Attributes for the new assignment overrides.\nSee {api:AssignmentOverridesController#create Create an assignment override} for available\nattributes",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Batch update overrides in a course",
      "controller": "assignments",
      "description": "Updates a list of specified overrides for each assignment.  Handles overrides\nin a transaction, so either all updates are applied or none.\nSee {api:AssignmentOverridesController#update Update an assignment override} for\navailable attributes.\n\nAll current overridden values must be supplied if they are to be retained;\ne.g. if due_at was overridden, but this PUT omits a value for due_at,\ndue_at will no longer be overridden. If the override is adhoc and\nstudent_ids is not supplied, the target override set is unchanged. Target\noverride sets cannot be changed for group or section overrides.\n\nErrors are reported in an errors attribute, an array of errors corresponding\nto inputs.  Global errors will be reported as a single element errors array",
      "name": "batch_update_overrides_in_course",
      "endpoint": "PUT /v1/courses/:course_id/assignments/overrides",
      "reference": "https://canvas.instructure.com/doc/api/assignments.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_overrides[]",
          "type": "array",
          "default_value": "",
          "desc": "Attributes for the updated overrides.",
          "example": ""
        }
      ]
    }
  ],
  "blueprint_courses": [
    {
      "display_name": "Get blueprint information",
      "controller": "blueprint_courses",
      "description": "Using 'default' as the template_id should suffice for the current implmentation (as there should be only one template per course).\nHowever, using specific template ids may become necessary in the future",
      "name": "get_blueprint_information",
      "endpoint": "GET /v1/courses/:course_id/blueprint_templates/:template_id",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get associated course information",
      "controller": "blueprint_courses",
      "description": "Returns a list of courses that are configured to receive updates from this blueprint",
      "name": "get_associated_course_information",
      "endpoint": "GET /v1/courses/:course_id/blueprint_templates/:template_id/associated_courses",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update associated courses",
      "controller": "blueprint_courses",
      "description": "Send a list of course ids to add or remove new associations for the template.\nCannot add courses that do not belong to the blueprint course's account. Also cannot add\nother blueprint courses or courses that already have an association with another blueprint course.\n\nAfter associating new courses, {api:MasterCourses::MasterTemplatesController#queue_migration start a sync} to populate their contents from the blueprint.",
      "name": "update_associated_courses",
      "endpoint": "PUT /v1/courses/:course_id/blueprint_templates/:template_id/update_associations",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "course_ids_to_add",
          "type": "Array",
          "default_value": "",
          "desc": "Courses to add as associated courses",
          "example": ""
        },
        {
          "name": "course_ids_to_remove",
          "type": "Array",
          "default_value": "",
          "desc": "Courses to remove as associated courses",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Begin a migration to push to associated courses",
      "controller": "blueprint_courses",
      "description": "Begins a migration to push recently updated content to all associated courses.\nOnly one migration can be running at a time.",
      "name": "begin_migration_to_push_to_associated_courses",
      "endpoint": "POST /v1/courses/:course_id/blueprint_templates/:template_id/migrations",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "comment",
          "type": "string",
          "default_value": "",
          "desc": "An optional comment to be included in the sync history.",
          "example": ""
        },
        {
          "name": "send_notification",
          "type": "boolean",
          "default_value": "",
          "desc": "Send a notification to the calling user when the sync completes.",
          "example": ""
        },
        {
          "name": "copy_settings",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether course settings should be copied over to associated courses.\nDefaults to true for newly associated courses.",
          "example": ""
        },
        {
          "name": "publish_after_initial_sync",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, newly associated courses will be automatically published after the sync completes",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Set or remove restrictions on a blueprint course object",
      "controller": "blueprint_courses",
      "description": "If a blueprint course object is restricted, editing will be limited for copies in associated courses.",
      "name": "set_or_remove_restrictions_on_blueprint_course_object",
      "endpoint": "PUT /v1/courses/:course_id/blueprint_templates/:template_id/restrict_item",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of the object.",
          "example": [
            "assignment",
            "attachment",
            "discussion_topic",
            "external_tool",
            "quiz",
            "wiki_page"
          ]
        },
        {
          "name": "content_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the object.",
          "example": ""
        },
        {
          "name": "restricted",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to apply restrictions.",
          "example": ""
        },
        {
          "name": "restrictions",
          "type": "BlueprintRestriction",
          "default_value": "",
          "desc": "(Optional) If the object is restricted, this specifies a set of restrictions. If not specified,\nthe course-level restrictions will be used. See {api:CoursesController#update Course API update documentation}",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get unsynced changes",
      "controller": "blueprint_courses",
      "description": "Retrieve a list of learning objects that have changed since the last blueprint sync operation.",
      "name": "get_unsynced_changes",
      "endpoint": "GET /v1/courses/:course_id/blueprint_templates/:template_id/unsynced_changes",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List blueprint migrations",
      "controller": "blueprint_courses",
      "description": "Shows a paginated list of migrations for the template, starting with the most recent. This endpoint can be called on a\nblueprint course. See also {api:MasterCourses::MasterTemplatesController#imports_index the associated course side}.",
      "name": "list_blueprint_migrations",
      "endpoint": "GET /v1/courses/:course_id/blueprint_templates/:template_id/migrations",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show a blueprint migration",
      "controller": "blueprint_courses",
      "description": "Shows the status of a migration. This endpoint can be called on a blueprint course. See also\n{api:MasterCourses::MasterTemplatesController#imports_show the associated course side}.",
      "name": "show_blueprint_migration",
      "endpoint": "GET /v1/courses/:course_id/blueprint_templates/:template_id/migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get migration details",
      "controller": "blueprint_courses",
      "description": "Show the changes that were propagated in a blueprint migration. This endpoint can be called on a\nblueprint course. See also {api:MasterCourses::MasterTemplatesController#import_details the associated course side}.",
      "name": "get_migration_details",
      "endpoint": "GET /v1/courses/:course_id/blueprint_templates/:template_id/migrations/:id/details",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "template_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List blueprint subscriptions",
      "controller": "blueprint_courses",
      "description": "Returns a list of blueprint subscriptions for the given course. (Currently a course may have no more than one.)",
      "name": "list_blueprint_subscriptions",
      "endpoint": "GET /v1/courses/:course_id/blueprint_subscriptions",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List blueprint imports",
      "controller": "blueprint_courses",
      "description": "Shows a paginated list of migrations imported into a course associated with a blueprint, starting with the most recent. See also\n{api:MasterCourses::MasterTemplatesController#migrations_index the blueprint course side}.\n\nUse 'default' as the subscription_id to use the currently active blueprint subscription.",
      "name": "list_blueprint_imports",
      "endpoint": "GET /v1/courses/:course_id/blueprint_subscriptions/:subscription_id/migrations",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "subscription_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show a blueprint import",
      "controller": "blueprint_courses",
      "description": "Shows the status of an import into a course associated with a blueprint. See also\n{api:MasterCourses::MasterTemplatesController#migrations_show the blueprint course side}.",
      "name": "show_blueprint_import",
      "endpoint": "GET /v1/courses/:course_id/blueprint_subscriptions/:subscription_id/migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "subscription_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get import details",
      "controller": "blueprint_courses",
      "description": "Show the changes that were propagated to a course associated with a blueprint.  See also\n{api:MasterCourses::MasterTemplatesController#migration_details the blueprint course side}.",
      "name": "get_import_details",
      "endpoint": "GET /v1/courses/:course_id/blueprint_subscriptions/:subscription_id/migrations/:id/details",
      "reference": "https://canvas.instructure.com/doc/api/blueprint_courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "subscription_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "content_migrations": [
    {
      "display_name": "List migration issues",
      "controller": "content_migrations",
      "description": "Returns paginated migration issues",
      "name": "list_migration_issues_accounts",
      "endpoint": "GET /v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List migration issues",
      "controller": "content_migrations",
      "description": "Returns paginated migration issues",
      "name": "list_migration_issues_courses",
      "endpoint": "GET /v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List migration issues",
      "controller": "content_migrations",
      "description": "Returns paginated migration issues",
      "name": "list_migration_issues_groups",
      "endpoint": "GET /v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List migration issues",
      "controller": "content_migrations",
      "description": "Returns paginated migration issues",
      "name": "list_migration_issues_users",
      "endpoint": "GET /v1/users/:user_id/content_migrations/:content_migration_id/migration_issues",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a migration issue",
      "controller": "content_migrations",
      "description": "Returns data on an individual migration issue",
      "name": "get_migration_issue_accounts",
      "endpoint": "GET /v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a migration issue",
      "controller": "content_migrations",
      "description": "Returns data on an individual migration issue",
      "name": "get_migration_issue_courses",
      "endpoint": "GET /v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a migration issue",
      "controller": "content_migrations",
      "description": "Returns data on an individual migration issue",
      "name": "get_migration_issue_groups",
      "endpoint": "GET /v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a migration issue",
      "controller": "content_migrations",
      "description": "Returns data on an individual migration issue",
      "name": "get_migration_issue_users",
      "endpoint": "GET /v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a migration issue",
      "controller": "content_migrations",
      "description": "Update the workflow_state of a migration issue",
      "name": "update_migration_issue_accounts",
      "endpoint": "PUT /v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "Set the workflow_state of the issue.",
          "example": [
            "active",
            "resolved"
          ]
        }
      ]
    },
    {
      "display_name": "Update a migration issue",
      "controller": "content_migrations",
      "description": "Update the workflow_state of a migration issue",
      "name": "update_migration_issue_courses",
      "endpoint": "PUT /v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "Set the workflow_state of the issue.",
          "example": [
            "active",
            "resolved"
          ]
        }
      ]
    },
    {
      "display_name": "Update a migration issue",
      "controller": "content_migrations",
      "description": "Update the workflow_state of a migration issue",
      "name": "update_migration_issue_groups",
      "endpoint": "PUT /v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "Set the workflow_state of the issue.",
          "example": [
            "active",
            "resolved"
          ]
        }
      ]
    },
    {
      "display_name": "Update a migration issue",
      "controller": "content_migrations",
      "description": "Update the workflow_state of a migration issue",
      "name": "update_migration_issue_users",
      "endpoint": "PUT /v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_migration_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "Set the workflow_state of the issue.",
          "example": [
            "active",
            "resolved"
          ]
        }
      ]
    },
    {
      "display_name": "List content migrations",
      "controller": "content_migrations",
      "description": "Returns paginated content migrations",
      "name": "list_content_migrations_accounts",
      "endpoint": "GET /v1/accounts/:account_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List content migrations",
      "controller": "content_migrations",
      "description": "Returns paginated content migrations",
      "name": "list_content_migrations_courses",
      "endpoint": "GET /v1/courses/:course_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List content migrations",
      "controller": "content_migrations",
      "description": "Returns paginated content migrations",
      "name": "list_content_migrations_groups",
      "endpoint": "GET /v1/groups/:group_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List content migrations",
      "controller": "content_migrations",
      "description": "Returns paginated content migrations",
      "name": "list_content_migrations_users",
      "endpoint": "GET /v1/users/:user_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a content migration",
      "controller": "content_migrations",
      "description": "Returns data on an individual content migration",
      "name": "get_content_migration_accounts",
      "endpoint": "GET /v1/accounts/:account_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a content migration",
      "controller": "content_migrations",
      "description": "Returns data on an individual content migration",
      "name": "get_content_migration_courses",
      "endpoint": "GET /v1/courses/:course_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a content migration",
      "controller": "content_migrations",
      "description": "Returns data on an individual content migration",
      "name": "get_content_migration_groups",
      "endpoint": "GET /v1/groups/:group_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a content migration",
      "controller": "content_migrations",
      "description": "Returns data on an individual content migration",
      "name": "get_content_migration_users",
      "endpoint": "GET /v1/users/:user_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a content migration",
      "controller": "content_migrations",
      "description": "Create a content migration. If the migration requires a file to be uploaded\nthe actual processing of the file will start once the file upload process is completed.\nFile uploading works as described in the {file:file_uploads.html File Upload Documentation}\nexcept that the values are set on a *pre_attachment* sub-hash.\n\nFor migrations that don't require a file to be uploaded, like course copy, the\nprocessing will begin as soon as the migration is created.\n\nYou can use the {api:ProgressController#show Progress API} to track the\nprogress of the migration. The migration's progress is linked to with the\n_progress_url_ value.\n\nThe two general workflows are:\n\nIf no file upload is needed:\n\n1. POST to create\n2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\nFor file uploading:\n\n1. POST to create with file info in *pre_attachment*\n2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data\n3. {api:ContentMigrationsController#show GET} the ContentMigration\n4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\n (required if doing .zip file upload)",
      "name": "create_content_migration_accounts",
      "endpoint": "POST /v1/accounts/:account_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "migration_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of the migration. Use the\n{api:ContentMigrationsController#available_migrators Migrator} endpoint to\nsee all available migrators. Default allowed values:\ncanvas_cartridge_importer, common_cartridge_importer,\ncourse_copy_importer, zip_file_importer, qti_converter, moodle_converter",
          "example": ""
        },
        {
          "name": "pre_attachment.name",
          "type": "string",
          "default_value": "",
          "desc": "Required if uploading a file. This is the first step in uploading a file\nto the content migration. See the {file:file_uploads.html File Upload\nDocumentation} for details on the file upload workflow.",
          "example": ""
        },
        {
          "name": "pre_attachment.*",
          "type": "string",
          "default_value": "",
          "desc": "Other file upload properties, See {file:file_uploads.html File Upload\nDocumentation}",
          "example": ""
        },
        {
          "name": "settings.file_url",
          "type": "string",
          "default_value": "",
          "desc": "A URL to download the file from. Must not require authentication.",
          "example": ""
        },
        {
          "name": "settings.content_export_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of a ContentExport to import. This allows you to import content previously exported from Canvas\nwithout needing to download and re-upload it.",
          "example": ""
        },
        {
          "name": "settings.source_course_id",
          "type": "string",
          "default_value": "",
          "desc": "The course to copy from for a course copy migration. (required if doing\ncourse copy)",
          "example": ""
        },
        {
          "name": "settings.folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The folder to unzip the .zip file into for a zip_file_import.",
          "example": ""
        },
        {
          "name": "settings.overwrite_quizzes",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to overwrite quizzes with the same identifiers between content\npackages.",
          "example": ""
        },
        {
          "name": "settings.question_bank_id",
          "type": "integer",
          "default_value": "",
          "desc": "The existing question bank ID to import questions into if not specified in\nthe content package.",
          "example": ""
        },
        {
          "name": "settings.question_bank_name",
          "type": "string",
          "default_value": "",
          "desc": "The question bank to import questions into if not specified in the content\npackage, if both bank id and name are set, id will take precedence.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of a module in the target course. This will add all imported items\n(that can be added to a module) to the given module.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_type",
          "type": "string",
          "default_value": "",
          "desc": "If provided (and +insert_into_module_id+ is supplied),\nonly add objects of the specified type to the module.",
          "example": [
            "assignment",
            "discussion_topic",
            "file",
            "page",
            "quiz"
          ]
        },
        {
          "name": "settings.insert_into_module_position",
          "type": "integer",
          "default_value": "",
          "desc": "The (1-based) position to insert the imported items into the course\n(if +insert_into_module_id+ is supplied). If this parameter\nis omitted, items will be added to the end of the module.",
          "example": ""
        },
        {
          "name": "settings.move_to_assignment_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of an assignment group in the target course. If provided, all\nimported assignments will be moved to the given assignment group.",
          "example": ""
        },
        {
          "name": "date_shift_options.shift_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to shift dates in the copied course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original start date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original end date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new start date for the content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new end date for the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.day_substitutions.X",
          "type": "integer",
          "default_value": "",
          "desc": "Move anything scheduled for day 'X' to the specified day. (0-Sunday,\n1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)",
          "example": ""
        },
        {
          "name": "date_shift_options.remove_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to remove dates in the copied course. Cannot be used\nin conjunction with *shift_dates*.",
          "example": ""
        },
        {
          "name": "selective_import",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, perform a selective import instead of importing all content.\nThe migration will identify the contents of the package and then stop\nin the +waiting_for_select+ workflow state. At this point, use the\n{api:ContentMigrationsController#content_list List items endpoint}\nto enumerate the contents of the package, identifying the copy\nparameters for the desired content. Then call the\n{api:ContentMigrationsController#update Update endpoint} and provide these\ncopy parameters to start the import.",
          "example": ""
        },
        {
          "name": "select",
          "type": "Hash",
          "default_value": "",
          "desc": "For +course_copy_importer+ migrations, this parameter allows you to select\nthe objects to copy without using the +selective_import+ argument and\n+waiting_for_select+ state as is required for uploaded imports (though that\nworkflow is also supported for course copy migrations).\nThe keys are object types like 'files', 'folders', 'pages', etc. The value\nfor each key is a list of object ids. An id can be an integer or a string.\nMultiple object types can be selected in the same call.",
          "example": [
            "folders",
            "files",
            "attachments",
            "quizzes",
            "assignments",
            "announcements",
            "calendar_events",
            "discussion_topics",
            "modules",
            "module_items",
            "pages",
            "rubrics"
          ]
        }
      ]
    },
    {
      "display_name": "Create a content migration",
      "controller": "content_migrations",
      "description": "Create a content migration. If the migration requires a file to be uploaded\nthe actual processing of the file will start once the file upload process is completed.\nFile uploading works as described in the {file:file_uploads.html File Upload Documentation}\nexcept that the values are set on a *pre_attachment* sub-hash.\n\nFor migrations that don't require a file to be uploaded, like course copy, the\nprocessing will begin as soon as the migration is created.\n\nYou can use the {api:ProgressController#show Progress API} to track the\nprogress of the migration. The migration's progress is linked to with the\n_progress_url_ value.\n\nThe two general workflows are:\n\nIf no file upload is needed:\n\n1. POST to create\n2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\nFor file uploading:\n\n1. POST to create with file info in *pre_attachment*\n2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data\n3. {api:ContentMigrationsController#show GET} the ContentMigration\n4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\n (required if doing .zip file upload)",
      "name": "create_content_migration_courses",
      "endpoint": "POST /v1/courses/:course_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "migration_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of the migration. Use the\n{api:ContentMigrationsController#available_migrators Migrator} endpoint to\nsee all available migrators. Default allowed values:\ncanvas_cartridge_importer, common_cartridge_importer,\ncourse_copy_importer, zip_file_importer, qti_converter, moodle_converter",
          "example": ""
        },
        {
          "name": "pre_attachment.name",
          "type": "string",
          "default_value": "",
          "desc": "Required if uploading a file. This is the first step in uploading a file\nto the content migration. See the {file:file_uploads.html File Upload\nDocumentation} for details on the file upload workflow.",
          "example": ""
        },
        {
          "name": "pre_attachment.*",
          "type": "string",
          "default_value": "",
          "desc": "Other file upload properties, See {file:file_uploads.html File Upload\nDocumentation}",
          "example": ""
        },
        {
          "name": "settings.file_url",
          "type": "string",
          "default_value": "",
          "desc": "A URL to download the file from. Must not require authentication.",
          "example": ""
        },
        {
          "name": "settings.content_export_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of a ContentExport to import. This allows you to import content previously exported from Canvas\nwithout needing to download and re-upload it.",
          "example": ""
        },
        {
          "name": "settings.source_course_id",
          "type": "string",
          "default_value": "",
          "desc": "The course to copy from for a course copy migration. (required if doing\ncourse copy)",
          "example": ""
        },
        {
          "name": "settings.folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The folder to unzip the .zip file into for a zip_file_import.",
          "example": ""
        },
        {
          "name": "settings.overwrite_quizzes",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to overwrite quizzes with the same identifiers between content\npackages.",
          "example": ""
        },
        {
          "name": "settings.question_bank_id",
          "type": "integer",
          "default_value": "",
          "desc": "The existing question bank ID to import questions into if not specified in\nthe content package.",
          "example": ""
        },
        {
          "name": "settings.question_bank_name",
          "type": "string",
          "default_value": "",
          "desc": "The question bank to import questions into if not specified in the content\npackage, if both bank id and name are set, id will take precedence.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of a module in the target course. This will add all imported items\n(that can be added to a module) to the given module.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_type",
          "type": "string",
          "default_value": "",
          "desc": "If provided (and +insert_into_module_id+ is supplied),\nonly add objects of the specified type to the module.",
          "example": [
            "assignment",
            "discussion_topic",
            "file",
            "page",
            "quiz"
          ]
        },
        {
          "name": "settings.insert_into_module_position",
          "type": "integer",
          "default_value": "",
          "desc": "The (1-based) position to insert the imported items into the course\n(if +insert_into_module_id+ is supplied). If this parameter\nis omitted, items will be added to the end of the module.",
          "example": ""
        },
        {
          "name": "settings.move_to_assignment_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of an assignment group in the target course. If provided, all\nimported assignments will be moved to the given assignment group.",
          "example": ""
        },
        {
          "name": "date_shift_options.shift_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to shift dates in the copied course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original start date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original end date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new start date for the content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new end date for the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.day_substitutions.X",
          "type": "integer",
          "default_value": "",
          "desc": "Move anything scheduled for day 'X' to the specified day. (0-Sunday,\n1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)",
          "example": ""
        },
        {
          "name": "date_shift_options.remove_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to remove dates in the copied course. Cannot be used\nin conjunction with *shift_dates*.",
          "example": ""
        },
        {
          "name": "selective_import",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, perform a selective import instead of importing all content.\nThe migration will identify the contents of the package and then stop\nin the +waiting_for_select+ workflow state. At this point, use the\n{api:ContentMigrationsController#content_list List items endpoint}\nto enumerate the contents of the package, identifying the copy\nparameters for the desired content. Then call the\n{api:ContentMigrationsController#update Update endpoint} and provide these\ncopy parameters to start the import.",
          "example": ""
        },
        {
          "name": "select",
          "type": "Hash",
          "default_value": "",
          "desc": "For +course_copy_importer+ migrations, this parameter allows you to select\nthe objects to copy without using the +selective_import+ argument and\n+waiting_for_select+ state as is required for uploaded imports (though that\nworkflow is also supported for course copy migrations).\nThe keys are object types like 'files', 'folders', 'pages', etc. The value\nfor each key is a list of object ids. An id can be an integer or a string.\nMultiple object types can be selected in the same call.",
          "example": [
            "folders",
            "files",
            "attachments",
            "quizzes",
            "assignments",
            "announcements",
            "calendar_events",
            "discussion_topics",
            "modules",
            "module_items",
            "pages",
            "rubrics"
          ]
        }
      ]
    },
    {
      "display_name": "Create a content migration",
      "controller": "content_migrations",
      "description": "Create a content migration. If the migration requires a file to be uploaded\nthe actual processing of the file will start once the file upload process is completed.\nFile uploading works as described in the {file:file_uploads.html File Upload Documentation}\nexcept that the values are set on a *pre_attachment* sub-hash.\n\nFor migrations that don't require a file to be uploaded, like course copy, the\nprocessing will begin as soon as the migration is created.\n\nYou can use the {api:ProgressController#show Progress API} to track the\nprogress of the migration. The migration's progress is linked to with the\n_progress_url_ value.\n\nThe two general workflows are:\n\nIf no file upload is needed:\n\n1. POST to create\n2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\nFor file uploading:\n\n1. POST to create with file info in *pre_attachment*\n2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data\n3. {api:ContentMigrationsController#show GET} the ContentMigration\n4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\n (required if doing .zip file upload)",
      "name": "create_content_migration_groups",
      "endpoint": "POST /v1/groups/:group_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "migration_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of the migration. Use the\n{api:ContentMigrationsController#available_migrators Migrator} endpoint to\nsee all available migrators. Default allowed values:\ncanvas_cartridge_importer, common_cartridge_importer,\ncourse_copy_importer, zip_file_importer, qti_converter, moodle_converter",
          "example": ""
        },
        {
          "name": "pre_attachment.name",
          "type": "string",
          "default_value": "",
          "desc": "Required if uploading a file. This is the first step in uploading a file\nto the content migration. See the {file:file_uploads.html File Upload\nDocumentation} for details on the file upload workflow.",
          "example": ""
        },
        {
          "name": "pre_attachment.*",
          "type": "string",
          "default_value": "",
          "desc": "Other file upload properties, See {file:file_uploads.html File Upload\nDocumentation}",
          "example": ""
        },
        {
          "name": "settings.file_url",
          "type": "string",
          "default_value": "",
          "desc": "A URL to download the file from. Must not require authentication.",
          "example": ""
        },
        {
          "name": "settings.content_export_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of a ContentExport to import. This allows you to import content previously exported from Canvas\nwithout needing to download and re-upload it.",
          "example": ""
        },
        {
          "name": "settings.source_course_id",
          "type": "string",
          "default_value": "",
          "desc": "The course to copy from for a course copy migration. (required if doing\ncourse copy)",
          "example": ""
        },
        {
          "name": "settings.folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The folder to unzip the .zip file into for a zip_file_import.",
          "example": ""
        },
        {
          "name": "settings.overwrite_quizzes",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to overwrite quizzes with the same identifiers between content\npackages.",
          "example": ""
        },
        {
          "name": "settings.question_bank_id",
          "type": "integer",
          "default_value": "",
          "desc": "The existing question bank ID to import questions into if not specified in\nthe content package.",
          "example": ""
        },
        {
          "name": "settings.question_bank_name",
          "type": "string",
          "default_value": "",
          "desc": "The question bank to import questions into if not specified in the content\npackage, if both bank id and name are set, id will take precedence.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of a module in the target course. This will add all imported items\n(that can be added to a module) to the given module.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_type",
          "type": "string",
          "default_value": "",
          "desc": "If provided (and +insert_into_module_id+ is supplied),\nonly add objects of the specified type to the module.",
          "example": [
            "assignment",
            "discussion_topic",
            "file",
            "page",
            "quiz"
          ]
        },
        {
          "name": "settings.insert_into_module_position",
          "type": "integer",
          "default_value": "",
          "desc": "The (1-based) position to insert the imported items into the course\n(if +insert_into_module_id+ is supplied). If this parameter\nis omitted, items will be added to the end of the module.",
          "example": ""
        },
        {
          "name": "settings.move_to_assignment_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of an assignment group in the target course. If provided, all\nimported assignments will be moved to the given assignment group.",
          "example": ""
        },
        {
          "name": "date_shift_options.shift_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to shift dates in the copied course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original start date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original end date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new start date for the content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new end date for the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.day_substitutions.X",
          "type": "integer",
          "default_value": "",
          "desc": "Move anything scheduled for day 'X' to the specified day. (0-Sunday,\n1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)",
          "example": ""
        },
        {
          "name": "date_shift_options.remove_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to remove dates in the copied course. Cannot be used\nin conjunction with *shift_dates*.",
          "example": ""
        },
        {
          "name": "selective_import",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, perform a selective import instead of importing all content.\nThe migration will identify the contents of the package and then stop\nin the +waiting_for_select+ workflow state. At this point, use the\n{api:ContentMigrationsController#content_list List items endpoint}\nto enumerate the contents of the package, identifying the copy\nparameters for the desired content. Then call the\n{api:ContentMigrationsController#update Update endpoint} and provide these\ncopy parameters to start the import.",
          "example": ""
        },
        {
          "name": "select",
          "type": "Hash",
          "default_value": "",
          "desc": "For +course_copy_importer+ migrations, this parameter allows you to select\nthe objects to copy without using the +selective_import+ argument and\n+waiting_for_select+ state as is required for uploaded imports (though that\nworkflow is also supported for course copy migrations).\nThe keys are object types like 'files', 'folders', 'pages', etc. The value\nfor each key is a list of object ids. An id can be an integer or a string.\nMultiple object types can be selected in the same call.",
          "example": [
            "folders",
            "files",
            "attachments",
            "quizzes",
            "assignments",
            "announcements",
            "calendar_events",
            "discussion_topics",
            "modules",
            "module_items",
            "pages",
            "rubrics"
          ]
        }
      ]
    },
    {
      "display_name": "Create a content migration",
      "controller": "content_migrations",
      "description": "Create a content migration. If the migration requires a file to be uploaded\nthe actual processing of the file will start once the file upload process is completed.\nFile uploading works as described in the {file:file_uploads.html File Upload Documentation}\nexcept that the values are set on a *pre_attachment* sub-hash.\n\nFor migrations that don't require a file to be uploaded, like course copy, the\nprocessing will begin as soon as the migration is created.\n\nYou can use the {api:ProgressController#show Progress API} to track the\nprogress of the migration. The migration's progress is linked to with the\n_progress_url_ value.\n\nThe two general workflows are:\n\nIf no file upload is needed:\n\n1. POST to create\n2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\nFor file uploading:\n\n1. POST to create with file info in *pre_attachment*\n2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data\n3. {api:ContentMigrationsController#show GET} the ContentMigration\n4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress\n\n (required if doing .zip file upload)",
      "name": "create_content_migration_users",
      "endpoint": "POST /v1/users/:user_id/content_migrations",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "migration_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of the migration. Use the\n{api:ContentMigrationsController#available_migrators Migrator} endpoint to\nsee all available migrators. Default allowed values:\ncanvas_cartridge_importer, common_cartridge_importer,\ncourse_copy_importer, zip_file_importer, qti_converter, moodle_converter",
          "example": ""
        },
        {
          "name": "pre_attachment.name",
          "type": "string",
          "default_value": "",
          "desc": "Required if uploading a file. This is the first step in uploading a file\nto the content migration. See the {file:file_uploads.html File Upload\nDocumentation} for details on the file upload workflow.",
          "example": ""
        },
        {
          "name": "pre_attachment.*",
          "type": "string",
          "default_value": "",
          "desc": "Other file upload properties, See {file:file_uploads.html File Upload\nDocumentation}",
          "example": ""
        },
        {
          "name": "settings.file_url",
          "type": "string",
          "default_value": "",
          "desc": "A URL to download the file from. Must not require authentication.",
          "example": ""
        },
        {
          "name": "settings.content_export_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of a ContentExport to import. This allows you to import content previously exported from Canvas\nwithout needing to download and re-upload it.",
          "example": ""
        },
        {
          "name": "settings.source_course_id",
          "type": "string",
          "default_value": "",
          "desc": "The course to copy from for a course copy migration. (required if doing\ncourse copy)",
          "example": ""
        },
        {
          "name": "settings.folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The folder to unzip the .zip file into for a zip_file_import.",
          "example": ""
        },
        {
          "name": "settings.overwrite_quizzes",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to overwrite quizzes with the same identifiers between content\npackages.",
          "example": ""
        },
        {
          "name": "settings.question_bank_id",
          "type": "integer",
          "default_value": "",
          "desc": "The existing question bank ID to import questions into if not specified in\nthe content package.",
          "example": ""
        },
        {
          "name": "settings.question_bank_name",
          "type": "string",
          "default_value": "",
          "desc": "The question bank to import questions into if not specified in the content\npackage, if both bank id and name are set, id will take precedence.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of a module in the target course. This will add all imported items\n(that can be added to a module) to the given module.",
          "example": ""
        },
        {
          "name": "settings.insert_into_module_type",
          "type": "string",
          "default_value": "",
          "desc": "If provided (and +insert_into_module_id+ is supplied),\nonly add objects of the specified type to the module.",
          "example": [
            "assignment",
            "discussion_topic",
            "file",
            "page",
            "quiz"
          ]
        },
        {
          "name": "settings.insert_into_module_position",
          "type": "integer",
          "default_value": "",
          "desc": "The (1-based) position to insert the imported items into the course\n(if +insert_into_module_id+ is supplied). If this parameter\nis omitted, items will be added to the end of the module.",
          "example": ""
        },
        {
          "name": "settings.move_to_assignment_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of an assignment group in the target course. If provided, all\nimported assignments will be moved to the given assignment group.",
          "example": ""
        },
        {
          "name": "date_shift_options.shift_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to shift dates in the copied course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original start date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.old_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The original end date of the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_start_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new start date for the content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.new_end_date",
          "type": "Date",
          "default_value": "",
          "desc": "The new end date for the source content/course",
          "example": ""
        },
        {
          "name": "date_shift_options.day_substitutions.X",
          "type": "integer",
          "default_value": "",
          "desc": "Move anything scheduled for day 'X' to the specified day. (0-Sunday,\n1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday)",
          "example": ""
        },
        {
          "name": "date_shift_options.remove_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to remove dates in the copied course. Cannot be used\nin conjunction with *shift_dates*.",
          "example": ""
        },
        {
          "name": "selective_import",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, perform a selective import instead of importing all content.\nThe migration will identify the contents of the package and then stop\nin the +waiting_for_select+ workflow state. At this point, use the\n{api:ContentMigrationsController#content_list List items endpoint}\nto enumerate the contents of the package, identifying the copy\nparameters for the desired content. Then call the\n{api:ContentMigrationsController#update Update endpoint} and provide these\ncopy parameters to start the import.",
          "example": ""
        },
        {
          "name": "select",
          "type": "Hash",
          "default_value": "",
          "desc": "For +course_copy_importer+ migrations, this parameter allows you to select\nthe objects to copy without using the +selective_import+ argument and\n+waiting_for_select+ state as is required for uploaded imports (though that\nworkflow is also supported for course copy migrations).\nThe keys are object types like 'files', 'folders', 'pages', etc. The value\nfor each key is a list of object ids. An id can be an integer or a string.\nMultiple object types can be selected in the same call.",
          "example": [
            "folders",
            "files",
            "attachments",
            "quizzes",
            "assignments",
            "announcements",
            "calendar_events",
            "discussion_topics",
            "modules",
            "module_items",
            "pages",
            "rubrics"
          ]
        }
      ]
    },
    {
      "display_name": "Update a content migration",
      "controller": "content_migrations",
      "description": "Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you\ncan't change the migration type. However, changing most settings after the\nmigration process has started will not do anything. Generally updating the\ncontent migration will be used when there is a file upload problem, or when\nimporting content selectively. If the first upload has a problem you can\nsupply new _pre_attachment_ values to start the process again.",
      "name": "update_content_migration_accounts",
      "endpoint": "PUT /v1/accounts/:account_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a content migration",
      "controller": "content_migrations",
      "description": "Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you\ncan't change the migration type. However, changing most settings after the\nmigration process has started will not do anything. Generally updating the\ncontent migration will be used when there is a file upload problem, or when\nimporting content selectively. If the first upload has a problem you can\nsupply new _pre_attachment_ values to start the process again.",
      "name": "update_content_migration_courses",
      "endpoint": "PUT /v1/courses/:course_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a content migration",
      "controller": "content_migrations",
      "description": "Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you\ncan't change the migration type. However, changing most settings after the\nmigration process has started will not do anything. Generally updating the\ncontent migration will be used when there is a file upload problem, or when\nimporting content selectively. If the first upload has a problem you can\nsupply new _pre_attachment_ values to start the process again.",
      "name": "update_content_migration_groups",
      "endpoint": "PUT /v1/groups/:group_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a content migration",
      "controller": "content_migrations",
      "description": "Update a content migration. Takes same arguments as {api:ContentMigrationsController#create create} except that you\ncan't change the migration type. However, changing most settings after the\nmigration process has started will not do anything. Generally updating the\ncontent migration will be used when there is a file upload problem, or when\nimporting content selectively. If the first upload has a problem you can\nsupply new _pre_attachment_ values to start the process again.",
      "name": "update_content_migration_users",
      "endpoint": "PUT /v1/users/:user_id/content_migrations/:id",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List Migration Systems",
      "controller": "content_migrations",
      "description": "Lists the currently available migration types. These values may change.",
      "name": "list_migration_systems_accounts",
      "endpoint": "GET /v1/accounts/:account_id/content_migrations/migrators",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List Migration Systems",
      "controller": "content_migrations",
      "description": "Lists the currently available migration types. These values may change.",
      "name": "list_migration_systems_courses",
      "endpoint": "GET /v1/courses/:course_id/content_migrations/migrators",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List Migration Systems",
      "controller": "content_migrations",
      "description": "Lists the currently available migration types. These values may change.",
      "name": "list_migration_systems_groups",
      "endpoint": "GET /v1/groups/:group_id/content_migrations/migrators",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List Migration Systems",
      "controller": "content_migrations",
      "description": "Lists the currently available migration types. These values may change.",
      "name": "list_migration_systems_users",
      "endpoint": "GET /v1/users/:user_id/content_migrations/migrators",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List items for selective import",
      "controller": "content_migrations",
      "description": "Enumerates the content available for selective import in a tree structure. Each node provides\na +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}\nto selectively copy the content associated with that tree node and its children. Each node may also\nprovide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters\nfor a subset of the resources in a given node.\n\nIf no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:\n\n  [{\n    \"type\": \"course_settings\",\n    \"property\": \"copy[all_course_settings]\",\n    \"title\": \"Course Settings\"\n  },\n  {\n    \"type\": \"context_modules\",\n    \"property\": \"copy[all_context_modules]\",\n    \"title\": \"Modules\",\n    \"count\": 5,\n    \"sub_items_url\": \"http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules\"\n  },\n  {\n    \"type\": \"assignments\",\n    \"property\": \"copy[all_assignments]\",\n    \"title\": \"Assignments\",\n    \"count\": 2,\n    \"sub_items_url\": \"http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments\"\n  }]\n\nWhen a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+\nresults in a node for each assignment group and a sub_item for each assignment, like this:\n\n  [{\n    \"type\": \"assignment_groups\",\n    \"title\": \"An Assignment Group\",\n    \"property\": \"copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]\",\n    \"sub_items\": [{\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 1\",\n        \"property\": \"copy[assignments][id_i2102a7fa93b29226774949298626719d]\"\n    }, {\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 2\",\n        \"property\": \"copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]\"\n    }]\n  }]\n\n\nTo import the items corresponding to a particular tree node, use the +property+ as a parameter to the\n{api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:\n\n  copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1\n\nYou can include multiple copy parameters to selectively import multiple items or groups of items.",
      "name": "list_items_for_selective_import_accounts",
      "endpoint": "GET /v1/accounts/:account_id/content_migrations/:id/selective_data",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "type",
          "type": "string",
          "default_value": "",
          "desc": "The type of content to enumerate.",
          "example": [
            "context_modules",
            "assignments",
            "quizzes",
            "assessment_question_banks",
            "discussion_topics",
            "wiki_pages",
            "context_external_tools",
            "tool_profiles",
            "announcements",
            "calendar_events",
            "rubrics",
            "groups",
            "learning_outcomes",
            "attachments"
          ]
        }
      ]
    },
    {
      "display_name": "List items for selective import",
      "controller": "content_migrations",
      "description": "Enumerates the content available for selective import in a tree structure. Each node provides\na +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}\nto selectively copy the content associated with that tree node and its children. Each node may also\nprovide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters\nfor a subset of the resources in a given node.\n\nIf no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:\n\n  [{\n    \"type\": \"course_settings\",\n    \"property\": \"copy[all_course_settings]\",\n    \"title\": \"Course Settings\"\n  },\n  {\n    \"type\": \"context_modules\",\n    \"property\": \"copy[all_context_modules]\",\n    \"title\": \"Modules\",\n    \"count\": 5,\n    \"sub_items_url\": \"http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules\"\n  },\n  {\n    \"type\": \"assignments\",\n    \"property\": \"copy[all_assignments]\",\n    \"title\": \"Assignments\",\n    \"count\": 2,\n    \"sub_items_url\": \"http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments\"\n  }]\n\nWhen a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+\nresults in a node for each assignment group and a sub_item for each assignment, like this:\n\n  [{\n    \"type\": \"assignment_groups\",\n    \"title\": \"An Assignment Group\",\n    \"property\": \"copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]\",\n    \"sub_items\": [{\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 1\",\n        \"property\": \"copy[assignments][id_i2102a7fa93b29226774949298626719d]\"\n    }, {\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 2\",\n        \"property\": \"copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]\"\n    }]\n  }]\n\n\nTo import the items corresponding to a particular tree node, use the +property+ as a parameter to the\n{api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:\n\n  copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1\n\nYou can include multiple copy parameters to selectively import multiple items or groups of items.",
      "name": "list_items_for_selective_import_courses",
      "endpoint": "GET /v1/courses/:course_id/content_migrations/:id/selective_data",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "type",
          "type": "string",
          "default_value": "",
          "desc": "The type of content to enumerate.",
          "example": [
            "context_modules",
            "assignments",
            "quizzes",
            "assessment_question_banks",
            "discussion_topics",
            "wiki_pages",
            "context_external_tools",
            "tool_profiles",
            "announcements",
            "calendar_events",
            "rubrics",
            "groups",
            "learning_outcomes",
            "attachments"
          ]
        }
      ]
    },
    {
      "display_name": "List items for selective import",
      "controller": "content_migrations",
      "description": "Enumerates the content available for selective import in a tree structure. Each node provides\na +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}\nto selectively copy the content associated with that tree node and its children. Each node may also\nprovide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters\nfor a subset of the resources in a given node.\n\nIf no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:\n\n  [{\n    \"type\": \"course_settings\",\n    \"property\": \"copy[all_course_settings]\",\n    \"title\": \"Course Settings\"\n  },\n  {\n    \"type\": \"context_modules\",\n    \"property\": \"copy[all_context_modules]\",\n    \"title\": \"Modules\",\n    \"count\": 5,\n    \"sub_items_url\": \"http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules\"\n  },\n  {\n    \"type\": \"assignments\",\n    \"property\": \"copy[all_assignments]\",\n    \"title\": \"Assignments\",\n    \"count\": 2,\n    \"sub_items_url\": \"http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments\"\n  }]\n\nWhen a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+\nresults in a node for each assignment group and a sub_item for each assignment, like this:\n\n  [{\n    \"type\": \"assignment_groups\",\n    \"title\": \"An Assignment Group\",\n    \"property\": \"copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]\",\n    \"sub_items\": [{\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 1\",\n        \"property\": \"copy[assignments][id_i2102a7fa93b29226774949298626719d]\"\n    }, {\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 2\",\n        \"property\": \"copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]\"\n    }]\n  }]\n\n\nTo import the items corresponding to a particular tree node, use the +property+ as a parameter to the\n{api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:\n\n  copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1\n\nYou can include multiple copy parameters to selectively import multiple items or groups of items.",
      "name": "list_items_for_selective_import_groups",
      "endpoint": "GET /v1/groups/:group_id/content_migrations/:id/selective_data",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "type",
          "type": "string",
          "default_value": "",
          "desc": "The type of content to enumerate.",
          "example": [
            "context_modules",
            "assignments",
            "quizzes",
            "assessment_question_banks",
            "discussion_topics",
            "wiki_pages",
            "context_external_tools",
            "tool_profiles",
            "announcements",
            "calendar_events",
            "rubrics",
            "groups",
            "learning_outcomes",
            "attachments"
          ]
        }
      ]
    },
    {
      "display_name": "List items for selective import",
      "controller": "content_migrations",
      "description": "Enumerates the content available for selective import in a tree structure. Each node provides\na +property+ copy argument that can be supplied to the {api:ContentMigrationsController#update Update endpoint}\nto selectively copy the content associated with that tree node and its children. Each node may also\nprovide a +sub_items_url+ or an array of +sub_items+ which you can use to obtain copy parameters\nfor a subset of the resources in a given node.\n\nIf no +type+ is sent you will get a list of the top-level sections in the content. It will look something like this:\n\n  [{\n    \"type\": \"course_settings\",\n    \"property\": \"copy[all_course_settings]\",\n    \"title\": \"Course Settings\"\n  },\n  {\n    \"type\": \"context_modules\",\n    \"property\": \"copy[all_context_modules]\",\n    \"title\": \"Modules\",\n    \"count\": 5,\n    \"sub_items_url\": \"http://example.com/api/v1/courses/22/content_migrations/77/selective_data?type=context_modules\"\n  },\n  {\n    \"type\": \"assignments\",\n    \"property\": \"copy[all_assignments]\",\n    \"title\": \"Assignments\",\n    \"count\": 2,\n    \"sub_items_url\": \"http://localhost:3000/api/v1/courses/22/content_migrations/77/selective_data?type=assignments\"\n  }]\n\nWhen a +type+ is provided, nodes may be further divided via +sub_items+. For example, using +type=assignments+\nresults in a node for each assignment group and a sub_item for each assignment, like this:\n\n  [{\n    \"type\": \"assignment_groups\",\n    \"title\": \"An Assignment Group\",\n    \"property\": \"copy[assignment_groups][id_i855cf145e5acc7435e1bf1c6e2126e5f]\",\n    \"sub_items\": [{\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 1\",\n        \"property\": \"copy[assignments][id_i2102a7fa93b29226774949298626719d]\"\n    }, {\n        \"type\": \"assignments\",\n        \"title\": \"Assignment 2\",\n        \"property\": \"copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]\"\n    }]\n  }]\n\n\nTo import the items corresponding to a particular tree node, use the +property+ as a parameter to the\n{api:ContentMigrationsController#update Update endpoint} and assign a value of 1, for example:\n\n  copy[assignments][id_i310cba275dc3f4aa8a3306bbbe380979]=1\n\nYou can include multiple copy parameters to selectively import multiple items or groups of items.",
      "name": "list_items_for_selective_import_users",
      "endpoint": "GET /v1/users/:user_id/content_migrations/:id/selective_data",
      "reference": "https://canvas.instructure.com/doc/api/content_migrations.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "type",
          "type": "string",
          "default_value": "",
          "desc": "The type of content to enumerate.",
          "example": [
            "context_modules",
            "assignments",
            "quizzes",
            "assessment_question_banks",
            "discussion_topics",
            "wiki_pages",
            "context_external_tools",
            "tool_profiles",
            "announcements",
            "calendar_events",
            "rubrics",
            "groups",
            "learning_outcomes",
            "attachments"
          ]
        }
      ]
    }
  ],
  "courses": [
    {
      "display_name": "List your courses",
      "controller": "courses",
      "description": "Returns the paginated list of active courses for the current user.",
      "name": "list_your_courses",
      "endpoint": "GET /v1/courses",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "enrollment_type",
          "type": "string",
          "default_value": "",
          "desc": "When set, only return courses where the user is enrolled as this type. For\nexample, set to \"teacher\" to return only courses where the user is\nenrolled as a Teacher.  This argument is ignored if enrollment_role is given.",
          "example": [
            "teacher",
            "student",
            "ta",
            "observer",
            "designer"
          ]
        },
        {
          "name": "enrollment_role",
          "type": "string",
          "default_value": "",
          "desc": "Deprecated\nWhen set, only return courses where the user is enrolled with the specified\ncourse-level role.  This can be a role created with the\n{api:RoleOverridesController#add_role Add Role API} or a base role type of\n'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',\nor 'DesignerEnrollment'.",
          "example": ""
        },
        {
          "name": "enrollment_role_id",
          "type": "integer",
          "default_value": "",
          "desc": "When set, only return courses where the user is enrolled with the specified\ncourse-level role.  This can be a role created with the\n{api:RoleOverridesController#add_role Add Role API} or a built_in role type of\n'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',\nor 'DesignerEnrollment'.",
          "example": ""
        },
        {
          "name": "enrollment_state",
          "type": "string",
          "default_value": "",
          "desc": "When set, only return courses where the user has an enrollment with the given state.\nThis will respect section/course/term date overrides.",
          "example": [
            "active",
            "invited_or_pending",
            "completed"
          ]
        },
        {
          "name": "exclude_blueprint_courses",
          "type": "boolean",
          "default_value": "",
          "desc": "When set, only return courses that are not configured as blueprint courses.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"needs_grading_count\": Optional information to include with each Course.\n  When needs_grading_count is given, and the current user has grading\n  rights, the total number of submissions needing grading for all\n  assignments is returned.\n- \"syllabus_body\": Optional information to include with each Course.\n  When syllabus_body is given the user-generated html for the course\n  syllabus is returned.\n- \"public_description\": Optional information to include with each Course.\n  When public_description is given the user-generated text for the course\n  public description is returned.\n- \"total_scores\": Optional information to include with each Course.\n  When total_scores is given, any student enrollments will also\n  include the fields 'computed_current_score', 'computed_final_score',\n  'computed_current_grade', and 'computed_final_grade', as well as (if\n  the user has permission) 'unposted_current_score',\n  'unposted_final_score', 'unposted_current_grade', and\n  'unposted_final_grade' (see Enrollment documentation for more\n  information on these fields). This argument is ignored if the course is\n  configured to hide final grades.\n- \"current_grading_period_scores\": Optional information to include with\n  each Course. When current_grading_period_scores is given and total_scores\n  is given, any student enrollments will also include the fields\n  'has_grading_periods',\n  'totals_for_all_grading_periods_option', 'current_grading_period_title',\n  'current_grading_period_id', current_period_computed_current_score',\n  'current_period_computed_final_score',\n  'current_period_computed_current_grade', and\n  'current_period_computed_final_grade', as well as (if the user has permission)\n  'current_period_unposted_current_score',\n  'current_period_unposted_final_score',\n  'current_period_unposted_current_grade', and\n  'current_period_unposted_final_grade' (see Enrollment documentation for\n  more information on these fields). In addition, when this argument is\n  passed, the course will have a 'has_grading_periods' attribute\n  on it. This argument is ignored if the total_scores argument is not\n  included. If the course is configured to hide final grades, the\n  following fields are not returned:\n  'totals_for_all_grading_periods_option',\n  'current_period_computed_current_score',\n  'current_period_computed_final_score',\n  'current_period_computed_current_grade',\n  'current_period_computed_final_grade',\n  'current_period_unposted_current_score',\n  'current_period_unposted_final_score',\n  'current_period_unposted_current_grade', and\n  'current_period_unposted_final_grade'\n- \"term\": Optional information to include with each Course. When\n  term is given, the information for the enrollment term for each course\n  is returned.\n- \"account\": Optional information to include with each Course. When\n  account is given, the account json for each course is returned.\n- \"course_progress\": Optional information to include with each Course.\n  When course_progress is given, each course will include a\n  'course_progress' object with the fields: 'requirement_count', an integer\n  specifying the total number of requirements in the course,\n  'requirement_completed_count', an integer specifying the total number of\n  requirements in this course that have been completed, and\n  'next_requirement_url', a string url to the next requirement item, and\n  'completed_at', the date the course was completed (null if incomplete).\n  'next_requirement_url' will be null if all requirements have been\n  completed or the current module does not require sequential progress.\n  \"course_progress\" will return an error message if the course is not\n  module based or the user is not enrolled as a student in the course.\n- \"sections\": Section enrollment information to include with each Course.\n  Returns an array of hashes containing the section ID (id), section name\n  (name), start and end dates (start_at, end_at), as well as the enrollment\n  type (enrollment_role, e.g. 'StudentEnrollment').\n- \"storage_quota_used_mb\": The amount of storage space used by the files in this course\n- \"total_students\": Optional information to include with each Course.\n  Returns an integer for the total amount of active and invited students.\n- \"passback_status\": Include the grade passback_status\n- \"favorites\": Optional information to include with each Course.\n  Indicates if the user has marked the course as a favorite course.\n- \"teachers\": Teacher information to include with each Course.\n  Returns an array of hashes containing the {api:Users:UserDisplay UserDisplay} information\n  for each teacher in the course.\n- \"observed_users\": Optional information to include with each Course.\n  Will include data for observed users if the current user has an\n  observer enrollment.\n- \"tabs\": Optional information to include with each Course.\n  Will include the list of tabs configured for each course.  See the\n  {api:TabsController#index List available tabs API} for more information.\n- \"course_image\": Optional course image data for when there is a course image\n  and the course image feature flag has been enabled\n- \"concluded\": Optional information to include with each Course. Indicates whether\n  the course has been concluded, taking course and term dates into account.",
          "example": [
            "needs_grading_count",
            "syllabus_body",
            "public_description",
            "total_scores",
            "current_grading_period_scores",
            "term",
            "account",
            "course_progress",
            "sections",
            "storage_quota_used_mb",
            "total_students",
            "passback_status",
            "favorites",
            "teachers",
            "observed_users",
            "course_image",
            "concluded"
          ]
        },
        {
          "name": "state[]",
          "type": "array",
          "default_value": "",
          "desc": "If set, only return courses that are in the given state(s).\nBy default, \"available\" is returned for students and observers, and\nanything except \"deleted\", for all other enrollment types",
          "example": [
            "unpublished",
            "available",
            "completed",
            "deleted"
          ]
        }
      ]
    },
    {
      "display_name": "List courses for a user",
      "controller": "courses",
      "description": "Returns a paginated list of active courses for this user. To view the course list for a user other than yourself, you must be either an observer of that user or an administrator.",
      "name": "list_courses_for_user",
      "endpoint": "GET /v1/users/:user_id/courses",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"needs_grading_count\": Optional information to include with each Course.\n  When needs_grading_count is given, and the current user has grading\n  rights, the total number of submissions needing grading for all\n  assignments is returned.\n- \"syllabus_body\": Optional information to include with each Course.\n  When syllabus_body is given the user-generated html for the course\n  syllabus is returned.\n- \"public_description\": Optional information to include with each Course.\n  When public_description is given the user-generated text for the course\n  public description is returned.\n- \"total_scores\": Optional information to include with each Course.\n  When total_scores is given, any student enrollments will also\n  include the fields 'computed_current_score', 'computed_final_score',\n  'computed_current_grade', and 'computed_final_grade' (see Enrollment\n  documentation for more information on these fields). This argument\n  is ignored if the course is configured to hide final grades.\n- \"current_grading_period_scores\": Optional information to include with\n  each Course. When current_grading_period_scores is given and total_scores\n  is given, any student enrollments will also include the fields\n  'has_grading_periods',\n  'totals_for_all_grading_periods_option', 'current_grading_period_title',\n  'current_grading_period_id', current_period_computed_current_score',\n  'current_period_computed_final_score',\n  'current_period_computed_current_grade', and\n  'current_period_computed_final_grade', as well as (if the user has permission)\n  'current_period_unposted_current_score',\n  'current_period_unposted_final_score',\n  'current_period_unposted_current_grade', and\n  'current_period_unposted_final_grade' (see Enrollment documentation for\n  more information on these fields). In addition, when this argument is\n  passed, the course will have a 'has_grading_periods' attribute\n  on it. This argument is ignored if the course is configured to hide final\n  grades or if the total_scores argument is not included.\n- \"term\": Optional information to include with each Course. When\n  term is given, the information for the enrollment term for each course\n  is returned.\n- \"account\": Optional information to include with each Course. When\n  account is given, the account json for each course is returned.\n- \"course_progress\": Optional information to include with each Course.\n  When course_progress is given, each course will include a\n  'course_progress' object with the fields: 'requirement_count', an integer\n  specifying the total number of requirements in the course,\n  'requirement_completed_count', an integer specifying the total number of\n  requirements in this course that have been completed, and\n  'next_requirement_url', a string url to the next requirement item, and\n  'completed_at', the date the course was completed (null if incomplete).\n  'next_requirement_url' will be null if all requirements have been\n  completed or the current module does not require sequential progress.\n  \"course_progress\" will return an error message if the course is not\n  module based or the user is not enrolled as a student in the course.\n- \"sections\": Section enrollment information to include with each Course.\n  Returns an array of hashes containing the section ID (id), section name\n  (name), start and end dates (start_at, end_at), as well as the enrollment\n  type (enrollment_role, e.g. 'StudentEnrollment').\n- \"storage_quota_used_mb\": The amount of storage space used by the files in this course\n- \"total_students\": Optional information to include with each Course.\n  Returns an integer for the total amount of active and invited students.\n- \"passback_status\": Include the grade passback_status\n- \"favorites\": Optional information to include with each Course.\n  Indicates if the user has marked the course as a favorite course.\n- \"teachers\": Teacher information to include with each Course.\n  Returns an array of hashes containing the {api:Users:UserDisplay UserDisplay} information\n  for each teacher in the course.\n- \"observed_users\": Optional information to include with each Course.\n  Will include data for observed users if the current user has an\n  observer enrollment.\n- \"tabs\": Optional information to include with each Course.\n  Will include the list of tabs configured for each course.  See the\n  {api:TabsController#index List available tabs API} for more information.\n- \"course_image\": Optional course image data for when there is a course image\n  and the course image feature flag has been enabled\n- \"concluded\": Optional information to include with each Course. Indicates whether\n  the course has been concluded, taking course and term dates into account.",
          "example": [
            "needs_grading_count",
            "syllabus_body",
            "public_description",
            "total_scores",
            "current_grading_period_scores",
            "term",
            "account",
            "course_progress",
            "sections",
            "storage_quota_used_mb",
            "total_students",
            "passback_status",
            "favorites",
            "teachers",
            "observed_users",
            "course_image",
            "concluded"
          ]
        },
        {
          "name": "state[]",
          "type": "array",
          "default_value": "",
          "desc": "If set, only return courses that are in the given state(s).\nBy default, \"available\" is returned for students and observers, and\nanything except \"deleted\", for all other enrollment types",
          "example": [
            "unpublished",
            "available",
            "completed",
            "deleted"
          ]
        },
        {
          "name": "enrollment_state",
          "type": "string",
          "default_value": "",
          "desc": "When set, only return courses where the user has an enrollment with the given state.\nThis will respect section/course/term date overrides.",
          "example": [
            "active",
            "invited_or_pending",
            "completed"
          ]
        }
      ]
    },
    {
      "display_name": "Get user progress",
      "controller": "courses",
      "description": "Return progress information for the user and course\n\nYou can supply +self+ as the user_id to query your own progress in a course. To query another user's progress,\nyou must be a teacher in the course, an administrator, or a linked observer of the user.",
      "name": "get_user_progress",
      "endpoint": "GET /v1/courses/:course_id/users/:user_id/progress",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a new course",
      "controller": "courses",
      "description": "Create a new course",
      "name": "create_new_course",
      "endpoint": "POST /v1/accounts/:account_id/courses",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "course.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the course. If omitted, the course will be named \"Unnamed\nCourse.\"",
          "example": ""
        },
        {
          "name": "course.course_code",
          "type": "string",
          "default_value": "",
          "desc": "The course code for the course.",
          "example": ""
        },
        {
          "name": "course.start_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z",
          "example": ""
        },
        {
          "name": "course.end_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z",
          "example": ""
        },
        {
          "name": "course.license",
          "type": "string",
          "default_value": "",
          "desc": "The name of the licensing. Should be one of the following abbreviations\n(a descriptive name is included in parenthesis for reference):\n- 'private' (Private Copyrighted)\n- 'cc_by_nc_nd' (CC Attribution Non-Commercial No Derivatives)\n- 'cc_by_nc_sa' (CC Attribution Non-Commercial Share Alike)\n- 'cc_by_nc' (CC Attribution Non-Commercial)\n- 'cc_by_nd' (CC Attribution No Derivatives)\n- 'cc_by_sa' (CC Attribution Share Alike)\n- 'cc_by' (CC Attribution)\n- 'public_domain' (Public Domain).",
          "example": ""
        },
        {
          "name": "course.is_public",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if course is public to both authenticated and unauthenticated users.",
          "example": ""
        },
        {
          "name": "course.is_public_to_auth_users",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if course is public only to authenticated users.",
          "example": ""
        },
        {
          "name": "course.public_syllabus",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to make the course syllabus public.",
          "example": ""
        },
        {
          "name": "course.public_syllabus_to_auth",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to make the course syllabus public for authenticated users.",
          "example": ""
        },
        {
          "name": "course.public_description",
          "type": "string",
          "default_value": "",
          "desc": "A publicly visible description of the course.",
          "example": ""
        },
        {
          "name": "course.allow_student_wiki_edits",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, students will be able to modify the course wiki.",
          "example": ""
        },
        {
          "name": "course.allow_wiki_comments",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, course members will be able to comment on wiki pages.",
          "example": ""
        },
        {
          "name": "course.allow_student_forum_attachments",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, students can attach files to forum posts.",
          "example": ""
        },
        {
          "name": "course.open_enrollment",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if the course is open enrollment.",
          "example": ""
        },
        {
          "name": "course.self_enrollment",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if the course is self enrollment.",
          "example": ""
        },
        {
          "name": "course.restrict_enrollments_to_course_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to restrict user enrollments to the start and end dates of the\ncourse.",
          "example": ""
        },
        {
          "name": "course.term_id",
          "type": "integer",
          "default_value": "",
          "desc": "The unique ID of the term to create to course in.",
          "example": ""
        },
        {
          "name": "course.sis_course_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique SIS identifier.",
          "example": ""
        },
        {
          "name": "course.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique Integration identifier.",
          "example": ""
        },
        {
          "name": "course.hide_final_grades",
          "type": "boolean",
          "default_value": "",
          "desc": "If this option is set to true, the totals in student grades summary will\nbe hidden.",
          "example": ""
        },
        {
          "name": "course.apply_assignment_group_weights",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to weight final grade based on assignment groups percentages.",
          "example": ""
        },
        {
          "name": "course.time_zone",
          "type": "string",
          "default_value": "",
          "desc": "The time zone for the course. Allowed time zones are\n{http://www.iana.org/time-zones IANA time zones} or friendlier\n{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.",
          "example": ""
        },
        {
          "name": "offer",
          "type": "boolean",
          "default_value": "",
          "desc": "If this option is set to true, the course will be available to students\nimmediately.",
          "example": ""
        },
        {
          "name": "enroll_me",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to enroll the current user as the teacher.",
          "example": ""
        },
        {
          "name": "course.default_view",
          "type": "string",
          "default_value": "",
          "desc": "The type of page that users will see when they first visit the course\n* 'feed' Recent Activity Dashboard\n* 'modules' Course Modules/Sections Page\n* 'assignments' Course Assignments List\n* 'syllabus' Course Syllabus Page\nother types may be added in the future",
          "example": [
            "feed",
            "wiki",
            "modules",
            "syllabus",
            "assignments"
          ]
        },
        {
          "name": "course.syllabus_body",
          "type": "string",
          "default_value": "",
          "desc": "The syllabus body for the course",
          "example": ""
        },
        {
          "name": "course.grading_standard_id",
          "type": "integer",
          "default_value": "",
          "desc": "The grading standard id to set for the course.  If no value is provided for this argument the current grading_standard will be un-set from this course.",
          "example": ""
        },
        {
          "name": "course.grade_passback_setting",
          "type": "string",
          "default_value": "",
          "desc": "Optional. The grade_passback_setting for the course. Only 'nightly_sync', 'disabled', and '' are allowed",
          "example": ""
        },
        {
          "name": "course.course_format",
          "type": "string",
          "default_value": "",
          "desc": "Optional. Specifies the format of the course. (Should be 'on_campus', 'online', or 'blended')",
          "example": ""
        },
        {
          "name": "enable_sis_reactivation",
          "type": "boolean",
          "default_value": "",
          "desc": "When true, will first try to re-activate a deleted course with matching sis_course_id if possible.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Upload a file",
      "controller": "courses",
      "description": "Upload a file to the course.\n\nThis API endpoint is the first step in uploading a file to a course.\nSee the {file:file_uploads.html File Upload Documentation} for details on\nthe file upload workflow.\n\nOnly those with the \"Manage Files\" permission on a course can upload files\nto the course. By default, this is Teachers, TAs and Designers.",
      "name": "upload_file",
      "endpoint": "POST /v1/courses/:course_id/files",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List students",
      "controller": "courses",
      "description": "Returns the paginated list of students enrolled in this course.\n\nDEPRECATED: Please use the {api:CoursesController#users course users} endpoint\nand pass \"student\" as the enrollment_type.",
      "name": "list_students",
      "endpoint": "GET /v1/courses/:course_id/students",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List users in course",
      "controller": "courses",
      "description": "Returns the paginated list of users in this course. And optionally the user's enrollments in the course.",
      "name": "list_users_in_course_users",
      "endpoint": "GET /v1/courses/:course_id/users",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name or full ID of the users to match and return in the results list.",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "When set, sort the results of the search based on the given field.",
          "example": [
            "username",
            "last_login",
            "email",
            "sis_id"
          ]
        },
        {
          "name": "enrollment_type[]",
          "type": "array",
          "default_value": "",
          "desc": "When set, only return users where the user is enrolled as this type.\n\"student_view\" implies include[]=test_student.\nThis argument is ignored if enrollment_role is given.",
          "example": [
            "teacher",
            "student",
            "student_view",
            "ta",
            "observer",
            "designer"
          ]
        },
        {
          "name": "enrollment_role",
          "type": "string",
          "default_value": "",
          "desc": "Deprecated\nWhen set, only return users enrolled with the specified course-level role.  This can be\na role created with the {api:RoleOverridesController#add_role Add Role API} or a\nbase role type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',\n'ObserverEnrollment', or 'DesignerEnrollment'.",
          "example": ""
        },
        {
          "name": "enrollment_role_id",
          "type": "integer",
          "default_value": "",
          "desc": "When set, only return courses where the user is enrolled with the specified\ncourse-level role.  This can be a role created with the\n{api:RoleOverridesController#add_role Add Role API} or a built_in role id with type\n'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',\nor 'DesignerEnrollment'.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"enrollments\":\nOptionally include with each Course the user's current and invited\nenrollments. If the user is enrolled as a student, and the account has\npermission to manage or view all grades, each enrollment will include a\n'grades' key with 'current_score', 'final_score', 'current_grade' and\n'final_grade' values.\n- \"locked\": Optionally include whether an enrollment is locked.\n- \"avatar_url\": Optionally include avatar_url.\n- \"bio\": Optionally include each user's bio.\n- \"test_student\": Optionally include the course's Test Student,\nif present. Default is to not include Test Student.\n- \"custom_links\": Optionally include plugin-supplied custom links for each student,\nsuch as analytics information\n- \"current_grading_period_scores\": if enrollments is included as\nwell as this directive, the scores returned in the enrollment\nwill be for the current grading period if there is one. A\n'grading_period_id' value will also be included with the\nscores. if grading_period_id is nil there is no current grading\nperiod and the score is a total score.\n- \"uuid\": Optionally include the users uuid",
          "example": [
            "enrollments",
            "locked",
            "avatar_url",
            "test_student",
            "bio",
            "custom_links",
            "current_grading_period_scores",
            "uuid"
          ]
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "If this parameter is given and it corresponds to a user in the course,\nthe +page+ parameter will be ignored and the page containing the specified user\nwill be returned instead.",
          "example": ""
        },
        {
          "name": "user_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If included, the course users set will only include users with IDs\nspecified by the param. Note: this will not work in conjunction\nwith the \"user_id\" argument but multiple user_ids can be included.",
          "example": ""
        },
        {
          "name": "enrollment_state[]",
          "type": "array",
          "default_value": "",
          "desc": "When set, only return users where the enrollment workflow state is of one of the given types.\n\"active\" and \"invited\" enrollments are returned by default.",
          "example": [
            "active",
            "invited",
            "rejected",
            "completed",
            "inactive"
          ]
        }
      ]
    },
    {
      "display_name": "List users in course",
      "controller": "courses",
      "description": "Returns the paginated list of users in this course. And optionally the user's enrollments in the course.",
      "name": "list_users_in_course_search_users",
      "endpoint": "GET /v1/courses/:course_id/search_users",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name or full ID of the users to match and return in the results list.",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "When set, sort the results of the search based on the given field.",
          "example": [
            "username",
            "last_login",
            "email",
            "sis_id"
          ]
        },
        {
          "name": "enrollment_type[]",
          "type": "array",
          "default_value": "",
          "desc": "When set, only return users where the user is enrolled as this type.\n\"student_view\" implies include[]=test_student.\nThis argument is ignored if enrollment_role is given.",
          "example": [
            "teacher",
            "student",
            "student_view",
            "ta",
            "observer",
            "designer"
          ]
        },
        {
          "name": "enrollment_role",
          "type": "string",
          "default_value": "",
          "desc": "Deprecated\nWhen set, only return users enrolled with the specified course-level role.  This can be\na role created with the {api:RoleOverridesController#add_role Add Role API} or a\nbase role type of 'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment',\n'ObserverEnrollment', or 'DesignerEnrollment'.",
          "example": ""
        },
        {
          "name": "enrollment_role_id",
          "type": "integer",
          "default_value": "",
          "desc": "When set, only return courses where the user is enrolled with the specified\ncourse-level role.  This can be a role created with the\n{api:RoleOverridesController#add_role Add Role API} or a built_in role id with type\n'StudentEnrollment', 'TeacherEnrollment', 'TaEnrollment', 'ObserverEnrollment',\nor 'DesignerEnrollment'.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"enrollments\":\nOptionally include with each Course the user's current and invited\nenrollments. If the user is enrolled as a student, and the account has\npermission to manage or view all grades, each enrollment will include a\n'grades' key with 'current_score', 'final_score', 'current_grade' and\n'final_grade' values.\n- \"locked\": Optionally include whether an enrollment is locked.\n- \"avatar_url\": Optionally include avatar_url.\n- \"bio\": Optionally include each user's bio.\n- \"test_student\": Optionally include the course's Test Student,\nif present. Default is to not include Test Student.\n- \"custom_links\": Optionally include plugin-supplied custom links for each student,\nsuch as analytics information\n- \"current_grading_period_scores\": if enrollments is included as\nwell as this directive, the scores returned in the enrollment\nwill be for the current grading period if there is one. A\n'grading_period_id' value will also be included with the\nscores. if grading_period_id is nil there is no current grading\nperiod and the score is a total score.\n- \"uuid\": Optionally include the users uuid",
          "example": [
            "enrollments",
            "locked",
            "avatar_url",
            "test_student",
            "bio",
            "custom_links",
            "current_grading_period_scores",
            "uuid"
          ]
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "If this parameter is given and it corresponds to a user in the course,\nthe +page+ parameter will be ignored and the page containing the specified user\nwill be returned instead.",
          "example": ""
        },
        {
          "name": "user_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If included, the course users set will only include users with IDs\nspecified by the param. Note: this will not work in conjunction\nwith the \"user_id\" argument but multiple user_ids can be included.",
          "example": ""
        },
        {
          "name": "enrollment_state[]",
          "type": "array",
          "default_value": "",
          "desc": "When set, only return users where the enrollment workflow state is of one of the given types.\n\"active\" and \"invited\" enrollments are returned by default.",
          "example": [
            "active",
            "invited",
            "rejected",
            "completed",
            "inactive"
          ]
        }
      ]
    },
    {
      "display_name": "List recently logged in students",
      "controller": "courses",
      "description": "Returns the paginated list of users in this course, ordered by how recently they have\nlogged in. The records include the 'last_login' field which contains\na timestamp of the last time that user logged into canvas.  The querying\nuser must have the 'View usage reports' permission.",
      "name": "list_recently_logged_in_students",
      "endpoint": "GET /v1/courses/:course_id/recent_students",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get single user",
      "controller": "courses",
      "description": "Return information on a single user.\n\nAccepts the same include[] parameters as the :users: action, and returns a\nsingle user with the same fields as that action.",
      "name": "get_single_user",
      "endpoint": "GET /v1/courses/:course_id/users/:id",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Search for content share users",
      "controller": "courses",
      "description": "Returns a paginated list of users you can share content with.  Requires the content share\nfeature and the user must have the manage content permission for the course.",
      "name": "search_for_content_share_users",
      "endpoint": "GET /v1/courses/:course_id/content_share_users",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "Term used to find users.  Will search available share users with the search term in their name.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Preview processed html",
      "controller": "courses",
      "description": "Preview html content processed for this course",
      "name": "preview_processed_html",
      "endpoint": "POST /v1/courses/:course_id/preview_html",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "html",
          "type": "string",
          "default_value": "",
          "desc": "The html content to process",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Course activity stream",
      "controller": "courses",
      "description": "Returns the current user's course-specific activity stream, paginated.\n\nFor full documentation, see the API documentation for the user activity\nstream, in the user api.",
      "name": "course_activity_stream",
      "endpoint": "GET /v1/courses/:course_id/activity_stream",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Course activity stream summary",
      "controller": "courses",
      "description": "Returns a summary of the current user's course-specific activity stream.\n\nFor full documentation, see the API documentation for the user activity\nstream summary, in the user api.",
      "name": "course_activity_stream_summary",
      "endpoint": "GET /v1/courses/:course_id/activity_stream/summary",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Course TODO items",
      "controller": "courses",
      "description": "Returns the current user's course-specific todo items.\n\nFor full documentation, see the API documentation for the user todo items, in the user api.",
      "name": "course_todo_items",
      "endpoint": "GET /v1/courses/:course_id/todo",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete/Conclude a course",
      "controller": "courses",
      "description": "Delete or conclude an existing course",
      "name": "delete_conclude_course",
      "endpoint": "DELETE /v1/courses/:id",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "event",
          "type": "string",
          "default_value": "",
          "desc": "The action to take on the course.",
          "example": [
            "delete",
            "conclude"
          ]
        }
      ]
    },
    {
      "display_name": "Get course settings",
      "controller": "courses",
      "description": "Returns some of a course's settings.",
      "name": "get_course_settings",
      "endpoint": "GET /v1/courses/:course_id/settings",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update course settings",
      "controller": "courses",
      "description": "Can update the following course settings:",
      "name": "update_course_settings",
      "endpoint": "PUT /v1/courses/:course_id/settings",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "allow_student_discussion_topics",
          "type": "boolean",
          "default_value": "",
          "desc": "Let students create discussion topics",
          "example": ""
        },
        {
          "name": "allow_student_forum_attachments",
          "type": "boolean",
          "default_value": "",
          "desc": "Let students attach files to discussions",
          "example": ""
        },
        {
          "name": "allow_student_discussion_editing",
          "type": "boolean",
          "default_value": "",
          "desc": "Let students edit or delete their own discussion posts",
          "example": ""
        },
        {
          "name": "allow_student_organized_groups",
          "type": "boolean",
          "default_value": "",
          "desc": "Let students organize their own groups",
          "example": ""
        },
        {
          "name": "filter_speed_grader_by_student_group",
          "type": "boolean",
          "default_value": "",
          "desc": "Filter SpeedGrader to only the selected student group",
          "example": ""
        },
        {
          "name": "hide_final_grades",
          "type": "boolean",
          "default_value": "",
          "desc": "Hide totals in student grades summary",
          "example": ""
        },
        {
          "name": "hide_distribution_graphs",
          "type": "boolean",
          "default_value": "",
          "desc": "Hide grade distribution graphs from students",
          "example": ""
        },
        {
          "name": "hide_sections_on_course_users_page",
          "type": "boolean",
          "default_value": "",
          "desc": "Disallow students from viewing students in sections they do not belong to",
          "example": ""
        },
        {
          "name": "lock_all_announcements",
          "type": "boolean",
          "default_value": "",
          "desc": "Disable comments on announcements",
          "example": ""
        },
        {
          "name": "usage_rights_required",
          "type": "boolean",
          "default_value": "",
          "desc": "Copyright and license information must be provided for files before they are published.",
          "example": ""
        },
        {
          "name": "restrict_student_past_view",
          "type": "boolean",
          "default_value": "",
          "desc": "Restrict students from viewing courses after end date",
          "example": ""
        },
        {
          "name": "restrict_student_future_view",
          "type": "boolean",
          "default_value": "",
          "desc": "Restrict students from viewing courses before start date",
          "example": ""
        },
        {
          "name": "show_announcements_on_home_page",
          "type": "boolean",
          "default_value": "",
          "desc": "Show the most recent announcements on the Course home page (if a Wiki, defaults to five announcements, configurable via home_page_announcement_limit)",
          "example": ""
        },
        {
          "name": "home_page_announcement_limit",
          "type": "integer",
          "default_value": "",
          "desc": "Limit the number of announcements on the home page if enabled via show_announcements_on_home_page",
          "example": ""
        },
        {
          "name": "syllabus_course_summary",
          "type": "boolean",
          "default_value": "",
          "desc": "Show the course summary (list of assignments and calendar events) on the syllabus page. Default is true.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Return test student for course",
      "controller": "courses",
      "description": "Returns information for a test student in this course. Creates a test\nstudent if one does not already exist for the course. The caller must have\npermission to access the course's student view.",
      "name": "return_test_student_for_course",
      "endpoint": "GET /v1/courses/:course_id/student_view_student",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single course",
      "controller": "courses",
      "description": "Return information on a single course.\n\nAccepts the same include[] parameters as the list action plus:",
      "name": "get_single_course_courses",
      "endpoint": "GET /v1/courses/:id",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"all_courses\": Also search recently deleted courses.\n- \"permissions\": Include permissions the current user has\n  for the course.\n- \"observed_users\": include observed users in the enrollments\n- \"course_image\": Optional course image data for when there is a course image\n  and the course image feature flag has been enabled\n- \"concluded\": Optional information to include with each Course. Indicates whether\n  the course has been concluded, taking course and term dates into account.",
          "example": [
            "needs_grading_count",
            "syllabus_body",
            "public_description",
            "total_scores",
            "current_grading_period_scores",
            "term",
            "account",
            "course_progress",
            "sections",
            "storage_quota_used_mb",
            "total_students",
            "passback_status",
            "favorites",
            "teachers",
            "observed_users",
            "all_courses",
            "permissions",
            "observed_users",
            "course_image",
            "concluded"
          ]
        },
        {
          "name": "teacher_limit",
          "type": "integer",
          "default_value": "",
          "desc": "The maximum number of teacher enrollments to show.\nIf the course contains more teachers than this, instead of giving the teacher\nenrollments, the count of teachers will be given under a _teacher_count_ key.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single course",
      "controller": "courses",
      "description": "Return information on a single course.\n\nAccepts the same include[] parameters as the list action plus:",
      "name": "get_single_course_accounts",
      "endpoint": "GET /v1/accounts/:account_id/courses/:id",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"all_courses\": Also search recently deleted courses.\n- \"permissions\": Include permissions the current user has\n  for the course.\n- \"observed_users\": include observed users in the enrollments\n- \"course_image\": Optional course image data for when there is a course image\n  and the course image feature flag has been enabled\n- \"concluded\": Optional information to include with each Course. Indicates whether\n  the course has been concluded, taking course and term dates into account.",
          "example": [
            "needs_grading_count",
            "syllabus_body",
            "public_description",
            "total_scores",
            "current_grading_period_scores",
            "term",
            "account",
            "course_progress",
            "sections",
            "storage_quota_used_mb",
            "total_students",
            "passback_status",
            "favorites",
            "teachers",
            "observed_users",
            "all_courses",
            "permissions",
            "observed_users",
            "course_image",
            "concluded"
          ]
        },
        {
          "name": "teacher_limit",
          "type": "integer",
          "default_value": "",
          "desc": "The maximum number of teacher enrollments to show.\nIf the course contains more teachers than this, instead of giving the teacher\nenrollments, the count of teachers will be given under a _teacher_count_ key.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a course",
      "controller": "courses",
      "description": "Update an existing course.\n\nArguments are the same as Courses#create, with a few exceptions (enroll_me).\n\nIf a user has content management rights, but not full course editing rights, the only attribute\neditable through this endpoint will be \"syllabus_body\"",
      "name": "update_course",
      "endpoint": "PUT /v1/courses/:id",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "course.account_id",
          "type": "integer",
          "default_value": "",
          "desc": "The unique ID of the account to move the course to.",
          "example": ""
        },
        {
          "name": "course.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the course. If omitted, the course will be named \"Unnamed\nCourse.\"",
          "example": ""
        },
        {
          "name": "course.course_code",
          "type": "string",
          "default_value": "",
          "desc": "The course code for the course.",
          "example": ""
        },
        {
          "name": "course.start_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "Course start date in ISO8601 format, e.g. 2011-01-01T01:00Z",
          "example": ""
        },
        {
          "name": "course.end_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "Course end date in ISO8601 format. e.g. 2011-01-01T01:00Z",
          "example": ""
        },
        {
          "name": "course.license",
          "type": "string",
          "default_value": "",
          "desc": "The name of the licensing. Should be one of the following abbreviations\n(a descriptive name is included in parenthesis for reference):\n- 'private' (Private Copyrighted)\n- 'cc_by_nc_nd' (CC Attribution Non-Commercial No Derivatives)\n- 'cc_by_nc_sa' (CC Attribution Non-Commercial Share Alike)\n- 'cc_by_nc' (CC Attribution Non-Commercial)\n- 'cc_by_nd' (CC Attribution No Derivatives)\n- 'cc_by_sa' (CC Attribution Share Alike)\n- 'cc_by' (CC Attribution)\n- 'public_domain' (Public Domain).",
          "example": ""
        },
        {
          "name": "course.is_public",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if course is public to both authenticated and unauthenticated users.",
          "example": ""
        },
        {
          "name": "course.is_public_to_auth_users",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if course is public only to authenticated users.",
          "example": ""
        },
        {
          "name": "course.public_syllabus",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to make the course syllabus public.",
          "example": ""
        },
        {
          "name": "course.public_syllabus_to_auth",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to make the course syllabus to public for authenticated users.",
          "example": ""
        },
        {
          "name": "course.public_description",
          "type": "string",
          "default_value": "",
          "desc": "A publicly visible description of the course.",
          "example": ""
        },
        {
          "name": "course.allow_student_wiki_edits",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, students will be able to modify the course wiki.",
          "example": ""
        },
        {
          "name": "course.allow_wiki_comments",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, course members will be able to comment on wiki pages.",
          "example": ""
        },
        {
          "name": "course.allow_student_forum_attachments",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, students can attach files to forum posts.",
          "example": ""
        },
        {
          "name": "course.open_enrollment",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if the course is open enrollment.",
          "example": ""
        },
        {
          "name": "course.self_enrollment",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true if the course is self enrollment.",
          "example": ""
        },
        {
          "name": "course.restrict_enrollments_to_course_dates",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to restrict user enrollments to the start and end dates of the\ncourse.",
          "example": ""
        },
        {
          "name": "course.term_id",
          "type": "integer",
          "default_value": "",
          "desc": "The unique ID of the term to create to course in.",
          "example": ""
        },
        {
          "name": "course.sis_course_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique SIS identifier.",
          "example": ""
        },
        {
          "name": "course.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique Integration identifier.",
          "example": ""
        },
        {
          "name": "course.hide_final_grades",
          "type": "boolean",
          "default_value": "",
          "desc": "If this option is set to true, the totals in student grades summary will\nbe hidden.",
          "example": ""
        },
        {
          "name": "course.time_zone",
          "type": "string",
          "default_value": "",
          "desc": "The time zone for the course. Allowed time zones are\n{http://www.iana.org/time-zones IANA time zones} or friendlier\n{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.",
          "example": ""
        },
        {
          "name": "course.apply_assignment_group_weights",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to true to weight final grade based on assignment groups percentages.",
          "example": ""
        },
        {
          "name": "course.storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "Set the storage quota for the course, in megabytes. The caller must have\nthe \"Manage storage quotas\" account permission.",
          "example": ""
        },
        {
          "name": "offer",
          "type": "boolean",
          "default_value": "",
          "desc": "If this option is set to true, the course will be available to students\nimmediately.",
          "example": ""
        },
        {
          "name": "course.event",
          "type": "string",
          "default_value": "",
          "desc": "The action to take on each course.\n* 'claim' makes a course no longer visible to students. This action is also called \"unpublish\" on the web site.\n  A course cannot be unpublished if students have received graded submissions.\n* 'offer' makes a course visible to students. This action is also called \"publish\" on the web site.\n* 'conclude' prevents future enrollments and makes a course read-only for all participants. The course still appears\n  in prior-enrollment lists.\n* 'delete' completely removes the course from the web site (including course menus and prior-enrollment lists).\n  All enrollments are deleted. Course content may be physically deleted at a future date.\n* 'undelete' attempts to recover a course that has been deleted. This action requires account administrative rights.\n  (Recovery is not guaranteed; please conclude rather than delete a course if there is any possibility the course\n  will be used again.) The recovered course will be unpublished. Deleted enrollments will not be recovered.",
          "example": [
            "claim",
            "offer",
            "conclude",
            "delete",
            "undelete"
          ]
        },
        {
          "name": "course.default_view",
          "type": "string",
          "default_value": "",
          "desc": "The type of page that users will see when they first visit the course\n* 'feed' Recent Activity Dashboard\n* 'wiki' Wiki Front Page\n* 'modules' Course Modules/Sections Page\n* 'assignments' Course Assignments List\n* 'syllabus' Course Syllabus Page\nother types may be added in the future",
          "example": [
            "feed",
            "wiki",
            "modules",
            "syllabus",
            "assignments"
          ]
        },
        {
          "name": "course.syllabus_body",
          "type": "string",
          "default_value": "",
          "desc": "The syllabus body for the course",
          "example": ""
        },
        {
          "name": "course.syllabus_course_summary",
          "type": "boolean",
          "default_value": "",
          "desc": "Optional. Indicates whether the Course Summary (consisting of the course's assignments and calendar events) is displayed on the syllabus page. Defaults to +true+.",
          "example": ""
        },
        {
          "name": "course.grading_standard_id",
          "type": "integer",
          "default_value": "",
          "desc": "The grading standard id to set for the course.  If no value is provided for this argument the current grading_standard will be un-set from this course.",
          "example": ""
        },
        {
          "name": "course.grade_passback_setting",
          "type": "string",
          "default_value": "",
          "desc": "Optional. The grade_passback_setting for the course. Only 'nightly_sync' and '' are allowed",
          "example": ""
        },
        {
          "name": "course.course_format",
          "type": "string",
          "default_value": "",
          "desc": "Optional. Specifies the format of the course. (Should be either 'on_campus' or 'online')",
          "example": ""
        },
        {
          "name": "course.image_id",
          "type": "integer",
          "default_value": "",
          "desc": "This is a file ID corresponding to an image file in the course that will\nbe used as the course image.\nThis will clear the course's image_url setting if set.  If you attempt\nto provide image_url and image_id in a request it will fail.",
          "example": ""
        },
        {
          "name": "course.image_url",
          "type": "string",
          "default_value": "",
          "desc": "This is a URL to an image to be used as the course image.\nThis will clear the course's image_id setting if set.  If you attempt\nto provide image_url and image_id in a request it will fail.",
          "example": ""
        },
        {
          "name": "course.remove_image",
          "type": "boolean",
          "default_value": "",
          "desc": "If this option is set to true, the course image url and course image\nID are both set to nil",
          "example": ""
        },
        {
          "name": "course.blueprint",
          "type": "boolean",
          "default_value": "",
          "desc": "Sets the course as a blueprint course.",
          "example": ""
        },
        {
          "name": "course.blueprint_restrictions",
          "type": "BlueprintRestriction",
          "default_value": "",
          "desc": "Sets a default set to apply to blueprint course objects when restricted,\nunless _use_blueprint_restrictions_by_object_type_ is enabled.\nSee the {api:Blueprint_Courses:BlueprintRestriction Blueprint Restriction} documentation",
          "example": ""
        },
        {
          "name": "course.use_blueprint_restrictions_by_object_type",
          "type": "boolean",
          "default_value": "",
          "desc": "When enabled, the _blueprint_restrictions_ parameter will be ignored in favor of\nthe _blueprint_restrictions_by_object_type_ parameter",
          "example": ""
        },
        {
          "name": "course.blueprint_restrictions_by_object_type",
          "type": "multiple BlueprintRestrictions",
          "default_value": "",
          "desc": "Allows setting multiple {api:Blueprint_Courses:BlueprintRestriction Blueprint Restriction}\nto apply to blueprint course objects of the matching type when restricted.\nThe possible object types are \"assignment\", \"attachment\", \"discussion_topic\", \"quiz\" and \"wiki_page\".\nExample usage:\n  course[blueprint_restrictions_by_object_type][assignment][content]=1",
          "example": ""
        },
        {
          "name": "course.homeroom_course",
          "type": "boolean",
          "default_value": "",
          "desc": "Sets the course as a homeroom course. The setting takes effect only when the Canvas for Elementary feature\nis enabled in the course's account.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update courses",
      "controller": "courses",
      "description": "Update multiple courses in an account.  Operates asynchronously; use the {api:ProgressController#show progress endpoint}\nto query the status of an operation.\n\nThe action to take on each course.  Must be one of 'offer', 'conclude', 'delete', or 'undelete'.\n  * 'offer' makes a course visible to students. This action is also called \"publish\" on the web site.\n  * 'conclude' prevents future enrollments and makes a course read-only for all participants. The course still appears\n    in prior-enrollment lists.\n  * 'delete' completely removes the course from the web site (including course menus and prior-enrollment lists).\n    All enrollments are deleted. Course content may be physically deleted at a future date.\n  * 'undelete' attempts to recover a course that has been deleted. (Recovery is not guaranteed; please conclude\n    rather than delete a course if there is any possibility the course will be used again.) The recovered course\n    will be unpublished. Deleted enrollments will not be recovered.",
      "name": "update_courses",
      "endpoint": "PUT /v1/accounts/:account_id/courses",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "course_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of courses to update. At most 500 courses may be updated in one call.",
          "example": ""
        },
        {
          "name": "event",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "offer",
            "conclude",
            "delete",
            "undelete"
          ]
        }
      ]
    },
    {
      "display_name": "Reset a course",
      "controller": "courses",
      "description": "Deletes the current course, and creates a new equivalent course with\nno content, but all sections and users moved over.",
      "name": "reset_course",
      "endpoint": "POST /v1/courses/:course_id/reset_content",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get effective due dates",
      "controller": "courses",
      "description": "For each assignment in the course, returns each assigned student's ID\nand their corresponding due date along with some grading period data.\nReturns a collection with keys representing assignment IDs and values as a\ncollection containing keys representing student IDs and values representing\nthe student's effective due_at, the grading_period_id of which the due_at falls\nin, and whether or not the grading period is closed (in_closed_grading_period)\n\nThe list of assignment IDs for which effective student due dates are\nrequested. If not provided, all assignments in the course will be used.",
      "name": "get_effective_due_dates",
      "endpoint": "GET /v1/courses/:course_id/effective_due_dates",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "no description",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Permissions",
      "controller": "courses",
      "description": "Returns permission information for the calling user in the given course.\nSee also the {api:AccountsController#permissions Account} and\n{api:GroupsController#permissions Group} counterparts.",
      "name": "permissions",
      "endpoint": "GET /v1/courses/:course_id/permissions",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "permissions[]",
          "type": "array",
          "default_value": "",
          "desc": "List of permissions to check against the authenticated user.\nPermission names are documented in the {api:RoleOverridesController#add_role Create a role} endpoint.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get course copy status",
      "controller": "courses",
      "description": "DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API}\n\nRetrieve the status of a course copy",
      "name": "get_course_copy_status",
      "endpoint": "GET /v1/courses/:course_id/course_copy/:id",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Copy course content",
      "controller": "courses",
      "description": "DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API}\n\nCopies content from one course into another. The default is to copy all course\ncontent. You can control specific types to copy by using either the 'except' option\nor the 'only' option.\n\nThe response is the same as the course copy status endpoint",
      "name": "copy_course_content",
      "endpoint": "POST /v1/courses/:course_id/course_copy",
      "reference": "https://canvas.instructure.com/doc/api/courses.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "source_course",
          "type": "string",
          "default_value": "",
          "desc": "ID or SIS-ID of the course to copy the content from",
          "example": ""
        },
        {
          "name": "except[]",
          "type": "array",
          "default_value": "",
          "desc": "A list of the course content types to exclude, all areas not listed will\nbe copied.",
          "example": [
            "course_settings",
            "assignments",
            "external_tools",
            "files",
            "topics",
            "calendar_events",
            "quizzes",
            "wiki_pages",
            "modules",
            "outcomes"
          ]
        },
        {
          "name": "only[]",
          "type": "array",
          "default_value": "",
          "desc": "A list of the course content types to copy, all areas not listed will not\nbe copied.",
          "example": [
            "course_settings",
            "assignments",
            "external_tools",
            "files",
            "topics",
            "calendar_events",
            "quizzes",
            "wiki_pages",
            "modules",
            "outcomes"
          ]
        }
      ]
    }
  ],
  "discussion_topics": [
    {
      "display_name": "List discussion topics",
      "controller": "discussion_topics",
      "description": "Returns the paginated list of discussion topics for this course or group.",
      "name": "list_discussion_topics_courses",
      "endpoint": "GET /v1/courses/:course_id/discussion_topics",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "If \"all_dates\" is passed, all dates associated with graded discussions'\nassignments will be included.\nif \"sections\" is passed, includes the course sections that are associated\nwith the topic, if the topic is specific to certain sections of the course.\nIf \"sections_user_count\" is passed, then:\n  (a) If sections were asked for *and* the topic is specific to certain\n      course sections, includes the number of users in each\n      section. (as part of the section json asked for above)\n  (b) Else, includes at the root level the total number of users in the\n      topic's context (group or course) that the topic applies to.\nIf \"overrides\" is passed, the overrides for the assignment will be included",
          "example": [
            "all_dates",
            "sections",
            "sections_user_count",
            "overrides"
          ]
        },
        {
          "name": "order_by",
          "type": "string",
          "default_value": "",
          "desc": "Determines the order of the discussion topic list. Defaults to \"position\".",
          "example": [
            "position",
            "recent_activity",
            "title"
          ]
        },
        {
          "name": "scope",
          "type": "string",
          "default_value": "",
          "desc": "Only return discussion topics in the given state(s). Defaults to including\nall topics. Filtering is done after pagination, so pages\nmay be smaller than requested if topics are filtered.\nCan pass multiple states as comma separated string.",
          "example": [
            "locked",
            "unlocked",
            "pinned",
            "unpinned"
          ]
        },
        {
          "name": "only_announcements",
          "type": "boolean",
          "default_value": "",
          "desc": "Return announcements instead of discussion topics. Defaults to false",
          "example": ""
        },
        {
          "name": "filter_by",
          "type": "string",
          "default_value": "",
          "desc": "The state of the discussion topic to return. Currently only supports unread state.",
          "example": [
            "all",
            "unread"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the discussion topics to match and return.",
          "example": ""
        },
        {
          "name": "exclude_context_module_locked_topics",
          "type": "boolean",
          "default_value": "",
          "desc": "For students, exclude topics that are locked by module progression.\nDefaults to false.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List discussion topics",
      "controller": "discussion_topics",
      "description": "Returns the paginated list of discussion topics for this course or group.",
      "name": "list_discussion_topics_groups",
      "endpoint": "GET /v1/groups/:group_id/discussion_topics",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "If \"all_dates\" is passed, all dates associated with graded discussions'\nassignments will be included.\nif \"sections\" is passed, includes the course sections that are associated\nwith the topic, if the topic is specific to certain sections of the course.\nIf \"sections_user_count\" is passed, then:\n  (a) If sections were asked for *and* the topic is specific to certain\n      course sections, includes the number of users in each\n      section. (as part of the section json asked for above)\n  (b) Else, includes at the root level the total number of users in the\n      topic's context (group or course) that the topic applies to.\nIf \"overrides\" is passed, the overrides for the assignment will be included",
          "example": [
            "all_dates",
            "sections",
            "sections_user_count",
            "overrides"
          ]
        },
        {
          "name": "order_by",
          "type": "string",
          "default_value": "",
          "desc": "Determines the order of the discussion topic list. Defaults to \"position\".",
          "example": [
            "position",
            "recent_activity",
            "title"
          ]
        },
        {
          "name": "scope",
          "type": "string",
          "default_value": "",
          "desc": "Only return discussion topics in the given state(s). Defaults to including\nall topics. Filtering is done after pagination, so pages\nmay be smaller than requested if topics are filtered.\nCan pass multiple states as comma separated string.",
          "example": [
            "locked",
            "unlocked",
            "pinned",
            "unpinned"
          ]
        },
        {
          "name": "only_announcements",
          "type": "boolean",
          "default_value": "",
          "desc": "Return announcements instead of discussion topics. Defaults to false",
          "example": ""
        },
        {
          "name": "filter_by",
          "type": "string",
          "default_value": "",
          "desc": "The state of the discussion topic to return. Currently only supports unread state.",
          "example": [
            "all",
            "unread"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the discussion topics to match and return.",
          "example": ""
        },
        {
          "name": "exclude_context_module_locked_topics",
          "type": "boolean",
          "default_value": "",
          "desc": "For students, exclude topics that are locked by module progression.\nDefaults to false.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a new discussion topic",
      "controller": "discussion_topics",
      "description": "Create an new discussion topic for the course or group.",
      "name": "create_new_discussion_topic_courses",
      "endpoint": "POST /v1/courses/:course_id/discussion_topics",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "discussion_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of discussion. Defaults to side_comment if not value is given. Accepted values are 'side_comment', for discussions that only allow one level of nested comments, and 'threaded' for fully threaded discussions.",
          "example": [
            "side_comment",
            "threaded"
          ]
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this topic is published (true) or draft state (false). Only\nteachers and TAs have the ability to create draft state topics.",
          "example": ""
        },
        {
          "name": "delayed_post_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will not be published until that time.",
          "example": ""
        },
        {
          "name": "allow_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not users can rate entries in this topic.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will be scheduled to lock at the\nprovided timestamp. If the timestamp is in the past, the topic will be\nlocked.",
          "example": ""
        },
        {
          "name": "podcast_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the topic will have an associated podcast feed.",
          "example": ""
        },
        {
          "name": "podcast_has_student_posts",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the podcast will include posts from students as well. Implies\npodcast_enabled.",
          "example": ""
        },
        {
          "name": "require_initial_post",
          "type": "boolean",
          "default_value": "",
          "desc": "If true then a user may not respond to other replies until that user has\nmade an initial reply. Defaults to false.",
          "example": ""
        },
        {
          "name": "assignment",
          "type": "Assignment",
          "default_value": "",
          "desc": "To create an assignment discussion, pass the assignment parameters as a\nsub-object. See the {api:AssignmentsApiController#create Create an Assignment API}\nfor the available parameters. The name parameter will be ignored, as it's\ntaken from the discussion title. If you want to make a discussion that was\nan assignment NOT an assignment, pass set_assignment = false as part of\nthe assignment object",
          "example": ""
        },
        {
          "name": "is_announcement",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic is an announcement. It will appear in the\nannouncement's section rather than the discussions section. This requires\nannouncment-posting permissions.",
          "example": ""
        },
        {
          "name": "pinned",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic will be listed in the \"Pinned Discussion\" section",
          "example": ""
        },
        {
          "name": "position_after",
          "type": "string",
          "default_value": "",
          "desc": "By default, discussions are sorted chronologically by creation date, you\ncan pass the id of another topic to have this one show up after the other\nwhen they are listed.",
          "example": ""
        },
        {
          "name": "group_category_id",
          "type": "integer",
          "default_value": "",
          "desc": "If present, the topic will become a group discussion assigned\nto the group.",
          "example": ""
        },
        {
          "name": "only_graders_can_rate",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, only graders will be allowed to rate entries.",
          "example": ""
        },
        {
          "name": "sort_by_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, entries will be sorted by rating.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "File",
          "default_value": "",
          "desc": "A multipart/form-data form-field-style attachment.\nAttachments larger than 1 kilobyte are subject to quota restrictions.",
          "example": ""
        },
        {
          "name": "specific_sections",
          "type": "string",
          "default_value": "",
          "desc": "A comma-separated list of sections ids to which the discussion topic\nshould be made specific to.  If it is not desired to make the discussion\ntopic specific to sections, then this parameter may be omitted or set to\n\"all\".  Can only be present only on announcements and only those that are\nfor a course (as opposed to a group).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a new discussion topic",
      "controller": "discussion_topics",
      "description": "Create an new discussion topic for the course or group.",
      "name": "create_new_discussion_topic_groups",
      "endpoint": "POST /v1/groups/:group_id/discussion_topics",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "discussion_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of discussion. Defaults to side_comment if not value is given. Accepted values are 'side_comment', for discussions that only allow one level of nested comments, and 'threaded' for fully threaded discussions.",
          "example": [
            "side_comment",
            "threaded"
          ]
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this topic is published (true) or draft state (false). Only\nteachers and TAs have the ability to create draft state topics.",
          "example": ""
        },
        {
          "name": "delayed_post_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will not be published until that time.",
          "example": ""
        },
        {
          "name": "allow_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not users can rate entries in this topic.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will be scheduled to lock at the\nprovided timestamp. If the timestamp is in the past, the topic will be\nlocked.",
          "example": ""
        },
        {
          "name": "podcast_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the topic will have an associated podcast feed.",
          "example": ""
        },
        {
          "name": "podcast_has_student_posts",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the podcast will include posts from students as well. Implies\npodcast_enabled.",
          "example": ""
        },
        {
          "name": "require_initial_post",
          "type": "boolean",
          "default_value": "",
          "desc": "If true then a user may not respond to other replies until that user has\nmade an initial reply. Defaults to false.",
          "example": ""
        },
        {
          "name": "assignment",
          "type": "Assignment",
          "default_value": "",
          "desc": "To create an assignment discussion, pass the assignment parameters as a\nsub-object. See the {api:AssignmentsApiController#create Create an Assignment API}\nfor the available parameters. The name parameter will be ignored, as it's\ntaken from the discussion title. If you want to make a discussion that was\nan assignment NOT an assignment, pass set_assignment = false as part of\nthe assignment object",
          "example": ""
        },
        {
          "name": "is_announcement",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic is an announcement. It will appear in the\nannouncement's section rather than the discussions section. This requires\nannouncment-posting permissions.",
          "example": ""
        },
        {
          "name": "pinned",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic will be listed in the \"Pinned Discussion\" section",
          "example": ""
        },
        {
          "name": "position_after",
          "type": "string",
          "default_value": "",
          "desc": "By default, discussions are sorted chronologically by creation date, you\ncan pass the id of another topic to have this one show up after the other\nwhen they are listed.",
          "example": ""
        },
        {
          "name": "group_category_id",
          "type": "integer",
          "default_value": "",
          "desc": "If present, the topic will become a group discussion assigned\nto the group.",
          "example": ""
        },
        {
          "name": "only_graders_can_rate",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, only graders will be allowed to rate entries.",
          "example": ""
        },
        {
          "name": "sort_by_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, entries will be sorted by rating.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "File",
          "default_value": "",
          "desc": "A multipart/form-data form-field-style attachment.\nAttachments larger than 1 kilobyte are subject to quota restrictions.",
          "example": ""
        },
        {
          "name": "specific_sections",
          "type": "string",
          "default_value": "",
          "desc": "A comma-separated list of sections ids to which the discussion topic\nshould be made specific to.  If it is not desired to make the discussion\ntopic specific to sections, then this parameter may be omitted or set to\n\"all\".  Can only be present only on announcements and only those that are\nfor a course (as opposed to a group).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a topic",
      "controller": "discussion_topics",
      "description": "Update an existing discussion topic for the course or group.",
      "name": "update_topic_courses",
      "endpoint": "PUT /v1/courses/:course_id/discussion_topics/:topic_id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "discussion_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of discussion. Defaults to side_comment if not value is given. Accepted values are 'side_comment', for discussions that only allow one level of nested comments, and 'threaded' for fully threaded discussions.",
          "example": [
            "side_comment",
            "threaded"
          ]
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this topic is published (true) or draft state (false). Only\nteachers and TAs have the ability to create draft state topics.",
          "example": ""
        },
        {
          "name": "delayed_post_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will not be published until that time.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will be scheduled to lock at the\nprovided timestamp. If the timestamp is in the past, the topic will be\nlocked.",
          "example": ""
        },
        {
          "name": "podcast_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the topic will have an associated podcast feed.",
          "example": ""
        },
        {
          "name": "podcast_has_student_posts",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the podcast will include posts from students as well. Implies\npodcast_enabled.",
          "example": ""
        },
        {
          "name": "require_initial_post",
          "type": "boolean",
          "default_value": "",
          "desc": "If true then a user may not respond to other replies until that user has\nmade an initial reply. Defaults to false.",
          "example": ""
        },
        {
          "name": "assignment",
          "type": "Assignment",
          "default_value": "",
          "desc": "To create an assignment discussion, pass the assignment parameters as a\nsub-object. See the {api:AssignmentsApiController#create Create an Assignment API}\nfor the available parameters. The name parameter will be ignored, as it's\ntaken from the discussion title. If you want to make a discussion that was\nan assignment NOT an assignment, pass set_assignment = false as part of\nthe assignment object",
          "example": ""
        },
        {
          "name": "is_announcement",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic is an announcement. It will appear in the\nannouncement's section rather than the discussions section. This requires\nannouncment-posting permissions.",
          "example": ""
        },
        {
          "name": "pinned",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic will be listed in the \"Pinned Discussion\" section",
          "example": ""
        },
        {
          "name": "position_after",
          "type": "string",
          "default_value": "",
          "desc": "By default, discussions are sorted chronologically by creation date, you\ncan pass the id of another topic to have this one show up after the other\nwhen they are listed.",
          "example": ""
        },
        {
          "name": "group_category_id",
          "type": "integer",
          "default_value": "",
          "desc": "If present, the topic will become a group discussion assigned\nto the group.",
          "example": ""
        },
        {
          "name": "allow_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, users will be allowed to rate entries.",
          "example": ""
        },
        {
          "name": "only_graders_can_rate",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, only graders will be allowed to rate entries.",
          "example": ""
        },
        {
          "name": "sort_by_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, entries will be sorted by rating.",
          "example": ""
        },
        {
          "name": "specific_sections",
          "type": "string",
          "default_value": "",
          "desc": "A comma-separated list of sections ids to which the discussion topic\nshould be made specific too.  If it is not desired to make the discussion\ntopic specific to sections, then this parameter may be omitted or set to\n\"all\".  Can only be present only on announcements and only those that are\nfor a course (as opposed to a group).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a topic",
      "controller": "discussion_topics",
      "description": "Update an existing discussion topic for the course or group.",
      "name": "update_topic_groups",
      "endpoint": "PUT /v1/groups/:group_id/discussion_topics/:topic_id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "discussion_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of discussion. Defaults to side_comment if not value is given. Accepted values are 'side_comment', for discussions that only allow one level of nested comments, and 'threaded' for fully threaded discussions.",
          "example": [
            "side_comment",
            "threaded"
          ]
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether this topic is published (true) or draft state (false). Only\nteachers and TAs have the ability to create draft state topics.",
          "example": ""
        },
        {
          "name": "delayed_post_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will not be published until that time.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "If a timestamp is given, the topic will be scheduled to lock at the\nprovided timestamp. If the timestamp is in the past, the topic will be\nlocked.",
          "example": ""
        },
        {
          "name": "podcast_enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the topic will have an associated podcast feed.",
          "example": ""
        },
        {
          "name": "podcast_has_student_posts",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the podcast will include posts from students as well. Implies\npodcast_enabled.",
          "example": ""
        },
        {
          "name": "require_initial_post",
          "type": "boolean",
          "default_value": "",
          "desc": "If true then a user may not respond to other replies until that user has\nmade an initial reply. Defaults to false.",
          "example": ""
        },
        {
          "name": "assignment",
          "type": "Assignment",
          "default_value": "",
          "desc": "To create an assignment discussion, pass the assignment parameters as a\nsub-object. See the {api:AssignmentsApiController#create Create an Assignment API}\nfor the available parameters. The name parameter will be ignored, as it's\ntaken from the discussion title. If you want to make a discussion that was\nan assignment NOT an assignment, pass set_assignment = false as part of\nthe assignment object",
          "example": ""
        },
        {
          "name": "is_announcement",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic is an announcement. It will appear in the\nannouncement's section rather than the discussions section. This requires\nannouncment-posting permissions.",
          "example": ""
        },
        {
          "name": "pinned",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, this topic will be listed in the \"Pinned Discussion\" section",
          "example": ""
        },
        {
          "name": "position_after",
          "type": "string",
          "default_value": "",
          "desc": "By default, discussions are sorted chronologically by creation date, you\ncan pass the id of another topic to have this one show up after the other\nwhen they are listed.",
          "example": ""
        },
        {
          "name": "group_category_id",
          "type": "integer",
          "default_value": "",
          "desc": "If present, the topic will become a group discussion assigned\nto the group.",
          "example": ""
        },
        {
          "name": "allow_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, users will be allowed to rate entries.",
          "example": ""
        },
        {
          "name": "only_graders_can_rate",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, only graders will be allowed to rate entries.",
          "example": ""
        },
        {
          "name": "sort_by_rating",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, entries will be sorted by rating.",
          "example": ""
        },
        {
          "name": "specific_sections",
          "type": "string",
          "default_value": "",
          "desc": "A comma-separated list of sections ids to which the discussion topic\nshould be made specific too.  If it is not desired to make the discussion\ntopic specific to sections, then this parameter may be omitted or set to\n\"all\".  Can only be present only on announcements and only those that are\nfor a course (as opposed to a group).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a topic",
      "controller": "discussion_topics",
      "description": "Deletes the discussion topic. This will also delete the assignment, if it's\nan assignment discussion.",
      "name": "delete_topic_courses",
      "endpoint": "DELETE /v1/courses/:course_id/discussion_topics/:topic_id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a topic",
      "controller": "discussion_topics",
      "description": "Deletes the discussion topic. This will also delete the assignment, if it's\nan assignment discussion.",
      "name": "delete_topic_groups",
      "endpoint": "DELETE /v1/groups/:group_id/discussion_topics/:topic_id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Reorder pinned topics",
      "controller": "discussion_topics",
      "description": "Puts the pinned discussion topics in the specified order.\nAll pinned topics should be included.",
      "name": "reorder_pinned_topics_courses",
      "endpoint": "POST /v1/courses/:course_id/discussion_topics/reorder",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "order[]",
          "type": "array",
          "default_value": "",
          "desc": "The ids of the pinned discussion topics in the desired order.\n(For example, \"order=104,102,103\".)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Reorder pinned topics",
      "controller": "discussion_topics",
      "description": "Puts the pinned discussion topics in the specified order.\nAll pinned topics should be included.",
      "name": "reorder_pinned_topics_groups",
      "endpoint": "POST /v1/groups/:group_id/discussion_topics/reorder",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "order[]",
          "type": "array",
          "default_value": "",
          "desc": "The ids of the pinned discussion topics in the desired order.\n(For example, \"order=104,102,103\".)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an entry",
      "controller": "discussion_topics",
      "description": "Update an existing discussion entry.\n\nThe entry must have been created by the current user, or the current user\nmust have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.",
      "name": "update_entry_courses",
      "endpoint": "PUT /v1/courses/:course_id/discussion_topics/:topic_id/entries/:id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "The updated body of the entry.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an entry",
      "controller": "discussion_topics",
      "description": "Update an existing discussion entry.\n\nThe entry must have been created by the current user, or the current user\nmust have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.",
      "name": "update_entry_groups",
      "endpoint": "PUT /v1/groups/:group_id/discussion_topics/:topic_id/entries/:id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "The updated body of the entry.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete an entry",
      "controller": "discussion_topics",
      "description": "Delete a discussion entry.\n\nThe entry must have been created by the current user, or the current user\nmust have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.\n\nThe discussion will be marked deleted, and the user_id and message will be cleared out.",
      "name": "delete_entry_courses",
      "endpoint": "DELETE /v1/courses/:course_id/discussion_topics/:topic_id/entries/:id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete an entry",
      "controller": "discussion_topics",
      "description": "Delete a discussion entry.\n\nThe entry must have been created by the current user, or the current user\nmust have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.\n\nThe discussion will be marked deleted, and the user_id and message will be cleared out.",
      "name": "delete_entry_groups",
      "endpoint": "DELETE /v1/groups/:group_id/discussion_topics/:topic_id/entries/:id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single topic",
      "controller": "discussion_topics",
      "description": "Returns data on an individual discussion topic. See the List action for the response formatting.",
      "name": "get_single_topic_courses",
      "endpoint": "GET /v1/courses/:course_id/discussion_topics/:topic_id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "If \"all_dates\" is passed, all dates associated with graded discussions'\nassignments will be included.\nif \"sections\" is passed, includes the course sections that are associated\nwith the topic, if the topic is specific to certain sections of the course.\nIf \"sections_user_count\" is passed, then:\n  (a) If sections were asked for *and* the topic is specific to certain\n      course sections, includes the number of users in each\n      section. (as part of the section json asked for above)\n  (b) Else, includes at the root level the total number of users in the\n      topic's context (group or course) that the topic applies to.\nIf \"overrides\" is passed, the overrides for the assignment will be included",
          "example": [
            "all_dates",
            "sections",
            "sections_user_count",
            "overrides"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single topic",
      "controller": "discussion_topics",
      "description": "Returns data on an individual discussion topic. See the List action for the response formatting.",
      "name": "get_single_topic_groups",
      "endpoint": "GET /v1/groups/:group_id/discussion_topics/:topic_id",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "If \"all_dates\" is passed, all dates associated with graded discussions'\nassignments will be included.\nif \"sections\" is passed, includes the course sections that are associated\nwith the topic, if the topic is specific to certain sections of the course.\nIf \"sections_user_count\" is passed, then:\n  (a) If sections were asked for *and* the topic is specific to certain\n      course sections, includes the number of users in each\n      section. (as part of the section json asked for above)\n  (b) Else, includes at the root level the total number of users in the\n      topic's context (group or course) that the topic applies to.\nIf \"overrides\" is passed, the overrides for the assignment will be included",
          "example": [
            "all_dates",
            "sections",
            "sections_user_count",
            "overrides"
          ]
        }
      ]
    },
    {
      "display_name": "Get the full topic",
      "controller": "discussion_topics",
      "description": "Return a cached structure of the discussion topic, containing all entries,\ntheir authors, and their message bodies.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.\n\nIn some rare situations, this cached structure may not be available yet. In\nthat case, the server will respond with a 503 error, and the caller should\ntry again soon.\n\nThe response is an object containing the following keys:\n* \"participants\": A list of summary information on users who have posted to\n  the discussion. Each value is an object containing their id, display_name,\n  and avatar_url.\n* \"unread_entries\": A list of entry ids that are unread by the current\n  user. this implies that any entry not in this list is read.\n* \"entry_ratings\": A map of entry ids to ratings by the current user. Entries\n  not in this list have no rating. Only populated if rating is enabled.\n* \"forced_entries\": A list of entry ids that have forced_read_state set to\n  true. This flag is meant to indicate the entry's read_state has been\n  manually set to 'unread' by the user, so the entry should not be\n  automatically marked as read.\n* \"view\": A threaded view of all the entries in the discussion, containing\n  the id, user_id, and message.\n* \"new_entries\": Because this view is eventually consistent, it's possible\n  that newly created or updated entries won't yet be reflected in the view.\n  If the application wants to also get a flat list of all entries not yet\n  reflected in the view, pass include_new_entries=1 to the request and this\n  array of entries will be returned. These entries are returned in a flat\n  array, in ascending created_at order.",
      "name": "get_full_topic_courses",
      "endpoint": "GET /v1/courses/:course_id/discussion_topics/:topic_id/view",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get the full topic",
      "controller": "discussion_topics",
      "description": "Return a cached structure of the discussion topic, containing all entries,\ntheir authors, and their message bodies.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.\n\nIn some rare situations, this cached structure may not be available yet. In\nthat case, the server will respond with a 503 error, and the caller should\ntry again soon.\n\nThe response is an object containing the following keys:\n* \"participants\": A list of summary information on users who have posted to\n  the discussion. Each value is an object containing their id, display_name,\n  and avatar_url.\n* \"unread_entries\": A list of entry ids that are unread by the current\n  user. this implies that any entry not in this list is read.\n* \"entry_ratings\": A map of entry ids to ratings by the current user. Entries\n  not in this list have no rating. Only populated if rating is enabled.\n* \"forced_entries\": A list of entry ids that have forced_read_state set to\n  true. This flag is meant to indicate the entry's read_state has been\n  manually set to 'unread' by the user, so the entry should not be\n  automatically marked as read.\n* \"view\": A threaded view of all the entries in the discussion, containing\n  the id, user_id, and message.\n* \"new_entries\": Because this view is eventually consistent, it's possible\n  that newly created or updated entries won't yet be reflected in the view.\n  If the application wants to also get a flat list of all entries not yet\n  reflected in the view, pass include_new_entries=1 to the request and this\n  array of entries will be returned. These entries are returned in a flat\n  array, in ascending created_at order.",
      "name": "get_full_topic_groups",
      "endpoint": "GET /v1/groups/:group_id/discussion_topics/:topic_id/view",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Post an entry",
      "controller": "discussion_topics",
      "description": "Create a new entry in a discussion topic. Returns a json representation of\nthe created entry (see documentation for 'entries' method) on success.",
      "name": "post_entry_courses",
      "endpoint": "POST /v1/courses/:course_id/discussion_topics/:topic_id/entries",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "The body of the entry.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "string",
          "default_value": "",
          "desc": "a multipart/form-data form-field-style\nattachment. Attachments larger than 1 kilobyte are subject to quota\nrestrictions.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Post an entry",
      "controller": "discussion_topics",
      "description": "Create a new entry in a discussion topic. Returns a json representation of\nthe created entry (see documentation for 'entries' method) on success.",
      "name": "post_entry_groups",
      "endpoint": "POST /v1/groups/:group_id/discussion_topics/:topic_id/entries",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "The body of the entry.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "string",
          "default_value": "",
          "desc": "a multipart/form-data form-field-style\nattachment. Attachments larger than 1 kilobyte are subject to quota\nrestrictions.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Duplicate discussion topic",
      "controller": "discussion_topics",
      "description": "Duplicate a discussion topic according to context (Course/Group)",
      "name": "duplicate_discussion_topic_courses",
      "endpoint": "POST /v1/courses/:course_id/discussion_topics/:topic_id/duplicate",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Duplicate discussion topic",
      "controller": "discussion_topics",
      "description": "Duplicate a discussion topic according to context (Course/Group)",
      "name": "duplicate_discussion_topic_groups",
      "endpoint": "POST /v1/groups/:group_id/discussion_topics/:topic_id/duplicate",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List topic entries",
      "controller": "discussion_topics",
      "description": "Retrieve the (paginated) top-level entries in a discussion topic.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.\n\nWill include the 10 most recent replies, if any, for each entry returned.\n\nIf the topic is a root topic with children corresponding to groups of a\ngroup assignment, entries from those subtopics for which the user belongs\nto the corresponding group will be returned.\n\nOrdering of returned entries is newest-first by posting timestamp (reply\nactivity is ignored).",
      "name": "list_topic_entries_courses",
      "endpoint": "GET /v1/courses/:course_id/discussion_topics/:topic_id/entries",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List topic entries",
      "controller": "discussion_topics",
      "description": "Retrieve the (paginated) top-level entries in a discussion topic.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.\n\nWill include the 10 most recent replies, if any, for each entry returned.\n\nIf the topic is a root topic with children corresponding to groups of a\ngroup assignment, entries from those subtopics for which the user belongs\nto the corresponding group will be returned.\n\nOrdering of returned entries is newest-first by posting timestamp (reply\nactivity is ignored).",
      "name": "list_topic_entries_groups",
      "endpoint": "GET /v1/groups/:group_id/discussion_topics/:topic_id/entries",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Post a reply",
      "controller": "discussion_topics",
      "description": "Add a reply to an entry in a discussion topic. Returns a json\nrepresentation of the created reply (see documentation for 'replies'\nmethod) on success.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.",
      "name": "post_reply_courses",
      "endpoint": "POST /v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "The body of the entry.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "string",
          "default_value": "",
          "desc": "a multipart/form-data form-field-style\nattachment. Attachments larger than 1 kilobyte are subject to quota\nrestrictions.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Post a reply",
      "controller": "discussion_topics",
      "description": "Add a reply to an entry in a discussion topic. Returns a json\nrepresentation of the created reply (see documentation for 'replies'\nmethod) on success.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.",
      "name": "post_reply_groups",
      "endpoint": "POST /v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "message",
          "type": "string",
          "default_value": "",
          "desc": "The body of the entry.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "string",
          "default_value": "",
          "desc": "a multipart/form-data form-field-style\nattachment. Attachments larger than 1 kilobyte are subject to quota\nrestrictions.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List entry replies",
      "controller": "discussion_topics",
      "description": "Retrieve the (paginated) replies to a top-level entry in a discussion\ntopic.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.\n\nOrdering of returned entries is newest-first by creation timestamp.",
      "name": "list_entry_replies_courses",
      "endpoint": "GET /v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List entry replies",
      "controller": "discussion_topics",
      "description": "Retrieve the (paginated) replies to a top-level entry in a discussion\ntopic.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.\n\nOrdering of returned entries is newest-first by creation timestamp.",
      "name": "list_entry_replies_groups",
      "endpoint": "GET /v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List entries",
      "controller": "discussion_topics",
      "description": "Retrieve a paginated list of discussion entries, given a list of ids.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.",
      "name": "list_entries_courses",
      "endpoint": "GET /v1/courses/:course_id/discussion_topics/:topic_id/entry_list",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "ids[]",
          "type": "array",
          "default_value": "",
          "desc": "A list of entry ids to retrieve. Entries will be returned in id order,\nsmallest id first.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List entries",
      "controller": "discussion_topics",
      "description": "Retrieve a paginated list of discussion entries, given a list of ids.\n\nMay require (depending on the topic) that the user has posted in the topic.\nIf it is required, and the user has not posted, will respond with a 403\nForbidden status and the body 'require_initial_post'.",
      "name": "list_entries_groups",
      "endpoint": "GET /v1/groups/:group_id/discussion_topics/:topic_id/entry_list",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "ids[]",
          "type": "array",
          "default_value": "",
          "desc": "A list of entry ids to retrieve. Entries will be returned in id order,\nsmallest id first.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark topic as read",
      "controller": "discussion_topics",
      "description": "Mark the initial text of the discussion topic as read.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_topic_as_read_courses",
      "endpoint": "PUT /v1/courses/:course_id/discussion_topics/:topic_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark topic as read",
      "controller": "discussion_topics",
      "description": "Mark the initial text of the discussion topic as read.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_topic_as_read_groups",
      "endpoint": "PUT /v1/groups/:group_id/discussion_topics/:topic_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark topic as unread",
      "controller": "discussion_topics",
      "description": "Mark the initial text of the discussion topic as unread.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_topic_as_unread_courses",
      "endpoint": "DELETE /v1/courses/:course_id/discussion_topics/:topic_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark topic as unread",
      "controller": "discussion_topics",
      "description": "Mark the initial text of the discussion topic as unread.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_topic_as_unread_groups",
      "endpoint": "DELETE /v1/groups/:group_id/discussion_topics/:topic_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark all entries as read",
      "controller": "discussion_topics",
      "description": "Mark the discussion topic and all its entries as read.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_all_entries_as_read_courses",
      "endpoint": "PUT /v1/courses/:course_id/discussion_topics/:topic_id/read_all",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set all of the entries' forced_read_state. No change\nis made if this argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark all entries as read",
      "controller": "discussion_topics",
      "description": "Mark the discussion topic and all its entries as read.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_all_entries_as_read_groups",
      "endpoint": "PUT /v1/groups/:group_id/discussion_topics/:topic_id/read_all",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set all of the entries' forced_read_state. No change\nis made if this argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark all entries as unread",
      "controller": "discussion_topics",
      "description": "Mark the discussion topic and all its entries as unread.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_all_entries_as_unread_courses",
      "endpoint": "DELETE /v1/courses/:course_id/discussion_topics/:topic_id/read_all",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set all of the entries' forced_read_state. No change is\nmade if this argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark all entries as unread",
      "controller": "discussion_topics",
      "description": "Mark the discussion topic and all its entries as unread.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_all_entries_as_unread_groups",
      "endpoint": "DELETE /v1/groups/:group_id/discussion_topics/:topic_id/read_all",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set all of the entries' forced_read_state. No change is\nmade if this argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark entry as read",
      "controller": "discussion_topics",
      "description": "Mark a discussion entry as read.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_entry_as_read_courses",
      "endpoint": "PUT /v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set the entry's forced_read_state. No change is made if\nthis argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark entry as read",
      "controller": "discussion_topics",
      "description": "Mark a discussion entry as read.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_entry_as_read_groups",
      "endpoint": "PUT /v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set the entry's forced_read_state. No change is made if\nthis argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark entry as unread",
      "controller": "discussion_topics",
      "description": "Mark a discussion entry as unread.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_entry_as_unread_courses",
      "endpoint": "DELETE /v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set the entry's forced_read_state. No change is made if\nthis argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark entry as unread",
      "controller": "discussion_topics",
      "description": "Mark a discussion entry as unread.\n\nNo request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_entry_as_unread_groups",
      "endpoint": "DELETE /v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "forced_read_state",
          "type": "boolean",
          "default_value": "",
          "desc": "A boolean value to set the entry's forced_read_state. No change is made if\nthis argument is not specified.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Rate entry",
      "controller": "discussion_topics",
      "description": "Rate a discussion entry.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "rate_entry_courses",
      "endpoint": "POST /v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/rating",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "rating",
          "type": "integer",
          "default_value": "",
          "desc": "A rating to set on this entry. Only 0 and 1 are accepted.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Rate entry",
      "controller": "discussion_topics",
      "description": "Rate a discussion entry.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "rate_entry_groups",
      "endpoint": "POST /v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/rating",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "entry_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "rating",
          "type": "integer",
          "default_value": "",
          "desc": "A rating to set on this entry. Only 0 and 1 are accepted.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Subscribe to a topic",
      "controller": "discussion_topics",
      "description": "Subscribe to a topic to receive notifications about new entries\n\nOn success, the response will be 204 No Content with an empty body",
      "name": "subscribe_to_topic_courses",
      "endpoint": "PUT /v1/courses/:course_id/discussion_topics/:topic_id/subscribed",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Subscribe to a topic",
      "controller": "discussion_topics",
      "description": "Subscribe to a topic to receive notifications about new entries\n\nOn success, the response will be 204 No Content with an empty body",
      "name": "subscribe_to_topic_groups",
      "endpoint": "PUT /v1/groups/:group_id/discussion_topics/:topic_id/subscribed",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Unsubscribe from a topic",
      "controller": "discussion_topics",
      "description": "Unsubscribe from a topic to stop receiving notifications about new entries\n\nOn success, the response will be 204 No Content with an empty body",
      "name": "unsubscribe_from_topic_courses",
      "endpoint": "DELETE /v1/courses/:course_id/discussion_topics/:topic_id/subscribed",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Unsubscribe from a topic",
      "controller": "discussion_topics",
      "description": "Unsubscribe from a topic to stop receiving notifications about new entries\n\nOn success, the response will be 204 No Content with an empty body",
      "name": "unsubscribe_from_topic_groups",
      "endpoint": "DELETE /v1/groups/:group_id/discussion_topics/:topic_id/subscribed",
      "reference": "https://canvas.instructure.com/doc/api/discussion_topics.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "topic_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "enrollment_terms": [
    {
      "display_name": "Create enrollment term",
      "controller": "enrollment_terms",
      "description": "Create a new enrollment term for the specified account.",
      "name": "create_enrollment_term",
      "endpoint": "POST /v1/accounts/:account_id/terms",
      "reference": "https://canvas.instructure.com/doc/api/enrollment_terms.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "enrollment_term.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the term.",
          "example": ""
        },
        {
          "name": "enrollment_term.start_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term starts.\nAccepts times in ISO 8601 format, e.g. 2015-01-10T18:48:00Z.",
          "example": ""
        },
        {
          "name": "enrollment_term.end_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term ends.\nAccepts times in ISO 8601 format, e.g. 2015-01-10T18:48:00Z.",
          "example": ""
        },
        {
          "name": "enrollment_term.sis_term_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique SIS identifier for the term.",
          "example": ""
        },
        {
          "name": "enrollment_term.overrides.enrollment_type.start_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term starts, overridden for the given enrollment type.\n*enrollment_type* can be one of StudentEnrollment, TeacherEnrollment, TaEnrollment, or DesignerEnrollment",
          "example": ""
        },
        {
          "name": "enrollment_term.overrides.enrollment_type.end_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term ends, overridden for the given enrollment type.\n*enrollment_type* can be one of StudentEnrollment, TeacherEnrollment, TaEnrollment, or DesignerEnrollment",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update enrollment term",
      "controller": "enrollment_terms",
      "description": "Update an existing enrollment term for the specified account.",
      "name": "update_enrollment_term",
      "endpoint": "PUT /v1/accounts/:account_id/terms/:id",
      "reference": "https://canvas.instructure.com/doc/api/enrollment_terms.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "enrollment_term.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the term.",
          "example": ""
        },
        {
          "name": "enrollment_term.start_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term starts.\nAccepts times in ISO 8601 format, e.g. 2015-01-10T18:48:00Z.",
          "example": ""
        },
        {
          "name": "enrollment_term.end_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term ends.\nAccepts times in ISO 8601 format, e.g. 2015-01-10T18:48:00Z.",
          "example": ""
        },
        {
          "name": "enrollment_term.sis_term_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique SIS identifier for the term.",
          "example": ""
        },
        {
          "name": "enrollment_term.overrides.enrollment_type.start_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term starts, overridden for the given enrollment type.\n*enrollment_type* can be one of StudentEnrollment, TeacherEnrollment, TaEnrollment, or DesignerEnrollment",
          "example": ""
        },
        {
          "name": "enrollment_term.overrides.enrollment_type.end_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The day/time the term ends, overridden for the given enrollment type.\n*enrollment_type* can be one of StudentEnrollment, TeacherEnrollment, TaEnrollment, or DesignerEnrollment",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete enrollment term",
      "controller": "enrollment_terms",
      "description": "Delete the specified enrollment term.",
      "name": "delete_enrollment_term",
      "endpoint": "DELETE /v1/accounts/:account_id/terms/:id",
      "reference": "https://canvas.instructure.com/doc/api/enrollment_terms.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List enrollment terms",
      "controller": "enrollment_terms",
      "description": "An object with a paginated list of all of the terms in the account.",
      "name": "list_enrollment_terms",
      "endpoint": "GET /v1/accounts/:account_id/terms",
      "reference": "https://canvas.instructure.com/doc/api/enrollment_terms.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state[]",
          "type": "array",
          "default_value": "",
          "desc": "If set, only returns terms that are in the given state.\nDefaults to 'active'.",
          "example": [
            "active",
            "deleted",
            "all"
          ]
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"overrides\":: term start/end dates overridden for different enrollment types",
          "example": [
            "overrides"
          ]
        }
      ]
    },
    {
      "display_name": "Retrieve enrollment term",
      "controller": "enrollment_terms",
      "description": "Retrieves the details for an enrollment term in the account. Includes overrides by default.",
      "name": "retrieve_enrollment_term",
      "endpoint": "GET /v1/accounts/:account_id/terms/:id",
      "reference": "https://canvas.instructure.com/doc/api/enrollment_terms.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "files": [
    {
      "display_name": "Get quota information",
      "controller": "files",
      "description": "Returns the total and used storage quota for the course, group, or user.",
      "name": "get_quota_information_courses",
      "endpoint": "GET /v1/courses/:course_id/files/quota",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get quota information",
      "controller": "files",
      "description": "Returns the total and used storage quota for the course, group, or user.",
      "name": "get_quota_information_groups",
      "endpoint": "GET /v1/groups/:group_id/files/quota",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get quota information",
      "controller": "files",
      "description": "Returns the total and used storage quota for the course, group, or user.",
      "name": "get_quota_information_users",
      "endpoint": "GET /v1/users/:user_id/files/quota",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List files",
      "controller": "files",
      "description": "Returns the paginated list of files for the folder or course.",
      "name": "list_files_courses",
      "endpoint": "GET /v1/courses/:course_id/files",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Filter results by content-type. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "exclude_content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name of the files to match and return.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        },
        {
          "name": "only[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of information to restrict to. Overrides include[]\n\n\"names\":: only returns file name information",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "Sort results by this field. Defaults to 'name'. Note that `sort=user` implies `include[]=user`.",
          "example": [
            "name",
            "size",
            "created_at",
            "updated_at",
            "content_type",
            "user"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The sorting order. Defaults to 'asc'.",
          "example": [
            "asc",
            "desc"
          ]
        }
      ]
    },
    {
      "display_name": "List files",
      "controller": "files",
      "description": "Returns the paginated list of files for the folder or course.",
      "name": "list_files_users",
      "endpoint": "GET /v1/users/:user_id/files",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Filter results by content-type. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "exclude_content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name of the files to match and return.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        },
        {
          "name": "only[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of information to restrict to. Overrides include[]\n\n\"names\":: only returns file name information",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "Sort results by this field. Defaults to 'name'. Note that `sort=user` implies `include[]=user`.",
          "example": [
            "name",
            "size",
            "created_at",
            "updated_at",
            "content_type",
            "user"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The sorting order. Defaults to 'asc'.",
          "example": [
            "asc",
            "desc"
          ]
        }
      ]
    },
    {
      "display_name": "List files",
      "controller": "files",
      "description": "Returns the paginated list of files for the folder or course.",
      "name": "list_files_groups",
      "endpoint": "GET /v1/groups/:group_id/files",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Filter results by content-type. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "exclude_content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name of the files to match and return.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        },
        {
          "name": "only[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of information to restrict to. Overrides include[]\n\n\"names\":: only returns file name information",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "Sort results by this field. Defaults to 'name'. Note that `sort=user` implies `include[]=user`.",
          "example": [
            "name",
            "size",
            "created_at",
            "updated_at",
            "content_type",
            "user"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The sorting order. Defaults to 'asc'.",
          "example": [
            "asc",
            "desc"
          ]
        }
      ]
    },
    {
      "display_name": "List files",
      "controller": "files",
      "description": "Returns the paginated list of files for the folder or course.",
      "name": "list_files_folders",
      "endpoint": "GET /v1/folders/:id/files",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Filter results by content-type. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "exclude_content_types[]",
          "type": "array",
          "default_value": "",
          "desc": "Exclude given content-types from your results. You can specify type/subtype pairs (e.g.,\n'image/jpeg'), or simply types (e.g., 'image', which will match\n'image/gif', 'image/jpeg', etc.).",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name of the files to match and return.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        },
        {
          "name": "only[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of information to restrict to. Overrides include[]\n\n\"names\":: only returns file name information",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "Sort results by this field. Defaults to 'name'. Note that `sort=user` implies `include[]=user`.",
          "example": [
            "name",
            "size",
            "created_at",
            "updated_at",
            "content_type",
            "user"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The sorting order. Defaults to 'asc'.",
          "example": [
            "asc",
            "desc"
          ]
        }
      ]
    },
    {
      "display_name": "Get public inline preview url",
      "controller": "files",
      "description": "Determine the URL that should be used for inline preview of the file.",
      "name": "get_public_inline_preview_url",
      "endpoint": "GET /v1/files/:id/public_url",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "submission_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the submission the file is associated with.  Provide this argument to gain access to a file\nthat has been submitted to an assignment (Canvas will verify that the file belongs to the submission\nand the calling user has rights to view the submission).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get file",
      "controller": "files",
      "description": "Returns the standard attachment json object",
      "name": "get_file_files",
      "endpoint": "GET /v1/files/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Get file",
      "controller": "files",
      "description": "Returns the standard attachment json object",
      "name": "get_file_courses",
      "endpoint": "GET /v1/courses/:course_id/files/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Get file",
      "controller": "files",
      "description": "Returns the standard attachment json object",
      "name": "get_file_groups",
      "endpoint": "GET /v1/groups/:group_id/files/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Get file",
      "controller": "files",
      "description": "Returns the standard attachment json object",
      "name": "get_file_users",
      "endpoint": "GET /v1/users/:user_id/files/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include.\n\n\"user\":: the user who uploaded the file or last edited its content\n\"usage_rights\":: copyright and license information for the file (see UsageRights)",
          "example": [
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Update file",
      "controller": "files",
      "description": "Update some settings on the specified file",
      "name": "update_file",
      "endpoint": "PUT /v1/files/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The new display name of the file",
          "example": ""
        },
        {
          "name": "parent_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the folder to move this file into.\nThe new folder must be in the same context as the original parent folder.\nIf the file is in a context without folders this does not apply.",
          "example": ""
        },
        {
          "name": "on_duplicate",
          "type": "string",
          "default_value": "",
          "desc": "If the file is moved to a folder containing a file with the same name,\nor renamed to a name matching an existing file, the API call will fail\nunless this parameter is supplied.\n\n\"overwrite\":: Replace the existing file with the same name\n\"rename\":: Add a qualifier to make the new filename unique",
          "example": [
            "overwrite",
            "rename"
          ]
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to lock the file at",
          "example": ""
        },
        {
          "name": "unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to unlock the file at",
          "example": ""
        },
        {
          "name": "locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the file as locked",
          "example": ""
        },
        {
          "name": "hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the file as hidden",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete file",
      "controller": "files",
      "description": "Remove the specified file. Unlike most other DELETE endpoints, using this\nendpoint will result in comprehensive, irretrievable destruction of the file.\nIt should be used with the `replace` parameter set to true in cases where the\nfile preview also needs to be destroyed (such as to remove files that violate\nprivacy laws).",
      "name": "delete_file",
      "endpoint": "DELETE /v1/files/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "replace",
          "type": "boolean",
          "default_value": "",
          "desc": "This action is irreversible.\nIf replace is set to true the file contents will be replaced with a\ngeneric \"file has been removed\" file. This also destroys any previews\nthat have been generated for the file.\nMust have manage files and become other users permissions",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Reset link verifier",
      "controller": "files",
      "description": "Resets the link verifier. Any existing links to the file using\nthe previous hard-coded \"verifier\" parameter will no longer\nautomatically grant access.\n\nMust have manage files and become other users permissions",
      "name": "reset_link_verifier",
      "endpoint": "POST /v1/files/:id/reset_verifier",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List folders",
      "controller": "files",
      "description": "Returns the paginated list of folders in the folder.",
      "name": "list_folders",
      "endpoint": "GET /v1/folders/:id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List all folders",
      "controller": "files",
      "description": "Returns the paginated list of all folders for the given context. This will\nbe returned as a flat list containing all subfolders as well.",
      "name": "list_all_folders_courses",
      "endpoint": "GET /v1/courses/:course_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List all folders",
      "controller": "files",
      "description": "Returns the paginated list of all folders for the given context. This will\nbe returned as a flat list containing all subfolders as well.",
      "name": "list_all_folders_users",
      "endpoint": "GET /v1/users/:user_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List all folders",
      "controller": "files",
      "description": "Returns the paginated list of all folders for the given context. This will\nbe returned as a flat list containing all subfolders as well.",
      "name": "list_all_folders_groups",
      "endpoint": "GET /v1/groups/:group_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Resolve path",
      "controller": "files",
      "description": "Given the full path to a folder, returns a list of all Folders in the path hierarchy,\nstarting at the root folder, and ending at the requested folder. The given path is\nrelative to the context's root folder and does not include the root folder's name\n(e.g., \"course files\"). If an empty path is given, the context's root folder alone\nis returned. Otherwise, if no folder exists with the given full path, a Not Found\nerror is returned.",
      "name": "resolve_path_courses_full_path",
      "endpoint": "GET /v1/courses/:course_id/folders/by_path/*full_path",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Resolve path",
      "controller": "files",
      "description": "Given the full path to a folder, returns a list of all Folders in the path hierarchy,\nstarting at the root folder, and ending at the requested folder. The given path is\nrelative to the context's root folder and does not include the root folder's name\n(e.g., \"course files\"). If an empty path is given, the context's root folder alone\nis returned. Otherwise, if no folder exists with the given full path, a Not Found\nerror is returned.",
      "name": "resolve_path_courses",
      "endpoint": "GET /v1/courses/:course_id/folders/by_path",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Resolve path",
      "controller": "files",
      "description": "Given the full path to a folder, returns a list of all Folders in the path hierarchy,\nstarting at the root folder, and ending at the requested folder. The given path is\nrelative to the context's root folder and does not include the root folder's name\n(e.g., \"course files\"). If an empty path is given, the context's root folder alone\nis returned. Otherwise, if no folder exists with the given full path, a Not Found\nerror is returned.",
      "name": "resolve_path_users_full_path",
      "endpoint": "GET /v1/users/:user_id/folders/by_path/*full_path",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Resolve path",
      "controller": "files",
      "description": "Given the full path to a folder, returns a list of all Folders in the path hierarchy,\nstarting at the root folder, and ending at the requested folder. The given path is\nrelative to the context's root folder and does not include the root folder's name\n(e.g., \"course files\"). If an empty path is given, the context's root folder alone\nis returned. Otherwise, if no folder exists with the given full path, a Not Found\nerror is returned.",
      "name": "resolve_path_users",
      "endpoint": "GET /v1/users/:user_id/folders/by_path",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Resolve path",
      "controller": "files",
      "description": "Given the full path to a folder, returns a list of all Folders in the path hierarchy,\nstarting at the root folder, and ending at the requested folder. The given path is\nrelative to the context's root folder and does not include the root folder's name\n(e.g., \"course files\"). If an empty path is given, the context's root folder alone\nis returned. Otherwise, if no folder exists with the given full path, a Not Found\nerror is returned.",
      "name": "resolve_path_groups_full_path",
      "endpoint": "GET /v1/groups/:group_id/folders/by_path/*full_path",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Resolve path",
      "controller": "files",
      "description": "Given the full path to a folder, returns a list of all Folders in the path hierarchy,\nstarting at the root folder, and ending at the requested folder. The given path is\nrelative to the context's root folder and does not include the root folder's name\n(e.g., \"course files\"). If an empty path is given, the context's root folder alone\nis returned. Otherwise, if no folder exists with the given full path, a Not Found\nerror is returned.",
      "name": "resolve_path_groups",
      "endpoint": "GET /v1/groups/:group_id/folders/by_path",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get folder",
      "controller": "files",
      "description": "Returns the details for a folder\n\nYou can get the root folder from a context by using 'root' as the :id.\nFor example, you could get the root folder for a course like:",
      "name": "get_folder_courses",
      "endpoint": "GET /v1/courses/:course_id/folders/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get folder",
      "controller": "files",
      "description": "Returns the details for a folder\n\nYou can get the root folder from a context by using 'root' as the :id.\nFor example, you could get the root folder for a course like:",
      "name": "get_folder_users",
      "endpoint": "GET /v1/users/:user_id/folders/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get folder",
      "controller": "files",
      "description": "Returns the details for a folder\n\nYou can get the root folder from a context by using 'root' as the :id.\nFor example, you could get the root folder for a course like:",
      "name": "get_folder_groups",
      "endpoint": "GET /v1/groups/:group_id/folders/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get folder",
      "controller": "files",
      "description": "Returns the details for a folder\n\nYou can get the root folder from a context by using 'root' as the :id.\nFor example, you could get the root folder for a course like:",
      "name": "get_folder_folders",
      "endpoint": "GET /v1/folders/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update folder",
      "controller": "files",
      "description": "Updates a folder",
      "name": "update_folder",
      "endpoint": "PUT /v1/folders/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The new name of the folder",
          "example": ""
        },
        {
          "name": "parent_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the folder to move this folder into. The new folder must be in the same context as the original parent folder.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to lock the folder at",
          "example": ""
        },
        {
          "name": "unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to unlock the folder at",
          "example": ""
        },
        {
          "name": "locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as locked",
          "example": ""
        },
        {
          "name": "hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as hidden",
          "example": ""
        },
        {
          "name": "position",
          "type": "integer",
          "default_value": "",
          "desc": "Set an explicit sort position for the folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create folder",
      "controller": "files",
      "description": "Creates a folder in the specified context",
      "name": "create_folder_courses",
      "endpoint": "POST /v1/courses/:course_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the folder",
          "example": ""
        },
        {
          "name": "parent_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the folder to store the file in. If this and parent_folder_path are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "parent_folder_path",
          "type": "string",
          "default_value": "",
          "desc": "The path of the folder to store the new folder in. The path separator is the forward slash `/`, never a back slash. The parent folder will be created if it does not already exist. This parameter only applies to new folders in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to lock the folder at",
          "example": ""
        },
        {
          "name": "unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to unlock the folder at",
          "example": ""
        },
        {
          "name": "locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as locked",
          "example": ""
        },
        {
          "name": "hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as hidden",
          "example": ""
        },
        {
          "name": "position",
          "type": "integer",
          "default_value": "",
          "desc": "Set an explicit sort position for the folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create folder",
      "controller": "files",
      "description": "Creates a folder in the specified context",
      "name": "create_folder_users",
      "endpoint": "POST /v1/users/:user_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the folder",
          "example": ""
        },
        {
          "name": "parent_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the folder to store the file in. If this and parent_folder_path are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "parent_folder_path",
          "type": "string",
          "default_value": "",
          "desc": "The path of the folder to store the new folder in. The path separator is the forward slash `/`, never a back slash. The parent folder will be created if it does not already exist. This parameter only applies to new folders in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to lock the folder at",
          "example": ""
        },
        {
          "name": "unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to unlock the folder at",
          "example": ""
        },
        {
          "name": "locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as locked",
          "example": ""
        },
        {
          "name": "hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as hidden",
          "example": ""
        },
        {
          "name": "position",
          "type": "integer",
          "default_value": "",
          "desc": "Set an explicit sort position for the folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create folder",
      "controller": "files",
      "description": "Creates a folder in the specified context",
      "name": "create_folder_groups",
      "endpoint": "POST /v1/groups/:group_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the folder",
          "example": ""
        },
        {
          "name": "parent_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the folder to store the file in. If this and parent_folder_path are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "parent_folder_path",
          "type": "string",
          "default_value": "",
          "desc": "The path of the folder to store the new folder in. The path separator is the forward slash `/`, never a back slash. The parent folder will be created if it does not already exist. This parameter only applies to new folders in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to lock the folder at",
          "example": ""
        },
        {
          "name": "unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to unlock the folder at",
          "example": ""
        },
        {
          "name": "locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as locked",
          "example": ""
        },
        {
          "name": "hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as hidden",
          "example": ""
        },
        {
          "name": "position",
          "type": "integer",
          "default_value": "",
          "desc": "Set an explicit sort position for the folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create folder",
      "controller": "files",
      "description": "Creates a folder in the specified context",
      "name": "create_folder_folders",
      "endpoint": "POST /v1/folders/:folder_id/folders",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "folder_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the folder",
          "example": ""
        },
        {
          "name": "parent_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the folder to store the file in. If this and parent_folder_path are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "parent_folder_path",
          "type": "string",
          "default_value": "",
          "desc": "The path of the folder to store the new folder in. The path separator is the forward slash `/`, never a back slash. The parent folder will be created if it does not already exist. This parameter only applies to new folders in a context that has folders, such as a user, a course, or a group. If this and parent_folder_id are sent an error will be returned. If neither is given, a default folder will be used.",
          "example": ""
        },
        {
          "name": "lock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to lock the folder at",
          "example": ""
        },
        {
          "name": "unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The datetime to unlock the folder at",
          "example": ""
        },
        {
          "name": "locked",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as locked",
          "example": ""
        },
        {
          "name": "hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "Flag the folder as hidden",
          "example": ""
        },
        {
          "name": "position",
          "type": "integer",
          "default_value": "",
          "desc": "Set an explicit sort position for the folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete folder",
      "controller": "files",
      "description": "Remove the specified folder. You can only delete empty folders unless you\nset the 'force' flag",
      "name": "delete_folder",
      "endpoint": "DELETE /v1/folders/:id",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "force",
          "type": "boolean",
          "default_value": "",
          "desc": "Set to 'true' to allow deleting a non-empty folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Upload a file",
      "controller": "files",
      "description": "Upload a file to a folder.\n\nThis API endpoint is the first step in uploading a file.\nSee the {file:file_uploads.html File Upload Documentation} for details on\nthe file upload workflow.\n\nOnly those with the \"Manage Files\" permission on a course or group can\nupload files to a folder in that course or group.",
      "name": "upload_file",
      "endpoint": "POST /v1/folders/:folder_id/files",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "folder_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Copy a file",
      "controller": "files",
      "description": "Copy a file from elsewhere in Canvas into a folder.\n\nCopying a file across contexts (between courses and users) is permitted,\nbut the source and destination must belong to the same institution.",
      "name": "copy_file",
      "endpoint": "POST /v1/folders/:dest_folder_id/copy_file",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "dest_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "source_file_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the source file",
          "example": ""
        },
        {
          "name": "on_duplicate",
          "type": "string",
          "default_value": "",
          "desc": "What to do if a file with the same name already exists at the destination.\nIf such a file exists and this parameter is not given, the call will fail.\n\n\"overwrite\":: Replace an existing file with the same name\n\"rename\":: Add a qualifier to make the new filename unique",
          "example": [
            "overwrite",
            "rename"
          ]
        }
      ]
    },
    {
      "display_name": "Copy a folder",
      "controller": "files",
      "description": "Copy a folder (and its contents) from elsewhere in Canvas into a folder.\n\nCopying a folder across contexts (between courses and users) is permitted,\nbut the source and destination must belong to the same institution.\nIf the source and destination folders are in the same context, the\nsource folder may not contain the destination folder. A folder will be\nrenamed at its destination if another folder with the same name already\nexists.",
      "name": "copy_folder",
      "endpoint": "POST /v1/folders/:dest_folder_id/copy_folder",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "dest_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "source_folder_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the source folder",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get uploaded media folder for user",
      "controller": "files",
      "description": "Returns the details for a designated upload folder that the user has rights to\nupload to, and creates it if it doesn't exist.\n\nIf the current user does not have the permissions to manage files\nin the course or group, the folder will belong to the current user directly.",
      "name": "get_uploaded_media_folder_for_user_courses",
      "endpoint": "GET /v1/courses/:course_id/folders/media",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get uploaded media folder for user",
      "controller": "files",
      "description": "Returns the details for a designated upload folder that the user has rights to\nupload to, and creates it if it doesn't exist.\n\nIf the current user does not have the permissions to manage files\nin the course or group, the folder will belong to the current user directly.",
      "name": "get_uploaded_media_folder_for_user_groups",
      "endpoint": "GET /v1/groups/:group_id/folders/media",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Set usage rights",
      "controller": "files",
      "description": "Sets copyright and license information for one or more files",
      "name": "set_usage_rights_courses",
      "endpoint": "PUT /v1/courses/:course_id/usage_rights",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of files to set usage rights for.",
          "example": ""
        },
        {
          "name": "folder_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of folders to search for files to set usage rights for.\nNote that new files uploaded to these folders do not automatically inherit these rights.",
          "example": ""
        },
        {
          "name": "publish",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the file(s) or folder(s) should be published on save, provided that usage rights have been specified (set to `true` to publish on save).",
          "example": ""
        },
        {
          "name": "usage_rights.use_justification",
          "type": "string",
          "default_value": "",
          "desc": "The intellectual property justification for using the files in Canvas",
          "example": [
            "own_copyright",
            "used_by_permission",
            "fair_use",
            "public_domain",
            "creative_commons"
          ]
        },
        {
          "name": "usage_rights.legal_copyright",
          "type": "string",
          "default_value": "",
          "desc": "The legal copyright line for the files",
          "example": ""
        },
        {
          "name": "usage_rights.license",
          "type": "string",
          "default_value": "",
          "desc": "The license that applies to the files. See the {api:UsageRightsController#licenses List licenses endpoint} for the supported license types.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Set usage rights",
      "controller": "files",
      "description": "Sets copyright and license information for one or more files",
      "name": "set_usage_rights_groups",
      "endpoint": "PUT /v1/groups/:group_id/usage_rights",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of files to set usage rights for.",
          "example": ""
        },
        {
          "name": "folder_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of folders to search for files to set usage rights for.\nNote that new files uploaded to these folders do not automatically inherit these rights.",
          "example": ""
        },
        {
          "name": "publish",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the file(s) or folder(s) should be published on save, provided that usage rights have been specified (set to `true` to publish on save).",
          "example": ""
        },
        {
          "name": "usage_rights.use_justification",
          "type": "string",
          "default_value": "",
          "desc": "The intellectual property justification for using the files in Canvas",
          "example": [
            "own_copyright",
            "used_by_permission",
            "fair_use",
            "public_domain",
            "creative_commons"
          ]
        },
        {
          "name": "usage_rights.legal_copyright",
          "type": "string",
          "default_value": "",
          "desc": "The legal copyright line for the files",
          "example": ""
        },
        {
          "name": "usage_rights.license",
          "type": "string",
          "default_value": "",
          "desc": "The license that applies to the files. See the {api:UsageRightsController#licenses List licenses endpoint} for the supported license types.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Set usage rights",
      "controller": "files",
      "description": "Sets copyright and license information for one or more files",
      "name": "set_usage_rights_users",
      "endpoint": "PUT /v1/users/:user_id/usage_rights",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of files to set usage rights for.",
          "example": ""
        },
        {
          "name": "folder_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of folders to search for files to set usage rights for.\nNote that new files uploaded to these folders do not automatically inherit these rights.",
          "example": ""
        },
        {
          "name": "publish",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the file(s) or folder(s) should be published on save, provided that usage rights have been specified (set to `true` to publish on save).",
          "example": ""
        },
        {
          "name": "usage_rights.use_justification",
          "type": "string",
          "default_value": "",
          "desc": "The intellectual property justification for using the files in Canvas",
          "example": [
            "own_copyright",
            "used_by_permission",
            "fair_use",
            "public_domain",
            "creative_commons"
          ]
        },
        {
          "name": "usage_rights.legal_copyright",
          "type": "string",
          "default_value": "",
          "desc": "The legal copyright line for the files",
          "example": ""
        },
        {
          "name": "usage_rights.license",
          "type": "string",
          "default_value": "",
          "desc": "The license that applies to the files. See the {api:UsageRightsController#licenses List licenses endpoint} for the supported license types.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Remove usage rights",
      "controller": "files",
      "description": "Removes copyright and license information associated with one or more files",
      "name": "remove_usage_rights_courses",
      "endpoint": "DELETE /v1/courses/:course_id/usage_rights",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of files to remove associated usage rights from.",
          "example": ""
        },
        {
          "name": "folder_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of folders. Usage rights will be removed from all files in these folders.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Remove usage rights",
      "controller": "files",
      "description": "Removes copyright and license information associated with one or more files",
      "name": "remove_usage_rights_groups",
      "endpoint": "DELETE /v1/groups/:group_id/usage_rights",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of files to remove associated usage rights from.",
          "example": ""
        },
        {
          "name": "folder_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of folders. Usage rights will be removed from all files in these folders.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Remove usage rights",
      "controller": "files",
      "description": "Removes copyright and license information associated with one or more files",
      "name": "remove_usage_rights_users",
      "endpoint": "DELETE /v1/users/:user_id/usage_rights",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of files to remove associated usage rights from.",
          "example": ""
        },
        {
          "name": "folder_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of ids of folders. Usage rights will be removed from all files in these folders.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List licenses",
      "controller": "files",
      "description": "A paginated list of licenses that can be applied",
      "name": "list_licenses_courses",
      "endpoint": "GET /v1/courses/:course_id/content_licenses",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List licenses",
      "controller": "files",
      "description": "A paginated list of licenses that can be applied",
      "name": "list_licenses_groups",
      "endpoint": "GET /v1/groups/:group_id/content_licenses",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List licenses",
      "controller": "files",
      "description": "A paginated list of licenses that can be applied",
      "name": "list_licenses_users",
      "endpoint": "GET /v1/users/:user_id/content_licenses",
      "reference": "https://canvas.instructure.com/doc/api/files.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "gradebook_history": [
    {
      "display_name": "Days in gradebook history for this course",
      "controller": "gradebook_history",
      "description": "Returns a map of dates to grader/assignment groups",
      "name": "days_in_gradebook_history_for_this_course",
      "endpoint": "GET /v1/courses/:course_id/gradebook_history/days",
      "reference": "https://canvas.instructure.com/doc/api/gradebook_history.html",
      "params": [
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the contextual course for this API call",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Details for a given date in gradebook history for this course",
      "controller": "gradebook_history",
      "description": "Returns the graders who worked on this day, along with the assignments they worked on.\nMore details can be obtained by selecting a grader and assignment and calling the\n'submissions' api endpoint for a given date.",
      "name": "details_for_given_date_in_gradebook_history_for_this_course",
      "endpoint": "GET /v1/courses/:course_id/gradebook_history/:date",
      "reference": "https://canvas.instructure.com/doc/api/gradebook_history.html",
      "params": [
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the contextual course for this API call",
          "example": ""
        },
        {
          "name": "date",
          "type": "string",
          "default_value": "",
          "desc": "The date for which you would like to see detailed information",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Lists submissions",
      "controller": "gradebook_history",
      "description": "Gives a nested list of submission versions",
      "name": "lists_submissions",
      "endpoint": "GET /v1/courses/:course_id/gradebook_history/:date/graders/:grader_id/assignments/:assignment_id/submissions",
      "reference": "https://canvas.instructure.com/doc/api/gradebook_history.html",
      "params": [
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the contextual course for this API call",
          "example": ""
        },
        {
          "name": "date",
          "type": "string",
          "default_value": "",
          "desc": "The date for which you would like to see submissions",
          "example": ""
        },
        {
          "name": "grader_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the grader for which you want to see submissions",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the assignment for which you want to see submissions",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List uncollated submission versions",
      "controller": "gradebook_history",
      "description": "Gives a paginated, uncollated list of submission versions for all matching\nsubmissions in the context. This SubmissionVersion objects will not include\nthe +new_grade+ or +previous_grade+ keys, only the +grade+; same for\n+graded_at+ and +grader+.",
      "name": "list_uncollated_submission_versions",
      "endpoint": "GET /v1/courses/:course_id/gradebook_history/feed",
      "reference": "https://canvas.instructure.com/doc/api/gradebook_history.html",
      "params": [
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the contextual course for this API call",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the assignment for which you want to see submissions. If\nabsent, versions of submissions from any assignment in the course are\nincluded.",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the user for which you want to see submissions. If absent,\nversions of submissions from any user in the course are included.",
          "example": ""
        },
        {
          "name": "ascending",
          "type": "boolean",
          "default_value": "",
          "desc": "Returns submission versions in ascending date order (oldest first). If\nabsent, returns submission versions in descending date order (newest\nfirst).",
          "example": ""
        }
      ]
    }
  ],
  "groups": [
    {
      "display_name": "List your groups",
      "controller": "groups",
      "description": "Returns a paginated list of active groups for the current user.",
      "name": "list_your_groups",
      "endpoint": "GET /v1/users/self/groups",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "context_type",
          "type": "string",
          "default_value": "",
          "desc": "Only include groups that are in this type of context.",
          "example": [
            "Account",
            "Course"
          ]
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"tabs\": Include the list of tabs configured for each group.  See the\n  {api:TabsController#index List available tabs API} for more information.",
          "example": [
            "tabs"
          ]
        }
      ]
    },
    {
      "display_name": "List the groups available in a context.",
      "controller": "groups",
      "description": "Returns the paginated list of active groups in the given context that are visible to user.",
      "name": "list_groups_available_in_context_accounts",
      "endpoint": "GET /v1/accounts/:account_id/groups",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "only_own_groups",
          "type": "boolean",
          "default_value": "",
          "desc": "Will only include groups that the user belongs to if this is set",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"tabs\": Include the list of tabs configured for each group.  See the\n  {api:TabsController#index List available tabs API} for more information.",
          "example": [
            "tabs"
          ]
        }
      ]
    },
    {
      "display_name": "List the groups available in a context.",
      "controller": "groups",
      "description": "Returns the paginated list of active groups in the given context that are visible to user.",
      "name": "list_groups_available_in_context_courses",
      "endpoint": "GET /v1/courses/:course_id/groups",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "only_own_groups",
          "type": "boolean",
          "default_value": "",
          "desc": "Will only include groups that the user belongs to if this is set",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"tabs\": Include the list of tabs configured for each group.  See the\n  {api:TabsController#index List available tabs API} for more information.",
          "example": [
            "tabs"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single group",
      "controller": "groups",
      "description": "Returns the data for a single group, or a 401 if the caller doesn't have\nthe rights to see it.",
      "name": "get_single_group",
      "endpoint": "GET /v1/groups/:group_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"permissions\": Include permissions the current user has\n  for the group.\n- \"tabs\": Include the list of tabs configured for each group.  See the\n  {api:TabsController#index List available tabs API} for more information.",
          "example": [
            "permissions",
            "tabs"
          ]
        }
      ]
    },
    {
      "display_name": "Create a group",
      "controller": "groups",
      "description": "Creates a new group. Groups created using the \"/api/v1/groups/\"\nendpoint will be community groups.",
      "name": "create_group_groups",
      "endpoint": "POST /v1/groups",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the group",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "A description of the group",
          "example": ""
        },
        {
          "name": "is_public",
          "type": "boolean",
          "default_value": "",
          "desc": "whether the group is public (applies only to community groups)",
          "example": ""
        },
        {
          "name": "join_level",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "parent_context_auto_join",
            "parent_context_request",
            "invitation_only"
          ]
        },
        {
          "name": "storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The allowed file storage for the group, in megabytes. This parameter is\nignored if the caller does not have the manage_storage_quotas permission.",
          "example": ""
        },
        {
          "name": "sis_group_id",
          "type": "string",
          "default_value": "",
          "desc": "The sis ID of the group. Must have manage_sis permission to set.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a group",
      "controller": "groups",
      "description": "Creates a new group. Groups created using the \"/api/v1/groups/\"\nendpoint will be community groups.",
      "name": "create_group_group_categories",
      "endpoint": "POST /v1/group_categories/:group_category_id/groups",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_category_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the group",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "A description of the group",
          "example": ""
        },
        {
          "name": "is_public",
          "type": "boolean",
          "default_value": "",
          "desc": "whether the group is public (applies only to community groups)",
          "example": ""
        },
        {
          "name": "join_level",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "parent_context_auto_join",
            "parent_context_request",
            "invitation_only"
          ]
        },
        {
          "name": "storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The allowed file storage for the group, in megabytes. This parameter is\nignored if the caller does not have the manage_storage_quotas permission.",
          "example": ""
        },
        {
          "name": "sis_group_id",
          "type": "string",
          "default_value": "",
          "desc": "The sis ID of the group. Must have manage_sis permission to set.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Edit a group",
      "controller": "groups",
      "description": "Modifies an existing group.  Note that to set an avatar image for the\ngroup, you must first upload the image file to the group, and the use the\nid in the response as the argument to this function.  See the\n{file:file_uploads.html File Upload Documentation} for details on the file\nupload workflow.",
      "name": "edit_group",
      "endpoint": "PUT /v1/groups/:group_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the group",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "A description of the group",
          "example": ""
        },
        {
          "name": "is_public",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the group is public (applies only to community groups). Currently\nyou cannot set a group back to private once it has been made public.",
          "example": ""
        },
        {
          "name": "join_level",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "parent_context_auto_join",
            "parent_context_request",
            "invitation_only"
          ]
        },
        {
          "name": "avatar_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the attachment previously uploaded to the group that you would\nlike to use as the avatar image for this group.",
          "example": ""
        },
        {
          "name": "storage_quota_mb",
          "type": "integer",
          "default_value": "",
          "desc": "The allowed file storage for the group, in megabytes. This parameter is\nignored if the caller does not have the manage_storage_quotas permission.",
          "example": ""
        },
        {
          "name": "members[]",
          "type": "array",
          "default_value": "",
          "desc": "An array of user ids for users you would like in the group.\nUsers not in the group will be sent invitations. Existing group\nmembers who aren't in the list will be removed from the group.",
          "example": ""
        },
        {
          "name": "sis_group_id",
          "type": "string",
          "default_value": "",
          "desc": "The sis ID of the group. Must have manage_sis permission to set.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a group",
      "controller": "groups",
      "description": "Deletes a group and removes all members.",
      "name": "delete_group",
      "endpoint": "DELETE /v1/groups/:group_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Invite others to a group",
      "controller": "groups",
      "description": "Sends an invitation to all supplied email addresses which will allow the\nreceivers to join the group.",
      "name": "invite_others_to_group",
      "endpoint": "POST /v1/groups/:group_id/invite",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "invitees[]",
          "type": "array",
          "default_value": "",
          "desc": "An array of email addresses to be sent invitations.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List group's users",
      "controller": "groups",
      "description": "Returns a paginated list of users in the group.",
      "name": "list_group_s_users",
      "endpoint": "GET /v1/groups/:group_id/users",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name or full ID of the users to match and return in the\nresults list. Must be at least 3 characters.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "\"avatar_url\": Include users' avatar_urls.",
          "example": [
            "avatar_url"
          ]
        },
        {
          "name": "exclude_inactive",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to filter out inactive users from the results. Defaults to\nfalse unless explicitly provided.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Upload a file",
      "controller": "groups",
      "description": "Upload a file to the group.\n\nThis API endpoint is the first step in uploading a file to a group.\nSee the {file:file_uploads.html File Upload Documentation} for details on\nthe file upload workflow.\n\nOnly those with the \"Manage Files\" permission on a group can upload files\nto the group. By default, this is anybody participating in the\ngroup, or any admin over the group.",
      "name": "upload_file",
      "endpoint": "POST /v1/groups/:group_id/files",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Preview processed html",
      "controller": "groups",
      "description": "Preview html content processed for this group",
      "name": "preview_processed_html",
      "endpoint": "POST /v1/groups/:group_id/preview_html",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "html",
          "type": "string",
          "default_value": "",
          "desc": "The html content to process",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Group activity stream",
      "controller": "groups",
      "description": "Returns the current user's group-specific activity stream, paginated.\n\nFor full documentation, see the API documentation for the user activity\nstream, in the user api.",
      "name": "group_activity_stream",
      "endpoint": "GET /v1/groups/:group_id/activity_stream",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Group activity stream summary",
      "controller": "groups",
      "description": "Returns a summary of the current user's group-specific activity stream.\n\nFor full documentation, see the API documentation for the user activity\nstream summary, in the user api.",
      "name": "group_activity_stream_summary",
      "endpoint": "GET /v1/groups/:group_id/activity_stream/summary",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Permissions",
      "controller": "groups",
      "description": "Returns permission information for the calling user in the given group.\nSee also the {api:AccountsController#permissions Account} and\n{api:CoursesController#permissions Course} counterparts.",
      "name": "permissions",
      "endpoint": "GET /v1/groups/:group_id/permissions",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "permissions[]",
          "type": "array",
          "default_value": "",
          "desc": "List of permissions to check against the authenticated user.\nPermission names are documented in the {api:RoleOverridesController#add_role Create a role} endpoint.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List group memberships",
      "controller": "groups",
      "description": "A paginated list of the members of a group.",
      "name": "list_group_memberships",
      "endpoint": "GET /v1/groups/:group_id/memberships",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "filter_states[]",
          "type": "array",
          "default_value": "",
          "desc": "Only list memberships with the given workflow_states. By default it will\nreturn all memberships.",
          "example": [
            "accepted",
            "invited",
            "requested"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single group membership",
      "controller": "groups",
      "description": "Returns the group membership with the given membership id or user id.",
      "name": "get_single_group_membership_memberships",
      "endpoint": "GET /v1/groups/:group_id/memberships/:membership_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "membership_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single group membership",
      "controller": "groups",
      "description": "Returns the group membership with the given membership id or user id.",
      "name": "get_single_group_membership_users",
      "endpoint": "GET /v1/groups/:group_id/users/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a membership",
      "controller": "groups",
      "description": "Join, or request to join, a group, depending on the join_level of the\ngroup.  If the membership or join request already exists, then it is simply\nreturned",
      "name": "create_membership",
      "endpoint": "POST /v1/groups/:group_id/memberships",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a membership",
      "controller": "groups",
      "description": "Accept a membership request, or add/remove moderator rights.",
      "name": "update_membership_memberships",
      "endpoint": "PUT /v1/groups/:group_id/memberships/:membership_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "membership_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "Currently, the only allowed value is \"accepted\"",
          "example": [
            "accepted"
          ]
        },
        {
          "name": "moderator",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a membership",
      "controller": "groups",
      "description": "Accept a membership request, or add/remove moderator rights.",
      "name": "update_membership_users",
      "endpoint": "PUT /v1/groups/:group_id/users/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "Currently, the only allowed value is \"accepted\"",
          "example": [
            "accepted"
          ]
        },
        {
          "name": "moderator",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Leave a group",
      "controller": "groups",
      "description": "Leave a group if you are allowed to leave (some groups, such as sets of\ncourse groups created by teachers, cannot be left). You may also use 'self'\nin place of a membership_id.",
      "name": "leave_group_memberships",
      "endpoint": "DELETE /v1/groups/:group_id/memberships/:membership_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "membership_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Leave a group",
      "controller": "groups",
      "description": "Leave a group if you are allowed to leave (some groups, such as sets of\ncourse groups created by teachers, cannot be left). You may also use 'self'\nin place of a membership_id.",
      "name": "leave_group_users",
      "endpoint": "DELETE /v1/groups/:group_id/users/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/groups.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "logins": [
    {
      "display_name": "List user logins",
      "controller": "logins",
      "description": "Given a user ID, return a paginated list of that user's logins for the given account.",
      "name": "list_user_logins_accounts",
      "endpoint": "GET /v1/accounts/:account_id/logins",
      "reference": "https://canvas.instructure.com/doc/api/logins.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List user logins",
      "controller": "logins",
      "description": "Given a user ID, return a paginated list of that user's logins for the given account.",
      "name": "list_user_logins_users",
      "endpoint": "GET /v1/users/:user_id/logins",
      "reference": "https://canvas.instructure.com/doc/api/logins.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a user login",
      "controller": "logins",
      "description": "Create a new login for an existing user in the given account.",
      "name": "create_user_login",
      "endpoint": "POST /v1/accounts/:account_id/logins",
      "reference": "https://canvas.instructure.com/doc/api/logins.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user.id",
          "type": "string",
          "default_value": "",
          "desc": "The ID of the user to create the login for.",
          "example": ""
        },
        {
          "name": "login.unique_id",
          "type": "string",
          "default_value": "",
          "desc": "The unique ID for the new login.",
          "example": ""
        },
        {
          "name": "login.password",
          "type": "string",
          "default_value": "",
          "desc": "The new login's password.",
          "example": ""
        },
        {
          "name": "login.sis_user_id",
          "type": "string",
          "default_value": "",
          "desc": "SIS ID for the login. To set this parameter, the caller must be able to\nmanage SIS permissions on the account.",
          "example": ""
        },
        {
          "name": "login.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "Integration ID for the login. To set this parameter, the caller must be able to\nmanage SIS permissions on the account. The Integration ID is a secondary\nidentifier useful for more complex SIS integrations.",
          "example": ""
        },
        {
          "name": "login.authentication_provider_id",
          "type": "string",
          "default_value": "",
          "desc": "The authentication provider this login is associated with. Logins\nassociated with a specific provider can only be used with that provider.\nLegacy providers (LDAP, CAS, SAML) will search for logins associated with\nthem, or unassociated logins. New providers will only search for logins\nexplicitly associated with them. This can be the integer ID of the\nprovider, or the type of the provider (in which case, it will find the\nfirst matching provider).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Edit a user login",
      "controller": "logins",
      "description": "Update an existing login for a user in the given account.",
      "name": "edit_user_login",
      "endpoint": "PUT /v1/accounts/:account_id/logins/:id",
      "reference": "https://canvas.instructure.com/doc/api/logins.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "login.unique_id",
          "type": "string",
          "default_value": "",
          "desc": "The new unique ID for the login.",
          "example": ""
        },
        {
          "name": "login.password",
          "type": "string",
          "default_value": "",
          "desc": "The new password for the login. Can only be set by an admin user if admins\nare allowed to change passwords for the account.",
          "example": ""
        },
        {
          "name": "login.sis_user_id",
          "type": "string",
          "default_value": "",
          "desc": "SIS ID for the login. To set this parameter, the caller must be able to\nmanage SIS permissions on the account.",
          "example": ""
        },
        {
          "name": "login.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "Integration ID for the login. To set this parameter, the caller must be able to\nmanage SIS permissions on the account. The Integration ID is a secondary\nidentifier useful for more complex SIS integrations.",
          "example": ""
        },
        {
          "name": "login.authentication_provider_id",
          "type": "string",
          "default_value": "",
          "desc": "The authentication provider this login is associated with. Logins\nassociated with a specific provider can only be used with that provider.\nLegacy providers (LDAP, CAS, SAML) will search for logins associated with\nthem, or unassociated logins. New providers will only search for logins\nexplicitly associated with them. This can be the integer ID of the\nprovider, or the type of the provider (in which case, it will find the\nfirst matching provider).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a user login",
      "controller": "logins",
      "description": "Delete an existing login.",
      "name": "delete_user_login",
      "endpoint": "DELETE /v1/users/:user_id/logins/:id",
      "reference": "https://canvas.instructure.com/doc/api/logins.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "modules": [
    {
      "display_name": "List modules",
      "controller": "modules",
      "description": "A paginated list of the modules in a course",
      "name": "list_modules",
      "endpoint": "GET /v1/courses/:course_id/modules",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"items\": Return module items inline if possible.\n  This parameter suggests that Canvas return module items directly\n  in the Module object JSON, to avoid having to make separate API\n  requests for each module when enumerating modules and items. Canvas\n  is free to omit 'items' for any particular module if it deems them\n  too numerous to return inline. Callers must be prepared to use the\n  {api:ContextModuleItemsApiController#index List Module Items API}\n  if items are not returned.\n- \"content_details\": Requires 'items'. Returns additional\n  details with module items specific to their associated content items.\n  Includes standard lock information for each item.",
          "example": [
            "items",
            "content_details"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name of the modules (and module items, if 'items' is\nspecified with include[]) to match and return.",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "Returns module completion information for the student with this id.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show module",
      "controller": "modules",
      "description": "Get information about a single module",
      "name": "show_module",
      "endpoint": "GET /v1/courses/:course_id/modules/:id",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "- \"items\": Return module items inline if possible.\n  This parameter suggests that Canvas return module items directly\n  in the Module object JSON, to avoid having to make separate API\n  requests for each module when enumerating modules and items. Canvas\n  is free to omit 'items' for any particular module if it deems them\n  too numerous to return inline. Callers must be prepared to use the\n  {api:ContextModuleItemsApiController#index List Module Items API}\n  if items are not returned.\n- \"content_details\": Requires 'items'. Returns additional\n  details with module items specific to their associated content items.\n  Includes standard lock information for each item.",
          "example": [
            "items",
            "content_details"
          ]
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "Returns module completion information for the student with this id.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a module",
      "controller": "modules",
      "description": "Create and return a new module",
      "name": "create_module",
      "endpoint": "POST /v1/courses/:course_id/modules",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the module",
          "example": ""
        },
        {
          "name": "module.unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The date the module will unlock",
          "example": ""
        },
        {
          "name": "module.position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of this module in the course (1-based)",
          "example": ""
        },
        {
          "name": "module.require_sequential_progress",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether module items must be unlocked in order",
          "example": ""
        },
        {
          "name": "module.prerequisite_module_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "IDs of Modules that must be completed before this one is unlocked.\nPrerequisite modules must precede this module (i.e. have a lower position\nvalue), otherwise they will be ignored",
          "example": ""
        },
        {
          "name": "module.publish_final_grade",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to publish the student's final grade for the course upon\ncompletion of this module.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a module",
      "controller": "modules",
      "description": "Update and return an existing module",
      "name": "update_module",
      "endpoint": "PUT /v1/courses/:course_id/modules/:id",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module.name",
          "type": "string",
          "default_value": "",
          "desc": "The name of the module",
          "example": ""
        },
        {
          "name": "module.unlock_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "The date the module will unlock",
          "example": ""
        },
        {
          "name": "module.position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of the module in the course (1-based)",
          "example": ""
        },
        {
          "name": "module.require_sequential_progress",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether module items must be unlocked in order",
          "example": ""
        },
        {
          "name": "module.prerequisite_module_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "IDs of Modules that must be completed before this one is unlocked\nPrerequisite modules must precede this module (i.e. have a lower position\nvalue), otherwise they will be ignored",
          "example": ""
        },
        {
          "name": "module.publish_final_grade",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether to publish the student's final grade for the course upon\ncompletion of this module.",
          "example": ""
        },
        {
          "name": "module.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the module is published and visible to students",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete module",
      "controller": "modules",
      "description": "Delete a module",
      "name": "delete_module",
      "endpoint": "DELETE /v1/courses/:course_id/modules/:id",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Re-lock module progressions",
      "controller": "modules",
      "description": "Resets module progressions to their default locked state and\nrecalculates them based on the current requirements.\n\nAdding progression requirements to an active course will not lock students\nout of modules they have already unlocked unless this action is called.",
      "name": "re_lock_module_progressions",
      "endpoint": "PUT /v1/courses/:course_id/modules/:id/relock",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List module items",
      "controller": "modules",
      "description": "A paginated list of the items in a module",
      "name": "list_module_items",
      "endpoint": "GET /v1/courses/:course_id/modules/:module_id/items",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "If included, will return additional details specific to the content\nassociated with each item. Refer to the {api:Modules:Module%20Item Module\nItem specification} for more details.\nIncludes standard lock information for each item.",
          "example": [
            "content_details"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the items to match and return.",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "Returns module completion information for the student with this id.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show module item",
      "controller": "modules",
      "description": "Get information about a single module item",
      "name": "show_module_item",
      "endpoint": "GET /v1/courses/:course_id/modules/:module_id/items/:id",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "If included, will return additional details specific to the content\nassociated with this item. Refer to the {api:Modules:Module%20Item Module\nItem specification} for more details.\nIncludes standard lock information for each item.",
          "example": [
            "content_details"
          ]
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "Returns module completion information for the student with this id.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a module item",
      "controller": "modules",
      "description": "Create and return a new module item",
      "name": "create_module_item",
      "endpoint": "POST /v1/courses/:course_id/modules/:module_id/items",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_item.title",
          "type": "string",
          "default_value": "",
          "desc": "The name of the module item and associated content",
          "example": ""
        },
        {
          "name": "module_item.type",
          "type": "string",
          "default_value": "",
          "desc": "The type of content linked to the item",
          "example": [
            "File",
            "Page",
            "Discussion",
            "Assignment",
            "Quiz",
            "SubHeader",
            "ExternalUrl",
            "ExternalTool"
          ]
        },
        {
          "name": "module_item.content_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the content to link to the module item. Required, except for\n'ExternalUrl', 'Page', and 'SubHeader' types.",
          "example": ""
        },
        {
          "name": "module_item.position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of this item in the module (1-based).",
          "example": ""
        },
        {
          "name": "module_item.indent",
          "type": "integer",
          "default_value": "",
          "desc": "0-based indent level; module items may be indented to show a hierarchy",
          "example": ""
        },
        {
          "name": "module_item.page_url",
          "type": "string",
          "default_value": "",
          "desc": "Suffix for the linked wiki page (e.g. 'front-page'). Required for 'Page'\ntype.",
          "example": ""
        },
        {
          "name": "module_item.external_url",
          "type": "string",
          "default_value": "",
          "desc": "External url that the item points to. [Required for 'ExternalUrl' and\n'ExternalTool' types.",
          "example": ""
        },
        {
          "name": "module_item.new_tab",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the external tool opens in a new tab. Only applies to\n'ExternalTool' type.",
          "example": ""
        },
        {
          "name": "module_item.completion_requirement.type",
          "type": "string",
          "default_value": "",
          "desc": "Completion requirement for this module item.\n\"must_view\": Applies to all item types\n\"must_contribute\": Only applies to \"Assignment\", \"Discussion\", and \"Page\" types\n\"must_submit\", \"min_score\": Only apply to \"Assignment\" and \"Quiz\" types\n\"must_mark_done\": Only applies to \"Assignment\" and \"Page\" types\nInapplicable types will be ignored",
          "example": [
            "must_view",
            "must_contribute",
            "must_submit",
            "must_mark_done"
          ]
        },
        {
          "name": "module_item.completion_requirement.min_score",
          "type": "integer",
          "default_value": "",
          "desc": "Minimum score required to complete. Required for completion_requirement\ntype 'min_score'.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a module item",
      "controller": "modules",
      "description": "Update and return an existing module item",
      "name": "update_module_item",
      "endpoint": "PUT /v1/courses/:course_id/modules/:module_id/items/:id",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_item.title",
          "type": "string",
          "default_value": "",
          "desc": "The name of the module item",
          "example": ""
        },
        {
          "name": "module_item.position",
          "type": "integer",
          "default_value": "",
          "desc": "The position of this item in the module (1-based)",
          "example": ""
        },
        {
          "name": "module_item.indent",
          "type": "integer",
          "default_value": "",
          "desc": "0-based indent level; module items may be indented to show a hierarchy",
          "example": ""
        },
        {
          "name": "module_item.external_url",
          "type": "string",
          "default_value": "",
          "desc": "External url that the item points to. Only applies to 'ExternalUrl' type.",
          "example": ""
        },
        {
          "name": "module_item.new_tab",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the external tool opens in a new tab. Only applies to\n'ExternalTool' type.",
          "example": ""
        },
        {
          "name": "module_item.completion_requirement.type",
          "type": "string",
          "default_value": "",
          "desc": "Completion requirement for this module item.\n\"must_view\": Applies to all item types\n\"must_contribute\": Only applies to \"Assignment\", \"Discussion\", and \"Page\" types\n\"must_submit\", \"min_score\": Only apply to \"Assignment\" and \"Quiz\" types\n\"must_mark_done\": Only applies to \"Assignment\" and \"Page\" types\nInapplicable types will be ignored",
          "example": [
            "must_view",
            "must_contribute",
            "must_submit",
            "must_mark_done"
          ]
        },
        {
          "name": "module_item.completion_requirement.min_score",
          "type": "integer",
          "default_value": "",
          "desc": "Minimum score required to complete, Required for completion_requirement\ntype 'min_score'.",
          "example": ""
        },
        {
          "name": "module_item.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the module item is published and visible to students.",
          "example": ""
        },
        {
          "name": "module_item.module_id",
          "type": "string",
          "default_value": "",
          "desc": "Move this item to another module by specifying the target module id here.\nThe target module must be in the same course.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Select a mastery path",
      "controller": "modules",
      "description": "Select a mastery path when module item includes several possible paths.\nRequires Mastery Paths feature to be enabled.  Returns a compound document\nwith the assignments included in the given path and any module items\nrelated to those assignments",
      "name": "select_mastery_path",
      "endpoint": "POST /v1/courses/:course_id/modules/:module_id/items/:id/select_mastery_path",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_set_id",
          "type": "string",
          "default_value": "",
          "desc": "Assignment set chosen, as specified in the mastery_paths portion of the\ncontext module item response",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "string",
          "default_value": "",
          "desc": "Which student the selection applies to.  If not specified, current user is\nimplied.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete module item",
      "controller": "modules",
      "description": "Delete a module item",
      "name": "delete_module_item",
      "endpoint": "DELETE /v1/courses/:course_id/modules/:module_id/items/:id",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark module item as done/not done",
      "controller": "modules",
      "description": "Mark a module item as done/not done. Use HTTP method PUT to mark as done,\nand DELETE to mark as not done.",
      "name": "mark_module_item_as_done_not_done",
      "endpoint": "PUT /v1/courses/:course_id/modules/:module_id/items/:id/done",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get module item sequence",
      "controller": "modules",
      "description": "Given an asset in a course, find the ModuleItem it belongs to, the previous and next Module Items\nin the course sequence, and also any applicable mastery path rules",
      "name": "get_module_item_sequence",
      "endpoint": "GET /v1/courses/:course_id/module_item_sequence",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "asset_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of asset to find module sequence information for. Use the ModuleItem if it is known\n(e.g., the user navigated from a module item), since this will avoid ambiguity if the asset\nappears more than once in the module sequence.",
          "example": [
            "ModuleItem",
            "File",
            "Page",
            "Discussion",
            "Assignment",
            "Quiz",
            "ExternalTool"
          ]
        },
        {
          "name": "asset_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the asset (or the url in the case of a Page)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark module item read",
      "controller": "modules",
      "description": "Fulfills \"must view\" requirement for a module item. It is generally not necessary to do this explicitly,\nbut it is provided for applications that need to access external content directly (bypassing the html_url\nredirect that normally allows Canvas to fulfill \"must view\" requirements).\n\nThis endpoint cannot be used to complete requirements on locked or unpublished module items.",
      "name": "mark_module_item_read",
      "endpoint": "POST /v1/courses/:course_id/modules/:module_id/items/:id/mark_read",
      "reference": "https://canvas.instructure.com/doc/api/modules.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "module_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "outcome_groups": [
    {
      "display_name": "Redirect to root outcome group for context",
      "controller": "outcome_groups",
      "description": "Convenience redirect to find the root outcome group for a particular\ncontext. Will redirect to the appropriate outcome group's URL.",
      "name": "redirect_to_root_outcome_group_for_context_global",
      "endpoint": "GET /v1/global/root_outcome_group",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": []
    },
    {
      "display_name": "Redirect to root outcome group for context",
      "controller": "outcome_groups",
      "description": "Convenience redirect to find the root outcome group for a particular\ncontext. Will redirect to the appropriate outcome group's URL.",
      "name": "redirect_to_root_outcome_group_for_context_accounts",
      "endpoint": "GET /v1/accounts/:account_id/root_outcome_group",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Redirect to root outcome group for context",
      "controller": "outcome_groups",
      "description": "Convenience redirect to find the root outcome group for a particular\ncontext. Will redirect to the appropriate outcome group's URL.",
      "name": "redirect_to_root_outcome_group_for_context_courses",
      "endpoint": "GET /v1/courses/:course_id/root_outcome_group",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get all outcome groups for context",
      "controller": "outcome_groups",
      "description": "",
      "name": "get_all_outcome_groups_for_context_accounts",
      "endpoint": "GET /v1/accounts/:account_id/outcome_groups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get all outcome groups for context",
      "controller": "outcome_groups",
      "description": "",
      "name": "get_all_outcome_groups_for_context_courses",
      "endpoint": "GET /v1/courses/:course_id/outcome_groups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get all outcome links for context",
      "controller": "outcome_groups",
      "description": "",
      "name": "get_all_outcome_links_for_context_accounts",
      "endpoint": "GET /v1/accounts/:account_id/outcome_group_links",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcomes. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        },
        {
          "name": "outcome_group_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcome groups. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get all outcome links for context",
      "controller": "outcome_groups",
      "description": "",
      "name": "get_all_outcome_links_for_context_courses",
      "endpoint": "GET /v1/courses/:course_id/outcome_group_links",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcomes. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        },
        {
          "name": "outcome_group_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcome groups. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show an outcome group",
      "controller": "outcome_groups",
      "description": "",
      "name": "show_outcome_group_global",
      "endpoint": "GET /v1/global/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show an outcome group",
      "controller": "outcome_groups",
      "description": "",
      "name": "show_outcome_group_accounts",
      "endpoint": "GET /v1/accounts/:account_id/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show an outcome group",
      "controller": "outcome_groups",
      "description": "",
      "name": "show_outcome_group_courses",
      "endpoint": "GET /v1/courses/:course_id/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an outcome group",
      "controller": "outcome_groups",
      "description": "Modify an existing outcome group. Fields not provided are left as is;\nunrecognized fields are ignored.\n\nWhen changing the parent outcome group, the new parent group must belong to\nthe same context as this outcome group, and must not be a descendant of\nthis outcome group (i.e. no cycles allowed).",
      "name": "update_outcome_group_global",
      "endpoint": "PUT /v1/global/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome group title.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome group description.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "parent_outcome_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the new parent outcome group.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an outcome group",
      "controller": "outcome_groups",
      "description": "Modify an existing outcome group. Fields not provided are left as is;\nunrecognized fields are ignored.\n\nWhen changing the parent outcome group, the new parent group must belong to\nthe same context as this outcome group, and must not be a descendant of\nthis outcome group (i.e. no cycles allowed).",
      "name": "update_outcome_group_accounts",
      "endpoint": "PUT /v1/accounts/:account_id/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome group title.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome group description.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "parent_outcome_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the new parent outcome group.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an outcome group",
      "controller": "outcome_groups",
      "description": "Modify an existing outcome group. Fields not provided are left as is;\nunrecognized fields are ignored.\n\nWhen changing the parent outcome group, the new parent group must belong to\nthe same context as this outcome group, and must not be a descendant of\nthis outcome group (i.e. no cycles allowed).",
      "name": "update_outcome_group_courses",
      "endpoint": "PUT /v1/courses/:course_id/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome group title.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome group description.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "parent_outcome_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the new parent outcome group.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete an outcome group",
      "controller": "outcome_groups",
      "description": "Deleting an outcome group deletes descendant outcome groups and outcome\nlinks. The linked outcomes themselves are only deleted if all links to the\noutcome were deleted.\n\nAligned outcomes cannot be deleted; as such, if all remaining links to an\naligned outcome are included in this group's descendants, the group\ndeletion will fail.",
      "name": "delete_outcome_group_global",
      "endpoint": "DELETE /v1/global/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete an outcome group",
      "controller": "outcome_groups",
      "description": "Deleting an outcome group deletes descendant outcome groups and outcome\nlinks. The linked outcomes themselves are only deleted if all links to the\noutcome were deleted.\n\nAligned outcomes cannot be deleted; as such, if all remaining links to an\naligned outcome are included in this group's descendants, the group\ndeletion will fail.",
      "name": "delete_outcome_group_accounts",
      "endpoint": "DELETE /v1/accounts/:account_id/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete an outcome group",
      "controller": "outcome_groups",
      "description": "Deleting an outcome group deletes descendant outcome groups and outcome\nlinks. The linked outcomes themselves are only deleted if all links to the\noutcome were deleted.\n\nAligned outcomes cannot be deleted; as such, if all remaining links to an\naligned outcome are included in this group's descendants, the group\ndeletion will fail.",
      "name": "delete_outcome_group_courses",
      "endpoint": "DELETE /v1/courses/:course_id/outcome_groups/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List linked outcomes",
      "controller": "outcome_groups",
      "description": "A paginated list of the immediate OutcomeLink children of the outcome group.",
      "name": "list_linked_outcomes_global",
      "endpoint": "GET /v1/global/outcome_groups/:id/outcomes",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcomes. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List linked outcomes",
      "controller": "outcome_groups",
      "description": "A paginated list of the immediate OutcomeLink children of the outcome group.",
      "name": "list_linked_outcomes_accounts",
      "endpoint": "GET /v1/accounts/:account_id/outcome_groups/:id/outcomes",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcomes. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List linked outcomes",
      "controller": "outcome_groups",
      "description": "A paginated list of the immediate OutcomeLink children of the outcome group.",
      "name": "list_linked_outcomes_courses",
      "endpoint": "GET /v1/courses/:course_id/outcome_groups/:id/outcomes",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_style",
          "type": "string",
          "default_value": "",
          "desc": "The detail level of the outcomes. Defaults to \"abbrev\".\nSpecify \"full\" for more information.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create/link an outcome",
      "controller": "outcome_groups",
      "description": "Link an outcome into the outcome group. The outcome to link can either be\nspecified by a PUT to the link URL for a specific outcome (the outcome_id\nin the PUT URLs) or by supplying the information for a new outcome (title,\ndescription, ratings, mastery_points) in a POST to the collection.\n\nIf linking an existing outcome, the outcome_id must identify an outcome\navailable to this context; i.e. an outcome owned by this group's context,\nan outcome owned by an associated account, or a global outcome. With\noutcome_id present, any other parameters (except move_from) are ignored.\n\nIf defining a new outcome, the outcome is created in the outcome group's\ncontext using the provided title, description, ratings, and mastery points;\nthe title is required but all other fields are optional. The new outcome\nis then linked into the outcome group.\n\nIf ratings are provided when creating a new outcome, an embedded rubric\ncriterion is included in the new outcome. This criterion's mastery_points\ndefault to the maximum points in the highest rating if not specified in the\nmastery_points parameter. Any ratings lacking a description are given a\ndefault of \"No description\". Any ratings lacking a point value are given a\ndefault of 0. If no ratings are provided, the mastery_points parameter is\nignored.",
      "name": "create_link_outcome_global",
      "endpoint": "POST /v1/global/outcome_groups/:id/outcomes",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the existing outcome to link.",
          "example": ""
        },
        {
          "name": "move_from",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the old outcome group. Only used if outcome_id is present.",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome. Required if outcome_id is absent.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.  Defaults to \"decaying_average\"",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\". Defaults to 65",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create/link an outcome",
      "controller": "outcome_groups",
      "description": "Link an outcome into the outcome group. The outcome to link can either be\nspecified by a PUT to the link URL for a specific outcome (the outcome_id\nin the PUT URLs) or by supplying the information for a new outcome (title,\ndescription, ratings, mastery_points) in a POST to the collection.\n\nIf linking an existing outcome, the outcome_id must identify an outcome\navailable to this context; i.e. an outcome owned by this group's context,\nan outcome owned by an associated account, or a global outcome. With\noutcome_id present, any other parameters (except move_from) are ignored.\n\nIf defining a new outcome, the outcome is created in the outcome group's\ncontext using the provided title, description, ratings, and mastery points;\nthe title is required but all other fields are optional. The new outcome\nis then linked into the outcome group.\n\nIf ratings are provided when creating a new outcome, an embedded rubric\ncriterion is included in the new outcome. This criterion's mastery_points\ndefault to the maximum points in the highest rating if not specified in the\nmastery_points parameter. Any ratings lacking a description are given a\ndefault of \"No description\". Any ratings lacking a point value are given a\ndefault of 0. If no ratings are provided, the mastery_points parameter is\nignored.",
      "name": "create_link_outcome_global_outcome_id",
      "endpoint": "PUT /v1/global/outcome_groups/:id/outcomes/:outcome_id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the existing outcome to link.",
          "example": ""
        },
        {
          "name": "move_from",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the old outcome group. Only used if outcome_id is present.",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome. Required if outcome_id is absent.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.  Defaults to \"decaying_average\"",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\". Defaults to 65",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create/link an outcome",
      "controller": "outcome_groups",
      "description": "Link an outcome into the outcome group. The outcome to link can either be\nspecified by a PUT to the link URL for a specific outcome (the outcome_id\nin the PUT URLs) or by supplying the information for a new outcome (title,\ndescription, ratings, mastery_points) in a POST to the collection.\n\nIf linking an existing outcome, the outcome_id must identify an outcome\navailable to this context; i.e. an outcome owned by this group's context,\nan outcome owned by an associated account, or a global outcome. With\noutcome_id present, any other parameters (except move_from) are ignored.\n\nIf defining a new outcome, the outcome is created in the outcome group's\ncontext using the provided title, description, ratings, and mastery points;\nthe title is required but all other fields are optional. The new outcome\nis then linked into the outcome group.\n\nIf ratings are provided when creating a new outcome, an embedded rubric\ncriterion is included in the new outcome. This criterion's mastery_points\ndefault to the maximum points in the highest rating if not specified in the\nmastery_points parameter. Any ratings lacking a description are given a\ndefault of \"No description\". Any ratings lacking a point value are given a\ndefault of 0. If no ratings are provided, the mastery_points parameter is\nignored.",
      "name": "create_link_outcome_accounts",
      "endpoint": "POST /v1/accounts/:account_id/outcome_groups/:id/outcomes",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the existing outcome to link.",
          "example": ""
        },
        {
          "name": "move_from",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the old outcome group. Only used if outcome_id is present.",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome. Required if outcome_id is absent.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.  Defaults to \"decaying_average\"",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\". Defaults to 65",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create/link an outcome",
      "controller": "outcome_groups",
      "description": "Link an outcome into the outcome group. The outcome to link can either be\nspecified by a PUT to the link URL for a specific outcome (the outcome_id\nin the PUT URLs) or by supplying the information for a new outcome (title,\ndescription, ratings, mastery_points) in a POST to the collection.\n\nIf linking an existing outcome, the outcome_id must identify an outcome\navailable to this context; i.e. an outcome owned by this group's context,\nan outcome owned by an associated account, or a global outcome. With\noutcome_id present, any other parameters (except move_from) are ignored.\n\nIf defining a new outcome, the outcome is created in the outcome group's\ncontext using the provided title, description, ratings, and mastery points;\nthe title is required but all other fields are optional. The new outcome\nis then linked into the outcome group.\n\nIf ratings are provided when creating a new outcome, an embedded rubric\ncriterion is included in the new outcome. This criterion's mastery_points\ndefault to the maximum points in the highest rating if not specified in the\nmastery_points parameter. Any ratings lacking a description are given a\ndefault of \"No description\". Any ratings lacking a point value are given a\ndefault of 0. If no ratings are provided, the mastery_points parameter is\nignored.",
      "name": "create_link_outcome_accounts_outcome_id",
      "endpoint": "PUT /v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the existing outcome to link.",
          "example": ""
        },
        {
          "name": "move_from",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the old outcome group. Only used if outcome_id is present.",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome. Required if outcome_id is absent.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.  Defaults to \"decaying_average\"",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\". Defaults to 65",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create/link an outcome",
      "controller": "outcome_groups",
      "description": "Link an outcome into the outcome group. The outcome to link can either be\nspecified by a PUT to the link URL for a specific outcome (the outcome_id\nin the PUT URLs) or by supplying the information for a new outcome (title,\ndescription, ratings, mastery_points) in a POST to the collection.\n\nIf linking an existing outcome, the outcome_id must identify an outcome\navailable to this context; i.e. an outcome owned by this group's context,\nan outcome owned by an associated account, or a global outcome. With\noutcome_id present, any other parameters (except move_from) are ignored.\n\nIf defining a new outcome, the outcome is created in the outcome group's\ncontext using the provided title, description, ratings, and mastery points;\nthe title is required but all other fields are optional. The new outcome\nis then linked into the outcome group.\n\nIf ratings are provided when creating a new outcome, an embedded rubric\ncriterion is included in the new outcome. This criterion's mastery_points\ndefault to the maximum points in the highest rating if not specified in the\nmastery_points parameter. Any ratings lacking a description are given a\ndefault of \"No description\". Any ratings lacking a point value are given a\ndefault of 0. If no ratings are provided, the mastery_points parameter is\nignored.",
      "name": "create_link_outcome_courses",
      "endpoint": "POST /v1/courses/:course_id/outcome_groups/:id/outcomes",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the existing outcome to link.",
          "example": ""
        },
        {
          "name": "move_from",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the old outcome group. Only used if outcome_id is present.",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome. Required if outcome_id is absent.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.  Defaults to \"decaying_average\"",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\". Defaults to 65",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create/link an outcome",
      "controller": "outcome_groups",
      "description": "Link an outcome into the outcome group. The outcome to link can either be\nspecified by a PUT to the link URL for a specific outcome (the outcome_id\nin the PUT URLs) or by supplying the information for a new outcome (title,\ndescription, ratings, mastery_points) in a POST to the collection.\n\nIf linking an existing outcome, the outcome_id must identify an outcome\navailable to this context; i.e. an outcome owned by this group's context,\nan outcome owned by an associated account, or a global outcome. With\noutcome_id present, any other parameters (except move_from) are ignored.\n\nIf defining a new outcome, the outcome is created in the outcome group's\ncontext using the provided title, description, ratings, and mastery points;\nthe title is required but all other fields are optional. The new outcome\nis then linked into the outcome group.\n\nIf ratings are provided when creating a new outcome, an embedded rubric\ncriterion is included in the new outcome. This criterion's mastery_points\ndefault to the maximum points in the highest rating if not specified in the\nmastery_points parameter. Any ratings lacking a description are given a\ndefault of \"No description\". Any ratings lacking a point value are given a\ndefault of 0. If no ratings are provided, the mastery_points parameter is\nignored.",
      "name": "create_link_outcome_courses_outcome_id",
      "endpoint": "PUT /v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the existing outcome to link.",
          "example": ""
        },
        {
          "name": "move_from",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the old outcome group. Only used if outcome_id is present.",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome. Required if outcome_id is absent.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.  Defaults to \"decaying_average\"",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\". Defaults to 65",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Unlink an outcome",
      "controller": "outcome_groups",
      "description": "Unlinking an outcome only deletes the outcome itself if this was the last\nlink to the outcome in any group in any context. Aligned outcomes cannot be\ndeleted; as such, if this is the last link to an aligned outcome, the\nunlinking will fail.",
      "name": "unlink_outcome_global",
      "endpoint": "DELETE /v1/global/outcome_groups/:id/outcomes/:outcome_id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Unlink an outcome",
      "controller": "outcome_groups",
      "description": "Unlinking an outcome only deletes the outcome itself if this was the last\nlink to the outcome in any group in any context. Aligned outcomes cannot be\ndeleted; as such, if this is the last link to an aligned outcome, the\nunlinking will fail.",
      "name": "unlink_outcome_accounts",
      "endpoint": "DELETE /v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Unlink an outcome",
      "controller": "outcome_groups",
      "description": "Unlinking an outcome only deletes the outcome itself if this was the last\nlink to the outcome in any group in any context. Aligned outcomes cannot be\ndeleted; as such, if this is the last link to an aligned outcome, the\nunlinking will fail.",
      "name": "unlink_outcome_courses",
      "endpoint": "DELETE /v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "outcome_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List subgroups",
      "controller": "outcome_groups",
      "description": "A paginated list of the immediate OutcomeGroup children of the outcome group.",
      "name": "list_subgroups_global",
      "endpoint": "GET /v1/global/outcome_groups/:id/subgroups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List subgroups",
      "controller": "outcome_groups",
      "description": "A paginated list of the immediate OutcomeGroup children of the outcome group.",
      "name": "list_subgroups_accounts",
      "endpoint": "GET /v1/accounts/:account_id/outcome_groups/:id/subgroups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List subgroups",
      "controller": "outcome_groups",
      "description": "A paginated list of the immediate OutcomeGroup children of the outcome group.",
      "name": "list_subgroups_courses",
      "endpoint": "GET /v1/courses/:course_id/outcome_groups/:id/subgroups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a subgroup",
      "controller": "outcome_groups",
      "description": "Creates a new empty subgroup under the outcome group with the given title\nand description.",
      "name": "create_subgroup_global",
      "endpoint": "POST /v1/global/outcome_groups/:id/subgroups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome group.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome group.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a subgroup",
      "controller": "outcome_groups",
      "description": "Creates a new empty subgroup under the outcome group with the given title\nand description.",
      "name": "create_subgroup_accounts",
      "endpoint": "POST /v1/accounts/:account_id/outcome_groups/:id/subgroups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome group.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome group.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a subgroup",
      "controller": "outcome_groups",
      "description": "Creates a new empty subgroup under the outcome group with the given title\nand description.",
      "name": "create_subgroup_courses",
      "endpoint": "POST /v1/courses/:course_id/outcome_groups/:id/subgroups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the new outcome group.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The description of the new outcome group.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Import an outcome group",
      "controller": "outcome_groups",
      "description": "Creates a new subgroup of the outcome group with the same title and\ndescription as the source group, then creates links in that new subgroup to\nthe same outcomes that are linked in the source group. Recurses on the\nsubgroups of the source group, importing them each in turn into the new\nsubgroup.\n\nAllows you to copy organizational structure, but does not create copies of\nthe outcomes themselves, only new links.\n\nThe source group must be either global, from the same context as this\noutcome group, or from an associated account. The source group cannot be\nthe root outcome group of its context.",
      "name": "import_outcome_group_global",
      "endpoint": "POST /v1/global/outcome_groups/:id/import",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "source_outcome_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the source outcome group.",
          "example": ""
        },
        {
          "name": "async",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, perform action asynchronously.  In that case, this endpoint\nwill return a Progress object instead of an OutcomeGroup.\nUse the {api:ProgressController#show progress endpoint}\nto query the status of the operation.  The imported outcome group id\nand url will be returned in the results of the Progress object\nas \"outcome_group_id\" and \"outcome_group_url\"",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Import an outcome group",
      "controller": "outcome_groups",
      "description": "Creates a new subgroup of the outcome group with the same title and\ndescription as the source group, then creates links in that new subgroup to\nthe same outcomes that are linked in the source group. Recurses on the\nsubgroups of the source group, importing them each in turn into the new\nsubgroup.\n\nAllows you to copy organizational structure, but does not create copies of\nthe outcomes themselves, only new links.\n\nThe source group must be either global, from the same context as this\noutcome group, or from an associated account. The source group cannot be\nthe root outcome group of its context.",
      "name": "import_outcome_group_accounts",
      "endpoint": "POST /v1/accounts/:account_id/outcome_groups/:id/import",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "source_outcome_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the source outcome group.",
          "example": ""
        },
        {
          "name": "async",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, perform action asynchronously.  In that case, this endpoint\nwill return a Progress object instead of an OutcomeGroup.\nUse the {api:ProgressController#show progress endpoint}\nto query the status of the operation.  The imported outcome group id\nand url will be returned in the results of the Progress object\nas \"outcome_group_id\" and \"outcome_group_url\"",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Import an outcome group",
      "controller": "outcome_groups",
      "description": "Creates a new subgroup of the outcome group with the same title and\ndescription as the source group, then creates links in that new subgroup to\nthe same outcomes that are linked in the source group. Recurses on the\nsubgroups of the source group, importing them each in turn into the new\nsubgroup.\n\nAllows you to copy organizational structure, but does not create copies of\nthe outcomes themselves, only new links.\n\nThe source group must be either global, from the same context as this\noutcome group, or from an associated account. The source group cannot be\nthe root outcome group of its context.",
      "name": "import_outcome_group_courses",
      "endpoint": "POST /v1/courses/:course_id/outcome_groups/:id/import",
      "reference": "https://canvas.instructure.com/doc/api/outcome_groups.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "source_outcome_group_id",
          "type": "integer",
          "default_value": "",
          "desc": "The ID of the source outcome group.",
          "example": ""
        },
        {
          "name": "async",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, perform action asynchronously.  In that case, this endpoint\nwill return a Progress object instead of an OutcomeGroup.\nUse the {api:ProgressController#show progress endpoint}\nto query the status of the operation.  The imported outcome group id\nand url will be returned in the results of the Progress object\nas \"outcome_group_id\" and \"outcome_group_url\"",
          "example": ""
        }
      ]
    }
  ],
  "outcome_imports": [
    {
      "display_name": "Import Outcomes",
      "controller": "outcome_imports",
      "description": "Import outcomes into Canvas.\n\nFor more information on the format that's expected here, please see the\n\"Outcomes CSV\" section in the API docs.",
      "name": "import_outcomes_accounts",
      "endpoint": "POST /v1/accounts/:account_id/outcome_imports",
      "reference": "https://canvas.instructure.com/doc/api/outcome_imports.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "import_type",
          "type": "string",
          "default_value": "",
          "desc": "Choose the data format for reading outcome data. With a standard Canvas\ninstall, this option can only be 'instructure_csv', and if unprovided,\nwill be assumed to be so. Can be part of the query string.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "string",
          "default_value": "",
          "desc": "There are two ways to post outcome import data - either via a\nmultipart/form-data form-field-style attachment, or via a non-multipart\nraw post request.\n\n'attachment' is required for multipart/form-data style posts. Assumed to\nbe outcome data from a file upload form field named 'attachment'.\n\nExamples:\n  curl -F attachment=@<filename> -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv'\n  curl -F attachment=@<filename> -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'\n\nIf you decide to do a raw post, you can skip the 'attachment' argument,\nbut you will then be required to provide a suitable Content-Type header.\nYou are encouraged to also provide the 'extension' argument.\n\nExamples:\n  curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv \\\n      -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv'\n\n  curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv \\\n      -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'",
          "example": ""
        },
        {
          "name": "extension",
          "type": "string",
          "default_value": "",
          "desc": "Recommended for raw post request style imports. This field will be used to\ndistinguish between csv and other file format extensions that\nwould usually be provided with the filename in the multipart post request\nscenario. If not provided, this value will be inferred from the\nContent-Type, falling back to csv-file format if all else fails.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Import Outcomes",
      "controller": "outcome_imports",
      "description": "Import outcomes into Canvas.\n\nFor more information on the format that's expected here, please see the\n\"Outcomes CSV\" section in the API docs.",
      "name": "import_outcomes_courses",
      "endpoint": "POST /v1/courses/:course_id/outcome_imports",
      "reference": "https://canvas.instructure.com/doc/api/outcome_imports.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "import_type",
          "type": "string",
          "default_value": "",
          "desc": "Choose the data format for reading outcome data. With a standard Canvas\ninstall, this option can only be 'instructure_csv', and if unprovided,\nwill be assumed to be so. Can be part of the query string.",
          "example": ""
        },
        {
          "name": "attachment",
          "type": "string",
          "default_value": "",
          "desc": "There are two ways to post outcome import data - either via a\nmultipart/form-data form-field-style attachment, or via a non-multipart\nraw post request.\n\n'attachment' is required for multipart/form-data style posts. Assumed to\nbe outcome data from a file upload form field named 'attachment'.\n\nExamples:\n  curl -F attachment=@<filename> -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv'\n  curl -F attachment=@<filename> -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'\n\nIf you decide to do a raw post, you can skip the 'attachment' argument,\nbut you will then be required to provide a suitable Content-Type header.\nYou are encouraged to also provide the 'extension' argument.\n\nExamples:\n  curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv \\\n      -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports?import_type=instructure_csv'\n\n  curl -H 'Content-Type: text/csv' --data-binary @<filename>.csv \\\n      -H \"Authorization: Bearer <token>\" \\\n      'https://<canvas>/api/v1/courses/<course_id>/outcome_imports?import_type=instructure_csv'",
          "example": ""
        },
        {
          "name": "extension",
          "type": "string",
          "default_value": "",
          "desc": "Recommended for raw post request style imports. This field will be used to\ndistinguish between csv and other file format extensions that\nwould usually be provided with the filename in the multipart post request\nscenario. If not provided, this value will be inferred from the\nContent-Type, falling back to csv-file format if all else fails.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get Outcome import status",
      "controller": "outcome_imports",
      "description": "Get the status of an already created Outcome import. Pass 'latest' for the outcome import id\nfor the latest import.\n\n  Examples:\n    curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \\\n        -H \"Authorization: Bearer <token>\"\n    curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \\\n        -H \"Authorization: Bearer <token>\"",
      "name": "get_outcome_import_status_accounts",
      "endpoint": "GET /v1/accounts/:account_id/outcome_imports/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_imports.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get Outcome import status",
      "controller": "outcome_imports",
      "description": "Get the status of an already created Outcome import. Pass 'latest' for the outcome import id\nfor the latest import.\n\n  Examples:\n    curl 'https://<canvas>/api/v1/accounts/<account_id>/outcome_imports/<outcome_import_id>' \\\n        -H \"Authorization: Bearer <token>\"\n    curl 'https://<canvas>/api/v1/courses/<course_id>/outcome_imports/<outcome_import_id>' \\\n        -H \"Authorization: Bearer <token>\"",
      "name": "get_outcome_import_status_courses",
      "endpoint": "GET /v1/courses/:course_id/outcome_imports/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcome_imports.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "outcome_results": [
    {
      "display_name": "Get outcome results",
      "controller": "outcome_results",
      "description": "Gets the outcome results for users and outcomes in the specified context.",
      "name": "get_outcome_results",
      "endpoint": "GET /v1/courses/:course_id/outcome_results",
      "reference": "https://canvas.instructure.com/doc/api/outcome_results.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If specified, only the users whose ids are given will be included in the\nresults. SIS ids can be used, prefixed by \"sis_user_id:\".\nIt is an error to specify an id for a user who is not a student in\nthe context.",
          "example": ""
        },
        {
          "name": "outcome_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If specified, only the outcomes whose ids are given will be included in the\nresults. it is an error to specify an id for an outcome which is not linked\nto the context.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "[String, \"alignments\"|\"outcomes\"|\"outcomes.alignments\"|\"outcome_groups\"|\"outcome_links\"|\"outcome_paths\"|\"users\"]\nSpecify additional collections to be side loaded with the result.\n\"alignments\" includes only the alignments referenced by the returned\nresults.\n\"outcomes.alignments\" includes all alignments referenced by outcomes in the\ncontext.",
          "example": ""
        },
        {
          "name": "include_hidden",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, results that are hidden from the learning mastery gradebook and student rollup\nscores will be included",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get outcome result rollups",
      "controller": "outcome_results",
      "description": "Gets the outcome rollups for the users and outcomes in the specified\ncontext.",
      "name": "get_outcome_result_rollups",
      "endpoint": "GET /v1/courses/:course_id/outcome_rollups",
      "reference": "https://canvas.instructure.com/doc/api/outcome_results.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "aggregate",
          "type": "string",
          "default_value": "",
          "desc": "If specified, instead of returning one rollup for each user, all the user\nrollups will be combined into one rollup for the course that will contain\nthe average (or median, see below) rollup score for each outcome.",
          "example": [
            "course"
          ]
        },
        {
          "name": "aggregate_stat",
          "type": "string",
          "default_value": "",
          "desc": "If aggregate rollups requested, then this value determines what\nstatistic is used for the aggregate. Defaults to \"mean\" if this value\nis not specified.",
          "example": [
            "mean",
            "median"
          ]
        },
        {
          "name": "user_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If specified, only the users whose ids are given will be included in the\nresults or used in an aggregate result. it is an error to specify an id\nfor a user who is not a student in the context",
          "example": ""
        },
        {
          "name": "outcome_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "If specified, only the outcomes whose ids are given will be included in the\nresults. it is an error to specify an id for an outcome which is not linked\nto the context.",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "[String, \"courses\"|\"outcomes\"|\"outcomes.alignments\"|\"outcome_groups\"|\"outcome_links\"|\"outcome_paths\"|\"users\"]\nSpecify additional collections to be side loaded with the result.",
          "example": ""
        },
        {
          "name": "exclude[]",
          "type": "array",
          "default_value": "",
          "desc": "Specify additional values to exclude. \"missing_user_rollups\" excludes\nrollups for users without results.",
          "example": [
            "missing_user_rollups"
          ]
        },
        {
          "name": "sort_by",
          "type": "string",
          "default_value": "",
          "desc": "If specified, sorts outcome result rollups. \"student\" sorting will sort\nby a user's sortable name. \"outcome\" sorting will sort by the given outcome's\nrollup score. The latter requires specifying the \"sort_outcome_id\" parameter.\nBy default, the sort order is ascending.",
          "example": [
            "student",
            "outcome"
          ]
        },
        {
          "name": "sort_outcome_id",
          "type": "integer",
          "default_value": "",
          "desc": "If outcome sorting requested, then this determines which outcome to use\nfor rollup score sorting.",
          "example": ""
        },
        {
          "name": "sort_order",
          "type": "string",
          "default_value": "",
          "desc": "If sorting requested, then this allows changing the default sort order of\nascending to descending.",
          "example": [
            "asc",
            "desc"
          ]
        }
      ]
    }
  ],
  "outcomes": [
    {
      "display_name": "Show an outcome",
      "controller": "outcomes",
      "description": "Returns the details of the outcome with the given id.",
      "name": "show_outcome",
      "endpoint": "GET /v1/outcomes/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcomes.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update an outcome",
      "controller": "outcomes",
      "description": "Modify an existing outcome. Fields not provided are left as is;\nunrecognized fields are ignored.\n\nIf any new ratings are provided, the combination of all new ratings\nprovided completely replace any existing embedded rubric criterion; it is\nnot possible to tweak the ratings of the embedded rubric criterion.\n\nA new embedded rubric criterion's mastery_points default to the maximum\npoints in the highest rating if not specified in the mastery_points\nparameter. Any new ratings lacking a description are given a default of \"No\ndescription\". Any new ratings lacking a point value are given a default of\n0.",
      "name": "update_outcome",
      "endpoint": "PUT /v1/outcomes/:id",
      "reference": "https://canvas.instructure.com/doc/api/outcomes.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "title",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome title.",
          "example": ""
        },
        {
          "name": "display_name",
          "type": "string",
          "default_value": "",
          "desc": "A friendly name shown in reports for outcomes with cryptic titles,\nsuch as common core standards names.",
          "example": ""
        },
        {
          "name": "description",
          "type": "string",
          "default_value": "",
          "desc": "The new outcome description.",
          "example": ""
        },
        {
          "name": "vendor_guid",
          "type": "string",
          "default_value": "",
          "desc": "A custom GUID for the learning standard.",
          "example": ""
        },
        {
          "name": "mastery_points",
          "type": "integer",
          "default_value": "",
          "desc": "The new mastery threshold for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.description[]",
          "type": "array",
          "default_value": "",
          "desc": "The description of a new rating level for the embedded rubric criterion.",
          "example": ""
        },
        {
          "name": "ratings.points[]",
          "type": "array",
          "default_value": "",
          "desc": "The points corresponding to a new rating level for the embedded rubric\ncriterion.",
          "example": ""
        },
        {
          "name": "calculation_method",
          "type": "string",
          "default_value": "",
          "desc": "The new calculation method.",
          "example": [
            "decaying_average",
            "n_mastery",
            "latest",
            "highest"
          ]
        },
        {
          "name": "calculation_int",
          "type": "integer",
          "default_value": "",
          "desc": "The new calculation int.  Only applies if the calculation_method is \"decaying_average\" or \"n_mastery\"",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get aligned assignments for an outcome in a course for a particular student",
      "controller": "outcomes",
      "description": "",
      "name": "get_aligned_assignments_for_outcome_in_course_for_particular_student",
      "endpoint": "GET /v1/courses/:course_id/outcome_alignments",
      "reference": "https://canvas.instructure.com/doc/api/outcomes.html",
      "params": [
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the course",
          "example": ""
        },
        {
          "name": "student_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the student",
          "example": ""
        }
      ]
    }
  ],
  "pages": [
    {
      "display_name": "Show front page",
      "controller": "pages",
      "description": "Retrieve the content of the front page",
      "name": "show_front_page_courses",
      "endpoint": "GET /v1/courses/:course_id/front_page",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show front page",
      "controller": "pages",
      "description": "Retrieve the content of the front page",
      "name": "show_front_page_groups",
      "endpoint": "GET /v1/groups/:group_id/front_page",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Duplicate page",
      "controller": "pages",
      "description": "Duplicate a wiki page",
      "name": "duplicate_page",
      "endpoint": "POST /v1/courses/:course_id/pages/:url/duplicate",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update/create front page",
      "controller": "pages",
      "description": "Update the title or contents of the front page",
      "name": "update_create_front_page_courses",
      "endpoint": "PUT /v1/courses/:course_id/front_page",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "wiki_page.title",
          "type": "string",
          "default_value": "",
          "desc": "The title for the new page. NOTE: changing a page's title will change its\nurl. The updated url will be returned in the result.",
          "example": ""
        },
        {
          "name": "wiki_page.body",
          "type": "string",
          "default_value": "",
          "desc": "The content for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.editing_roles",
          "type": "string",
          "default_value": "",
          "desc": "Which user roles are allowed to edit this page. Any combination\nof these roles is allowed (separated by commas).\n\n\"teachers\":: Allows editing by teachers in the course.\n\"students\":: Allows editing by students in the course.\n\"members\":: For group wikis, allows editing by members of the group.\n\"public\":: Allows editing by any user.",
          "example": [
            "teachers",
            "students",
            "members",
            "public"
          ]
        },
        {
          "name": "wiki_page.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether participants should be notified when this page changes.",
          "example": ""
        },
        {
          "name": "wiki_page.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the page is published (true) or draft state (false).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update/create front page",
      "controller": "pages",
      "description": "Update the title or contents of the front page",
      "name": "update_create_front_page_groups",
      "endpoint": "PUT /v1/groups/:group_id/front_page",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "wiki_page.title",
          "type": "string",
          "default_value": "",
          "desc": "The title for the new page. NOTE: changing a page's title will change its\nurl. The updated url will be returned in the result.",
          "example": ""
        },
        {
          "name": "wiki_page.body",
          "type": "string",
          "default_value": "",
          "desc": "The content for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.editing_roles",
          "type": "string",
          "default_value": "",
          "desc": "Which user roles are allowed to edit this page. Any combination\nof these roles is allowed (separated by commas).\n\n\"teachers\":: Allows editing by teachers in the course.\n\"students\":: Allows editing by students in the course.\n\"members\":: For group wikis, allows editing by members of the group.\n\"public\":: Allows editing by any user.",
          "example": [
            "teachers",
            "students",
            "members",
            "public"
          ]
        },
        {
          "name": "wiki_page.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether participants should be notified when this page changes.",
          "example": ""
        },
        {
          "name": "wiki_page.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the page is published (true) or draft state (false).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List pages",
      "controller": "pages",
      "description": "A paginated list of the wiki pages associated with a course or group",
      "name": "list_pages_courses",
      "endpoint": "GET /v1/courses/:course_id/pages",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "Sort results by this field.",
          "example": [
            "title",
            "created_at",
            "updated_at"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The sorting order. Defaults to 'asc'.",
          "example": [
            "asc",
            "desc"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the pages to match and return.",
          "example": ""
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only published paqes. If false, exclude published\npages. If not present, do not filter on published status.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List pages",
      "controller": "pages",
      "description": "A paginated list of the wiki pages associated with a course or group",
      "name": "list_pages_groups",
      "endpoint": "GET /v1/groups/:group_id/pages",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "Sort results by this field.",
          "example": [
            "title",
            "created_at",
            "updated_at"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The sorting order. Defaults to 'asc'.",
          "example": [
            "asc",
            "desc"
          ]
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial title of the pages to match and return.",
          "example": ""
        },
        {
          "name": "published",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, include only published paqes. If false, exclude published\npages. If not present, do not filter on published status.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create page",
      "controller": "pages",
      "description": "Create a new wiki page",
      "name": "create_page_courses",
      "endpoint": "POST /v1/courses/:course_id/pages",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "wiki_page.title",
          "type": "string",
          "default_value": "",
          "desc": "The title for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.body",
          "type": "string",
          "default_value": "",
          "desc": "The content for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.editing_roles",
          "type": "string",
          "default_value": "",
          "desc": "Which user roles are allowed to edit this page. Any combination\nof these roles is allowed (separated by commas).\n\n\"teachers\":: Allows editing by teachers in the course.\n\"students\":: Allows editing by students in the course.\n\"members\":: For group wikis, allows editing by members of the group.\n\"public\":: Allows editing by any user.",
          "example": [
            "teachers",
            "students",
            "members",
            "public"
          ]
        },
        {
          "name": "wiki_page.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether participants should be notified when this page changes.",
          "example": ""
        },
        {
          "name": "wiki_page.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the page is published (true) or draft state (false).",
          "example": ""
        },
        {
          "name": "wiki_page.front_page",
          "type": "boolean",
          "default_value": "",
          "desc": "Set an unhidden page as the front page (if true)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create page",
      "controller": "pages",
      "description": "Create a new wiki page",
      "name": "create_page_groups",
      "endpoint": "POST /v1/groups/:group_id/pages",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "wiki_page.title",
          "type": "string",
          "default_value": "",
          "desc": "The title for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.body",
          "type": "string",
          "default_value": "",
          "desc": "The content for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.editing_roles",
          "type": "string",
          "default_value": "",
          "desc": "Which user roles are allowed to edit this page. Any combination\nof these roles is allowed (separated by commas).\n\n\"teachers\":: Allows editing by teachers in the course.\n\"students\":: Allows editing by students in the course.\n\"members\":: For group wikis, allows editing by members of the group.\n\"public\":: Allows editing by any user.",
          "example": [
            "teachers",
            "students",
            "members",
            "public"
          ]
        },
        {
          "name": "wiki_page.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether participants should be notified when this page changes.",
          "example": ""
        },
        {
          "name": "wiki_page.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the page is published (true) or draft state (false).",
          "example": ""
        },
        {
          "name": "wiki_page.front_page",
          "type": "boolean",
          "default_value": "",
          "desc": "Set an unhidden page as the front page (if true)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show page",
      "controller": "pages",
      "description": "Retrieve the content of a wiki page",
      "name": "show_page_courses",
      "endpoint": "GET /v1/courses/:course_id/pages/:url",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show page",
      "controller": "pages",
      "description": "Retrieve the content of a wiki page",
      "name": "show_page_groups",
      "endpoint": "GET /v1/groups/:group_id/pages/:url",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update/create page",
      "controller": "pages",
      "description": "Update the title or contents of a wiki page",
      "name": "update_create_page_courses",
      "endpoint": "PUT /v1/courses/:course_id/pages/:url",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "wiki_page.title",
          "type": "string",
          "default_value": "",
          "desc": "The title for the new page. NOTE: changing a page's title will change its\nurl. The updated url will be returned in the result.",
          "example": ""
        },
        {
          "name": "wiki_page.body",
          "type": "string",
          "default_value": "",
          "desc": "The content for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.editing_roles",
          "type": "string",
          "default_value": "",
          "desc": "Which user roles are allowed to edit this page. Any combination\nof these roles is allowed (separated by commas).\n\n\"teachers\":: Allows editing by teachers in the course.\n\"students\":: Allows editing by students in the course.\n\"members\":: For group wikis, allows editing by members of the group.\n\"public\":: Allows editing by any user.",
          "example": [
            "teachers",
            "students",
            "members",
            "public"
          ]
        },
        {
          "name": "wiki_page.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether participants should be notified when this page changes.",
          "example": ""
        },
        {
          "name": "wiki_page.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the page is published (true) or draft state (false).",
          "example": ""
        },
        {
          "name": "wiki_page.front_page",
          "type": "boolean",
          "default_value": "",
          "desc": "Set an unhidden page as the front page (if true)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update/create page",
      "controller": "pages",
      "description": "Update the title or contents of a wiki page",
      "name": "update_create_page_groups",
      "endpoint": "PUT /v1/groups/:group_id/pages/:url",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "wiki_page.title",
          "type": "string",
          "default_value": "",
          "desc": "The title for the new page. NOTE: changing a page's title will change its\nurl. The updated url will be returned in the result.",
          "example": ""
        },
        {
          "name": "wiki_page.body",
          "type": "string",
          "default_value": "",
          "desc": "The content for the new page.",
          "example": ""
        },
        {
          "name": "wiki_page.editing_roles",
          "type": "string",
          "default_value": "",
          "desc": "Which user roles are allowed to edit this page. Any combination\nof these roles is allowed (separated by commas).\n\n\"teachers\":: Allows editing by teachers in the course.\n\"students\":: Allows editing by students in the course.\n\"members\":: For group wikis, allows editing by members of the group.\n\"public\":: Allows editing by any user.",
          "example": [
            "teachers",
            "students",
            "members",
            "public"
          ]
        },
        {
          "name": "wiki_page.notify_of_update",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether participants should be notified when this page changes.",
          "example": ""
        },
        {
          "name": "wiki_page.published",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the page is published (true) or draft state (false).",
          "example": ""
        },
        {
          "name": "wiki_page.front_page",
          "type": "boolean",
          "default_value": "",
          "desc": "Set an unhidden page as the front page (if true)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete page",
      "controller": "pages",
      "description": "Delete a wiki page",
      "name": "delete_page_courses",
      "endpoint": "DELETE /v1/courses/:course_id/pages/:url",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete page",
      "controller": "pages",
      "description": "Delete a wiki page",
      "name": "delete_page_groups",
      "endpoint": "DELETE /v1/groups/:group_id/pages/:url",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List revisions",
      "controller": "pages",
      "description": "A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.",
      "name": "list_revisions_courses",
      "endpoint": "GET /v1/courses/:course_id/pages/:url/revisions",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List revisions",
      "controller": "pages",
      "description": "A paginated list of the revisions of a page. Callers must have update rights on the page in order to see page history.",
      "name": "list_revisions_groups",
      "endpoint": "GET /v1/groups/:group_id/pages/:url/revisions",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show revision",
      "controller": "pages",
      "description": "Retrieve the metadata and optionally content of a revision of the page.\nNote that retrieving historic versions of pages requires edit rights.",
      "name": "show_revision_courses_latest",
      "endpoint": "GET /v1/courses/:course_id/pages/:url/revisions/latest",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "summary",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, exclude page content from results",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show revision",
      "controller": "pages",
      "description": "Retrieve the metadata and optionally content of a revision of the page.\nNote that retrieving historic versions of pages requires edit rights.",
      "name": "show_revision_groups_latest",
      "endpoint": "GET /v1/groups/:group_id/pages/:url/revisions/latest",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "summary",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, exclude page content from results",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show revision",
      "controller": "pages",
      "description": "Retrieve the metadata and optionally content of a revision of the page.\nNote that retrieving historic versions of pages requires edit rights.",
      "name": "show_revision_courses_revision_id",
      "endpoint": "GET /v1/courses/:course_id/pages/:url/revisions/:revision_id",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "revision_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "summary",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, exclude page content from results",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show revision",
      "controller": "pages",
      "description": "Retrieve the metadata and optionally content of a revision of the page.\nNote that retrieving historic versions of pages requires edit rights.",
      "name": "show_revision_groups_revision_id",
      "endpoint": "GET /v1/groups/:group_id/pages/:url/revisions/:revision_id",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "revision_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "summary",
          "type": "boolean",
          "default_value": "",
          "desc": "If set, exclude page content from results",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Revert to revision",
      "controller": "pages",
      "description": "Revert a page to a prior revision.",
      "name": "revert_to_revision_courses",
      "endpoint": "POST /v1/courses/:course_id/pages/:url/revisions/:revision_id",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "revision_id",
          "type": "integer",
          "default_value": "",
          "desc": "The revision to revert to (use the\n{api:WikiPagesApiController#revisions List Revisions API} to see\navailable revisions)",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Revert to revision",
      "controller": "pages",
      "description": "Revert a page to a prior revision.",
      "name": "revert_to_revision_groups",
      "endpoint": "POST /v1/groups/:group_id/pages/:url/revisions/:revision_id",
      "reference": "https://canvas.instructure.com/doc/api/pages.html",
      "params": [
        {
          "name": "group_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "url",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "revision_id",
          "type": "integer",
          "default_value": "",
          "desc": "The revision to revert to (use the\n{api:WikiPagesApiController#revisions List Revisions API} to see\navailable revisions)",
          "example": ""
        }
      ]
    }
  ],
  "progress": [
    {
      "display_name": "Query progress",
      "controller": "progress",
      "description": "Return completion and status information about an asynchronous job",
      "name": "query_progress",
      "endpoint": "GET /v1/progress/:id",
      "reference": "https://canvas.instructure.com/doc/api/progress.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "quiz_assignment_overrides": [
    {
      "display_name": "Retrieve assignment-overridden dates for Classic Quizzes",
      "controller": "quiz_assignment_overrides",
      "description": "Retrieve the actual due-at, unlock-at, and available-at dates for quizzes\nbased on the assignment overrides active for the current API user.",
      "name": "retrieve_assignment_overridden_dates_for_classic_quizzes",
      "endpoint": "GET /v1/courses/:course_id/quizzes/assignment_overrides",
      "reference": "https://canvas.instructure.com/doc/api/quiz_assignment_overrides.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "quiz_assignment_overrides.0.quiz_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "An array of quiz IDs. If omitted, overrides for all quizzes available to\nthe operating user will be returned.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Retrieve assignment-overridden dates for New Quizzes",
      "controller": "quiz_assignment_overrides",
      "description": "Retrieve the actual due-at, unlock-at, and available-at dates for quizzes\nbased on the assignment overrides active for the current API user.",
      "name": "retrieve_assignment_overridden_dates_for_new_quizzes",
      "endpoint": "GET /v1/courses/:course_id/new_quizzes/assignment_overrides",
      "reference": "https://canvas.instructure.com/doc/api/quiz_assignment_overrides.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "quiz_assignment_overrides.0.quiz_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "An array of quiz IDs. If omitted, overrides for all quizzes available to\nthe operating user will be returned.",
          "example": ""
        }
      ]
    }
  ],
  "quiz_extensions": [
    {
      "display_name": "Set extensions for student quiz submissions",
      "controller": "quiz_extensions",
      "description": "<b>Responses</b>\n\n* <b>200 OK</b> if the request was successful\n* <b>403 Forbidden</b> if you are not allowed to extend quizzes for this course",
      "name": "set_extensions_for_student_quiz_submissions",
      "endpoint": "POST /v1/courses/:course_id/quizzes/:quiz_id/extensions",
      "reference": "https://canvas.instructure.com/doc/api/quiz_extensions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "quiz_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "quiz_extensions.user_id[]",
          "type": "array",
          "default_value": "",
          "desc": "The ID of the user we want to add quiz extensions for.",
          "example": ""
        },
        {
          "name": "quiz_extensions.extra_attempts[]",
          "type": "array",
          "default_value": "",
          "desc": "Number of times the student is allowed to re-take the quiz over the\nmultiple-attempt limit. This is limited to 1000 attempts or less.",
          "example": ""
        },
        {
          "name": "quiz_extensions.extra_time[]",
          "type": "array",
          "default_value": "",
          "desc": "The number of extra minutes to allow for all attempts. This will\nadd to the existing time limit on the submission. This is limited to\n10080 minutes (1 week)",
          "example": ""
        },
        {
          "name": "quiz_extensions.manually_unlocked[]",
          "type": "array",
          "default_value": "",
          "desc": "Allow the student to take the quiz even if it's locked for\neveryone else.",
          "example": ""
        },
        {
          "name": "quiz_extensions.extend_from_now[]",
          "type": "array",
          "default_value": "",
          "desc": "The number of minutes to extend the quiz from the current time. This is\nmutually exclusive to extend_from_end_at. This is limited to 1440\nminutes (24 hours)",
          "example": ""
        },
        {
          "name": "quiz_extensions.extend_from_end_at[]",
          "type": "array",
          "default_value": "",
          "desc": "The number of minutes to extend the quiz beyond the quiz's current\nending time. This is mutually exclusive to extend_from_now. This is\nlimited to 1440 minutes (24 hours)",
          "example": ""
        }
      ]
    }
  ],
  "result": [
    {
      "display_name": "Show a collection of Results",
      "controller": "result",
      "description": "Show existing Results of a line item. Can be used to retrieve a specific student's\nresult by adding the user_id (defined as the lti_user_id or the Canvas user_id) as\na query parameter (i.e. user_id=1000). If user_id is included, it will return only\none Result in the collection if the result exists, otherwise it will be empty. May\nalso limit number of results by adding the limit query param (i.e. limit=100)",
      "name": "show_collection_of_results",
      "endpoint": "GET /lti/courses/:course_id/line_items/:line_item_id/results",
      "reference": "https://canvas.instructure.com/doc/api/result.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "line_item_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show a Result",
      "controller": "result",
      "description": "Show existing Result of a line item.",
      "name": "show_result",
      "endpoint": "GET /lti/courses/:course_id/line_items/:line_item_id/results/:id",
      "reference": "https://canvas.instructure.com/doc/api/result.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "line_item_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "roles": [
    {
      "display_name": "List roles",
      "controller": "roles",
      "description": "A paginated list of the roles available to an account.",
      "name": "list_roles",
      "endpoint": "GET /v1/accounts/:account_id/roles",
      "reference": "https://canvas.instructure.com/doc/api/roles.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the account to retrieve roles for.",
          "example": ""
        },
        {
          "name": "state[]",
          "type": "array",
          "default_value": "",
          "desc": "Filter by role state. If this argument is omitted, only 'active' roles are\nreturned.",
          "example": [
            "active",
            "inactive"
          ]
        },
        {
          "name": "show_inherited",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is true, all roles inherited from parent accounts will\nbe included.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single role",
      "controller": "roles",
      "description": "Retrieve information about a single role",
      "name": "get_single_role",
      "endpoint": "GET /v1/accounts/:account_id/roles/:id",
      "reference": "https://canvas.instructure.com/doc/api/roles.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "The id of the account containing the role",
          "example": ""
        },
        {
          "name": "role_id",
          "type": "integer",
          "default_value": "",
          "desc": "The unique identifier for the role",
          "example": ""
        },
        {
          "name": "role",
          "type": "string",
          "default_value": "",
          "desc": "The name for the role",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a new role",
      "controller": "roles",
      "description": "Create a new course-level or account-level role.",
      "name": "create_new_role",
      "endpoint": "POST /v1/accounts/:account_id/roles",
      "reference": "https://canvas.instructure.com/doc/api/roles.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "label",
          "type": "string",
          "default_value": "",
          "desc": "Label for the role.",
          "example": ""
        },
        {
          "name": "role",
          "type": "string",
          "default_value": "",
          "desc": "Deprecated alias for label.",
          "example": ""
        },
        {
          "name": "base_role_type",
          "type": "string",
          "default_value": "",
          "desc": "Specifies the role type that will be used as a base\nfor the permissions granted to this role.\n\nDefaults to 'AccountMembership' if absent",
          "example": [
            "AccountMembership",
            "StudentEnrollment",
            "TeacherEnrollment",
            "TaEnrollment",
            "ObserverEnrollment",
            "DesignerEnrollment"
          ]
        },
        {
          "name": "permissions.<X>.explicit",
          "type": "boolean",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "permissions.<X>.enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "If explicit is 1 and enabled is 1, permission <X> will be explicitly\ngranted to this role. If explicit is 1 and enabled has any other value\n(typically 0), permission <X> will be explicitly denied to this role. If\nexplicit is any other value (typically 0) or absent, or if enabled is\nabsent, the value for permission <X> will be inherited from upstream.\nIgnored if permission <X> is locked upstream (in an ancestor account).\n\nMay occur multiple times with unique values for <X>. Recognized\npermission names for <X> are:\n\n  [For Account-Level Roles Only]\n  become_user                      -- Users - act as\n  import_sis                       -- SIS Data - import\n  manage_account_memberships       -- Admins - add / remove\n  manage_account_settings          -- Account-level settings - manage\n  manage_alerts                    -- Global announcements - add / edit / delete\n  manage_catalog                   -- Catalog - manage\n  manage_courses                   -- Courses - add / edit / delete\n  manage_developer_keys            -- Developer keys - manage\n  manage_feature_flags             -- Feature Options - enable / disable\n  manage_global_outcomes           -- Manage learning outcomes\n  manage_jobs                      -- Manage background jobs\n  manage_master_courses            -- Blueprint Courses - add / edit / associate / delete\n  manage_role_overrides            -- Permissions - manage\n  manage_storage_quotas            -- Storage Quotas - manage\n  manage_sis                       -- SIS data - manage\n  manage_site_settings             -- Manage site-wide and plugin settings\n  manage_user_logins               -- Users - manage login details\n  manage_user_observers            -- Users - add / remove observers\n  moderate_user_content            -- Users - moderate user-created content\n  read_course_content              -- Course Content - view\n  read_course_list                 -- Courses - view list\n  read_messages                    -- View notifications sent to users\n  reset_any_mfa                    -- Reset multi-factor authentication\n  site_admin                       -- Use the Site Admin section and admin all other accounts\n  view_course_changes              -- Courses - view change logs\n  view_error_reports               -- View error reports\n  view_feature_flags               -- Feature Options - view\n  view_grade_changes               -- Grades - view change logs\n  view_jobs                        -- View background jobs\n  view_notifications               -- Notifications - view\n  view_quiz_answer_audits          -- Quizzes - view submission log\n  view_statistics                  -- Statistics - view\n  undelete_courses                 -- Courses - undelete\n\n  [For both Account-Level and Course-Level roles]\n   Note: Applicable enrollment types for course-level roles are given in brackets:\n         S = student, T = teacher, A = TA, D = designer, O = observer.\n         Lower-case letters indicate permissions that are off by default.\n         A missing letter indicates the permission cannot be enabled for the role\n         or any derived custom roles.\n  change_course_state              -- [ TaD ] Course State - manage\n  create_collaborations            -- [STADo] Student Collaborations - create\n  create_conferences               -- [STADo] Web conferences - create\n  create_forum                     -- [STADo] Discussions - create\n  generate_observer_pairing_code   -- [ tado] Users - Generate observer pairing codes for students\n  import_outcomes                  -- [ TaDo] Learning Outcomes - import\n  lti_add_edit                     -- [ TAD ] LTI - add / edit / delete\n  manage_admin_users               -- [ Tad ] Users - add / remove teachers, course designers, or TAs in courses\n  manage_assignments               -- [ TADo] Assignments and Quizzes - add / edit / delete\n  manage_calendar                  -- [sTADo] Course Calendar - add / edit / delete events\n  manage_content                   -- [ TADo] Course Content - add / edit / delete\n  manage_course_visibility         -- [ TAD ] Course - change visibility\n  manage_files                     -- [ TADo] Course Files - add / edit / delete\n  manage_grades                    -- [ TA  ] Grades - edit\n  manage_groups                    -- [ TAD ] Groups - add / edit / delete\n  manage_interaction_alerts        -- [ Ta  ] Alerts - add / edit / delete\n  manage_outcomes                  -- [sTaDo] Learning Outcomes - add / edit / delete\n  manage_proficiency_calculations  -- [ t d ] Outcome Proficiency Calculations - add / edit / delete\n  manage_proficiency_scales        -- [ t d ] Outcome Proficiency/Mastery Scales - add / edit / delete\n  manage_sections_add              -- [ TaD ] Course Sections - add\n  manage_sections_edit             -- [ TaD ] Course Sections - edit\n  manage_sections_delete           -- [ TaD ] Course Sections - delete\n  manage_students                  -- [ TAD ] Users - add / remove students in courses\n  manage_user_notes                -- [ TA  ] Faculty Journal - manage entries\n  manage_rubrics                   -- [ TAD ] Rubrics - add / edit / delete\n  manage_wiki_create               -- [ TADo] Pages - create\n  manage_wiki_delete               -- [ TADo] Pages - delete\n  manage_wiki_update               -- [ TADo] Pages - update\n  moderate_forum                   -- [sTADo] Discussions - moderate\n  post_to_forum                    -- [STADo] Discussions - post\n  read_announcements               -- [STADO] Announcements - view\n  read_email_addresses             -- [sTAdo] Users - view primary email address\n  read_forum                       -- [STADO] Discussions - view\n  read_question_banks              -- [ TADo] Question banks - view and link\n  read_reports                     -- [ TAD ] Courses - view usage reports\n  read_roster                      -- [STADo] Users - view list\n  read_sis                         -- [sTa  ] SIS Data - read\n  select_final_grade               -- [ TA  ] Grades - select final grade for moderation\n  send_messages                    -- [STADo] Conversations - send messages to individual course members\n  send_messages_all                -- [sTADo] Conversations - send messages to entire class\n  view_all_grades                  -- [ TAd ] Grades - view all grades\n  view_audit_trail                 -- [ t   ] Grades - view audit trail\n  view_group_pages                 -- [sTADo] Groups - view all student groups\n  view_user_logins                 -- [ TA  ] Users - view login IDs\n\nSome of these permissions are applicable only for roles on the site admin\naccount, on a root account, or for course-level roles with a particular base role type;\nif a specified permission is inapplicable, it will be ignored.\n\nAdditional permissions may exist based on installed plugins.",
          "example": ""
        },
        {
          "name": "permissions.<X>.locked",
          "type": "boolean",
          "default_value": "",
          "desc": "If the value is 1, permission <X> will be locked downstream (new roles in\nsubaccounts cannot override the setting). For any other value, permission\n<X> is left unlocked. Ignored if permission <X> is already locked\nupstream. May occur multiple times with unique values for <X>.",
          "example": ""
        },
        {
          "name": "permissions.<X>.applies_to_self",
          "type": "boolean",
          "default_value": "",
          "desc": "If the value is 1, permission <X> applies to the account this role is in.\nThe default value is 1. Must be true if applies_to_descendants is false.\nThis value is only returned if enabled is true.",
          "example": ""
        },
        {
          "name": "permissions.<X>.applies_to_descendants",
          "type": "boolean",
          "default_value": "",
          "desc": "If the value is 1, permission <X> cascades down to sub accounts of the\naccount this role is in. The default value is 1.  Must be true if\napplies_to_self is false.This value is only returned if enabled is true.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Deactivate a role",
      "controller": "roles",
      "description": "Deactivates a custom role.  This hides it in the user interface and prevents it\nfrom being assigned to new users.  Existing users assigned to the role will\ncontinue to function with the same permissions they had previously.\nBuilt-in roles cannot be deactivated.",
      "name": "deactivate_role",
      "endpoint": "DELETE /v1/accounts/:account_id/roles/:id",
      "reference": "https://canvas.instructure.com/doc/api/roles.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "role_id",
          "type": "integer",
          "default_value": "",
          "desc": "The unique identifier for the role",
          "example": ""
        },
        {
          "name": "role",
          "type": "string",
          "default_value": "",
          "desc": "The name for the role",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Activate a role",
      "controller": "roles",
      "description": "Re-activates an inactive role (allowing it to be assigned to new users)",
      "name": "activate_role",
      "endpoint": "POST /v1/accounts/:account_id/roles/:id/activate",
      "reference": "https://canvas.instructure.com/doc/api/roles.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "role_id",
          "type": "integer",
          "default_value": "",
          "desc": "The unique identifier for the role",
          "example": ""
        },
        {
          "name": "role",
          "type": "Deprecated",
          "default_value": "",
          "desc": "The name for the role",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a role",
      "controller": "roles",
      "description": "Update permissions for an existing role.\n\nRecognized roles are:\n* TeacherEnrollment\n* StudentEnrollment\n* TaEnrollment\n* ObserverEnrollment\n* DesignerEnrollment\n* AccountAdmin\n* Any previously created custom role",
      "name": "update_role",
      "endpoint": "PUT /v1/accounts/:account_id/roles/:id",
      "reference": "https://canvas.instructure.com/doc/api/roles.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "label",
          "type": "string",
          "default_value": "",
          "desc": "The label for the role. Can only change the label of a custom role that belongs directly to the account.",
          "example": ""
        },
        {
          "name": "permissions.<X>.explicit",
          "type": "boolean",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "permissions.<X>.enabled",
          "type": "boolean",
          "default_value": "",
          "desc": "These arguments are described in the documentation for the\n{api:RoleOverridesController#add_role add_role method}.",
          "example": ""
        },
        {
          "name": "permissions.<X>.applies_to_self",
          "type": "boolean",
          "default_value": "",
          "desc": "If the value is 1, permission <X> applies to the account this role is in.\nThe default value is 1. Must be true if applies_to_descendants is false.\nThis value is only returned if enabled is true.",
          "example": ""
        },
        {
          "name": "permissions.<X>.applies_to_descendants",
          "type": "boolean",
          "default_value": "",
          "desc": "If the value is 1, permission <X> cascades down to sub accounts of the\naccount this role is in. The default value is 1.  Must be true if\napplies_to_self is false.This value is only returned if enabled is true.",
          "example": ""
        }
      ]
    }
  ],
  "rubrics": [
    {
      "display_name": "Create a single rubric",
      "controller": "rubrics",
      "description": "Returns the rubric with the given id.\n\nUnfortuantely this endpoint does not return a standard Rubric object,\ninstead it returns a hash that looks like\n  { 'rubric': Rubric, 'rubric_association': RubricAssociation }\n\nThis may eventually be deprecated in favor of a more standardized return\nvalue, but that is not currently planned.",
      "name": "create_single_rubric",
      "endpoint": "POST /v1/courses/:course_id/rubrics",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the rubric",
          "example": ""
        },
        {
          "name": "rubric_association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric is associated",
          "example": ""
        },
        {
          "name": "rubric.title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the rubric",
          "example": ""
        },
        {
          "name": "rubric.free_form_criterion_comments",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not you can write custom comments in the ratings field for a rubric",
          "example": ""
        },
        {
          "name": "rubric_association.association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric is associated",
          "example": ""
        },
        {
          "name": "rubric_association.association_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of object this rubric is associated with",
          "example": [
            "Assignment",
            "Course",
            "Account"
          ]
        },
        {
          "name": "rubric_association.use_for_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the associated rubric is used for grade calculation",
          "example": ""
        },
        {
          "name": "rubric_association.hide_score_total",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the score total is displayed within the rubric.\nThis option is only available if the rubric is not used for grading.",
          "example": ""
        },
        {
          "name": "rubric_association.purpose",
          "type": "string",
          "default_value": "",
          "desc": "Whether or not the association is for grading (and thus linked to an assignment)\nor if it's to indicate the rubric should appear in its context",
          "example": ""
        },
        {
          "name": "rubric.criteria",
          "type": "Hash",
          "default_value": "",
          "desc": "An indexed Hash of RubricCriteria objects where the keys are integer ids and the values are the RubricCriteria objects",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a single rubric",
      "controller": "rubrics",
      "description": "Returns the rubric with the given id.\n\nUnfortuantely this endpoint does not return a standard Rubric object,\ninstead it returns a hash that looks like\n  { 'rubric': Rubric, 'rubric_association': RubricAssociation }\n\nThis may eventually be deprecated in favor of a more standardized return\nvalue, but that is not currently planned.",
      "name": "update_single_rubric",
      "endpoint": "PUT /v1/courses/:course_id/rubrics/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the rubric",
          "example": ""
        },
        {
          "name": "rubric_association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric is associated",
          "example": ""
        },
        {
          "name": "rubric.title",
          "type": "string",
          "default_value": "",
          "desc": "The title of the rubric",
          "example": ""
        },
        {
          "name": "rubric.free_form_criterion_comments",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not you can write custom comments in the ratings field for a rubric",
          "example": ""
        },
        {
          "name": "rubric.skip_updating_points_possible",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not to update the points possible",
          "example": ""
        },
        {
          "name": "rubric_association.association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric is associated",
          "example": ""
        },
        {
          "name": "rubric_association.association_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of object this rubric is associated with",
          "example": [
            "Assignment",
            "Course",
            "Account"
          ]
        },
        {
          "name": "rubric_association.use_for_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the associated rubric is used for grade calculation",
          "example": ""
        },
        {
          "name": "rubric_association.hide_score_total",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the score total is displayed within the rubric.\nThis option is only available if the rubric is not used for grading.",
          "example": ""
        },
        {
          "name": "rubric_association.purpose",
          "type": "string",
          "default_value": "",
          "desc": "Whether or not the association is for grading (and thus linked to an assignment)\nor if it's to indicate the rubric should appear in its context",
          "example": [
            "grading",
            "bookmark"
          ]
        },
        {
          "name": "rubric.criteria",
          "type": "Hash",
          "default_value": "",
          "desc": "An indexed Hash of RubricCriteria objects where the keys are integer ids and the values are the RubricCriteria objects",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a single rubric",
      "controller": "rubrics",
      "description": "Deletes a Rubric and removes all RubricAssociations.",
      "name": "delete_single_rubric",
      "endpoint": "DELETE /v1/courses/:course_id/rubrics/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List rubrics",
      "controller": "rubrics",
      "description": "Returns the paginated list of active rubrics for the current context.",
      "name": "list_rubrics_accounts",
      "endpoint": "GET /v1/accounts/:account_id/rubrics",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List rubrics",
      "controller": "rubrics",
      "description": "Returns the paginated list of active rubrics for the current context.",
      "name": "list_rubrics_courses",
      "endpoint": "GET /v1/courses/:course_id/rubrics",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a single rubric",
      "controller": "rubrics",
      "description": "Returns the rubric with the given id.",
      "name": "get_single_rubric_accounts",
      "endpoint": "GET /v1/accounts/:account_id/rubrics/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Related records to include in the response.",
          "example": [
            "assessments",
            "graded_assessments",
            "peer_assessments",
            "associations",
            "assignment_associations",
            "course_associations",
            "account_associations"
          ]
        },
        {
          "name": "style",
          "type": "string",
          "default_value": "",
          "desc": "Applicable only if assessments are being returned. If included, returns either all criteria data associated with the assessment, or just the comments. If not included, both data and comments are omitted.",
          "example": [
            "full",
            "comments_only"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single rubric",
      "controller": "rubrics",
      "description": "Returns the rubric with the given id.",
      "name": "get_single_rubric_courses",
      "endpoint": "GET /v1/courses/:course_id/rubrics/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Related records to include in the response.",
          "example": [
            "assessments",
            "graded_assessments",
            "peer_assessments",
            "associations",
            "assignment_associations",
            "course_associations",
            "account_associations"
          ]
        },
        {
          "name": "style",
          "type": "string",
          "default_value": "",
          "desc": "Applicable only if assessments are being returned. If included, returns either all criteria data associated with the assessment, or just the comments. If not included, both data and comments are omitted.",
          "example": [
            "full",
            "comments_only"
          ]
        }
      ]
    },
    {
      "display_name": "Create a single rubric assessment",
      "controller": "rubrics",
      "description": "Returns the rubric assessment with the given id.\nThe returned object also provides the information of\n  :ratings, :assessor_name, :related_group_submissions_and_assessments, :artifact",
      "name": "create_single_rubric_assessment",
      "endpoint": "POST /v1/courses/:course_id/rubric_associations/:rubric_association_id/rubric_assessments",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the course",
          "example": ""
        },
        {
          "name": "rubric_association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric assessment is associated",
          "example": ""
        },
        {
          "name": "provisional",
          "type": "string",
          "default_value": "",
          "desc": "(optional) Indicates whether this assessment is provisional, defaults to false.",
          "example": ""
        },
        {
          "name": "final",
          "type": "string",
          "default_value": "",
          "desc": "(optional) Indicates a provisional grade will be marked as final. It only takes effect if the provisional param is passed as true. Defaults to false.",
          "example": ""
        },
        {
          "name": "graded_anonymously",
          "type": "boolean",
          "default_value": "",
          "desc": "(optional) Defaults to false",
          "example": ""
        },
        {
          "name": "rubric_assessment",
          "type": "Hash",
          "default_value": "",
          "desc": "A Hash of data to complement the rubric assessment:\nThe user id that refers to the person being assessed\n  rubric_assessment[user_id]\nAssessment type. There are only three valid types:  'grading', 'peer_review', or 'provisional_grade'\n  rubric_assessment[assessment_type]\nThe points awarded for this row.\n  rubric_assessment[criterion_id][points]\nComments to add for this row.\n  rubric_assessment[criterion_id][comments]\nFor each criterion_id, change the id by the criterion number, ex: criterion_123\nIf the criterion_id is not specified it defaults to false, and nothing is updated.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a single rubric assessment",
      "controller": "rubrics",
      "description": "Returns the rubric assessment with the given id.\nThe returned object also provides the information of\n  :ratings, :assessor_name, :related_group_submissions_and_assessments, :artifact",
      "name": "update_single_rubric_assessment",
      "endpoint": "PUT /v1/courses/:course_id/rubric_associations/:rubric_association_id/rubric_assessments/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the rubric assessment",
          "example": ""
        },
        {
          "name": "course_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the course",
          "example": ""
        },
        {
          "name": "rubric_association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric assessment is associated",
          "example": ""
        },
        {
          "name": "provisional",
          "type": "string",
          "default_value": "",
          "desc": "(optional) Indicates whether this assessment is provisional, defaults to false.",
          "example": ""
        },
        {
          "name": "final",
          "type": "string",
          "default_value": "",
          "desc": "(optional) Indicates a provisional grade will be marked as final. It only takes effect if the provisional param is passed as true. Defaults to false.",
          "example": ""
        },
        {
          "name": "graded_anonymously",
          "type": "boolean",
          "default_value": "",
          "desc": "(optional) Defaults to false",
          "example": ""
        },
        {
          "name": "rubric_assessment",
          "type": "Hash",
          "default_value": "",
          "desc": "A Hash of data to complement the rubric assessment:\nThe user id that refers to the person being assessed\n  rubric_assessment[user_id]\nAssessment type. There are only three valid types:  'grading', 'peer_review', or 'provisional_grade'\n  rubric_assessment[assessment_type]\nThe points awarded for this row.\n  rubric_assessment[criterion_id][points]\nComments to add for this row.\n  rubric_assessment[criterion_id][comments]\nFor each criterion_id, change the id by the criterion number, ex: criterion_123\nIf the criterion_id is not specified it defaults to false, and nothing is updated.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a single rubric assessment",
      "controller": "rubrics",
      "description": "Deletes a rubric assessment",
      "name": "delete_single_rubric_assessment",
      "endpoint": "DELETE /v1/courses/:course_id/rubric_associations/:rubric_association_id/rubric_assessments/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "rubric_association_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Create a RubricAssociation",
      "controller": "rubrics",
      "description": "Returns the rubric with the given id.",
      "name": "create_rubricassociation",
      "endpoint": "POST /v1/courses/:course_id/rubric_associations",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "rubric_association.rubric_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the Rubric",
          "example": ""
        },
        {
          "name": "rubric_association.association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric is associated",
          "example": ""
        },
        {
          "name": "rubric_association.association_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of object this rubric is associated with",
          "example": [
            "Assignment",
            "Course",
            "Account"
          ]
        },
        {
          "name": "rubric_association.title",
          "type": "string",
          "default_value": "",
          "desc": "The name of the object this rubric is associated with",
          "example": ""
        },
        {
          "name": "rubric_association.use_for_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the associated rubric is used for grade calculation",
          "example": ""
        },
        {
          "name": "rubric_association.hide_score_total",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the score total is displayed within the rubric.\nThis option is only available if the rubric is not used for grading.",
          "example": ""
        },
        {
          "name": "rubric_association.purpose",
          "type": "string",
          "default_value": "",
          "desc": "Whether or not the association is for grading (and thus linked to an assignment)\nor if it's to indicate the rubric should appear in its context",
          "example": [
            "grading",
            "bookmark"
          ]
        },
        {
          "name": "rubric_association.bookmarked",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the associated rubric appears in its context",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update a RubricAssociation",
      "controller": "rubrics",
      "description": "Returns the rubric with the given id.",
      "name": "update_rubricassociation",
      "endpoint": "PUT /v1/courses/:course_id/rubric_associations/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the RubricAssociation to update",
          "example": ""
        },
        {
          "name": "rubric_association.rubric_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the Rubric",
          "example": ""
        },
        {
          "name": "rubric_association.association_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the object with which this rubric is associated",
          "example": ""
        },
        {
          "name": "rubric_association.association_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of object this rubric is associated with",
          "example": [
            "Assignment",
            "Course",
            "Account"
          ]
        },
        {
          "name": "rubric_association.title",
          "type": "string",
          "default_value": "",
          "desc": "The name of the object this rubric is associated with",
          "example": ""
        },
        {
          "name": "rubric_association.use_for_grading",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the associated rubric is used for grade calculation",
          "example": ""
        },
        {
          "name": "rubric_association.hide_score_total",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the score total is displayed within the rubric.\nThis option is only available if the rubric is not used for grading.",
          "example": ""
        },
        {
          "name": "rubric_association.purpose",
          "type": "string",
          "default_value": "",
          "desc": "Whether or not the association is for grading (and thus linked to an assignment)\nor if it's to indicate the rubric should appear in its context",
          "example": [
            "grading",
            "bookmark"
          ]
        },
        {
          "name": "rubric_association.bookmarked",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not the associated rubric appears in its context",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete a RubricAssociation",
      "controller": "rubrics",
      "description": "Delete the RubricAssociation with the given ID",
      "name": "delete_rubricassociation",
      "endpoint": "DELETE /v1/courses/:course_id/rubric_associations/:id",
      "reference": "https://canvas.instructure.com/doc/api/rubrics.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    }
  ],
  "score": [
    {
      "display_name": "Create a Score",
      "controller": "score",
      "description": "Create a new Result from the score params. If this is for the first created line_item for a\nresourceLinkId, or it is a line item that is not attached to a resourceLinkId, then a submission\nrecord will be created for the associated assignment when gradingProgress is set to\nFullyGraded or PendingManual.\n\nThe submission score will also be updated when a score object is sent with either of those\ntwo values for gradingProgress. If a score object is sent with either of FullyGraded or\nPendingManual as the value for gradingProgress and scoreGiven is missing, the assignment\nwill not be graded. This also supposes the line_item meets the condition to create a submission.\n\nA submission comment with an unknown author will be created when the comment value is included.\nThis also supposes the line_item meets the condition to create a submission.",
      "name": "create_score",
      "endpoint": "POST /lti/courses/:course_id/line_items/:line_item_id/scores",
      "reference": "https://canvas.instructure.com/doc/api/score.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "line_item_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "userId",
          "type": "string",
          "default_value": "",
          "desc": "The lti_user_id or the Canvas user_id.\nReturns a 422 if user not found in Canvas or is not a student.",
          "example": ""
        },
        {
          "name": "activityProgress",
          "type": "string",
          "default_value": "",
          "desc": "Indicate to Canvas the status of the user towards the activity's completion.\nMust be one of Initialized, Started, InProgress, Submitted, Completed.",
          "example": ""
        },
        {
          "name": "gradingProgress",
          "type": "string",
          "default_value": "",
          "desc": "Indicate to Canvas the status of the grading process.\nA value of PendingManual will require intervention by a grader.\nValues of NotReady, Failed, and Pending will cause the scoreGiven to be ignored.\nFullyGraded values will require no action.\nPossible values are NotReady, Failed, Pending, PendingManual, FullyGraded.",
          "example": ""
        },
        {
          "name": "timestamp",
          "type": "string",
          "default_value": "",
          "desc": "Date and time when the score was modified in the tool. Should use subsecond precision.\nReturns a 400 if the timestamp is earlier than the updated_at time of the Result.",
          "example": ""
        },
        {
          "name": "scoreGiven",
          "type": "number",
          "default_value": "",
          "desc": "The Current score received in the tool for this line item and user,\nscaled to the scoreMaximum",
          "example": ""
        },
        {
          "name": "scoreMaximum",
          "type": "number",
          "default_value": "",
          "desc": "Maximum possible score for this result; it must be present if scoreGiven is present.\nReturns 412 if not present when scoreGiven is present.",
          "example": ""
        },
        {
          "name": "comment",
          "type": "string",
          "default_value": "",
          "desc": "Comment visible to the student about this score.",
          "example": ""
        },
        {
          "name": "https://canvas.instructure.com/lti/submission",
          "type": "Object",
          "default_value": "",
          "desc": "(EXTENSION) Optional submission type and data.\nnew_submission [Boolean] flag to indicate that this is a new submission. Defaults to true unless submission_type is none.\nsubmission_type [String] permissible values are: none, basic_lti_launch, online_text_entry, external_tool, or online_url. Defaults to external_tool.\nsubmission_data [String] submission data (URL or body text)\nsubmitted_at [String] Date and time that the submission was originally created. Should use subsecond precision. This should match the data and time that the original submission happened in Canvas.",
          "example": ""
        }
      ]
    }
  ],
  "submissions": [
    {
      "display_name": "Submit an assignment",
      "controller": "submissions",
      "description": "Make a submission for an assignment. You must be enrolled as a student in\nthe course/section to do this.\n\nAll online turn-in submission types are supported in this API. However,\nthere are a few things that are not yet supported:\n\n* Files can be submitted based on a file ID of a user or group file or through the {api:SubmissionsApiController#create_file file upload API}. However, there is no API yet for listing the user and group files.\n* Media comments can be submitted, however, there is no API yet for creating a media comment to submit.\n* Integration with Google Docs is not yet supported.",
      "name": "submit_assignment_courses",
      "endpoint": "POST /v1/courses/:course_id/assignments/:assignment_id/submissions",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "comment.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "Include a textual comment with the submission.",
          "example": ""
        },
        {
          "name": "submission.submission_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of submission being made. The assignment submission_types must\ninclude this submission type as an allowed option, or the submission will be rejected with a 400 error.\n\nThe submission_type given determines which of the following parameters is\nused. For instance, to submit a URL, submission [submission_type] must be\nset to \"online_url\", otherwise the submission [url] parameter will be\nignored.",
          "example": [
            "online_text_entry",
            "online_url",
            "online_upload",
            "media_recording",
            "basic_lti_launch"
          ]
        },
        {
          "name": "submission.body",
          "type": "string",
          "default_value": "",
          "desc": "Submit the assignment as an HTML document snippet. Note this HTML snippet\nwill be sanitized using the same ruleset as a submission made from the\nCanvas web UI. The sanitized HTML will be returned in the response as the\nsubmission body. Requires a submission_type of \"online_text_entry\".",
          "example": ""
        },
        {
          "name": "submission.url",
          "type": "string",
          "default_value": "",
          "desc": "Submit the assignment as a URL. The URL scheme must be \"http\" or \"https\",\nno \"ftp\" or other URL schemes are allowed. If no scheme is given (e.g.\n\"www.example.com\") then \"http\" will be assumed. Requires a submission_type\nof \"online_url\" or \"basic_lti_launch\".",
          "example": ""
        },
        {
          "name": "submission.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "Submit the assignment as a set of one or more previously uploaded files\nresiding in the submitting user's files section (or the group's files\nsection, for group assignments).\n\nTo upload a new file to submit, see the submissions {api:SubmissionsApiController#create_file Upload a file API}.\n\nRequires a submission_type of \"online_upload\".",
          "example": ""
        },
        {
          "name": "submission.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "The media comment id to submit. Media comment ids can be submitted via\nthis API, however, note that there is not yet an API to generate or list\nexisting media comments, so this functionality is currently of limited use.\n\nRequires a submission_type of \"media_recording\".",
          "example": ""
        },
        {
          "name": "submission.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of media comment being submitted.",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "submission.user_id",
          "type": "integer",
          "default_value": "",
          "desc": "Submit on behalf of the given user. Requires grading permission.",
          "example": ""
        },
        {
          "name": "submission.submitted_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "Choose the time the submission is listed as submitted at.  Requires grading permission.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Submit an assignment",
      "controller": "submissions",
      "description": "Make a submission for an assignment. You must be enrolled as a student in\nthe course/section to do this.\n\nAll online turn-in submission types are supported in this API. However,\nthere are a few things that are not yet supported:\n\n* Files can be submitted based on a file ID of a user or group file or through the {api:SubmissionsApiController#create_file file upload API}. However, there is no API yet for listing the user and group files.\n* Media comments can be submitted, however, there is no API yet for creating a media comment to submit.\n* Integration with Google Docs is not yet supported.",
      "name": "submit_assignment_sections",
      "endpoint": "POST /v1/sections/:section_id/assignments/:assignment_id/submissions",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "comment.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "Include a textual comment with the submission.",
          "example": ""
        },
        {
          "name": "submission.submission_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of submission being made. The assignment submission_types must\ninclude this submission type as an allowed option, or the submission will be rejected with a 400 error.\n\nThe submission_type given determines which of the following parameters is\nused. For instance, to submit a URL, submission [submission_type] must be\nset to \"online_url\", otherwise the submission [url] parameter will be\nignored.",
          "example": [
            "online_text_entry",
            "online_url",
            "online_upload",
            "media_recording",
            "basic_lti_launch"
          ]
        },
        {
          "name": "submission.body",
          "type": "string",
          "default_value": "",
          "desc": "Submit the assignment as an HTML document snippet. Note this HTML snippet\nwill be sanitized using the same ruleset as a submission made from the\nCanvas web UI. The sanitized HTML will be returned in the response as the\nsubmission body. Requires a submission_type of \"online_text_entry\".",
          "example": ""
        },
        {
          "name": "submission.url",
          "type": "string",
          "default_value": "",
          "desc": "Submit the assignment as a URL. The URL scheme must be \"http\" or \"https\",\nno \"ftp\" or other URL schemes are allowed. If no scheme is given (e.g.\n\"www.example.com\") then \"http\" will be assumed. Requires a submission_type\nof \"online_url\" or \"basic_lti_launch\".",
          "example": ""
        },
        {
          "name": "submission.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "Submit the assignment as a set of one or more previously uploaded files\nresiding in the submitting user's files section (or the group's files\nsection, for group assignments).\n\nTo upload a new file to submit, see the submissions {api:SubmissionsApiController#create_file Upload a file API}.\n\nRequires a submission_type of \"online_upload\".",
          "example": ""
        },
        {
          "name": "submission.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "The media comment id to submit. Media comment ids can be submitted via\nthis API, however, note that there is not yet an API to generate or list\nexisting media comments, so this functionality is currently of limited use.\n\nRequires a submission_type of \"media_recording\".",
          "example": ""
        },
        {
          "name": "submission.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of media comment being submitted.",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "submission.user_id",
          "type": "integer",
          "default_value": "",
          "desc": "Submit on behalf of the given user. Requires grading permission.",
          "example": ""
        },
        {
          "name": "submission.submitted_at",
          "type": "DateTime",
          "default_value": "",
          "desc": "Choose the time the submission is listed as submitted at.  Requires grading permission.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List assignment submissions",
      "controller": "submissions",
      "description": "A paginated list of all existing submissions for an assignment.",
      "name": "list_assignment_submissions_courses",
      "endpoint": "GET /v1/courses/:course_id/assignments/:assignment_id/submissions",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group.  \"group\" will add group_id and group_name.",
          "example": [
            "submission_history",
            "submission_comments",
            "rubric_assessment",
            "assignment",
            "visibility",
            "course",
            "user",
            "group"
          ]
        },
        {
          "name": "grouped",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is true, the response will be grouped by student groups.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List assignment submissions",
      "controller": "submissions",
      "description": "A paginated list of all existing submissions for an assignment.",
      "name": "list_assignment_submissions_sections",
      "endpoint": "GET /v1/sections/:section_id/assignments/:assignment_id/submissions",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group.  \"group\" will add group_id and group_name.",
          "example": [
            "submission_history",
            "submission_comments",
            "rubric_assessment",
            "assignment",
            "visibility",
            "course",
            "user",
            "group"
          ]
        },
        {
          "name": "grouped",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is true, the response will be grouped by student groups.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List submissions for multiple assignments",
      "controller": "submissions",
      "description": "A paginated list of all existing submissions for a given set of students and assignments.",
      "name": "list_submissions_for_multiple_assignments_courses",
      "endpoint": "GET /v1/courses/:course_id/students/submissions",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "student_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of student ids to return submissions for. If this argument is\nomitted, return submissions for the calling user. Students may only list\ntheir own submissions. Observers may only list those of associated\nstudents. The special id \"all\" will return submissions for all students\nin the course/section as appropriate.",
          "example": ""
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of assignments to return submissions for. If none are given,\nsubmissions for all assignments are returned.",
          "example": ""
        },
        {
          "name": "grouped",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is present, the response will be grouped by student,\nrather than a flat array of submissions.",
          "example": ""
        },
        {
          "name": "post_to_sis",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is set to true, the response will only include\nsubmissions for assignments that have the post_to_sis flag set to true and\nuser enrollments that were added through sis.",
          "example": ""
        },
        {
          "name": "submitted_since",
          "type": "DateTime",
          "default_value": "",
          "desc": "If this argument is set, the response will only include submissions that\nwere submitted after the specified date_time. This will exclude\nsubmissions that do not have a submitted_at which will exclude unsubmitted\nsubmissions.\nThe value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        },
        {
          "name": "graded_since",
          "type": "DateTime",
          "default_value": "",
          "desc": "If this argument is set, the response will only include submissions that\nwere graded after the specified date_time. This will exclude\nsubmissions that have not been graded.\nThe value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        },
        {
          "name": "grading_period_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the grading period in which submissions are being requested\n(Requires grading periods to exist on the account)",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "The current status of the submission",
          "example": [
            "submitted",
            "unsubmitted",
            "graded",
            "pending_review"
          ]
        },
        {
          "name": "enrollment_state",
          "type": "string",
          "default_value": "",
          "desc": "The current state of the enrollments. If omitted will include all\nenrollments that are not deleted.",
          "example": [
            "active",
            "concluded"
          ]
        },
        {
          "name": "state_based_on_date",
          "type": "boolean",
          "default_value": "",
          "desc": "If omitted it is set to true. When set to false it will ignore the effective\nstate of the student enrollments and use the workflow_state for the\nenrollments. The argument is ignored unless enrollment_state argument is\nalso passed.",
          "example": ""
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The order submissions will be returned in.  Defaults to \"id\".  Doesn't\naffect results for \"grouped\" mode.",
          "example": [
            "id",
            "graded_at"
          ]
        },
        {
          "name": "order_direction",
          "type": "string",
          "default_value": "",
          "desc": "Determines whether ordered results are returned in ascending or descending\norder.  Defaults to \"ascending\".  Doesn't affect results for \"grouped\" mode.",
          "example": [
            "ascending",
            "descending"
          ]
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group. `total_scores` requires the\n`grouped` argument.",
          "example": [
            "submission_history",
            "submission_comments",
            "rubric_assessment",
            "assignment",
            "total_scores",
            "visibility",
            "course",
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "List submissions for multiple assignments",
      "controller": "submissions",
      "description": "A paginated list of all existing submissions for a given set of students and assignments.",
      "name": "list_submissions_for_multiple_assignments_sections",
      "endpoint": "GET /v1/sections/:section_id/students/submissions",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "student_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of student ids to return submissions for. If this argument is\nomitted, return submissions for the calling user. Students may only list\ntheir own submissions. Observers may only list those of associated\nstudents. The special id \"all\" will return submissions for all students\nin the course/section as appropriate.",
          "example": ""
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "List of assignments to return submissions for. If none are given,\nsubmissions for all assignments are returned.",
          "example": ""
        },
        {
          "name": "grouped",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is present, the response will be grouped by student,\nrather than a flat array of submissions.",
          "example": ""
        },
        {
          "name": "post_to_sis",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is set to true, the response will only include\nsubmissions for assignments that have the post_to_sis flag set to true and\nuser enrollments that were added through sis.",
          "example": ""
        },
        {
          "name": "submitted_since",
          "type": "DateTime",
          "default_value": "",
          "desc": "If this argument is set, the response will only include submissions that\nwere submitted after the specified date_time. This will exclude\nsubmissions that do not have a submitted_at which will exclude unsubmitted\nsubmissions.\nThe value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        },
        {
          "name": "graded_since",
          "type": "DateTime",
          "default_value": "",
          "desc": "If this argument is set, the response will only include submissions that\nwere graded after the specified date_time. This will exclude\nsubmissions that have not been graded.\nThe value must be formatted as ISO 8601 YYYY-MM-DDTHH:MM:SSZ.",
          "example": ""
        },
        {
          "name": "grading_period_id",
          "type": "integer",
          "default_value": "",
          "desc": "The id of the grading period in which submissions are being requested\n(Requires grading periods to exist on the account)",
          "example": ""
        },
        {
          "name": "workflow_state",
          "type": "string",
          "default_value": "",
          "desc": "The current status of the submission",
          "example": [
            "submitted",
            "unsubmitted",
            "graded",
            "pending_review"
          ]
        },
        {
          "name": "enrollment_state",
          "type": "string",
          "default_value": "",
          "desc": "The current state of the enrollments. If omitted will include all\nenrollments that are not deleted.",
          "example": [
            "active",
            "concluded"
          ]
        },
        {
          "name": "state_based_on_date",
          "type": "boolean",
          "default_value": "",
          "desc": "If omitted it is set to true. When set to false it will ignore the effective\nstate of the student enrollments and use the workflow_state for the\nenrollments. The argument is ignored unless enrollment_state argument is\nalso passed.",
          "example": ""
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The order submissions will be returned in.  Defaults to \"id\".  Doesn't\naffect results for \"grouped\" mode.",
          "example": [
            "id",
            "graded_at"
          ]
        },
        {
          "name": "order_direction",
          "type": "string",
          "default_value": "",
          "desc": "Determines whether ordered results are returned in ascending or descending\norder.  Defaults to \"ascending\".  Doesn't affect results for \"grouped\" mode.",
          "example": [
            "ascending",
            "descending"
          ]
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group. `total_scores` requires the\n`grouped` argument.",
          "example": [
            "submission_history",
            "submission_comments",
            "rubric_assessment",
            "assignment",
            "total_scores",
            "visibility",
            "course",
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single submission",
      "controller": "submissions",
      "description": "Get a single submission, based on user id.",
      "name": "get_single_submission_courses",
      "endpoint": "GET /v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group.",
          "example": [
            "submission_history",
            "submission_comments",
            "rubric_assessment",
            "full_rubric_assessment",
            "visibility",
            "course",
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Get a single submission",
      "controller": "submissions",
      "description": "Get a single submission, based on user id.",
      "name": "get_single_submission_sections",
      "endpoint": "GET /v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group.",
          "example": [
            "submission_history",
            "submission_comments",
            "rubric_assessment",
            "full_rubric_assessment",
            "visibility",
            "course",
            "user"
          ]
        }
      ]
    },
    {
      "display_name": "Upload a file",
      "controller": "submissions",
      "description": "Upload a file to a submission.\n\nThis API endpoint is the first step in uploading a file to a submission as a student.\nSee the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.\n\nThe final step of the file upload workflow will return the attachment data,\nincluding the new file id. The caller can then POST to submit the\n+online_upload+ assignment with these file ids.",
      "name": "upload_file_courses",
      "endpoint": "POST /v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/files",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Upload a file",
      "controller": "submissions",
      "description": "Upload a file to a submission.\n\nThis API endpoint is the first step in uploading a file to a submission as a student.\nSee the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.\n\nThe final step of the file upload workflow will return the attachment data,\nincluding the new file id. The caller can then POST to submit the\n+online_upload+ assignment with these file ids.",
      "name": "upload_file_sections",
      "endpoint": "POST /v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/files",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Grade or comment on a submission",
      "controller": "submissions",
      "description": "Comment on and/or update the grading for a student's assignment submission.\nIf any submission or rubric_assessment arguments are provided, the user\nmust have permission to manage grades in the appropriate context (course or\nsection).",
      "name": "grade_or_comment_on_submission_courses",
      "endpoint": "PUT /v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "comment.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "Add a textual comment to the submission.",
          "example": ""
        },
        {
          "name": "comment.group_comment",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not this comment should be sent to the entire group (defaults\nto false). Ignored if this is not a group assignment or if no text_comment\nis provided.",
          "example": ""
        },
        {
          "name": "comment.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "Add an audio/video comment to the submission. Media comments can be added\nvia this API, however, note that there is not yet an API to generate or\nlist existing media comments, so this functionality is currently of\nlimited use.",
          "example": ""
        },
        {
          "name": "comment.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of media comment being added.",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "comment.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "Attach files to this comment that were previously uploaded using the\nSubmission Comment API's files action",
          "example": ""
        },
        {
          "name": "include.visibility",
          "type": "string",
          "default_value": "",
          "desc": "Whether this assignment is visible to the owner of the submission",
          "example": ""
        },
        {
          "name": "submission.posted_grade",
          "type": "string",
          "default_value": "",
          "desc": "Assign a score to the submission, updating both the \"score\" and \"grade\"\nfields on the submission record. This parameter can be passed in a few\ndifferent formats:\n\npoints:: A floating point or integral value, such as \"13.5\". The grade\n  will be interpreted directly as the score of the assignment.\n  Values above assignment.points_possible are allowed, for awarding\n  extra credit.\npercentage:: A floating point value appended with a percent sign, such as\n   \"40%\". The grade will be interpreted as a percentage score on the\n   assignment, where 100% == assignment.points_possible. Values above 100%\n   are allowed, for awarding extra credit.\nletter grade:: A letter grade, following the assignment's defined letter\n   grading scheme. For example, \"A-\". The resulting score will be the high\n   end of the defined range for the letter grade. For instance, if \"B\" is\n   defined as 86% to 84%, a letter grade of \"B\" will be worth 86%. The\n   letter grade will be rejected if the assignment does not have a defined\n   letter grading scheme. For more fine-grained control of scores, pass in\n   points or percentage rather than the letter grade.\n\"pass/complete/fail/incomplete\":: A string value of \"pass\" or \"complete\"\n   will give a score of 100%. \"fail\" or \"incomplete\" will give a score of\n   0.\n\nNote that assignments with grading_type of \"pass_fail\" can only be\nassigned a score of 0 or assignment.points_possible, nothing inbetween. If\na posted_grade in the \"points\" or \"percentage\" format is sent, the grade\nwill only be accepted if the grade equals one of those two values.",
          "example": ""
        },
        {
          "name": "submission.excuse",
          "type": "boolean",
          "default_value": "",
          "desc": "Sets the \"excused\" status of an assignment.",
          "example": ""
        },
        {
          "name": "submission.late_policy_status",
          "type": "string",
          "default_value": "",
          "desc": "Sets the late policy status to either \"late\", \"missing\", \"none\", or null.",
          "example": ""
        },
        {
          "name": "submission.seconds_late_override",
          "type": "integer",
          "default_value": "",
          "desc": "Sets the seconds late if late policy status is \"late\"",
          "example": ""
        },
        {
          "name": "rubric_assessment",
          "type": "RubricAssessment",
          "default_value": "",
          "desc": "Assign a rubric assessment to this assignment submission. The\nsub-parameters here depend on the rubric for the assignment. The general\nformat is, for each row in the rubric:\n\nThe points awarded for this row.\n  rubric_assessment[criterion_id][points]\n\nThe rating id for the row.\n  rubric_assessment[criterion_id][rating_id]\n\nComments to add for this row.\n  rubric_assessment[criterion_id][comments]\n\nFor example, if the assignment rubric is (in JSON format):\n  !!!javascript\n  [\n    {\n      'id': 'crit1',\n      'points': 10,\n      'description': 'Criterion 1',\n      'ratings':\n      [\n        { 'id': 'rat1', 'description': 'Good', 'points': 10 },\n        { 'id': 'rat2', 'description': 'Poor', 'points': 3 }\n      ]\n    },\n    {\n      'id': 'crit2',\n      'points': 5,\n      'description': 'Criterion 2',\n      'ratings':\n      [\n        { 'id': 'rat1', 'description': 'Exemplary', 'points': 5 },\n        { 'id': 'rat2', 'description': 'Complete', 'points': 5 },\n        { 'id': 'rat3', 'description': 'Incomplete', 'points': 0 }\n      ]\n    }\n  ]\n\nThen a possible set of values for rubric_assessment would be:\n    rubric_assessment[crit1][points]=3&rubric_assessment[crit1][rating_id]=rat1&rubric_assessment[crit2][points]=5&rubric_assessment[crit2][rating_id]=rat2&rubric_assessment[crit2][comments]=Well%20Done.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Grade or comment on a submission",
      "controller": "submissions",
      "description": "Comment on and/or update the grading for a student's assignment submission.\nIf any submission or rubric_assessment arguments are provided, the user\nmust have permission to manage grades in the appropriate context (course or\nsection).",
      "name": "grade_or_comment_on_submission_sections",
      "endpoint": "PUT /v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "comment.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "Add a textual comment to the submission.",
          "example": ""
        },
        {
          "name": "comment.group_comment",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether or not this comment should be sent to the entire group (defaults\nto false). Ignored if this is not a group assignment or if no text_comment\nis provided.",
          "example": ""
        },
        {
          "name": "comment.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "Add an audio/video comment to the submission. Media comments can be added\nvia this API, however, note that there is not yet an API to generate or\nlist existing media comments, so this functionality is currently of\nlimited use.",
          "example": ""
        },
        {
          "name": "comment.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "The type of media comment being added.",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "comment.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "Attach files to this comment that were previously uploaded using the\nSubmission Comment API's files action",
          "example": ""
        },
        {
          "name": "include.visibility",
          "type": "string",
          "default_value": "",
          "desc": "Whether this assignment is visible to the owner of the submission",
          "example": ""
        },
        {
          "name": "submission.posted_grade",
          "type": "string",
          "default_value": "",
          "desc": "Assign a score to the submission, updating both the \"score\" and \"grade\"\nfields on the submission record. This parameter can be passed in a few\ndifferent formats:\n\npoints:: A floating point or integral value, such as \"13.5\". The grade\n  will be interpreted directly as the score of the assignment.\n  Values above assignment.points_possible are allowed, for awarding\n  extra credit.\npercentage:: A floating point value appended with a percent sign, such as\n   \"40%\". The grade will be interpreted as a percentage score on the\n   assignment, where 100% == assignment.points_possible. Values above 100%\n   are allowed, for awarding extra credit.\nletter grade:: A letter grade, following the assignment's defined letter\n   grading scheme. For example, \"A-\". The resulting score will be the high\n   end of the defined range for the letter grade. For instance, if \"B\" is\n   defined as 86% to 84%, a letter grade of \"B\" will be worth 86%. The\n   letter grade will be rejected if the assignment does not have a defined\n   letter grading scheme. For more fine-grained control of scores, pass in\n   points or percentage rather than the letter grade.\n\"pass/complete/fail/incomplete\":: A string value of \"pass\" or \"complete\"\n   will give a score of 100%. \"fail\" or \"incomplete\" will give a score of\n   0.\n\nNote that assignments with grading_type of \"pass_fail\" can only be\nassigned a score of 0 or assignment.points_possible, nothing inbetween. If\na posted_grade in the \"points\" or \"percentage\" format is sent, the grade\nwill only be accepted if the grade equals one of those two values.",
          "example": ""
        },
        {
          "name": "submission.excuse",
          "type": "boolean",
          "default_value": "",
          "desc": "Sets the \"excused\" status of an assignment.",
          "example": ""
        },
        {
          "name": "submission.late_policy_status",
          "type": "string",
          "default_value": "",
          "desc": "Sets the late policy status to either \"late\", \"missing\", \"none\", or null.",
          "example": ""
        },
        {
          "name": "submission.seconds_late_override",
          "type": "integer",
          "default_value": "",
          "desc": "Sets the seconds late if late policy status is \"late\"",
          "example": ""
        },
        {
          "name": "rubric_assessment",
          "type": "RubricAssessment",
          "default_value": "",
          "desc": "Assign a rubric assessment to this assignment submission. The\nsub-parameters here depend on the rubric for the assignment. The general\nformat is, for each row in the rubric:\n\nThe points awarded for this row.\n  rubric_assessment[criterion_id][points]\n\nThe rating id for the row.\n  rubric_assessment[criterion_id][rating_id]\n\nComments to add for this row.\n  rubric_assessment[criterion_id][comments]\n\nFor example, if the assignment rubric is (in JSON format):\n  !!!javascript\n  [\n    {\n      'id': 'crit1',\n      'points': 10,\n      'description': 'Criterion 1',\n      'ratings':\n      [\n        { 'id': 'rat1', 'description': 'Good', 'points': 10 },\n        { 'id': 'rat2', 'description': 'Poor', 'points': 3 }\n      ]\n    },\n    {\n      'id': 'crit2',\n      'points': 5,\n      'description': 'Criterion 2',\n      'ratings':\n      [\n        { 'id': 'rat1', 'description': 'Exemplary', 'points': 5 },\n        { 'id': 'rat2', 'description': 'Complete', 'points': 5 },\n        { 'id': 'rat3', 'description': 'Incomplete', 'points': 0 }\n      ]\n    }\n  ]\n\nThen a possible set of values for rubric_assessment would be:\n    rubric_assessment[crit1][points]=3&rubric_assessment[crit1][rating_id]=rat1&rubric_assessment[crit2][points]=5&rubric_assessment[crit2][rating_id]=rat2&rubric_assessment[crit2][comments]=Well%20Done.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List gradeable students",
      "controller": "submissions",
      "description": "A paginated list of students eligible to submit the assignment. The caller must have permission to view grades.\n\nIf anonymous grading is enabled for the current assignment and the allow_new_anonymous_id parameter is passed,\nthe returned data will not include any values identifying the student, but will instead include an\nassignment-specific anonymous ID for each student.\n\nSection-limited instructors will only see students in their own sections.",
      "name": "list_gradeable_students",
      "endpoint": "GET /v1/courses/:course_id/assignments/:assignment_id/gradeable_students",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List multiple assignments gradeable students",
      "controller": "submissions",
      "description": "A paginated list of students eligible to submit a list of assignments. The caller must have\npermission to view grades for the requested course.\n\nSection-limited instructors will only see students in their own sections.",
      "name": "list_multiple_assignments_gradeable_students",
      "endpoint": "GET /v1/courses/:course_id/assignments/gradeable_students",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "Assignments being requested",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Grade or comment on multiple submissions",
      "controller": "submissions",
      "description": "Update the grading and comments on multiple student's assignment\nsubmissions in an asynchronous job.\n\nThe user must have permission to manage grades in the appropriate context\n(course or section).",
      "name": "grade_or_comment_on_multiple_submissions_courses_submissions",
      "endpoint": "POST /v1/courses/:course_id/submissions/update_grades",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.posted_grade",
          "type": "string",
          "default_value": "",
          "desc": "See documentation for the posted_grade argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.excuse",
          "type": "boolean",
          "default_value": "",
          "desc": "See documentation for the excuse argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.rubric_assessment",
          "type": "RubricAssessment",
          "default_value": "",
          "desc": "See documentation for the rubric_assessment argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.group_comment",
          "type": "boolean",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "grade_data.<student_id>.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "See documentation for the comment[] arguments in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.assignment_id",
          "type": "integer",
          "default_value": "",
          "desc": "Specifies which assignment to grade.  This argument is not necessary when\nusing the assignment-specific endpoints.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Grade or comment on multiple submissions",
      "controller": "submissions",
      "description": "Update the grading and comments on multiple student's assignment\nsubmissions in an asynchronous job.\n\nThe user must have permission to manage grades in the appropriate context\n(course or section).",
      "name": "grade_or_comment_on_multiple_submissions_courses_assignments",
      "endpoint": "POST /v1/courses/:course_id/assignments/:assignment_id/submissions/update_grades",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.posted_grade",
          "type": "string",
          "default_value": "",
          "desc": "See documentation for the posted_grade argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.excuse",
          "type": "boolean",
          "default_value": "",
          "desc": "See documentation for the excuse argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.rubric_assessment",
          "type": "RubricAssessment",
          "default_value": "",
          "desc": "See documentation for the rubric_assessment argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.group_comment",
          "type": "boolean",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "grade_data.<student_id>.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "See documentation for the comment[] arguments in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.assignment_id",
          "type": "integer",
          "default_value": "",
          "desc": "Specifies which assignment to grade.  This argument is not necessary when\nusing the assignment-specific endpoints.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Grade or comment on multiple submissions",
      "controller": "submissions",
      "description": "Update the grading and comments on multiple student's assignment\nsubmissions in an asynchronous job.\n\nThe user must have permission to manage grades in the appropriate context\n(course or section).",
      "name": "grade_or_comment_on_multiple_submissions_sections_submissions",
      "endpoint": "POST /v1/sections/:section_id/submissions/update_grades",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.posted_grade",
          "type": "string",
          "default_value": "",
          "desc": "See documentation for the posted_grade argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.excuse",
          "type": "boolean",
          "default_value": "",
          "desc": "See documentation for the excuse argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.rubric_assessment",
          "type": "RubricAssessment",
          "default_value": "",
          "desc": "See documentation for the rubric_assessment argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.group_comment",
          "type": "boolean",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "grade_data.<student_id>.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "See documentation for the comment[] arguments in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.assignment_id",
          "type": "integer",
          "default_value": "",
          "desc": "Specifies which assignment to grade.  This argument is not necessary when\nusing the assignment-specific endpoints.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Grade or comment on multiple submissions",
      "controller": "submissions",
      "description": "Update the grading and comments on multiple student's assignment\nsubmissions in an asynchronous job.\n\nThe user must have permission to manage grades in the appropriate context\n(course or section).",
      "name": "grade_or_comment_on_multiple_submissions_sections_assignments",
      "endpoint": "POST /v1/sections/:section_id/assignments/:assignment_id/submissions/update_grades",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.posted_grade",
          "type": "string",
          "default_value": "",
          "desc": "See documentation for the posted_grade argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.excuse",
          "type": "boolean",
          "default_value": "",
          "desc": "See documentation for the excuse argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.rubric_assessment",
          "type": "RubricAssessment",
          "default_value": "",
          "desc": "See documentation for the rubric_assessment argument in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.text_comment",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.group_comment",
          "type": "boolean",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_id",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.media_comment_type",
          "type": "string",
          "default_value": "",
          "desc": "no description",
          "example": [
            "audio",
            "video"
          ]
        },
        {
          "name": "grade_data.<student_id>.file_ids[]",
          "type": "array",
          "default_value": "",
          "desc": "See documentation for the comment[] arguments in the\n{api:SubmissionsApiController#update Submissions Update} documentation",
          "example": ""
        },
        {
          "name": "grade_data.<student_id>.assignment_id",
          "type": "integer",
          "default_value": "",
          "desc": "Specifies which assignment to grade.  This argument is not necessary when\nusing the assignment-specific endpoints.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark submission as read",
      "controller": "submissions",
      "description": "No request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_submission_as_read_courses",
      "endpoint": "PUT /v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark submission as read",
      "controller": "submissions",
      "description": "No request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_submission_as_read_sections",
      "endpoint": "PUT /v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark submission as unread",
      "controller": "submissions",
      "description": "No request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_submission_as_unread_courses",
      "endpoint": "DELETE /v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Mark submission as unread",
      "controller": "submissions",
      "description": "No request fields are necessary.\n\nOn success, the response will be 204 No Content with an empty body.",
      "name": "mark_submission_as_unread_sections",
      "endpoint": "DELETE /v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Submission Summary",
      "controller": "submissions",
      "description": "Returns the number of submissions for the given assignment based on gradeable students\nthat fall into three categories: graded, ungraded, not submitted.",
      "name": "submission_summary_courses",
      "endpoint": "GET /v1/courses/:course_id/assignments/:assignment_id/submission_summary",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "grouped",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is true, the response will take into account student groups.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Submission Summary",
      "controller": "submissions",
      "description": "Returns the number of submissions for the given assignment based on gradeable students\nthat fall into three categories: graded, ungraded, not submitted.",
      "name": "submission_summary_sections",
      "endpoint": "GET /v1/sections/:section_id/assignments/:assignment_id/submission_summary",
      "reference": "https://canvas.instructure.com/doc/api/submissions.html",
      "params": [
        {
          "name": "section_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "assignment_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "grouped",
          "type": "boolean",
          "default_value": "",
          "desc": "If this argument is true, the response will take into account student groups.",
          "example": ""
        }
      ]
    }
  ],
  "users": [
    {
      "display_name": "List users in account",
      "controller": "users",
      "description": "A paginated list of of users associated with this account.\n\n @example_request\n   curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \\\n      -X GET \\\n      -H 'Authorization: Bearer <token>'",
      "name": "list_users_in_account",
      "endpoint": "GET /v1/accounts/:account_id/users",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "search_term",
          "type": "string",
          "default_value": "",
          "desc": "The partial name or full ID of the users to match and return in the\nresults list. Must be at least 3 characters.\n\nNote that the API will prefer matching on canonical user ID if the ID has\na numeric form. It will only search against other fields if non-numeric\nin form, or if the numeric value doesn't yield any matches. Queries by\nadministrative users will search on SIS ID, login ID, name, or email\naddress",
          "example": ""
        },
        {
          "name": "enrollment_type",
          "type": "string",
          "default_value": "",
          "desc": "When set, only return users enrolled with the specified course-level base role.\nThis can be a base role type of 'student', 'teacher',\n'ta', 'observer', or 'designer'.",
          "example": ""
        },
        {
          "name": "sort",
          "type": "string",
          "default_value": "",
          "desc": "The column to sort results by.",
          "example": [
            "username",
            "email",
            "sis_id",
            "last_login"
          ]
        },
        {
          "name": "order",
          "type": "string",
          "default_value": "",
          "desc": "The order to sort the given column by.",
          "example": [
            "asc",
            "desc"
          ]
        }
      ]
    },
    {
      "display_name": "List the activity stream",
      "controller": "users",
      "description": "Returns the current user's global activity stream, paginated.\n\nThere are many types of objects that can be returned in the activity\nstream. All object types have the same basic set of shared attributes:\n  !!!javascript\n  {\n    'created_at': '2011-07-13T09:12:00Z',\n    'updated_at': '2011-07-25T08:52:41Z',\n    'id': 1234,\n    'title': 'Stream Item Subject',\n    'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',\n    'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',\n    'read_state': false,\n    'context_type': 'course', // course|group\n    'course_id': 1,\n    'group_id': null,\n    'html_url': \"http://...\" // URL to the Canvas web UI for this stream item\n  }\n\nIn addition, each item type has its own set of attributes available.\n\nDiscussionTopic:\n\n  !!!javascript\n  {\n    'type': 'DiscussionTopic',\n    'discussion_topic_id': 1234,\n    'total_root_discussion_entries': 5,\n    'require_initial_post': true,\n    'user_has_posted': true,\n    'root_discussion_entries': {\n      ...\n    }\n  }\n\nFor DiscussionTopic, the message is truncated at 4kb.\n\nAnnouncement:\n\n  !!!javascript\n  {\n    'type': 'Announcement',\n    'announcement_id': 1234,\n    'total_root_discussion_entries': 5,\n    'require_initial_post': true,\n    'user_has_posted': null,\n    'root_discussion_entries': {\n      ...\n    }\n  }\n\nFor Announcement, the message is truncated at 4kb.\n\nConversation:\n\n  !!!javascript\n  {\n    'type': 'Conversation',\n    'conversation_id': 1234,\n    'private': false,\n    'participant_count': 3,\n  }\n\nMessage:\n\n  !!!javascript\n  {\n    'type': 'Message',\n    'message_id': 1234,\n    'notification_category': 'Assignment Graded'\n  }\n\nSubmission:\n\nReturns an {api:Submissions:Submission Submission} with its Course and Assignment data.\n\nConference:\n\n  !!!javascript\n  {\n    'type': 'Conference',\n    'web_conference_id': 1234\n  }\n\nCollaboration:\n\n  !!!javascript\n  {\n    'type': 'Collaboration',\n    'collaboration_id': 1234\n  }\n\nAssessmentRequest:\n\n  !!!javascript\n  {\n    'type': 'AssessmentRequest',\n    'assessment_request_id': 1234\n  }",
      "name": "list_activity_stream_self",
      "endpoint": "GET /v1/users/self/activity_stream",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "only_active_courses",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, will only return objects for courses the user is actively participating in",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List the activity stream",
      "controller": "users",
      "description": "Returns the current user's global activity stream, paginated.\n\nThere are many types of objects that can be returned in the activity\nstream. All object types have the same basic set of shared attributes:\n  !!!javascript\n  {\n    'created_at': '2011-07-13T09:12:00Z',\n    'updated_at': '2011-07-25T08:52:41Z',\n    'id': 1234,\n    'title': 'Stream Item Subject',\n    'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',\n    'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',\n    'read_state': false,\n    'context_type': 'course', // course|group\n    'course_id': 1,\n    'group_id': null,\n    'html_url': \"http://...\" // URL to the Canvas web UI for this stream item\n  }\n\nIn addition, each item type has its own set of attributes available.\n\nDiscussionTopic:\n\n  !!!javascript\n  {\n    'type': 'DiscussionTopic',\n    'discussion_topic_id': 1234,\n    'total_root_discussion_entries': 5,\n    'require_initial_post': true,\n    'user_has_posted': true,\n    'root_discussion_entries': {\n      ...\n    }\n  }\n\nFor DiscussionTopic, the message is truncated at 4kb.\n\nAnnouncement:\n\n  !!!javascript\n  {\n    'type': 'Announcement',\n    'announcement_id': 1234,\n    'total_root_discussion_entries': 5,\n    'require_initial_post': true,\n    'user_has_posted': null,\n    'root_discussion_entries': {\n      ...\n    }\n  }\n\nFor Announcement, the message is truncated at 4kb.\n\nConversation:\n\n  !!!javascript\n  {\n    'type': 'Conversation',\n    'conversation_id': 1234,\n    'private': false,\n    'participant_count': 3,\n  }\n\nMessage:\n\n  !!!javascript\n  {\n    'type': 'Message',\n    'message_id': 1234,\n    'notification_category': 'Assignment Graded'\n  }\n\nSubmission:\n\nReturns an {api:Submissions:Submission Submission} with its Course and Assignment data.\n\nConference:\n\n  !!!javascript\n  {\n    'type': 'Conference',\n    'web_conference_id': 1234\n  }\n\nCollaboration:\n\n  !!!javascript\n  {\n    'type': 'Collaboration',\n    'collaboration_id': 1234\n  }\n\nAssessmentRequest:\n\n  !!!javascript\n  {\n    'type': 'AssessmentRequest',\n    'assessment_request_id': 1234\n  }",
      "name": "list_activity_stream_activity_stream",
      "endpoint": "GET /v1/users/activity_stream",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "only_active_courses",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, will only return objects for courses the user is actively participating in",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Activity stream summary",
      "controller": "users",
      "description": "Returns a summary of the current user's global activity stream.",
      "name": "activity_stream_summary",
      "endpoint": "GET /v1/users/self/activity_stream/summary",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": []
    },
    {
      "display_name": "List the TODO items",
      "controller": "users",
      "description": "A paginated list of the current user's list of todo items.\n\nThere is a limit to the number of items returned.\n\nThe `ignore` and `ignore_permanently` URLs can be used to update the user's\npreferences on what items will be displayed.\nPerforming a DELETE request against the `ignore` URL will hide that item\nfrom future todo item requests, until the item changes.\nPerforming a DELETE request against the `ignore_permanently` URL will hide\nthat item forever.",
      "name": "list_todo_items",
      "endpoint": "GET /v1/users/self/todo",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "\"ungraded_quizzes\":: Optionally include ungraded quizzes (such as practice quizzes and surveys) in the list.\n                     These will be returned under a +quiz+ key instead of an +assignment+ key in response elements.",
          "example": [
            "ungraded_quizzes"
          ]
        }
      ]
    },
    {
      "display_name": "List counts for todo items",
      "controller": "users",
      "description": "Counts of different todo items such as the number of assignments needing grading as well as the number of assignments needing submitting.\n\nThere is a limit to the number of todo items this endpoint will count.\nIt will only look at the first 100 todo items for the user. If the user has more than 100 todo items this count may not be reliable.\nThe largest reliable number for both counts is 100.",
      "name": "list_counts_for_todo_items",
      "endpoint": "GET /v1/users/self/todo_item_count",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "\"ungraded_quizzes\":: Optionally include ungraded quizzes (such as practice quizzes and surveys) in the list.\n                     These will be returned under a +quiz+ key instead of an +assignment+ key in response elements.",
          "example": [
            "ungraded_quizzes"
          ]
        }
      ]
    },
    {
      "display_name": "List upcoming assignments, calendar events",
      "controller": "users",
      "description": "A paginated list of the current user's upcoming events.",
      "name": "list_upcoming_assignments_calendar_events",
      "endpoint": "GET /v1/users/self/upcoming_events",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": []
    },
    {
      "display_name": "List Missing Submissions",
      "controller": "users",
      "description": "A paginated list of past-due assignments for which the student does not have a submission.\nThe user sending the request must either be the student, an admin or a parent observer using the parent app",
      "name": "list_missing_submissions",
      "endpoint": "GET /v1/users/:user_id/missing_submissions",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "the student's ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "\"planner_overrides\":: Optionally include the assignment's associated planner override, if it exists, for the current user.\n                      These will be returned under a +planner_override+ key\n\"course\":: Optionally include the assignments' courses",
          "example": [
            "planner_overrides",
            "course"
          ]
        },
        {
          "name": "filter[]",
          "type": "array",
          "default_value": "",
          "desc": "\"submittable\":: Only return assignments that the current user can submit (i.e. filter out locked assignments)",
          "example": [
            "submittable"
          ]
        }
      ]
    },
    {
      "display_name": "Hide a stream item",
      "controller": "users",
      "description": "Hide the given stream item.",
      "name": "hide_stream_item",
      "endpoint": "DELETE /v1/users/self/activity_stream/:id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Hide all stream items",
      "controller": "users",
      "description": "Hide all stream items for the user",
      "name": "hide_all_stream_items",
      "endpoint": "DELETE /v1/users/self/activity_stream",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": []
    },
    {
      "display_name": "Upload a file",
      "controller": "users",
      "description": "Upload a file to the user's personal files section.\n\nThis API endpoint is the first step in uploading a file to a user's files.\nSee the {file:file_uploads.html File Upload Documentation} for details on\nthe file upload workflow.\n\nNote that typically users will only be able to upload files to their\nown files section. Passing a user_id of +self+ is an easy shortcut\nto specify the current user.",
      "name": "upload_file",
      "endpoint": "POST /v1/users/:user_id/files",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Show user details",
      "controller": "users",
      "description": "Shows details for user.\n\nAlso includes an attribute \"permissions\", a non-comprehensive list of permissions for the user.\nExample:\n  !!!javascript\n  \"permissions\": {\n   \"can_update_name\": true, // Whether the user can update their name.\n   \"can_update_avatar\": false, // Whether the user can update their avatar.\n   \"limit_parent_app_web_access\": false // Whether the user can interact with Canvas web from the Canvas Parent app.\n  }",
      "name": "show_user_details",
      "endpoint": "GET /v1/users/:id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Array of additional information to include on the user record.\n\"locale\", \"avatar_url\", \"permissions\", \"email\", and \"effective_locale\"\nwill always be returned",
          "example": [
            "uuid",
            "last_login"
          ]
        }
      ]
    },
    {
      "display_name": "Create a user",
      "controller": "users",
      "description": "Create and return a new user and pseudonym for an account.\n\n[DEPRECATED (for self-registration only)] If you don't have the \"Modify\nlogin details for users\" permission, but self-registration is enabled\non the account, you can still use this endpoint to register new users.\nCertain fields will be required, and others will be ignored (see below).",
      "name": "create_user",
      "endpoint": "POST /v1/accounts/:account_id/users",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user.name",
          "type": "string",
          "default_value": "",
          "desc": "The full name of the user. This name will be used by teacher for grading.\nRequired if this is a self-registration.",
          "example": ""
        },
        {
          "name": "user.short_name",
          "type": "string",
          "default_value": "",
          "desc": "User's name as it will be displayed in discussions, messages, and comments.",
          "example": ""
        },
        {
          "name": "user.sortable_name",
          "type": "string",
          "default_value": "",
          "desc": "User's name as used to sort alphabetically in lists.",
          "example": ""
        },
        {
          "name": "user.time_zone",
          "type": "string",
          "default_value": "",
          "desc": "The time zone for the user. Allowed time zones are\n{http://www.iana.org/time-zones IANA time zones} or friendlier\n{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.",
          "example": ""
        },
        {
          "name": "user.locale",
          "type": "string",
          "default_value": "",
          "desc": "The user's preferred language, from the list of languages Canvas supports.\nThis is in RFC-5646 format.",
          "example": ""
        },
        {
          "name": "user.terms_of_use",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the user accepts the terms of use. Required if this is a\nself-registration and this canvas instance requires users to accept\nthe terms (on by default).\n\nIf this is true, it will mark the user as having accepted the terms of use.",
          "example": ""
        },
        {
          "name": "user.skip_registration",
          "type": "boolean",
          "default_value": "",
          "desc": "Automatically mark the user as registered.\n\nIf this is true, it is recommended to set <tt>\"pseudonym[send_confirmation]\"</tt> to true as well.\nOtherwise, the user will not receive any messages about their account creation.\n\nThe users communication channel confirmation can be skipped by setting\n<tt>\"communication_channel[skip_confirmation]\"</tt> to true as well.",
          "example": ""
        },
        {
          "name": "pseudonym.unique_id",
          "type": "string",
          "default_value": "",
          "desc": "User's login ID. If this is a self-registration, it must be a valid\nemail address.",
          "example": ""
        },
        {
          "name": "pseudonym.password",
          "type": "string",
          "default_value": "",
          "desc": "User's password. Cannot be set during self-registration.",
          "example": ""
        },
        {
          "name": "pseudonym.sis_user_id",
          "type": "string",
          "default_value": "",
          "desc": "SIS ID for the user's account. To set this parameter, the caller must be\nable to manage SIS permissions.",
          "example": ""
        },
        {
          "name": "pseudonym.integration_id",
          "type": "string",
          "default_value": "",
          "desc": "Integration ID for the login. To set this parameter, the caller must be able to\nmanage SIS permissions. The Integration ID is a secondary\nidentifier useful for more complex SIS integrations.",
          "example": ""
        },
        {
          "name": "pseudonym.send_confirmation",
          "type": "boolean",
          "default_value": "",
          "desc": "Send user notification of account creation if true.\nAutomatically set to true during self-registration.",
          "example": ""
        },
        {
          "name": "pseudonym.force_self_registration",
          "type": "boolean",
          "default_value": "",
          "desc": "Send user a self-registration style email if true.\nSetting it means the users will get a notification asking them\nto \"complete the registration process\" by clicking it, setting\na password, and letting them in.  Will only be executed on\nif the user does not need admin approval.\nDefaults to false unless explicitly provided.",
          "example": ""
        },
        {
          "name": "pseudonym.authentication_provider_id",
          "type": "string",
          "default_value": "",
          "desc": "The authentication provider this login is associated with. Logins\nassociated with a specific provider can only be used with that provider.\nLegacy providers (LDAP, CAS, SAML) will search for logins associated with\nthem, or unassociated logins. New providers will only search for logins\nexplicitly associated with them. This can be the integer ID of the\nprovider, or the type of the provider (in which case, it will find the\nfirst matching provider).",
          "example": ""
        },
        {
          "name": "communication_channel.type",
          "type": "string",
          "default_value": "",
          "desc": "The communication channel type, e.g. 'email' or 'sms'.",
          "example": ""
        },
        {
          "name": "communication_channel.address",
          "type": "string",
          "default_value": "",
          "desc": "The communication channel address, e.g. the user's email address.",
          "example": ""
        },
        {
          "name": "communication_channel.confirmation_url",
          "type": "boolean",
          "default_value": "",
          "desc": "Only valid for account admins. If true, returns the new user account\nconfirmation URL in the response.",
          "example": ""
        },
        {
          "name": "communication_channel.skip_confirmation",
          "type": "boolean",
          "default_value": "",
          "desc": "Only valid for site admins and account admins making requests; If true, the channel is\nautomatically validated and no confirmation email or SMS is sent.\nOtherwise, the user must respond to a confirmation message to confirm the\nchannel.\n\nIf this is true, it is recommended to set <tt>\"pseudonym[send_confirmation]\"</tt> to true as well.\nOtherwise, the user will not receive any messages about their account creation.",
          "example": ""
        },
        {
          "name": "force_validations",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, validations are performed on the newly created user (and their associated pseudonym)\neven if the request is made by a privileged user like an admin. When set to false,\nor not included in the request parameters, any newly created users are subject to\nvalidations unless the request is made by a user with a 'manage_user_logins' right.\nIn which case, certain validations such as 'require_acceptance_of_terms' and\n'require_presence_of_name' are not enforced. Use this parameter to return helpful json\nerrors while building users with an admin request.",
          "example": ""
        },
        {
          "name": "enable_sis_reactivation",
          "type": "boolean",
          "default_value": "",
          "desc": "When true, will first try to re-activate a deleted user with matching sis_user_id if possible.\nThis is commonly done with user[skip_registration] and communication_channel[skip_confirmation]\nso that the default communication_channel is also restored.",
          "example": ""
        },
        {
          "name": "destination",
          "type": "URL",
          "default_value": "",
          "desc": "If you're setting the password for the newly created user, you can provide this param\nwith a valid URL pointing into this Canvas installation, and the response will include\na destination field that's a URL that you can redirect a browser to and have the newly\ncreated user automatically logged in. The URL is only valid for a short time, and must\nmatch the domain this request is directed to, and be for a well-formed path that Canvas\ncan recognize.",
          "example": ""
        },
        {
          "name": "initial_enrollment_type",
          "type": "string",
          "default_value": "",
          "desc": "`observer` if doing a self-registration with a pairing code. This allows setting the\npassword during user creation.",
          "example": ""
        },
        {
          "name": "pairing_code.code",
          "type": "string",
          "default_value": "",
          "desc": "If provided and valid, will link the new user as an observer to the student's whose\npairing code is given.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "[DEPRECATED] Self register a user",
      "controller": "users",
      "description": "Self register and return a new user and pseudonym for an account.\n\nIf self-registration is enabled on the account, you can use this\nendpoint to self register new users.",
      "name": "deprecated_self_register_user",
      "endpoint": "POST /v1/accounts/:account_id/self_registration",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user.name",
          "type": "string",
          "default_value": "",
          "desc": "The full name of the user. This name will be used by teacher for grading.",
          "example": ""
        },
        {
          "name": "user.short_name",
          "type": "string",
          "default_value": "",
          "desc": "User's name as it will be displayed in discussions, messages, and comments.",
          "example": ""
        },
        {
          "name": "user.sortable_name",
          "type": "string",
          "default_value": "",
          "desc": "User's name as used to sort alphabetically in lists.",
          "example": ""
        },
        {
          "name": "user.time_zone",
          "type": "string",
          "default_value": "",
          "desc": "The time zone for the user. Allowed time zones are\n{http://www.iana.org/time-zones IANA time zones} or friendlier\n{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.",
          "example": ""
        },
        {
          "name": "user.locale",
          "type": "string",
          "default_value": "",
          "desc": "The user's preferred language, from the list of languages Canvas supports.\nThis is in RFC-5646 format.",
          "example": ""
        },
        {
          "name": "user.terms_of_use",
          "type": "boolean",
          "default_value": "",
          "desc": "Whether the user accepts the terms of use.",
          "example": ""
        },
        {
          "name": "pseudonym.unique_id",
          "type": "string",
          "default_value": "",
          "desc": "User's login ID. Must be a valid email address.",
          "example": ""
        },
        {
          "name": "communication_channel.type",
          "type": "string",
          "default_value": "",
          "desc": "The communication channel type, e.g. 'email' or 'sms'.",
          "example": ""
        },
        {
          "name": "communication_channel.address",
          "type": "string",
          "default_value": "",
          "desc": "The communication channel address, e.g. the user's email address.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update user settings.",
      "controller": "users",
      "description": "Update an existing user's settings.",
      "name": "update_user_settings",
      "endpoint": "GET /v1/users/:id/settings",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "manual_mark_as_read",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, require user to manually mark discussion posts as read (don't\nauto-mark as read).",
          "example": ""
        },
        {
          "name": "collapse_global_nav",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, the user's page loads with the global navigation collapsed",
          "example": ""
        },
        {
          "name": "hide_dashcard_color_overlays",
          "type": "boolean",
          "default_value": "",
          "desc": "If true, images on course cards will be presented without being tinted\nto match the course color.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get custom colors",
      "controller": "users",
      "description": "Returns all custom colors that have been saved for a user.",
      "name": "get_custom_colors",
      "endpoint": "GET /v1/users/:id/colors",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get custom color",
      "controller": "users",
      "description": "Returns the custom colors that have been saved for a user for a given context.\n\nThe asset_string parameter should be in the format 'context_id', for example\n'course_42'.",
      "name": "get_custom_color",
      "endpoint": "GET /v1/users/:id/colors/:asset_string",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "asset_string",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update custom color",
      "controller": "users",
      "description": "Updates a custom color for a user for a given context.  This allows\ncolors for the calendar and elsewhere to be customized on a user basis.\n\nThe asset string parameter should be in the format 'context_id', for example\n'course_42'",
      "name": "update_custom_color",
      "endpoint": "PUT /v1/users/:id/colors/:asset_string",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "asset_string",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "hexcode",
          "type": "string",
          "default_value": "",
          "desc": "The hexcode of the color to set for the context, if you choose to pass the\nhexcode as a query parameter rather than in the request body you should\nNOT include the '#' unless you escape it first.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get dashboard positions",
      "controller": "users",
      "description": "Returns all dashboard positions that have been saved for a user.",
      "name": "get_dashboard_positions",
      "endpoint": "GET /v1/users/:id/dashboard_positions",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Update dashboard positions",
      "controller": "users",
      "description": "Updates the dashboard positions for a user for a given context.  This allows\npositions for the dashboard cards and elsewhere to be customized on a per\nuser basis.\n\nThe asset string parameter should be in the format 'context_id', for example\n'course_42'",
      "name": "update_dashboard_positions",
      "endpoint": "PUT /v1/users/:id/dashboard_positions",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Edit a user",
      "controller": "users",
      "description": "Modify an existing user. To modify a user's login, see the documentation for logins.",
      "name": "edit_user",
      "endpoint": "PUT /v1/users/:id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "user.name",
          "type": "string",
          "default_value": "",
          "desc": "The full name of the user. This name will be used by teacher for grading.",
          "example": ""
        },
        {
          "name": "user.short_name",
          "type": "string",
          "default_value": "",
          "desc": "User's name as it will be displayed in discussions, messages, and comments.",
          "example": ""
        },
        {
          "name": "user.sortable_name",
          "type": "string",
          "default_value": "",
          "desc": "User's name as used to sort alphabetically in lists.",
          "example": ""
        },
        {
          "name": "user.time_zone",
          "type": "string",
          "default_value": "",
          "desc": "The time zone for the user. Allowed time zones are\n{http://www.iana.org/time-zones IANA time zones} or friendlier\n{http://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html Ruby on Rails time zones}.",
          "example": ""
        },
        {
          "name": "user.email",
          "type": "string",
          "default_value": "",
          "desc": "The default email address of the user.",
          "example": ""
        },
        {
          "name": "user.locale",
          "type": "string",
          "default_value": "",
          "desc": "The user's preferred language, from the list of languages Canvas supports.\nThis is in RFC-5646 format.",
          "example": ""
        },
        {
          "name": "user.avatar.token",
          "type": "string",
          "default_value": "",
          "desc": "A unique representation of the avatar record to assign as the user's\ncurrent avatar. This token can be obtained from the user avatars endpoint.\nThis supersedes the user [avatar] [url] argument, and if both are included\nthe url will be ignored. Note: this is an internal representation and is\nsubject to change without notice. It should be consumed with this api\nendpoint and used in the user update endpoint, and should not be\nconstructed by the client.",
          "example": ""
        },
        {
          "name": "user.avatar.url",
          "type": "string",
          "default_value": "",
          "desc": "To set the user's avatar to point to an external url, do not include a\ntoken and instead pass the url here. Warning: For maximum compatibility,\nplease use 128 px square images.",
          "example": ""
        },
        {
          "name": "user.title",
          "type": "string",
          "default_value": "",
          "desc": "Sets a title on the user profile. (See {api:ProfileController#settings Get user profile}.)\nProfiles must be enabled on the root account.",
          "example": ""
        },
        {
          "name": "user.bio",
          "type": "string",
          "default_value": "",
          "desc": "Sets a bio on the user profile. (See {api:ProfileController#settings Get user profile}.)\nProfiles must be enabled on the root account.",
          "example": ""
        },
        {
          "name": "user.pronouns",
          "type": "string",
          "default_value": "",
          "desc": "Sets pronouns on the user profile.\nPassing an empty string will empty the user's pronouns\nOnly Available Pronouns set on the root account are allowed\nAdding and changing pronouns must be enabled on the root account.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Merge user into another user",
      "controller": "users",
      "description": "Merge a user into another user.\nTo merge users, the caller must have permissions to manage both users. This\nshould be considered irreversible. This will delete the user and move all\nthe data into the destination user.\n\nUser merge details and caveats:\nThe from_user is the user that was deleted in the user_merge process.\nThe destination_user is the user that remains, that is being split.\n\nAvatars:\nWhen both users have avatars, only the destination_users avatar will remain.\nWhen one user has an avatar, will it will end up on the destination_user.\n\nTerms of Use:\nIf either user has accepted terms of use, it will be be left as accepted.\n\nCommunication Channels:\nAll unique communication channels moved to the destination_user.\nAll notification preferences are moved to the destination_user.\n\nEnrollments:\nAll unique enrollments are moved to the destination_user.\nWhen there is an enrollment that would end up making it so that a user would\nbe observing themselves, the enrollment is not moved over.\nEverything that is tied to the from_user at the course level relating to the\nenrollment is also moved to the destination_user.\n\nSubmissions:\nAll submissions are moved to the destination_user. If there are enrollments\nfor both users in the same course, we prefer submissions that have grades\nthen submissions that have work in them, and if there are no grades or no\nwork, they are not moved.\n\nOther notes:\nAccess Tokens are moved on merge.\nConversations are moved on merge.\nFavorites are moved on merge.\nCourses will commonly use LTI tools. LTI tools reference the user with IDs\nthat are stored on a user object. Merging users deletes one user and moves\nall records from the deleted user to the destination_user. These IDs are\nkept for all enrollments, group_membership, and account_users for the\nfrom_user at the time of the merge. When the destination_user launches an\nLTI tool from a course that used to be the from_user's, it doesn't appear as\na new user to the tool provider. Instead it will send the stored ids. The\ndestination_user's LTI IDs remain as they were for the courses that they\noriginally had. Future enrollments for the destination_user will use the IDs\nthat are on the destination_user object. LTI IDs that are kept and tracked\nper context include lti_context_id, lti_id and uuid. APIs that return the\nLTI ids will return the one for the context that it is called for, except\nfor the user uuid. The user UUID will display the destination_users uuid,\nand when getting the uuid from an api that is in a context that was\nrecorded from a merge event, an additional attribute is added as past_uuid.\n\nWhen finding users by SIS ids in different accounts the\ndestination_account_id is required.\n\nThe account can also be identified by passing the domain in destination_account_id.",
      "name": "merge_user_into_another_user_destination_user_id",
      "endpoint": "PUT /v1/users/:id/merge_into/:destination_user_id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "destination_user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Merge user into another user",
      "controller": "users",
      "description": "Merge a user into another user.\nTo merge users, the caller must have permissions to manage both users. This\nshould be considered irreversible. This will delete the user and move all\nthe data into the destination user.\n\nUser merge details and caveats:\nThe from_user is the user that was deleted in the user_merge process.\nThe destination_user is the user that remains, that is being split.\n\nAvatars:\nWhen both users have avatars, only the destination_users avatar will remain.\nWhen one user has an avatar, will it will end up on the destination_user.\n\nTerms of Use:\nIf either user has accepted terms of use, it will be be left as accepted.\n\nCommunication Channels:\nAll unique communication channels moved to the destination_user.\nAll notification preferences are moved to the destination_user.\n\nEnrollments:\nAll unique enrollments are moved to the destination_user.\nWhen there is an enrollment that would end up making it so that a user would\nbe observing themselves, the enrollment is not moved over.\nEverything that is tied to the from_user at the course level relating to the\nenrollment is also moved to the destination_user.\n\nSubmissions:\nAll submissions are moved to the destination_user. If there are enrollments\nfor both users in the same course, we prefer submissions that have grades\nthen submissions that have work in them, and if there are no grades or no\nwork, they are not moved.\n\nOther notes:\nAccess Tokens are moved on merge.\nConversations are moved on merge.\nFavorites are moved on merge.\nCourses will commonly use LTI tools. LTI tools reference the user with IDs\nthat are stored on a user object. Merging users deletes one user and moves\nall records from the deleted user to the destination_user. These IDs are\nkept for all enrollments, group_membership, and account_users for the\nfrom_user at the time of the merge. When the destination_user launches an\nLTI tool from a course that used to be the from_user's, it doesn't appear as\na new user to the tool provider. Instead it will send the stored ids. The\ndestination_user's LTI IDs remain as they were for the courses that they\noriginally had. Future enrollments for the destination_user will use the IDs\nthat are on the destination_user object. LTI IDs that are kept and tracked\nper context include lti_context_id, lti_id and uuid. APIs that return the\nLTI ids will return the one for the context that it is called for, except\nfor the user uuid. The user UUID will display the destination_users uuid,\nand when getting the uuid from an api that is in a context that was\nrecorded from a merge event, an additional attribute is added as past_uuid.\n\nWhen finding users by SIS ids in different accounts the\ndestination_account_id is required.\n\nThe account can also be identified by passing the domain in destination_account_id.",
      "name": "merge_user_into_another_user_accounts",
      "endpoint": "PUT /v1/users/:id/merge_into/accounts/:destination_account_id/users/:destination_user_id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "destination_account_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "destination_user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Split merged users into separate users",
      "controller": "users",
      "description": "Merged users cannot be fully restored to their previous state, but this will\nattempt to split as much as possible to the previous state.\nTo split a merged user, the caller must have permissions to manage all of\nthe users logins. If there are multiple users that have been merged into one\nuser it will split each merge into a separate user.\nA split can only happen within 180 days of a user merge. A user merge deletes\nthe previous user and may be permanently deleted. In this scenario we create\na new user object and proceed to move as much as possible to the new user.\nThe user object will not have preserved the name or settings from the\nprevious user. Some items may have been deleted during a user_merge that\ncannot be restored, and/or the data has become stale because of other\nchanges to the objects since the time of the user_merge.\n\nSplit users details and caveats:\n\nThe from_user is the user that was deleted in the user_merge process.\nThe destination_user is the user that remains, that is being split.\n\nAvatars:\nWhen both users had avatars, both will be remain.\nWhen from_user had an avatar and destination_user did not have an avatar,\nthe destination_user's avatar will be deleted if it still matches what was\nthere are the time of the merge.\nIf the destination_user's avatar was changed at anytime after the merge, it\nwill remain on the destination user.\nIf the from_user had an avatar it will be there after split.\n\nTerms of Use:\nIf from_user had not accepted terms of use, they will be prompted again\nto accept terms of use after the split.\nIf the destination_user had not accepted terms of use, hey will be prompted\nagain to accept terms of use after the split.\nIf neither user had accepted the terms of use, but since the time of the\nmerge had accepted, both will be prompted to accept terms of use.\nIf both had accepted terms of use, this will remain.\n\nCommunication Channels:\nAll communication channels are restored to what they were prior to the\nmerge. If a communication channel was added after the merge, it will remain\non the destination_user.\nNotification preferences remain with the communication channels.\n\nEnrollments:\nAll enrollments from the time of the merge will be moved back to where they\nwere. Enrollments created since the time of the merge that were created by\nsis_import will go to the user that owns that sis_id used for the import.\nOther new enrollments will remain on the destination_user.\nEverything that is tied to the destination_user at the course level relating\nto an enrollment is moved to the from_user. When both users are in the same\ncourse prior to merge this can cause some unexpected items to move.\n\nSubmissions:\nUnlike other items tied to a course, submissions are explicitly recorded to\navoid problems with grades.\nAll submissions were moved are restored to the spot prior to merge.\nAll submission that were created in a course that was moved in enrollments\nare moved over to the from_user.\n\nOther notes:\nAccess Tokens are moved back on split.\nConversations are moved back on split.\nFavorites that existing at the time of merge are moved back on split.\nLTI ids are restored to how they were prior to merge.",
      "name": "split_merged_users_into_separate_users",
      "endpoint": "POST /v1/users/:id/split",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a Pandata Events jwt token and its expiration date",
      "controller": "users",
      "description": "Returns a jwt auth and props token that can be used to send events to\nPandata.\n\nNOTE: This is currently only available to the mobile developer keys.",
      "name": "get_pandata_events_jwt_token_and_its_expiration_date",
      "endpoint": "POST /v1/users/self/pandata_events_token",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "app_key",
          "type": "string",
          "default_value": "",
          "desc": "The pandata events appKey for this mobile app",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get a users most recently graded submissions",
      "controller": "users",
      "description": "",
      "name": "get_users_most_recently_graded_submissions",
      "endpoint": "GET /v1/users/:id/graded_submissions",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "include[]",
          "type": "array",
          "default_value": "",
          "desc": "Associations to include with the group",
          "example": [
            "assignment"
          ]
        },
        {
          "name": "only_current_enrollments",
          "type": "boolean",
          "default_value": "",
          "desc": "Returns submissions for only currently active enrollments",
          "example": ""
        },
        {
          "name": "only_published_assignments",
          "type": "boolean",
          "default_value": "",
          "desc": "Returns submissions for only published assignments",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Get user profile",
      "controller": "users",
      "description": "Returns user profile data, including user id, name, and profile pic.\n\nWhen requesting the profile for the user accessing the API, the user's\ncalendar feed URL and LTI user id will be returned as well.",
      "name": "get_user_profile",
      "endpoint": "GET /v1/users/:user_id/profile",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List avatar options",
      "controller": "users",
      "description": "A paginated list of the possible user avatar options that can be set with the user update endpoint. The response will be an array of avatar records. If the 'type' field is 'attachment', the record will include all the normal attachment json fields; otherwise it will include only the 'url' and 'display_name' fields. Additionally, all records will include a 'type' field and a 'token' field. The following explains each field in more detail\ntype:: [\"gravatar\"|\"attachment\"|\"no_pic\"] The type of avatar record, for categorization purposes.\nurl:: The url of the avatar\ntoken:: A unique representation of the avatar record which can be used to set the avatar with the user update endpoint. Note: this is an internal representation and is subject to change without notice. It should be consumed with this api endpoint and used in the user update endpoint, and should not be constructed by the client.\ndisplay_name:: A textual description of the avatar record\nid:: ['attachment' type only] the internal id of the attachment\ncontent-type:: ['attachment' type only] the content-type of the attachment\nfilename:: ['attachment' type only] the filename of the attachment\nsize:: ['attachment' type only] the size of the attachment",
      "name": "list_avatar_options",
      "endpoint": "GET /v1/users/:user_id/avatars",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List user page views",
      "controller": "users",
      "description": "Return a paginated list of the user's page view history in json format,\nsimilar to the available CSV download. Page views are returned in\ndescending order, newest to oldest.",
      "name": "list_user_page_views",
      "endpoint": "GET /v1/users/:user_id/page_views",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "start_time",
          "type": "DateTime",
          "default_value": "",
          "desc": "The beginning of the time range from which you want page views.",
          "example": ""
        },
        {
          "name": "end_time",
          "type": "DateTime",
          "default_value": "",
          "desc": "The end of the time range from which you want page views.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Store custom data",
      "controller": "users",
      "description": "Store arbitrary user data as JSON.\n\nArbitrary JSON data can be stored for a User.\nA typical scenario would be an external site/service that registers users in Canvas\nand wants to capture additional info about them.  The part of the URL that follows\n+/custom_data/+ defines the scope of the request, and it reflects the structure of\nthe JSON data to be stored or retrieved.\n\nThe value +self+ may be used for +user_id+ to store data associated with the calling user.\nIn order to access another user's custom data, you must be an account administrator with\npermission to manage users.\n\nA namespace parameter, +ns+, is used to prevent custom_data collisions between\ndifferent apps.  This parameter is required for all custom_data requests.\n\nA request with Content-Type multipart/form-data or Content-Type\napplication/x-www-form-urlencoded can only be used to store strings.\n\nExample PUT with multipart/form-data data:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/telephone' \\\n    -X PUT \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -F 'data=555-1234' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": \"555-1234\"\n  }\n\nSubscopes (or, generated scopes) can also be specified by passing values to\n+data+[+subscope+].\n\nExample PUT specifying subscopes:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements' \\\n    -X PUT \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -F 'data[waist]=32in' \\\n    -F 'data[inseam]=34in' \\\n    -F 'data[chest]=40in' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": {\n      \"chest\": \"40in\",\n      \"waist\": \"32in\",\n      \"inseam\": \"34in\"\n    }\n  }\n\nFollowing such a request, subsets of the stored data to be retrieved directly from a subscope.\n\nExample {api:UsersController#get_custom_data GET} from a generated scope\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements/chest' \\\n    -X GET \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": \"40in\"\n  }\n\nIf you want to store more than just strings (i.e. numbers, arrays, hashes, true, false,\nand/or null), you must make a request with Content-Type application/json as in the following\nexample.\n\nExample PUT with JSON data:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \\\n    -H 'Content-Type: application/json' \\\n    -X PUT \\\n    -d '{\n          \"ns\": \"com.my-organization.canvas-app\",\n          \"data\": {\n            \"a-number\": 6.02e23,\n            \"a-bool\": true,\n            \"a-string\": \"true\",\n            \"a-hash\": {\"a\": {\"b\": \"ohai\"}},\n            \"an-array\": [1, \"two\", null, false]\n          }\n        }' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": {\n      \"a-number\": 6.02e+23,\n      \"a-bool\": true,\n      \"a-string\": \"true\",\n      \"a-hash\": {\n        \"a\": {\n          \"b\": \"ohai\"\n        }\n      },\n      \"an-array\": [1, \"two\", null, false]\n    }\n  }\n\nIf the data is an Object (as it is in the above example), then subsets of the data can\nbe accessed by including the object's (possibly nested) keys in the scope of a GET request.\n\nExample {api:UsersController#get_custom_data GET} with a generated scope:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/a-hash/a/b' \\\n    -X GET \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": \"ohai\"\n  }\n\n\nOn success, this endpoint returns an object containing the data that was stored.\n\nResponds with status code 200 if the scope already contained data, and it was overwritten\nby the data specified in the request.\n\nResponds with status code 201 if the scope was previously empty, and the data specified\nin the request was successfully stored there.\n\nResponds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if\nthe +data+ parameter is missing.\n\nResponds with status code 409 if the requested scope caused a conflict and data was not stored.\nThis happens when storing data at the requested scope would cause data at an outer scope\nto be lost.  e.g., if +/custom_data+ was +{\"fashion_app\": {\"hair\": \"blonde\"}}+, but\nyou tried to +`PUT /custom_data/fashion_app/hair/style -F data=buzz`+, then for the request\nto succeed,the value of +/custom_data/fashion_app/hair+ would have to become a hash, and its\nold string value would be lost.  In this situation, an error object is returned with the\nfollowing format:\n\n  !!!javascript\n  {\n    \"message\": \"write conflict for custom_data hash\",\n    \"conflict_scope\": \"fashion_app/hair\",\n    \"type_at_conflict\": \"String\",\n    \"value_at_conflict\": \"blonde\"\n  }",
      "name": "store_custom_data",
      "endpoint": "PUT /v1/users/:user_id/custom_data",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "ns",
          "type": "string",
          "default_value": "",
          "desc": "The namespace under which to store the data.  This should be something other\nCanvas API apps aren't likely to use, such as a reverse DNS for your organization.",
          "example": ""
        },
        {
          "name": "data",
          "type": "JSON",
          "default_value": "",
          "desc": "The data you want to store for the user, at the specified scope.  If the data is\ncomposed of (possibly nested) JSON objects, scopes will be generated for the (nested)\nkeys (see examples).",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Load custom data",
      "controller": "users",
      "description": "Load custom user data.\n\nArbitrary JSON data can be stored for a User.  This API call\nretrieves that data for a (optional) given scope.\nSee {api:UsersController#set_custom_data Store Custom Data} for details and\nexamples.\n\nOn success, this endpoint returns an object containing the data that was requested.\n\nResponds with status code 400 if the namespace parameter, +ns+, is missing or invalid,\nor if the specified scope does not contain any data.",
      "name": "load_custom_data",
      "endpoint": "GET /v1/users/:user_id/custom_data",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "ns",
          "type": "string",
          "default_value": "",
          "desc": "The namespace from which to retrieve the data.  This should be something other\nCanvas API apps aren't likely to use, such as a reverse DNS for your organization.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Delete custom data",
      "controller": "users",
      "description": "Delete custom user data.\n\nArbitrary JSON data can be stored for a User.  This API call\ndeletes that data for a given scope.  Without a scope, all custom_data is deleted.\nSee {api:UsersController#set_custom_data Store Custom Data} for details and\nexamples of storage and retrieval.\n\nAs an example, we'll store some data, then delete a subset of it.\n\nExample {api:UsersController#set_custom_data PUT} with valid JSON data:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \\\n    -X PUT \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -F 'data[fruit][apple]=so tasty' \\\n    -F 'data[fruit][kiwi]=a bit sour' \\\n    -F 'data[veggies][root][onion]=tear-jerking' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": {\n      \"fruit\": {\n        \"apple\": \"so tasty\",\n        \"kiwi\": \"a bit sour\"\n      },\n      \"veggies\": {\n        \"root\": {\n          \"onion\": \"tear-jerking\"\n        }\n      }\n    }\n  }\n\nExample DELETE:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/fruit/kiwi' \\\n    -X DELETE \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": \"a bit sour\"\n  }\n\nExample {api:UsersController#get_custom_data GET} following the above DELETE:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \\\n    -X GET \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": {\n      \"fruit\": {\n        \"apple\": \"so tasty\"\n      },\n      \"veggies\": {\n        \"root\": {\n          \"onion\": \"tear-jerking\"\n        }\n      }\n    }\n  }\n\nNote that hashes left empty after a DELETE will get removed from the custom_data store.\nFor example, following the previous commands, if we delete /custom_data/veggies/root/onion,\nthen the entire /custom_data/veggies scope will be removed.\n\nExample DELETE that empties a parent scope:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/veggies/root/onion' \\\n    -X DELETE \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": \"tear-jerking\"\n  }\n\nExample {api:UsersController#get_custom_data GET} following the above DELETE:\n  curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \\\n    -X GET \\\n    -F 'ns=com.my-organization.canvas-app' \\\n    -H 'Authorization: Bearer <token>'\n\nResponse:\n  !!!javascript\n  {\n    \"data\": {\n      \"fruit\": {\n        \"apple\": \"so tasty\"\n      }\n    }\n  }\n\nOn success, this endpoint returns an object containing the data that was deleted.\n\nResponds with status code 400 if the namespace parameter, +ns+, is missing or invalid,\nor if the specified scope does not contain any data.",
      "name": "delete_custom_data",
      "endpoint": "DELETE /v1/users/:user_id/custom_data",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "user_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "ns",
          "type": "string",
          "default_value": "",
          "desc": "The namespace from which to delete the data.  This should be something other\nCanvas API apps aren't likely to use, such as a reverse DNS for your organization.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "List course nicknames",
      "controller": "users",
      "description": "Returns all course nicknames you have set.",
      "name": "list_course_nicknames",
      "endpoint": "GET /v1/users/self/course_nicknames",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": []
    },
    {
      "display_name": "Get course nickname",
      "controller": "users",
      "description": "Returns the nickname for a specific course.",
      "name": "get_course_nickname",
      "endpoint": "GET /v1/users/self/course_nicknames/:course_id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Set course nickname",
      "controller": "users",
      "description": "Set a nickname for the given course. This will replace the course's name\nin output of API calls you make subsequently, as well as in selected\nplaces in the Canvas web user interface.",
      "name": "set_course_nickname",
      "endpoint": "PUT /v1/users/self/course_nicknames/:course_id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        },
        {
          "name": "nickname",
          "type": "string",
          "default_value": "",
          "desc": "The nickname to set.  It must be non-empty and shorter than 60 characters.",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Remove course nickname",
      "controller": "users",
      "description": "Remove the nickname for the given course.\nSubsequent course API calls will return the actual name for the course.",
      "name": "remove_course_nickname",
      "endpoint": "DELETE /v1/users/self/course_nicknames/:course_id",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": [
        {
          "name": "course_id",
          "type": "string",
          "default_value": "",
          "desc": "ID",
          "example": ""
        }
      ]
    },
    {
      "display_name": "Clear course nicknames",
      "controller": "users",
      "description": "Remove all stored course nicknames.",
      "name": "clear_course_nicknames",
      "endpoint": "DELETE /v1/users/self/course_nicknames",
      "reference": "https://canvas.instructure.com/doc/api/users.html",
      "params": []
    }
  ]
}