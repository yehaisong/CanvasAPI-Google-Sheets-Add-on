/*
hy 2020-12
for Canvas CoursesController
*/

//generate template based on function names
function generateParamTemplate(name,index) {
  var params=paramList[name][index]["template"];
  if(typeof params!=null)
  {
    var cell=SpreadsheetApp.getCurrentCell();
    Helper.fillValuesFromJsonObject(cell.getRow(),cell.getColumn(),params,"#eeeeee")
  }
  else
  {
    Browser.msgBox('Template '+name+' is not implemented.');
  }

}
