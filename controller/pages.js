/**
 * @fileoverview Pages API
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Show the sidebar for courses APIs
 */
function showPagesGuide()
{
  SideBar.show("_pages");
}

/**
 * The Pages class
 */
class Pages{

    /**
     * Update a page's todo date
     * PUT /api/v1/courses/:course_id/pages/:url
     * @param {object} page A page object with new todo_date.
     * @param {number} course_id A course id.
     * @returns {object} A updated page.
     */
    static changePageToDoDate(page, course_id){
        //get API info
        const action=Helper.getAPIAction2(APIAction.PAGES.UPDATE_PAGES_TODO);
        //get pages with todo_date
        let opts={
            "course_id":course_id,
            "url":page.url,
            "wiki_page":{
                "student_todo_at":Helper.getISODate(page.todo_date)
            }
        };
        
        return canvasAPI(action.endpoint,opts);
    }

    /**
     * Get pages in a course.
     * @param {number} course_id course id
     * @param {string} search_term The partial title of the pages to match and return.
     * @param {string} sort Determines the order of the assignments. Defaults to “title”. title|created_at|updated_at
     * @param {boolean} published If true, include only published paqes. If false, exclude published pages. If not present, do not filter on published status.
     * @returns {Array} A list of pages in a course
     */
    static listPages(course_id,search_term,sort,published){
        const action=Helper.getAPIAction2(APIAction.PAGES.LIST_PAGES);
        //build opts
        let opts={};
        if(course_id!=null)
            opts["course_id"]=course_id;
        if(search_term!=null)
            opts["search_term"]=search_term;
        if(sort!=null)
            opts["sort"]=sort;
        if(published!=null)
            opts["published"]=published;
        //call api
        return canvasAPI(action.endpoint,opts);
    }

}

