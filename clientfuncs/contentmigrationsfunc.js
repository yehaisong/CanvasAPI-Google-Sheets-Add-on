/**
 * @fileoverview Defines client funcs related to content migrations
 * @author hye@cedarville.edu (Haisong Ye)
 */

 /**
  * Copy content from sources courses to target courses in the selected range.
  * The range needs to include columns: course_id, source_course_id, old_start_date, old_end_date, new_start_date, new_end_date
  * @param {string} range_notation A1 notation. if not provided, use the current selected range.
  * @param {boolean} shiftdate
  */
 function createContentMigrationCourses(range_notation,shiftdate=true)
 {
     //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    //check header
    if(!Helper.checkRequiredColumns(range,["course_id","source_course_id", "old_start_date", "old_end_date", "new_start_date", "new_end_date"])){
        //Browser.msgBox("Please select a range with the required column: name");
        return;
    }
    //get course data
    let migrations=Helper.convertRangeToObjectArray(range);
    let results=[];

    //verify dates. only proceed when all dates meet requirements.
    for(let i=0;i<migrations.length;i++){
        let migration=migrations[i];
        //verify dates
        if(Helper.daysDiff(migration.old_start_date,migration.old_end_date)>Helper.daysDiff(migration.new_start_date,migration.new_end_date)){
            Browser.msgBox(`Cannot shift dates for course ${migration.course_id} because the source course ${migration.source_course_id} had more days than current course. You can extend new_end_date to proceed.`);
            return;
        }
    }
    
    //create migrations
    for(let i=0;i<migrations.length;i++){
        let migration=migrations[i];
        //get the migration settings
        let opts={
            "course_id":migration.course_id,
            "migration_type":"course_copy_importer",
            "settings":{
                "source_course_id":migration.source_course_id,
            },
            "date_shift_options":{
                "shift_dates":shiftdate,
                "old_start_date":Helper.getISODate(migration.old_start_date),
                "old_end_date":Helper.getISODate(migration.old_end_date),
                "new_start_date":Helper.getISODate(migration.new_start_date),
                "new_end_date":Helper.getISODate(migration.new_end_date)
            }
        };
        //call create content migration api
        let return_migration=ContentMigrations.createContentMigrationCourses(opts);
        //notification
        Helper.toast(`Migration for course ${migration.course_id} queued!`,"Course Migration",2)
        //track progress
        let progress_result=queryProgress(return_migration.id);
        results.push(progress_result);
    }
    //display queued_migrations
    Helper.fillValues(range.getLastRow()+1,range.getColumn(),results,null,null);
 }

 /**
  * Get column headers for content migrations
  */
 function getContentMigrationTemplate()
 {
    const cell=SpreadsheetApp.getActiveSheet().getCurrentCell();
    const range=SpreadsheetApp.getActiveSheet().getRange(cell.getLastRow(),cell.getLastColumn(),1,6);
    const values=[["course_id","source_course_id", "old_start_date", "old_end_date", "new_start_date", "new_end_date"]];
    range.setValues(values);
 }