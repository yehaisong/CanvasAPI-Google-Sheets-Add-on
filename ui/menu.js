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
  .addItem("Change course date","SideBar.showUpdateCourseDatesSideBar")
  .addSeparator()
  .addItem("Shift dates","shiftDates")
  .addItem("Calculate date diff","calculateDateDiff")
  .addSeparator()
  .addItem("Show APIs","SideBar.showAllAPIs")
  .addSubMenu(ui.createMenu('Show APIs by group')    
    .addItem("Accounts","showAccountsGuide")
    .addItem("Assignments","showAssignmentsGuide")
    .addItem("Blueprints","showBlueprintsGuide") 
    .addItem("Courses","showCoursesGuide")
    .addItem("Pages","showPagesGuide"))
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
  .addSubMenu(ui.createMenu('Config')
      //.addItem('check settings', 'checkTokens')
      .addItem('Set token', 'setToken')
      .addItem('Set host', 'setHost'))
  //.addSeparator()
  .addToUi();
}

