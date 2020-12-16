/*
hy 2020-12
helper
*/

class Helper {
  
  


  ////////////////////////////////////////////////////////////////////////
  //The function takes two inputs:
  //url = Spreadhsheet URL
  //sheetName = name of sheet in Spreadsheet you want to convert to json
  //The resulting json objects will be a named based on row 1 with spaces removed 
  ////////////////////////////////////////////////////////////////////////
  static getSpreadsheetData(ssURL,sheetName){
    var ss = SpreadsheetApp.openByUrl(ssURL);
    var sheet = ss.getSheetByName(sheetName);
    var data = sheet.getDataRange().getValues();
    var sheetArray = [];  
     var headers = data[0]
     var jsonArray = [];
     for(var i=1; i<data.length; i++) {
      var line = data[i];
      var json = new Object();
      for(var j=0; j<headers.length; j++) {
        var header = headers[j].replace(/\s/g, '');
        json[header] = line[j];
      }
      jsonArray.push(json);
    } return jsonArray;
  }
  
  //call API and fill sheet with return data
  //endpoint: api endpoint
  //columns: display columns for the data
  static callCanvasAPIwithRangeParams(endpoint,columns)
  {
    var param_range=SpreadsheetApp.getActiveSheet().getActiveRange();
    var opts=Helper.range_to_json(param_range);
    //Helper.insertRows(param_range.getLastRow()+1,1);
    //var row=SpreadsheetApp.getActiveSheet().getRange(param_range.getLastRow()+1,1);
    //row.getCell(1,1).setValue("Working...");
    var data=canvasAPI(endpoint,opts);
    //SpreadsheetApp.getActiveSheet().deleteRow(row.getRow());
    Helper.fillValuesFromJsonList(param_range.getLastRow()+1,param_range.getColumn(),data,null,columns);
  }

  //setValues with a json array
  static fillValuesFromJsonList(startrow,startcol,jsonarray,bgcolor,columns)
  {
    //Browser.msgBox(columns);
    var contents=Helper.parse_JSON_array(jsonarray,columns);
    Helper.setValues(startrow,startcol,contents,bgcolor);
  }
  
  //setValues with a json object
  static fillValuesFromJsonObject(startrow,startcol,jsonobject,bgcolor,columns)
  {
    var contents=Helper.parse_JSON_object(jsonobject,columns);
    Helper.setValues(startrow,startcol,contents,bgcolor);
  }
  
  //setValue
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
  
  //insert empty rows
  static insertRows(position, numrows)
  {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.insertRows(position, numrows);
  }
  
  //convert a json array data to Array[][]
  static parse_JSON_array(jsonarray,columns)
  {
    //create headers
    var headerRow=[];
    //Browser.msgBox(columns);
    if(columns!=null)//column filters
    {
      headerRow=columns;
    }
    else
    {
      headerRow=Object.keys(jsonarray[0]);
    }
    var contents=[headerRow];
    //get rows
    for(var i=0;i<jsonarray.length;i++)
    {
      var row=headerRow.map(function(key) {return jsonarray[i][key]});
      contents.push(row);
    }
    return contents;
  }
  
  //convert a json object data to Array[][]
  static parse_JSON_object(jsonobject,columns)
  {
    //create headers
    var headerRow=[];
    if(columns!=null)//column filters
    {
      headerRow=columns;
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
  
  //convert range to jaon object
  //the range should be 2 cols, The first col for key, and the second col for value
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
  
  //get a random int 0-max
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  //get a random color
  static getColor()
  {
    var color=['#eeeeee','#F0FFF0','#F0F8FF','#FFEFD5','#B0E0E6','#FFFFF0','#E6E6FA'];
    return color[Helper.getRandomInt(color.length-1)];
  }
}