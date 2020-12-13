//dynamic menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Canvas')
      .addSubMenu(ui.createMenu('accounts')
          .addItem('list accounts', 'get_accounts')
          .addItem('list sub-accounts of selected account_id','get_sub_accounts'))
      .addSubMenu(ui.createMenu('courses')
          .addItem('list your courses', 'get_courses')
          .addItem('get single course info', 'get_single_course'))
      .addSubMenu(ui.createMenu('blueprints')
          .addItem('get blueprint info', 'get_blueprint_templates')
          .addItem('update associated courses', 'update_associated_courses')
          .addItem('sync associated courses', 'sync_associated_courses'))
      .addSeparator()
      .addSubMenu(ui.createMenu('config')
          //.addItem('check settings', 'checkTokens')
          .addItem('set token', 'setToken_')
          .addItem('set host', 'setHost_'))
      .addToUi();
}
