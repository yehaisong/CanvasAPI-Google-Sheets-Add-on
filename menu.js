//dynamic menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Canvas')
      /*
      .addSubMenu(ui.createMenu('accounts')
          .addItem('get accounts', 'get_accounts')
          .addItem('get subaccounts','get_sub_accounts')
          .addItem('get courses in an account','get_courses_in_account'))
      */
      .addSubMenu(ui.createMenu('courses')
          .addItem('get courses', 'get_courses')
          .addItem('get single course', 'get_single_course'))
      .addSubMenu(ui.createMenu('blueprints')
          .addItem('get blueprint templates', 'get_blueprint_templates')
          .addItem('update associated courses', 'update_associated_courses')
          .addItem('sync associated courses', 'sync_associated_courses'))
      /*
      .addSubMenu(ui.createMenu('assignments')
          .addItem('get assignments', 'get_assignments_guide')
          .addItem('get assignment overrides', 'get_assignment_overrides_guide')
          .addItem('create an assignment override', 'create_an_assignment_override_guide')
          .addItem('delete an assignment override', 'delete_an_assignment_override_guide')
          .addItem('batch create assignments overrides', 'batch_create_assignments_overrides_guide'))
      */
      .addItem("accounts","accounts_guide")
      .addItem("assignments","assignments_guide")
      .addSeparator()
      .addSubMenu(ui.createMenu('config')
          //.addItem('check settings', 'checkTokens')
          .addItem('set token', 'setToken_')
          .addItem('set host', 'setHost_'))
      //.addSeparator()
      .addToUi();
}

