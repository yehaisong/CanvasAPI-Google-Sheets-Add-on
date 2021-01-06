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
   * @return {object}
   */
  static getAPIAction(controller,action)
  {
    var _actions=canvasAPITemplate[controller];
    var _action;
    if (typeof _actions ==="object"){
      for(var i=0;i<_actions.length;i++){
        if(_actions[i].api.name==action){
          _action=_actions[i].api;
          break;
        }
      }
    }
    Helper.log("API action object: "+_action);
    return _action;
  }

  /**
   * setValues with a json array; list attributes in columns
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheetz
   * @param {Array<object>} jsonarray Provide an object array contains the data to be filled
   * @param {string} columns Filter displayColumns name
   */
  static setNotesFromJsonList(startrow,startcol,jsonarray,columns)
  {
    var contents=Helper.parse_JSON(jsonarray,columns);
    Helper.setNotes(startrow,startcol,contents,"column");
  }
  
  /**
   * setValues with a json object; list attributes in rows
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Object} jsonobject data need to be displayed
   * @param {string} columns Filter displayColumns name
   * @param {string} bgcolor Provide a RGB color for the background of the filled area 
   *. If not provided, a randome color will be used. See function getColor() for all colors
  
   */
  static fillValues(startrow,startcol,jsonobject,columns,bgcolor)
  {
    var contents=Helper.parse_JSON(jsonobject,columns);
    if(contents.length>0){
      Helper.insertRows(startrow,contents.length);
      var rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,contents.length,contents[0].length);
      if(bgcolor==null)
        bgcolor= Helper.getColor();
      rng.setHorizontalAlignment("left");
      rng.setValues(contents);
      rng.setBackground(bgcolor);
      Helper.log(bgcolor);
    }
    else
    {
      Browser.msgBox("No records to display.");
    }
  }

  /**
   * setNotes with a json object; list attributes in rows
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Object} jsonobject Provide a endpoint URL of a Canvas API function
   * @param {string} columns Filter displayColumns name
   */
  static setNotesFromJsonObject(startrow,startcol,jsonobject,columns)
  {
    var contents=Helper.parse_JSON(jsonobject,columns);
    Helper.setNotes(startrow,startcol,contents,"row");
  }

  /**
   * setValues with a two demision array
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Array<object>} contents Provide a endpoint URL of a Canvas API function
   * @param {string} header "row" or "column" notes will be added to the header row or column. If not presented, set as no header.
   */
  static setNotes(startrow,startcol,contents,header)
  {
    if(contents.length>0){
      if(header=="column"){//list style
        var rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,1,contents[0].length);
        for(var ci=0;ci<contents[1].length;ci++)
        {
          rng.getCell(1,ci+1).setNote(contents[1][ci]);
        }
      }else if (header=="row"){//object style
        var rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,contents.length,1);
        for(var ri=0;ri<contents.length;ri++)
        {
          rng.getCell(ri+1,1).setNote(contents[ri][1]);
        }
      }
      else{
        var rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,contents.length,contents[0].length);
        rng.setNotes(contents);
      }
      
    }
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
   * convert a json object data to Array[][]
   * @param {object} jsonobject A json object
   * @param {string} columns Filter displayColumns name
   * @return {object}
   */
  static parse_JSON(jsonobject,columns)
  {
    if(jsonobject!=null){
      if (Array.isArray(jsonobject)){
        //create headers
        var filter=displayColumns[columns];
        var headerRow=[];
        if(filter!=null){//column filters
          headerRow=filter;
        }
        else{
          headerRow=Object.keys(jsonobject[0]);
        }
        var contents=[headerRow];
        //get rows
        for(var i=0;i<jsonobject.length;i++){
          var row=headerRow.map(function(key) {
              var value=jsonobject[i][key];
              if(typeof value==="object")
                return JSON.stringify(value);
              return value;
            });
          contents.push(row);
        }
        return contents;
      }
      else{
        //create headers
        var filter=displayColumns[columns]
        var headerRow=[];
        if(filter!=null){//column filters
          headerRow=filter;
        }
        else{
          headerRow=Object.keys(jsonobject);
        }
        //get row
        var row=headerRow.map(function(key) {return jsonobject[key]});
        
        //var contents=[headerRow,row];//horizontal display
        
        var contents=[]; //vertial display
        for(var i=0;i<headerRow.length;i++){
          contents.push([headerRow[i],row[i]]);
        }
        return contents;
      }
    }
    else{
      return {};
    }
  }
  
  /**
   * convert data in a sheet range to a json object, row headed
   * The parameters should be listed by rows. The range should be 2 cols, the first col is for key, and the second col is for value. 
   * @param {object} range A json object
   * @return {object}
   */
  static range_to_json(range)
  {
    var json={};
    //Browser.msgBox(range.getNumRows());
    for(var i=1;i<=range.getNumRows();i++){
      if(range.getCell(i,1).getValue()!=""&&range.getCell(i,2).getValue()!=""){
        var param_name=range.getCell(i,1).getValue();
        var param_value_str=range.getCell(i,2).getValue();
        var param_value=null;
        if(param_name.endsWith("[]")){//this is an array parameter
          param_name=param_name.substring(0,param_name.length-2);
          param_value=[];
          param_value_str=param_value_str.substring(1,param_value_str.length-1);
          param_value=param_value_str.split(",");
        }
        else{//this is a string parameter
          param_value=param_value_str;
        }
        //check if the param is an object
        //Helper.log(param_name);
        var param_name_parts=[]
        param_name_parts=param_name.split(".");
        //Helper.log(param_name_parts);
        if(param_name_parts!=null && param_name_parts.length>1){//this is a property of an object parameter
          //assume there is only two levels
          if(json[param_name_parts[0]]==null)
            json[param_name_parts[0]]={};
          json[param_name_parts[0]][param_name_parts[1]]=param_value;
        }
        else{
          json[param_name]=param_value;
        }
      }
    }
    return json;
  }

  
  /**
   * get a random color from the default list
   * @return {string} RGB color code
   */
  static getColor()
  {
    var color=['#EEEEEE','#F0FFF0','#F0F8FF','#FFEFD5','#B0E0E6','#FFFFF0','#E6E6FA'];
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
    if(MyConfig.logCustomMessage()){
      Logger.log(data);
    }
  }
}