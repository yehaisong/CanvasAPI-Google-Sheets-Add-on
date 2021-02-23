/**
 * @fileoverview content_migrations API wrapper
 * @author hye@cedarville.edu (Haisong Ye)
 */

 /**
  * The content_migrations class
  */
class ContentMigrations
{   
    /**
     * Create a content migration. It will copy all content from a source course to this course.
     * @param {object} migrationsettings A content migration object
     * {
     *  "course_id":0,
     *  "migration_type":"course_copy_importer",
     *  "settings":{
     *      "source_course_id":0
     *  }
     *  "date_shift_options":{
     *      "shift_dates":true,
     *      "old_start_date":date,
     *      "old_end_date":date,
     *      "new_start_date":date,
     *      "new_end_date":date
     *  }
     * }
     * @returns {object} a content migration object
     * {
        "id": 370663,
        "migration_type": "common_cartridge_importer",
        "migration_type_title": "Canvas Cartridge Importer",
        "migration_issues_url": "https://example.com/api/v1/courses/1/content_migrations/1/migration_issues",
        "attachment": "{"url"=>"https://example.com/api/v1/courses/1/content_migrations/1/download_archive"}",
        "progress_url": "https://example.com/api/v1/progress/4",
        "user_id": 4,
        "workflow_state": "running",
        "started_at": "2012-06-01T00:00:00-06:00",
        "finished_at": "2012-06-01T00:00:00-06:00",
        "pre_attachment": "{"upload_url"=>"", "message"=>"file exceeded quota", "upload_params"=>{}}"
        } 
     */
    static createContentMigrationCourses(migrationsettings)
    {
        const action=Helper.getAPIAction2(RawAPIAction.CONTENT_MIGRATIONS.CREATE_CONTENT_MIGRATION_COURSES);
        //opts
        const opts=migrationsettings;
        return canvasAPI(action.endpoint,opts);
    }
}