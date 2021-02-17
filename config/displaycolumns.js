/**
 * @fileoverview This file defines display columns in sheets.
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * An object contains columns that will be displayed in sheet
 * @type {!Object}
 */
const DISPLAYCOLUMNS={
"assignment_list":["course_id","id","name","due_at","unlock_at","lock_at","assignment_group_id","submission_types","points_possible","has_overrides","html_url","workflow_state"],
"course_list":["account_id","id","name","course_code","enrollment_term_id","sis_course_id","start_at","end_at","time_zone","workflow_state"],
"course_list_changedate":["id","name","course_code","start_at","end_at","time_zone","workflow_state","enrollment_term_id"],
"assignment_dates":["course_id","id","name","due_at","unlock_at","lock_at"],
"progress":["workflow_state","completion","message","results","url"],
"page_list":["page_id","title","published","todo_date","url","html_url"],
"page_list_editing":["course_id","page_id","title","published","todo_date","url","html_url","body"]
}

