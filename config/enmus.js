/**
 * @fileoverview This file defines enums
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Canvas API actions
 * @returns {string} "controller.action"
 */
const APIAction={
    COURSES:{
        GET_YOUR_ACTIVE_COURSES:'courses.get_your_active_courses',//get active courses of the token owner
        PUBLISH_COURSES:'courses.publish_courses', //bulk publish courses by select a column of course ids
        GET_SINGLE_COURSE:'courses.get_single_course', //get a single course by course id
        UPDATE_A_COURSE:'courses.update_a_course' //update a course name, code, start_at, and end_at
    },
    ASSIGNMENGS:{
        GET_ASSIGNMENTS:'assignments.get_assignments', //search assignment in a course by course id and assignment name
        GET_ASSIGNMENT_OVERRIDES:'assignments.get_assignment_overrides', //get assignment dates overrides
        CREATE_AN_ASSIGNMENT_OVERRIDE:'assignments.create_an_assignment_override',//create an assignment overrides by providing override dates
        UPDATE_AN_ASSIGNMENT_OVERRIDE:'assignments.update_an_assignment_override',//update an assignment overrides by providing override dates
        LIST_ASSIGNMENTS_DATE:'assignments.list_assignments_date',//list all assignments in a course by course id
        UPDATE_ASSIGNMENTS_DATES:'assignments.update_assignments_dates',//update dates for selected assignments
        SHIFT_ASSIGNMENTS_DATES:'assignments.shift_assignments_dates'//shift all assignments dates in a course
    },
    ACCOUNTS:{
        GET_ACCOUNTS:'accounts.get_accounts',//get all account of the token owner
        GET_SUB_ACCOUNTS:'accounts.get_sub_accounts',//get sub account of an account
        GET_COURSES_IN_ACCOUNT:'accounts.get_courses_in_account',//search courses in an account including sub accounts
    },
    BLUEPRINTS:{
        UPDATE_ASSOCIATED_COURSES:'blueprints.update_associated_courses',//associate and unassociate courses
        SYNC_ASSOCIATED_COURSES:'blueprints.sync_associated_courses',//sync associated courses of a blueprint course
        GET_BLUEPRINT_INFORMATION:'blueprints.get_blueprint_information',//get blue print information, including sync status
    },
    PAGES:{
        LIST_PAGES:'pages.list_pages',//list pages in a course by page names
        LIST_PAGES_IN_COURSE:'pages.list_pages_in_course',//list all pages in a course
        UPDATE_PAGES_TODO:'pages.update_pages_todo_date',//update todo_date of selected pages
    }
 };
 
 /**
  * Canvas API controllers
  * @returns {string} controller name.
  */
 const APIController={
   COURSES:'courses',
   ASSIGNMENGS:'assignments',
   ACCOUNTS:'accounts',
   BLUEPRINTS:'blueprints',
   PAGES:'pages'
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