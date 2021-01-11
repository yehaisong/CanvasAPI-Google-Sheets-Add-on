/**
 * @fileoverview Provides different types of general api call
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**
 * Call an API endpoint using the selected range as the parameters.
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} columns Filter DISPLAYCOLUMNS name
  * @param {string} bgcolor RBG value
  */
function callCanvasAPIwithRangeParams(endpoint,columns,bgcolor)
{
  var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
  var opts=Helper.parseRangeToJson(param_range);
  var data=canvasAPI(endpoint,opts);
  Helper.fillValues(param_range.getLastRow()+1,param_range.getColumn(),data,columns,bgcolor);
}

/**
 * Call an API endpoint without parameters 
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} columns Filter DISPLAYCOLUMNS name, null to return all columns
  * @param {string} bgcolor RBG value
  */
function callCanvasAPINoParam(endpoint,columns,bgcolor)
{
  var data=canvasAPI(endpoint);
  var cell=SpreadsheetApp.getCurrentCell();
  Helper.fillValues(cell.getRow(),cell.getColumn(),data,columns,bgcolor);
}


/**
 * Call an API endpoint with single parameter (current cell)
  * @param {string} endpoint Provide an endpoint URL of a Canvas API function
  * @param {string} default_param Provide the default param name
  * @param {string} columns Filter DISPLAYCOLUMNS name, null to return all columns
  * @param {string} bgcolor RBG value
  */
function callCanvasAPIwithSingleParam(endpoint,default_param,columns,bgcolor)
{
  var cell=SpreadsheetApp.getCurrentCell();
  var param_value=cell.getValue();
  var opts ={};
  opts[default_param]=param_value;
  var data=canvasAPI(endpoint,opts);
  Helper.fillValues(cell.getRow()+1,cell.getColumn(),data,columns,bgcolor)
}


