/**
 * @fileoverview This file defines display columns in sheets.
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * An object contains columns that will be displayed in sheet
 * @type {!Object}
 */
const DISPLAYCOLUMNS={
"assignment_list":["course_id","id","name","assignment_group_id","submission_type","due_at","unlock_at","lock_at","points_possible","has_overrides","html_url","workflow_state"],
"course_list":["account_id","id","name","course_code","is_public","enrollment_term_id","sis_course_id","start_at","end_at","time_zone","workflow_state"],
"assignment_dates":["id","name","due_at","unlock_at","lock_at"],
"progress":["workflow_state","url"],
"progress_results":["completion","message","results","workflow_state"]
}