/** Function to pick the selected range from the Google Sheet
  * This returns the picked range, so that the client-side JS 
  * function (in HTML file) can populate it in the text field **/
function getSelectedRange(){
    var selected = SpreadsheetApp.getActiveSheet().getActiveRange(); // Gets the selected range
    var rangeString = selected.getA1Notation(); // converts it to the A1 type notation
    return rangeString;
}

/**
 * Shift a list of dates by adding/substracing days
 * @param {string} range_notation A1 Notation
 */
function shiftDates(range_notation){
    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    
    //get days
    let days=parseInt(Browser.inputBox("How many days?"));
    if(days!=null){
        //get dates
        let dates=range.getValues();
        for(let r=0;r<dates.length;r++){
            for(let c=0;c<dates[r].length;c++){
                dates[r][c]=Helper.getLocalDate(shiftDate(dates[r][c],days));
            }
        }
        range.setValues(dates);
    }
}

/**
 * Calculate date difference in days
 */
function calculateDateDiff()
{
    let date1=Browser.inputBox("date1 (3/25/2020)");
    let date2=Browser.inputBox("date2 (4/25/2020)");
    Browser.msgBox(Helper.daysDiff(date1,date2));
}





