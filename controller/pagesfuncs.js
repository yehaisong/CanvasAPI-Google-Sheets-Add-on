

/**
 * @fileoverview Defines client funcs related to pages
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * List pages in a course and add a course_id field to each page.
 */
function listPagesWithCourseID()
{
    const param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
    let opts=Helper.parseRangeToJson(param_range);
    //Helper.log("listPageWithCourseID: "+JSON.stringify(opts));
    let pages=Pages.listPages(opts.course_id,opts.search_term,opts.sort,opts.published);
    if(pages!=null && pages.length>2)
    {
        for(let i=0;i<pages.length;i++)
        {
            pages[i]["course_id"]=opts["course_id"];
        }
    }
    Helper.fillValues(param_range.getLastRow()+1,param_range.getColumn(),pages,"page_list_editing",null,true);
}

/**
 * Update pages todo_date
 * @param {String} range_notation A1 Notation, e.g. A1:B6. A cell range with headers, must include url and todo_date
 */
function updatePagesToDoDates(range_notation){
    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    //check for requred columns
    const action=Helper.getAPIAction2(APIAction.PAGES.UPDATE_PAGES_TODO);
    if(!Helper.checkRequiredColumns(range,action.required_columns)){
        //Browser.msgBox("Please select a range with the required columns: "+action.required_columns.toString());
        return;
    }
        
    //get pages with todo_date
    let pages=Helper.convertRangeToObjectArray(range);
    let return_pages=[];
    //for each page with todo_date
    for(let i=0;i<pages.length;i++){
        
        //call update page api
        let data=Pages.changePageToDoDate(pages[i],pages[i].course_id);
        //toast msg
        if(data.url!=null){
            Helper.toast(data.url+" "+data.todo_date,"Page todo_date updated", 3);
            return_pages.push(data);
        }
        else{
            Helper.toast(data,"Error",3);
        }
        Utilities.sleep(1000);
    }
    Helper.fillValues(range.getLastRow()+1,range.getColumn(),return_pages,"page_list",null);
    
    //handle return data
}