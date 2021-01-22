/**
 * @fileoverview This file defines SideBar class and json configs for sidebars.
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Prepare sidebar
 */
class SideBar{
  /**
   * Return a json array from the CANVASAPIS
   * @param {string} name Provide a name of a Canvas API controller
   */
  static getAPIWrapper(name)
  {
    return CANVASAPIS[name];
  }

  /**
   * Show api by group
   * @param {string} name The name of the api controller
   */
  static show(name)
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/api_sidebar');
    htmlTemplate.data=SideBar.getAPIWrapper(name.toLowerCase());
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(name));
  }

  /**
   * Show update course dates side bar
   */
  static showUpdateCourseDatesSideBar()
  {
    const title="Change Course Dates";
    let htmlTemplate=HtmlService.createTemplateFromFile('ui/template/updateCourseDates');
    htmlTemplate.data=SpreadsheetApp.getActiveRange().getA1Notation();
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(title));
  }

  /**
   * Show all apis in a sidebar
   */
  static showAllAPIs()
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/allapis');
    htmlTemplate.data=CANVASAPIS;
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Canvas APIs"));
  }



}