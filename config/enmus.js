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
        GET_YOUR_ACTIVE_COURSES:'courses.get_your_active_courses',
        PUBLISH_COURSES:'courses.publish_courses',
        GET_SINGLE_COURSE:'courses.get_single_course',
        UPDATE_A_COURSE:'courses.update_a_course'
    },
    ASSIGNMENGS:{
        GET_ASSIGNMENTS:'assignments.get_assignments',
        GET_ASSIGNMENT_OVERRIDES:'assignments.get_assignment_overrides',
        CREATE_AN_ASSIGNMENT_OVERRIDE:'assignments.create_an_assignment_override',
        UPDATE_AN_ASSIGNMENT_OVERRIDE:'assignments.update_an_assignment_override',
        LIST_ASSIGNMENTS_DATE:'assignments.list_assignments_date',
        SHIFT_ASSIGNMENTS_DATES:'assignments.shift_assignments_dates'
    },
    ACCOUNTS:{
        GET_ACCOUNTS:'accounts.get_accounts',
        GET_SUB_ACCOUNTS:'accounts.get_sub_accounts',
        GET_COURSES_IN_ACCOUNT:'accounts.get_courses_in_account',
    },
    BLUEPRINTS:{
        UPDATE_ASSOCIATED_COURSES:'blueprints.update_associated_courses',
        SYNC_ASSOCIATED_COURSES:'blueprints.sync_associated_courses',
        GET_BLUEPRINT_INFORMATION:'blueprints.get_blueprint_information',
    },
    PAGES:{
        LIST_PAGES:'pages.list_pages',
        UPDATE_PAGES_TODO:'pages.update_pages_todo_date',
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