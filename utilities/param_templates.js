/**
 * @fileoverview functions for generate paramter templates for endpoints
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * generate parameters template, row headed
 * @param {string} name The name of the controller
 * @param {int} index The 0 based index of action. check the CANVASAPIS for index.
 */
function generateParamTemplate(name,index) {
  var _action=CANVASAPIS[name][index].api;
  if(typeof _action!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    //var apirow={"api":_action.name}; //find the api
    //desc and params
    var _desc={};
    var _params={"api":_action.name};
    for(var i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    //api row 1
    //Helper.fillValues(cell.getRow(),cell.getColumn(),apirow,null,"#eeeeee");
    
    //params row +1
    Helper.fillValues(cell.getRow(),cell.getColumn(),_params,null,"#ADD8E6",false);
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
 * Verify params for an action (api call). If false, do not call the api. [Not implemented]
 * @param {string} controller Name of the API controller, e.g., "assignments"
 * @param {string} action Name of the action, e.g. "list_assignments"
 * @param {array:any} params Provided params
 * @returns {boolean}
 */
function validateParams(controller,action,params)
{
  //get required params
  //check if all required params are in the provided params
  return true;
}

/**
 * generate array parameters template, column headed
 * @param {string} name The name of the api function
 * @param {int} index The 0 based index of the array
 */
/*
function generateArrayParamTemplate(name,index) {
  var _action=CANVASAPIS[name][index].api;
  if(typeof _action!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    
    var apirow={"api":_action.name}; //find the api
    //desc and params
    var _desclist=[];
    var _paramslist=[];
    _paramslist.push(apirow);
    var _desc={};
    var _params={};
    for(var i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    _desclist.push(_desc);
    _paramslist.push(_params);
    //parames rows 2,3
    Helper.fillValues(cell.getRow(),cell.getColumn(),_paramslist,null,"#ADD8E6");
    //desc notes rows 2,3
    Helper.setNotesFromJsonList(cell.getRow()+1,cell.getColumn(),_desclist,null);
    Helper.log("created template for "+_action.name);
  }
  else
  {
    Browser.msgBox('API '+name+' is not implemented.');
  }
}*/


