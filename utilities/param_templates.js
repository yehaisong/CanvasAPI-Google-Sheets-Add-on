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
    var apirow={"api":_action.name}; //find the api
    //desc and params
    var _desc={};
    var _params={};
    for(var i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    //api row 1
    Helper.fillValues(cell.getRow(),cell.getColumn(),apirow,"#eeeeee",null);
    //params row +1
    Helper.fillValues(cell.getRow()+1,cell.getColumn(),_params,"#ADD8E6",null);
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
 * @param {array:any} params The list of the parameters ready to pass to the api
 * @returns {boolean}
 */
function validateParams(name,index,params)
{
  return true;
}

/**
 * generate array parameters template, column headed
 * @param {string} name The name of the api function
 * @param {int} index The 0 based index of the array
 */
function generateArrayParamTemplate(name,index) {
  var _action=CANVASAPIS[name][index].api;
  if(typeof _action!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    
    var apirow={"api":_action.name}; //find the api
    //desc and params
    var _desclist=[];
    var _paramslist=[];
    var _desc={};
    var _params={};
    for(var i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    _desclist.push(_desc);
    _paramslist.push(_params);

    //api row 1
    Helper.fillValues(cell.getRow(),cell.getColumn(),apirow,"#eeeeee",null);
    //parames rows 2,3
    Helper.fillValues(cell.getRow()+1,cell.getColumn(),_paramslist,"#ADD8E6",null);
    //desc notes rows 2,3
    Helper.setNotesFromJsonList(cell.getRow()+1,cell.getColumn(),_desclist,null);
    Helper.log("created template for "+_action.name);
  }
  else
  {
    Browser.msgBox('API '+name+' is not implemented.');
  }
}


