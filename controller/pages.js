/**
 * @fileoverview Pages API
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Show the sidebar for courses APIs
 */
function showPagesGuide()
{
  SideBar.show("pages");
}

/**
 * A cell range with headers, must include url and todo_date
 * @param {String} range_notation A1 Notation, e.g. A1:B6
 */
function updatePageToDoDate(range_notation){
    //get API info
    const action=Helper.getAPIAction("pages","update_pages_todo");

    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    //check for requred columns
    if(!Helper.checkRequiredColumns(range,action.required_columns)){
        Browser.msgBox("Please select a range with the required columns: "+action.required_columns.toString());
        return;
    }
        
    //get pages with todo_date
    let pages=Helper.convertRangeToObjectArray(range);
    
    let opts={
        "course_id":"",
        "url":"",
        "wiki_page":{
            "student_todo_at":""
        }
    };

    let return_pages=[];
  
    //for each page with todo_date
    for(let i=0;i<pages.length;i++){
        //get course_id, url
        opts.course_id=pages[i].course_id;
        opts.url=encodeURI(pages[i].url);
        //get todo_date - wiki_page.student_todo_at
        opts.wiki_page.student_todo_at=Helper.getISODate(pages[i].todo_date);
        //call update page api
        let data=canvasAPI(action.endpoint,opts);
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

