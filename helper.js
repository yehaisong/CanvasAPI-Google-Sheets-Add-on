/**
 * @fileoverview Utilities for the app
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * General Helper class
 */
class Helper {  
  /**
   * get Canvas api endpoint by controller and action
   * @param {string} controller name, for example, accounts
   * @param {string} action name, for example, get_accounts
   */
  static getEndpoint(controller,action)
  {
    var actions=paramList[controller];
    var endpoint="";
    if (typeof actions ==="object")
    {
      for(var i=0;i<actions.length;i++)
      {
        var apiName=actions[i]["api"];
        if(apiName.includes(":"))
        {
          apiName=apiName.split(":")[1].trim();
        }
        if(apiName==action)
        {
          endpoint=actions[i]["endpoint"];
          break;
        }
      }
    }
    else
    {
      return "";
    }
    Helper.log("Endpoint: "+endpoint);
    return endpoint;
  }



  /**
   * setValues with a json array; list attributes in columns
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheetz
   * @param {Array<object>} jsonarray Provide an object array contains the data to be filled
   * @param {string} bgcolor Provide a RGB color for the background of the filled area 
   *. If not provided, a randome color will be used. See function getColor() for all colors
   * @param {string} columns Filter displayColumns name
   */
  static fillValuesFromJsonList(startrow,startcol,jsonarray,bgcolor,columns)
  {
    var contents=Helper.parse_JSON_array(jsonarray,columns);
    Helper.setValues(startrow,startcol,contents,bgcolor);
  }
  
  /**
   * setValues with a json object; list attributes in rows
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Object} jsonobject Provide a endpoint URL of a Canvas API function
   * @param {string} bgcolor Provide a RGB color for the background of the filled area 
   *. If not provided, a randome color will be used. See function getColor() for all colors
   * @param {string} columns Filter displayColumns name
   */
  static fillValuesFromJsonObject(startrow,startcol,jsonobject,bgcolor,columns)
  {
    var contents=Helper.parse_JSON_object(jsonobject,columns);
    Helper.setValues(startrow,startcol,contents,bgcolor);
  }
  
  /**
   * setValues with a two demision array
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Array<object>} contents Provide a endpoint URL of a Canvas API function
   * @param {string} bgcolor Provide a RGB color for the background of the filled area 
   *. If not provided, a randome color will be used. See function getColor() for all colors
   */
  static setValues(startrow,startcol,contents,bgcolor)
  {
    Helper.insertRows(startrow,contents.length);
    var rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,contents.length,contents[0].length);
    if(bgcolor==null)
      bgcolor= Helper.getColor();
    rng.setHorizontalAlignment("left");
    rng.setValues(contents);
    rng.setBackground(bgcolor);
  }
  
  /**
   * insert empty rows
   * @param {number} position The start row index
   * @param {number} numrows Number of rows to be inserted
   */
  static insertRows(position, numrows)
  {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.insertRows(position, numrows);
  }
  
  /**
   * convert a json array data to Array[][]
   * @param {Array<object>} jsonarray A json array
   * @param {string} columns Filter displayColumns name
   * @return {object}
   */
  static parse_JSON_array(jsonarray,columns)
  {
    //create headers
    var filter=displayColumns[columns];
    var headerRow=[];
    if(filter!=null)//column filters
    {
      headerRow=filter;
    }
    else
    {
      headerRow=Object.keys(jsonarray[0]);
    }
    var contents=[headerRow];
    //get rows
    for(var i=0;i<jsonarray.length;i++)
    {
      var row=headerRow.map(function(key) {
          var value=jsonarray[i][key];
          if(typeof value==="object")
            return JSON.stringify(value);
          return value;
        });
      contents.push(row);
    }
    return contents;
  }
  
  /**
   * convert a json object data to Array[][]
   * @param {object} jsonobject A json object
   * @param {string} columns Filter displayColumns name
   * @return {object}
   */
  static parse_JSON_object(jsonobject,columns)
  {
    //create headers
    var filter=displayColumns[columns]
    var headerRow=[];
    if(filter!=null)//column filters
    {
      headerRow=filter;
    }
    else
    {
      headerRow=Object.keys(jsonobject);
    }
    //get row
    var row=headerRow.map(function(key) {return jsonobject[key]});
    
    //var contents=[headerRow,row];//horizontal display
    
    var contents=[]; //vertial display
    for(var i=0;i<headerRow.length;i++)
    {
      contents.push([headerRow[i],row[i]]);
    }
    return contents;
  }
  
  /**
   * convert data in a sheet range to a json object
   * The parameters should be listed by rows. The range should be 2 cols, the first col is for key, and the second col is for value. 
   * @param {object} range A json object
   * @return {object}
   */
  static range_to_json(range)
  {
    var json={};
    //Browser.msgBox(range.getNumRows());
    for(var i=1;i<=range.getNumRows();i++)
    {
      if(range.getCell(i,1).getValue()!=""&&range.getCell(i,2).getValue()!="")
        json[range.getCell(i,1).getValue()]=range.getCell(i,2).getValue();
    }
    return json;
  }

  
  /**
   * get a random color from the default list
   * @return {string} RGB color code
   */
  static getColor()
  {
    var color=['#eeeeee','#F0FFF0','#F0F8FF','#FFEFD5','#B0E0E6','#FFFFF0','#E6E6FA'];
    return color[Helper.getRandomInt(color.length-1)];
  }

  /**
   * get a random int 0-max
   * the range should be 2 cols, The first col for key, and the second col for value. 
   * @param {number} max The max number you want
   * @return {number} from 0 to the max number
   */
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * Override Logger.log
   * @param {object} data A message object for logging
   */
  static log(data)
  {
    if(MyConfig.logCustomMessage())
    {
      Logger.log(data);
    }
  }
}