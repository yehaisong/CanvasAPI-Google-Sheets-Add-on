/**
 * @fileoverview check progress
 * @author hye@cedarville.edu (Haisong Ye)
 */

 /**
  * query progress every 1s
  * @param {number} id progress id 
  * @returns {object} progress object
  */
 function queryProgress(id){
    for(let t=0;t<1800;t++) //stop after 30 minutes
    {
        let data=getProgress(id);
        let progress=data.completion;
        var results;
        results=data.workflow_state;
        if(data.results!=null)
            results+= " "+ JSON.stringify(data.results);
        else{
            results+=" "+data.message;
            data.results="";
        }
            
        Helper.log(progress+"% "+results);
        if(progress>=100){
            return data;
        }
        Utilities.sleep(1000);
    }
    return null;
 }

 /**
  * query progress with id
  * @param {number} id 
  * @return {object} progress data
  */
 function getProgress(id)
 {
    var opts={"id":id.toString()};
    var endpoint="GET /api/v1/progress/:id";
    var data=canvasAPI(endpoint,opts);
    return data;
 }

