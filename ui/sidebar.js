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
   * @param {string} name The name of the api function
   */
  static show(name)
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/api_sidebar');
    htmlTemplate.data=SideBar.getAPIWrapper(name.toLowerCase());
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(name));
  }
}