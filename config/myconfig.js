/**
 * @fileoverview This file defines configuration functions 
 * @author hye@cedarville.edu (Haisong Ye)
 */


/**@constant
 * @type {boolean}
 * @description Log customized message using Helper.log or not.
 * @default true
 */
const LOGMESSAGE = true;



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
