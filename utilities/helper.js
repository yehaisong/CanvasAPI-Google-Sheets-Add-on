/**
 * @fileoverview Utilities for the app
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * General Helper class
 */
class Helper {  
  /**
   * Get Canvas api endpoint by controller and action from the constant apis
   * @param {string} controller name, for example, accounts
   * @param {string} action name, for example, get_accounts
   * @returns {object} an action project
   * {"display_name": "summary name",
      "description": "desc",
      "automated":"true",
      "name":"action",
      "endpoint":"endpoint",
      "reference":"url",
      "params":[],
      "guide":[]}
   */
  static getAPIAction(controller,action)
  {
    let _actions=CANVASAPIS[controller];
    let _action;
    if (typeof _actions ==="object"){
      for(let i=0;i<_actions.length;i++){
        if(_actions[i].name==action){
          _action=_actions[i];
          break;
        }
      }
    }
    if(_action==null) {//check raw api actions
      _actions=RAWCANVASAPIS[controller]
      if (typeof _actions ==="object"){
        for(let i=0;i<_actions.length;i++){
          if(_actions[i].name==action){
            _action=_actions[i];
            break;
          }
        }
      }
    }

    Helper.log("API action object: "+_action.name);
    return _action;
  }

  /**
   * Get an API action
   * @param {string} action action string with controller name, controller.action
   * @returns {object} action
   * {"name":"action",
      "endpoint":"endpoint",
      "reference":"url",
      "params":[]}
   */
  static getAPIAction2(action)
  {
    let ca=action.split(".");
    if(ca.length==2)
    {
      return Helper.getAPIAction(ca[0],ca[1]);
    }
    else
    {
      return null;
    }
  }

  /**
   * Set notest for a SpreadSheet range with a json array. Used to provide description and examples for parameters.
   * Use this for a parameter template that list paramters in a row. Each parameter uses one column.
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheetz
   * @param {Array<object>} jsonarray Provide an object array contains the data to be filled
   * @param {string} columns Filter DISPLAYCOLUMNS name
   */
  static setNotesFromJsonList(startrow,startcol,jsonarray,columns)
  {
    let contents=Helper.parseJSON(jsonarray,columns);
    Helper.setNotes(startrow,startcol,contents,"column");
  }
  
  /**
   * Set notest for a SpreadSheet range with a json array. Used to provide description and examples for parameters.
   * Use this for a parameter template that list paramters in a column. Each parameter uses one row.
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Object} jsonobject Provide a endpoint URL of a Canvas API function
   * @param {string} columns Filter DISPLAYCOLUMNS name
   */
  static setNotesFromJsonObject(startrow,startcol,jsonobject,columns)
  {
    var contents=Helper.parseJSON(jsonobject,columns);
    Helper.setNotes(startrow,startcol,contents,"row");
  }

  /**
   * Fill a SpreadSheet range with a json object. If the jsonobject is an array, it will be displayed in rows. 
   * If the jsonobject is an object, it will be display vertically.
   * @param {number} startrow An absolute row index of a sheet
   * @param {number} startcol An absolute column index of a sheet
   * @param {Object} jsonobject data to be displayed
   * @param {string} columns A DISPLAYCOLUMNS name defined in the DISPLAYCOLUMNS variable. Check DISPLAYCOLUMNS.js. 
   * If provided, only the fields defined in the DISPLAYCOLUMNS will be displayed.
   * If not provided, all original field of the jsonobject will be displayed.
   * @param {string} bgcolor Provide a RGB color for the background of the filled area. If not provided, a randome color will be used. See function getColor() for all colors
   * @param {boolean} blankrow Insert a blankrow or not. Default true.
   */
  static fillValues(startrow,startcol,jsonobject,columns,bgcolor,blankrow)
  {
    const contents=Helper.parseJSON(jsonobject,columns);
    if(contents.length>0){
      if(blankrow==null)
        blankrow=true;
      //insert a blankrow before rng
      if(blankrow){
        Helper.insertRows(startrow,1);
        startrow++;
      }
      Helper.insertRows(startrow,contents.length);
      const rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,contents.length,contents[0].length);
      //insert a blank row after rng
      if(blankrow){
        Helper.insertRows(rng.getLastRow()+1,1);
      }
      if(bgcolor==null)
        bgcolor= Helper.getColor();
      rng.setHorizontalAlignment("left");
      rng.setValues(contents);
      rng.setBackground(bgcolor);
      
      //Helper.log(bgcolor);
      //format columns - add checkbox for t/f values
      for(let c=1;c<rng.getNumColumns();c++){
        //check header text
        const cell=rng.getCell(1,c);
        const header=cell.getValue();
        //true or false column
        if(TFCOLUMNS.includes(header)){
          SpreadsheetApp.getActiveSheet().getRange(cell.getRow()+1,cell.getColumn(),rng.getNumRows()-1,1).insertCheckboxes();
        }
      }
      //group rows
      let grouprowindex=rng.getRow()+1;//use the first new row as the +/- row
      if(blankrow){
        grouprowindex=rng.getRow();//use the blank row as the +/- row
        if(grouprowindex>1)
          grouprowindex--; //use the active row as group header if not the first row
      }
      SpreadsheetApp.getActiveSheet().getRange(grouprowindex+":"+(rng.getLastRow()+1)).activate().shiftRowGroupDepth(1);
      //blankrow after range
    }
    else
    {
      Helper.insertRows(startrow,1);
      const cell=SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,1,1);
      cell.setValue("No records were found.");
    }
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
   * Convert a json object data to Array[][].
   * All date values will be converted to local date time based on the script timezone.
   * @param {object} jsonobject A json object
   * @param {string} columns Filter DISPLAYCOLUMNS name
   * @return {object} Array[][]
   */
  static parseJSON(jsonobject,columns)
  {
    if(jsonobject!=null){
      if (Array.isArray(jsonobject)){
        if(jsonobject.length==0)
          return {};
        //create headers
        let filter=DISPLAYCOLUMNS[columns];
        let headerRow=[];
        let returned_fields=Object.keys(jsonobject[0]);
        //Helper.log(filter);
        //Helper.log("Verify filter - "+ Helper.verifyObjectKeys(returned_fields,filter));
        if(filter!=null && Helper.verifyObjectKeys(returned_fields,filter)){//column filters
          headerRow=filter;
        }
        else{
          headerRow=returned_fields;
        }
        let contents=[headerRow];
        //get rows
        for(var i=0;i<jsonobject.length;i++){
          let row=headerRow.map(function(key) {
              var value=jsonobject[i][key];
              if(typeof value==="object")
                return JSON.stringify(value);
              return Helper.formatSpecialValue(key,value);
            });
          contents.push(row);
        }
        return contents;
      }
      else{
        //create headers
        let filter=DISPLAYCOLUMNS[columns];
        let headerRow=[];
        let returned_fields=Object.keys(jsonobject);
        if(filter!=null && Helper.verifyObjectKeys(returned_fields,filter)){//column filters
          headerRow=filter;
        }
        else{
          headerRow=returned_fields;
        }
        //get row
        var row=headerRow.map(function(key) {
          var value=jsonobject[key];
              if(typeof value==="object")
                return JSON.stringify(value);
              return Helper.formatSpecialValue(key,value);
        });
        
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
   * Format special values such as datetime, read only true or false
   * @param {string} key Columne name 
   * @param {any} value Value
   * @return {string} Formated value
   */
  static formatSpecialValue(key,value)
  {
    //format date value
    if(DATECOLUMNS.includes(key))
    value=Helper.getLocalDate(value);
    //format tf value
    if(TFCOLUMNS_RO.includes(key)){
      if(value)
        value="✓";
      else
        value="𐄂";
    }
    return value;
  }

  /**
   * Check if the returned array contains expected fields in the filter.
   * @param {array} returndatafields 
   * @param {array} filter 
   * @return {boolean}
   */
  static verifyObjectKeys(returndatafields,filter)
  {
    for(let i=0;i<filter.length;i++)
    {
      //Helper.log(filter[i]+" "+ returndatafields.includes(filter[i]));

      if(!returndatafields.includes(filter[i])){
        return false;
      }
    }
    return true;
  }
  
  /**
   * Convert data in a sheet range to a json object. Each row is a field.
   * The parameters should be listed by rows. The range should be 2 cols, the first col is for key, and the second col is for value. 
   * @param {object} range A json object
   * @return {object} 
   */
  static parseRangeToJson(range)
  {
    let json={};
    if(range.getNumColumns()!=2)
      return json;
    //Browser.msgBox(range.getNumRows());
    for(let i=1;i<=range.getNumRows();i++){
      if(range.getCell(i,1).getValue()!=""&&range.getCell(i,2).getValue()!=""){
        let param_name=range.getCell(i,1).getValue();
        let param_value_str=range.getCell(i,2).getValue();
        let param_value=null;
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
        let param_name_parts=[]
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
   * Convert a range with a header row to an json object array
   * @param {Range} range A Spreadsheet Range object
   * @returns {Array<object>} object array.
   */
  static convertRangeToObjectArray(range)
  {
    let rangedata=range.getValues();
    let header=rangedata[0];
    let objects=[]
    for(let r=1;r<rangedata.length;r++){
      let object={};
      for(let c=0;c<header.length;c++){
          object[header[c]]=rangedata[r][c];
      }
      objects.push(object);
    }
    return objects;
  }

  /**
   * Check if range contains all required columns
   * @param {object} range A Spreadsheet Range object
   * @param {Array<sting>} columns A list of required column names
   * @returns {boolean} True or false
   */
  static checkRequiredColumns(range, columns)
  {
    //the range has less columns than required columns or has less than 2 rows. return false
    if(range.getNumColumns()<columns.length || range.getNumRows()<2){
      Browser.msgBox("Please select a range with the required columns: "+columns.toString());
      return false;
    }
      

    let header=SpreadsheetApp.getActiveSheet().getRange(range.getRow(),range.getColumn(),1,range.getNumColumns()).getValues();
    Helper.log(header[0]);
    Helper.log(columns);
    for(let i=0;i<columns.length;i++){
      if(!header[0].includes(columns[i])){
        Browser.msgBox("Expecting column "+columns[i]);
        return false;//the column is not included, return false
      }
        
    }

    return true;//all required columns are included, return true
  }
  
  /**
   * get a random color from the default list
   * @return {string} RGB color code
   */
  static getColor()
  {
    var color=['#EEEEEE','#F0FFF0','#F0F8FF','#FFEFD5','#dcf4f7','#FFFFF0','#E6E6FA'];
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
    if(LOGMESSAGE){
      Logger.log(data);
    }
  }

  /**Show bulk action progress
   * @param {Range} range
   * @param {object} progress The progress object
   */
  static showProgress(range, progress)
  {
    let progressid=progress.id;
    //show progress with url
    //Helper.fillValues(range.getLastRow()+1,range.getColumn(),data,"progress",null);
    Helper.toast(progress.tag+" "+progress.workflow_state,"Progress "+progressid+" Status");
    //show progress restuls
    let progressResult=queryProgress(progressid);
    Helper.fillValues(range.getLastRow()+1,range.getColumn(),progressResult,"progress",null);
  }

  /**
   * Shows a popup window in the lower right corner of the spreadsheet with the given title and message, that stays visible for a certain length of time.
   * @param {string} msg The message to be shown in the toast.
   * @param {string} title The optional title of the toast.
   * @param {number} timeoutSeconds The timeout in seconds; if null, the toast defaults to 5 seconds; if negative, the toast remains until dismissed.
   */
  static toast(msg,title,timeoutSeconds)
  {
    SpreadsheetApp.getActiveSpreadsheet().toast(msg,title,timeoutSeconds);
  }

  
  /**
   * Convert a GMT time to the local time (default ET, see appscript.json)
   * @param {string} gmtdate GMT date time
   * @return {string} local date time
   */
  static getLocalDate(gmtdate)
  {
    if(gmtdate==null || gmtdate.trim().toLowerCase()=="null" || gmtdate.trim()=="")
      return "null";
    return (new Date(gmtdate)).toLocaleString();
  }

  /**
   * Convert a local time to a GMT-0 date time. Use it when submit a date time string to Canvas.
   * @param {string} localdate local date time
   * @return {string} GMT date time
   */
  static getISODate(localdate)
  {
    if(localdate==null || localdate.trim().toLowerCase()=="null" || localdate.trim()=="")
      return "null";
    return (new Date(localdate)).toISOString();
  }

  /**
   * Calculate the date difference in days with whole number. 
   * @param {string} date1 A valide date time string
   * @param {string} date2 A valide date time string
   * @returns {number} Difference in days. Positive if date2 is later than date1.
   */
  static daysDiff(date1, date2)
  {
    return Math.round(Helper.dateDiff(DatePart.DAY,date1, date2));
  }

  /**
   * Calculate the date difference in millionseconds. 
   * @param {string} date1 A valide date time string
   * @param {string} date2 A valide date time string
   * @returns {number} Difference in millionseconds. Positive if date2 is later than date1.
   */
  static timeDiff(date1, date2)
  {
    return Helper.dateDiff(DatePart.MILLIONSECOND,date1, date2);
  }

  /**
   * Calculate the date difference in specified date part
   * @param {string} datepart Can  use DatePart enmus. Difference in specified date type, support day, hour, minute, second, millionsecond. If not provide, return in millionseconds
   * @param {string} date1 A valide date time string
   * @param {string} date2 A valide date time string
   */
  static dateDiff(datepart, date1, date2)
  {
    const current_date = new Date(date1); 
    const update_date = new Date(date2);
    // To calculate the time difference of two dates 
    const difference_in_time = update_date.getTime() - current_date.getTime();   
    const oneday=1000*3600*24;
    const onehour=1000*3600;
    const oneminute=1000*60;
    const onesecond=1000;
    switch (datepart)
    {
      case DatePart.DAY:
        return difference_in_time/oneday;
      case DatePart.HOUR:
        return difference_in_time/onehour;
      case DatePart.MINUTE:
        return difference_in_time/oneminute;
      case DatePart.SECOND:
        return difference_in_time/onesecond;
      case DatePart.MILLIONSECOND:
        return difference_in_time;
      default:
        return difference_in_time;
    }
  }

  /**
   * Shift days
   * @param {string} olddatestr original date string
   * @param {Number} num_of_days number of days to be added/substracted
   * @returns {string} ISO date string
   */
  static shiftDate(olddatestr,num_of_days)
  {
    let result=new Date(olddatestr);
    let olddate=new Date(olddatestr);
    result.setDate(olddate.getDate()+num_of_days);
    return result.toISOString();
  }

  /**
   * Return a list of actions
   * @param {string} name Provide a name of a Canvas API controller
   * @returns {array} A list of actions of the controller
   */
  static getControllerActions(name)
  {
    //Helper.log(name);
    //Helper.log(CANVASAPIS[name]);
    //Helper.log(RAWCANVASAPIS[name]);
    if(CANVASAPIS[name]!=null)
      return CANVASAPIS[name];
    else if(RAWCANVASAPIS[name]!=null)
      return RAWCANVASAPIS[name];
    else
      return null;
  }
}