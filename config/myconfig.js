/**
 * @fileoverview This file defines configuration functions 
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * MyConfig class for PerpertiesService.getUserProperties()
 */
class MyConfig{
  static getProperty(name){
    return PropertiesService.getUserProperties().getProperty(name);
  }

  static setProperty(name,value){
    PropertiesService.getUserProperties().setProperty(name,value);
  }
}

/**
 * Show a input dialog for user token.
 * The user token is stored in UserProperties["token"].
 */
function setToken() {
  var token = Browser.inputBox('Set Token', 'Current Token: ['+PropertiesService.getUserProperties().getProperty("token")+']', Browser.Buttons.OK_CANCEL);
  if(token && token != "cancel") {
    PropertiesService.getUserProperties().setProperty("token", token);
  } 
}

/**
 * Show a input dialog for Canvas URL.
 * The host URL is stored in UserProperties["host"].
 */
function setHost() {
  var host = Browser.inputBox("Set Host ('https://yourschool.instructure.com')", 'Current Host: ['+PropertiesService.getUserProperties().getProperty("host")+']', Browser.Buttons.OK_CANCEL);
  if(host && host != "cancel") {
    if(!host.match(/http/)) {
      host = "https://" + host;
    }
    host = host.replace(/\/$/, '');
    PropertiesService.getUserProperties().setProperty("host", host);
  } 
}

/**
 * Get current host
 * @returns {string} host string
 */
function getHost(){
  return PropertiesService.getUserProperties().getProperty("host");
}

/**
 * Test user configurations
 */
function testConfig(){
  const action=Helper.getAPIAction2(RawAPIAction.ACCOUNTS.PERMISSIONS);
  let opts={"account_id":"self"};
  let data=canvasAPI(action.endpoint,opts);
  Browser.msgBox("Testing result", "Root Account Permissions: "+JSON.stringify(data),Browser.Buttons.OK);
}

/**
 * Show a config dialog
 */
function showMyConfigDialog()
{

    var htmlTemplate = HtmlService.createTemplateFromFile('ui/template/myconfig');
    htmlTemplate.data={
        "host":MyConfig.getProperty("host"),
        "token":MyConfig.getProperty("token"),
        "syslog":MyConfig.getProperty("syslog"),
        "confirmhost":MyConfig.getProperty("confirmhost")};
    let htmloutput=htmlTemplate.evaluate();
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(htmloutput, 'Config');
}

/**
 * Sys config
 * @param {string} host The host url of canvas
 * @param {string} token Your personal token for api calls
 * @param {boolean} syslog Keep execution log for debug purpose
 * @param {boolean} confirmhost Show a confirmation dialog for host
 */
function saveMyConfig(host,token,syslog,confirmhost)
{
    MyConfig.setProperty("host",host);
    MyConfig.setProperty("token",token);
    MyConfig.setProperty("syslog",syslog);
    MyConfig.setProperty("confirmhost",confirmhost);
    Helper.log(`Configuration saved. Host, token, syslog (${syslog}), confirmhost (${confirmhost})`);
}


