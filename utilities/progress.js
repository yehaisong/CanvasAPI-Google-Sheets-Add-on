/**
 * @fileoverview check progress
 * @author hye@cedarville.edu (Haisong Ye)
 */

 /**
  * show progress
  * @param {number} id progress id 
  * @param {Range} cell  sheet range
  */
 function queryProgress(id,cell){
    for(;;)
    {
        let data=getProgress(id);
        let progress=data.completion;
        let results=JSON.stringify(data.results);
        Helper.log(progress+" "+results);
        cell.setValue(progress+" "+results);
        if(progress>=100)
            break;
        Utilities.sleep(500);
    }
    
 }

 function getProgress(id)
 {
    var opts={"id":id.toString()};
    var endpoint="GET /api/v1/progress/:id";
    var data=canvasAPI(endpoint,opts);
    return data;
 }

