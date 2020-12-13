////////////////////////////////////////////////////////////////////////
//The function takes two inputs:
//url = Spreadhsheet URL
//sheetName = name of sheet in Spreadsheet you want to convert to json
//The resulting json objects will be a named based on row 1 with spaces removed 
////////////////////////////////////////////////////////////////////////
function getSpreadsheetData(ssURL,sheetName){
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

/*
hy 2020-12
helper
- parse_JSON_array (jsonarray)
- setValues (startrow,startcol,jasonarray)
*/


//setValues with a json array
function fillValuesFromJsonList(startrow,startcol,jsonarray,bgcolor)
{
  var contents=parse_JSON_array(jsonarray);
  setValues(startrow,startcol,contents,bgcolor);
}

//setValues with a json object
function fillValuesFromJsonObject(startrow,startcol,jsonobject,bgcolor)
{
  var contents=parse_JSON_object(jsonobject);
  setValues(startrow,startcol,contents,bgcolor);
}

//setValue
function setValues(startrow,startcol,contents,bgcolor)
{
  insertRows(startrow,contents.length);
  var rng = SpreadsheetApp.getActiveSheet().getRange(startrow,startcol,contents.length,contents[0].length);
  if(bgcolor==null)
    bgcolor= getColor();
  rng.setHorizontalAlignment("left");
  rng.setValues(contents);
  rng.setBackground(bgcolor);
}

//insert empty rows
function insertRows(position, numrows)
{
  var sheet = SpreadsheetApp.getActiveSheet();
  // This inserts five rows before the first row
  sheet.insertRows(position, numrows);
}

//convert a json array data to Array[][]
function parse_JSON_array(jsonarray)
{
  //create headers
  var headerRow=Object.keys(jsonarray[0]);
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
function parse_JSON_object(jsonobject)
{
  //create headers
  var headerRow=Object.keys(jsonobject);
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

//get a random int 0-max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//get a random color
function getColor()
{
  var color=['#eeeeee','#FFE4E1','#F0F8FF','#FFEFD5','#B0E0E6','#FFFFF0','#E6E6FA'];
  return color[getRandomInt(color.length-1)];
}
