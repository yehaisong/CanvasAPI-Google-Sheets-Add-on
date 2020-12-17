/**
 * @fileoverview
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * generate template based on function names
 * @param {string} name The name of the api function
 * @param {int} index The 0 based index of the array
 */
function generateParamTemplate(name,index) {
  Logger.log(name+":"+index);
  var api_json=SideBar.getAPIWrapper(name);
  var params=api_json[index]["template"];
  if(typeof params!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),params,"#eeeeee",null)
  }
  else
  {
    Browser.msgBox('Template '+name+' is not implemented.');
  }

}

/**
 * generate array parameters template based on function names
 * @param {string} name The name of the api function
 * @param {int} index The 0 based index of the array
 */
function generateArrayParamTemplate(name,index) {
  Logger.log(name+":"+index);
  var api_json=SideBar.getAPIWrapper(name);
  var params=api_json[index]["template"];
  if(typeof params!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    //api row 1
    var apirow={"api":params["api"]};
    Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),apirow,"#eeeeee",null);
    //descs rows 2 and 3
    Helper.fillValuesFromJsonList(cell.getRow()+1,cell.getColumn(),params["desc"],"#eeeeee",null);
    //separator rows 4
    var separator={"-----":"----"};
    Helper.fillValuesFromJsonObject(cell.getRow()+3,cell.getColumn(),separator,"#ffffff",null);
    //params rows 5 and 6
    Helper.fillValuesFromJsonList(cell.getRow()+4,cell.getColumn(),params["params"],"#eeeeee",null);
  }
  else
  {
    Browser.msgBox('Template '+name+' is not implemented.');
  }

}


