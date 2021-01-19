/**
 * @fileoverview This file defines enums
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Canvas API actions
 */
const APIAction={
    COURSES:{
        GET_YOUR_ACTIVE_COURSES:'get_your_active_courses',
        UPDATE_COURSES:'update_courses',
        GET_SINGLE_COURSE:'get_single_course'
    },
    ASSIGNMENGS:{
        GET_ASSIGNMENTS:'get_assignments',
        GET_ASSIGNMENT_OVERRIDES:'get_assignment_overrides',
        CREATE_AN_ASSIGNMENT_OVERRIDE:'create_an_assignment_override',
        UPDATE_AN_ASSIGNMENT_OVERRIDE:'update_an_assignment_override',
        LIST_ASSIGNMENTS_DATE:'list_assignments_date',
        SHIFT_ASSIGNMENTS_DATES:'shift_assignments_dates'
    },
    ACCOUNTS:{
        GET_ACCOUNTS:'get_accounts',
        GET_SUB_ACCOUNTS:'get_sub_accounts',
        GET_COURSES_IN_ACCOUNT:'get_courses_in_account',
    },
    BLUEPRINTS:{
        UPDATE_ASSOCIATED_COURSES:'update_associated_courses',
        SYNC_ASSOCIATED_COURSES:'sync_associated_courses',
        GET_BLUEPRINT_INFORMATION:'get_blueprint_information',
    },
    PAGES:{
        LIST_PAGES:'list_pages',
        UPDATE_PAGES_TODO:'update_pages_todo',
    }
 };
 
 /**
  * Canvas API controllers
  */
 const APIController={
   COURSES:'courses',
   ASSIGNMENGS:'assignments',
   ACCOUNTS:'accounts',
   BLUEPRINTS:'blueprints',
   PAGES:'pages'
 };