/**
 * @fileoverview Create Menu UI
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Add menu items 
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Canvas')
  .addItem("change course date","SideBar.showUpdateCourseDatesSideBar")
  .addSeparator()
  .addItem("shift dates","shiftDates")
  .addItem("date diff in days","calculateDateDiff")
  .addSeparator()
  .addSubMenu(ui.createMenu('apis')    
    .addItem("accounts","showAccountsGuide")
    .addItem("assignments","showAssignmentsGuide")
    .addItem("blueprints","showBlueprintsGuide") 
    .addItem("courses","showCoursesGuide")
    .addItem("pages","showPagesGuide"))
  /*
  .addSeparator()
  .addSubMenu(ui.createMenu('direct API call')
      .addSubMenu(ui.createMenu('accounts')
        .addItem('get your active accounts', 'get_your_active_courses')
        .addItem('get subaccounts','get_sub_accounts')
        .addItem('get courses in an account','get_courses_in_account'))
      .addSubMenu(ui.createMenu('assignments')
        .addItem('get assignments', 'get_assignments')
        .addItem('get assignment overrides', 'get_assignment_overrides')
        .addItem('create an assignment override', 'create_an_assignment_override')
        .addItem('delete an assignment override', 'deleteAssignmentOverride')
        .addItem('batch create assignments overrides', 'batchCreateAssignmentsOverrides'))
      .addSubMenu(ui.createMenu('blueprints')
        .addItem('get blueprint templates', 'get_blueprint_templates')
        .addItem('update associated courses', 'update_associated_courses')
        .addItem('sync associated courses', 'sync_associated_courses'))
      .addSubMenu(ui.createMenu('courses')
        .addItem('get courses', 'get_courses')
        .addItem('get single course', 'get_single_course'))
  )*/
  .addSeparator()
  .addSubMenu(ui.createMenu('config')
      //.addItem('check settings', 'checkTokens')
      .addItem('set token', 'setToken')
      .addItem('set host', 'setHost'))
  //.addSeparator()
  .addToUi();
}

