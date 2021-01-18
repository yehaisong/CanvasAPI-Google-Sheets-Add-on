/** Function to pick the selected range from the Google Sheet
  * This returns the picked range, so that the client-side JS 
  * function (in HTML file) can populate it in the text field **/
 function getSelectedRange(){
    var selected = SpreadsheetApp.getActiveSheet().getActiveRange(); // Gets the selected range
    var rangeString = selected.getA1Notation(); // converts it to the A1 type notation
    return rangeString;
  }