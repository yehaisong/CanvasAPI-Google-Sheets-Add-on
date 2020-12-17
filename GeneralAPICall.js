/**
 * @fileoverview Provides different types of general api call
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * General API call 
 */
class GeneralAPICall
{
  /**
   * call the API endpoint using the selected range as the parameters, row headed 
   *. and fill sheet with returned data of a list of objects
   * @param {string} endpoint Provide an endpoint URL of a Canvas API function
   * @param {string} columns Filter displayColumns name
   */
  static callCanvasAPIwithRangeParams(endpoint,columns,bgcolor)
  {
    var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
    var opts=Helper.range_to_json(param_range);
    var data=canvasAPI(endpoint,opts);
    Helper.fillValuesFromJsonList(param_range.getLastRow()+1,param_range.getColumn(),data,bgcolor,columns,);
  }

  /**
   * call the API endpoint using the selected range as the parameters, row headed 
   *. and fill sheet with returned data of an object
   * @param {string} endpoint Provide an endpoint URL of a Canvas API function
   * @param {string} columns Filter displayColumns name, null to return all columns
   */
  static callCanvasAPIwithRangeParamsRO(endpoint,columns,bgcolor)
  {
    var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
    var opts=Helper.range_to_json(param_range);
    var data=canvasAPI(endpoint,opts);
    Helper.fillValuesFromJsonObject(param_range.getLastRow()+1,param_range.getColumn(),data,bgcolor,columns);
  }

  /**
   * call the API endpoint without parameters 
   *. and fill sheet with returned data of a list of objects
   * @param {string} endpoint Provide an endpoint URL of a Canvas API function
   * @param {string} columns Filter displayColumns name, null to return all columns
   */
  static callCanvasAPI(endpoint,columns,bgcolor)
  {
    var data=canvasAPI(endpoint);
    var cell=SpreadsheetApp.getCurrentCell();
    Helper.fillValuesFromJsonList(cell.getRow(),cell.getColumn(),data,bgcolor,columns);
  }

  /**
   * call the API endpoint without parameters 
   *. and fill sheet with returned data of an object
   * @param {string} endpoint Provide an endpoint URL of a Canvas API function
   * @param {string} columns Filter displayColumns name, null to return all columns
   */
  static callCanvasAPIRO(endpoint,columns,bgcolor)
  {
    var data=canvasAPI(endpoint);
    var cell=SpreadsheetApp.getCurrentCell();
    Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),data,bgcolor,columns);
  }

  /**
   * call the API endpoint with single parameter (select a cell) 
   *. and fill sheet with returned data of a list of objects
   * @param {string} endpoint Provide an endpoint URL of a Canvas API function
   * @param {string} columns Filter displayColumns name, null to return all columns
   */
  static callCanvasAPIwithSingleParam(endpoint,columns,bgcolor)
  {
    var endpoint=Helper.getEndpoint("accounts","get_sub_accounts");
    var cell=SpreadsheetApp.getCurrentCell();
    var account_id=cell.getValue();
    var opts = {
        'account_id' : account_id
      };
    var data=canvasAPI(endpoint,opts);
    Helper.fillValuesFromJsonList(cell.getRow()+1,cell.getColumn(),data,bgcolor,columns)
  }


}