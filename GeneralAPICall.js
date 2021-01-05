/**
 * @fileoverview Provides different types of general api call
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * range paramters, return list
 * call the API endpoint using the selected range as the parameters, row headed 
 *. and fill sheet with returned data of a list of objects
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} columns Filter displayColumns name
  * @param {string} bgcolor RBG value
  * show {array<object>}
  */
function callCanvasAPIwithRangeParams(endpoint,columns,bgcolor)
{
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.range_to_json(param_range);
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonList(param_range.getLastRow()+1,param_range.getColumn(),data,bgcolor,columns,);
}

/**
 * range parameters, return object
 * call the API endpoint using the selected range as the parameters, row headed 
 *. and fill sheet with returned data of an object
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} columns Filter displayColumns name, null to return all columns
  * @param {string} bgcolor RBG value
  * show {object}
  */
function callCanvasAPIwithRangeParamsRO(endpoint,columns,bgcolor)
{
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.range_to_json(param_range);
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonObject(param_range.getLastRow()+1,param_range.getColumn(),data,bgcolor,columns);
}

/**
 * no paramter, return list
 * call the API endpoint without parameters 
 *. and fill sheet with returned data of a list of objects
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} columns Filter displayColumns name, null to return all columns
  * @param {string} bgcolor RBG value
  * show {array<object>}
  */
function callCanvasAPI(endpoint,columns,bgcolor)
{
  var data=canvasAPI(endpoint);
  var cell=SpreadsheetApp.getCurrentCell();
  Helper.fillValuesFromJsonList(cell.getRow(),cell.getColumn(),data,bgcolor,columns);
}

/**
 * no paramter, return object
 * call the API endpoint without parameters 
 *. and fill sheet with returned data of an object
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} columns Filter displayColumns name, null to return all columns
  * @param {string} bgcolor RBG value
  * show {object}
  */
function callCanvasAPIRO(endpoint,columns,bgcolor)
{
  var data=canvasAPI(endpoint);
  var cell=SpreadsheetApp.getCurrentCell();
  Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),data,bgcolor,columns);
}

/**
 * no paramter, return list
 * call the API endpoint with single parameter (select a cell) 
 *. and fill sheet with returned data of a list of objects
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} default_param Provide the default param name
  * @param {string} columns Filter displayColumns name, null to return all columns
  * @param {string} bgcolor RBG value
  * show {array<object>}
  */
function callCanvasAPIwithSingleParam(endpoint,default_param,columns,bgcolor)
{
  var cell=SpreadsheetApp.getCurrentCell();
  var param_value=cell.getValue();
  var opts ={};
  opts[default_param]=param_value;
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonList(cell.getRow()+1,cell.getColumn(),data,bgcolor,columns)
}

/**
 * no paramter, return object
 * call the API endpoint with single parameter (select a cell) 
 *. and fill sheet with returned data of an object
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} default_param Provide the default param name
  * @param {string} columns Filter displayColumns name, null to return all columns
  * @param {string} bgcolor RBG value
  * show {object}
  */
function callCanvasAPIwithSingleParamRO(endpoint,default_param,columns,bgcolor)
{
  var cell=SpreadsheetApp.getCurrentCell();
  var param_value=cell.getValue();
  var opts ={};
  opts[default_param]=param_value;
  var data=canvasAPI(endpoint,opts);
  Helper.fillValuesFromJsonObject(cell.getRow()+1,cell.getColumn(),data,bgcolor,columns)
}
