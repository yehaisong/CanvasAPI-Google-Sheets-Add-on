/**
 * @fileoverview functions for generate paramter templates for endpoints
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * generate parameters template, row headed
 * @param {string} actionname The name of the controller and action, controller.action
 */
function generateParamTemplate(actionname) {
  Helper.log(actionname);
  let _action=Helper.getAPIAction2(actionname);
  if(typeof _action!=null)
  {
    let cell=SpreadsheetApp.getCurrentCell();
    //let apirow={"api":_action.name}; //find the api
    //desc and params
    let _desc={};
    let _params={"api":_action.name};
    for(let i=0;i<_action.params.length;i++){
      _desc[_action.params[i].name]=_action.params[i].desc+" e.g., "+_action.params[i].example;
      _params[_action.params[i].name]=_action.params[i].default_value;
    }
    //api row 1
    //Helper.fillValues(cell.getRow(),cell.getColumn(),apirow,null,"#eeeeee");
    
    //params row +1
    Helper.fillValues(cell.getRow(),cell.getColumn(),_params,null,"#ADD8E6",false);
    //desc note col 1
    Helper.setNotesFromJsonObject(cell.getRow()+1,cell.getColumn(),_desc,null)
    Helper.log("created parameter template for "+_action.name);
  }
  else
  {
    Browser.msgBox('API '+actionname+' is not implemented.');
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
  let _action=CANVASAPIS[name][index].api;
  if(typeof _action!=null)
  {
    let cell=SpreadsheetApp.getCurrentCell();
    
    let apirow={"api":_action.name}; //find the api
    //desc and params
    let _desclist=[];
    let _paramslist=[];
    _paramslist.push(apirow);
    let _desc={};
    let _params={};
    for(let i=0;i<_action.params.length;i++){
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


