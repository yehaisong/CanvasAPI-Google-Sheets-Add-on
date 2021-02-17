/**
 * @fileoverview This file defines enums 
 * @author hye@cedarville.edu (Haisong Ye)
 */ 

/**
 * Canvas API actions
 * @returns {string} controller.action
 */
const APIAction={
    COURSES:{
        GET_YOUR_ACTIVE_COURSES:'_courses.get_your_active_courses',//get active courses of the token owner
        PUBLISH_COURSES:'_courses.publish_courses', //bulk publish courses by select a column of course ids
        GET_SINGLE_COURSE:'_courses.get_single_course', //get a single course by course id
        UPDATE_A_COURSE:'_courses.update_a_course' //update a course name, code, start_at, and end_at
    },
    ASSIGNMENGS:{
        GET_ASSIGNMENTS:'_assignments.get_assignments', //search assignment in a course by course id and assignment name
        GET_ASSIGNMENT_OVERRIDES:'_assignments.get_assignment_overrides', //get assignment dates overrides
        CREATE_AN_ASSIGNMENT_OVERRIDE:'_assignments.create_an_assignment_override',//create an assignment overrides by providing override dates
        UPDATE_AN_ASSIGNMENT_OVERRIDE:'_assignments.update_an_assignment_override',//update an assignment overrides by providing override dates
        LIST_ASSIGNMENTS_DATE:'_assignments.list_assignments_date',//list all assignments in a course by course id
        UPDATE_ASSIGNMENTS_DATES:'_assignments.update_assignments_dates',//update dates for selected assignments
        SHIFT_ASSIGNMENTS_DATES:'_assignments.shift_assignments_dates'//shift all assignments dates in a course
    },
    ACCOUNTS:{
        GET_ACCOUNTS:'_accounts.get_accounts',//get all account of the token owner
        GET_SUB_ACCOUNTS:'_accounts.get_sub_accounts',//get sub account of an account
        GET_COURSES_IN_ACCOUNT:'_accounts.get_courses_in_account',//search courses in an account including sub accounts
    },
    BLUEPRINTS:{
        UPDATE_ASSOCIATED_COURSES:'_blueprints.update_associated_courses',//associate and unassociate courses
        SYNC_ASSOCIATED_COURSES:'_blueprints.sync_associated_courses',//sync associated courses of a blueprint course
        GET_BLUEPRINT_INFORMATION:'_blueprints.get_blueprint_information',//get blue print information, including sync status
    },
    PAGES:{
        LIST_PAGES:'_pages.list_pages',//list pages in a course by page names
        LIST_PAGES_IN_COURSE:'_pages.list_pages_in_course',//list all pages in a course
        UPDATE_PAGES_TODO:'_pages.update_pages_todo_date',//update todo_date of selected pages
        UPDATE_PAGES:'_pages.update_pages_courses',//update title and body of selected pages
    }
 };


 /**Date part
  * @returns {string} date part
  */
 const DatePart={
     DAY:'day',
     HOUR:'hour',
     MINUTE:'minute',
     SECOND:'second',
     MILLIONSECOND:'millionsecond'
 };