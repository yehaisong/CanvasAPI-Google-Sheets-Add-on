// Menu options

function setToken_() {
  var token = Browser.inputBox('Set Token', 'Current Token: ['+PropertiesService.getUserProperties().getProperty("token")+']', Browser.Buttons.OK_CANCEL);
  if(token && token != "cancel") {
    //ScriptProperties.setProperty("token", token);
    PropertiesService.getUserProperties().setProperty("token", token);
  } 
}
function setHost_() {
  var host = Browser.inputBox("Set Host ('https://yourschool.instructure.com')", 'Current Host: [hidden]', Browser.Buttons.OK_CANCEL);
  if(host && host != "cancel") {
    if(!host.match(/http/)) {
      host = "https://" + host;
    }
    host = host.replace(/\/$/, '');
    PropertiesService.getUserProperties().setProperty("host", host);
  } 
}
function checkTokens() {
  var host = PropertiesService.getUserProperties().getProperty("host");
  if(!host) { setHost_(); }
  var token = PropertiesService.getUserProperties().getProperty("token");
  if(!token) { setToken_(); }
}