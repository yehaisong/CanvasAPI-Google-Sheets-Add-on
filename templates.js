/**
 * @fileoverview functions for generate paramter templates for endpoints
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * generate parameters template, row headed
 * @param {string} name The name of the controller
 * @param {int} index The 0 based index of action. check the canvasAPITemplate for index.
 */
function generateParamTemplate(name,index) {
  var _action=canvasAPITemplate[name][index].api;
  if(typeof _action!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    var apirow={"api":_action.name}; //find the api
    //desc and params
    var _desc={"param":""};
    var _params={"param":"value"};
    for(var i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    //api row 1
    Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),apirow,"#eeeeee",null);
    //params row +1
    Helper.fillValuesFromJsonObject(cell.getRow()+1,cell.getColumn(),_params,"#eeeeee",null);
    //desc note col 1
    Helper.setNotesFromJsonObject(cell.getRow()+1,cell.getColumn(),_desc,null)
    Helper.log("created template for "+_action.name);
  }
  else
  {
    Browser.msgBox('API '+name+' is not implemented.');
  }
}

/**
 * generate array parameters template, column headed
 * @param {string} name The name of the api function
 * @param {int} index The 0 based index of the array
 */
function generateArrayParamTemplate(name,index) {
  var _action=canvasAPITemplate[name][index].api;
  if(typeof _action!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    
    var apirow={"api":_action.name}; //find the api
    //desc and params
    var _desclist=[];
    var _paramslist=[];
    var _desc={"param":""};
    var _params={"param":"value"};
    for(var i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    _desclist.push(_desc);
    _paramslist.push(_params);

    //api row 1
    Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),apirow,"#eeeeee",null);
    //parames rows 2,3
    Helper.fillValuesFromJsonList(cell.getRow()+1,cell.getColumn(),_paramslist,"#eeeeee",null);
    //desc notes rows 2,3
    Helper.setNotesFromJsonList(cell.getRow()+1,cell.getColumn(),_desclist,null);
    Helper.log("created template for "+_action.name);
  }
  else
  {
    Browser.msgBox('API '+name+' is not implemented.');
  }
}


