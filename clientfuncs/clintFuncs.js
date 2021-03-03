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
    let result=Browser.inputBox("How many days?")
    if(result && result != "cancel") {
        let days=parseInt(result);
        Helper.log(days);
        if(days!=null && !isNaN(days)){
            //get dates
            let dates=range.getValues();
            for(let r=0;r<dates.length;r++){
                for(let c=0;c<dates[r].length;c++){
                    if(Date.parse(dates[r][c])>0)//there is a valid date in the cell
                    {
                        dates[r][c]=Helper.getLocalDate(Helper.shiftDate(dates[r][c],days));
                        //Helper.log(dates[r][c]);
                    }
                }
            }
            range.setValues(dates);
        }
    }
}

/**
 * Calculate date difference in days
 */
function calculateDateDiff()
{
    //let date1=Browser.inputBox("date1 (3/25/2020)");
    //let date2=Browser.inputBox("date2 (4/25/2020)");
    //Browser.msgBox(Helper.daysDiff(date1,date2));
    var htmlTemplate = HtmlService.createTemplateFromFile('ui/template/datediff');
    htmlTemplate.data=(new Date()).toLocaleString();
    let htmloutput=htmlTemplate.evaluate();
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(htmloutput, 'Date Difference');

    
    /*let htmlTemplate=HtmlService.createTemplateFromFile('ui/template/updateCourseDates');
    htmlTemplate.data=SpreadsheetApp.getActiveRange().getA1Notation();
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(title));*/
}

/**
 * For client call
 * @param {string} datepart Difference in specified date type, support day, hour, minute, second, millionsecond. If not provide, return in millionseconds
 * @param {string} date1 Date time string 1
 * @param {string} date2 Date time stirng 2
 * @returns {number} number of days
 */
function dateDiff(datepart, date1, date2)
{
    try{
        return Math.round(Helper.dateDiff(datepart, date1,date2));
    }catch (err) {
        return 0;
    }
}

/**
 * Increase number of days for each row
 * @param {string} range_notation A1 Notation
 */
function increaseDays(range_notation)
{
    //get range
    let range=SpreadsheetApp.getActiveSheet().getActiveRange();
    if(range_notation!=null)
        range=SpreadsheetApp.getActiveSheet().getRange(range_notation);
    
    //get days
    let result=Browser.inputBox("How many days?")
    if(result && result != "cancel") {
        let days=parseInt(result);
        if(days!=null){
            //get dates
            let dates=range.getValues();
            if(Date.parse(dates[0][0])>0){
                for(let r=0;r<dates.length;r++){
                    for(let c=0;c<dates[r].length;c++){
                        dates[r][c]=Helper.getLocalDate(Helper.shiftDate(dates[0][0],days*(dates[r].length*r+c)));
                        //Helper.log(dates[r][c]);
                    }
                }
            }
            range.setValues(dates);
        }
    }
}









