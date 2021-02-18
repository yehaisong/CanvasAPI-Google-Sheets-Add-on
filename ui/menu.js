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
  .addSubMenu(ui.createMenu('Bulk operations')
    .addItem("Change course date","SideBar.showUpdateCourseDatesSideBar"))
  //apis
  .addSeparator()
  .addItem("Customized APIs","SideBar.showAllAPIs")
  .addSubMenu(ui.createMenu('Original APIs by group')
    .addSubMenu(ui.createMenu('A-L')
    .addItem('Accounts','SideBar.showAccountsAPIs')
    .addItem('Admins','SideBar.showAdminsAPIs')
    .addItem('Analytics','SideBar.showAnalyticsAPIs')
    .addItem('Announcements','SideBar.showAnnouncementsAPIs')
    .addItem('Assignment_groups','SideBar.showAssignment_groupsAPIs')
    .addItem('Assignments','SideBar.showAssignmentsAPIs')
    .addItem('Blueprint_courses','SideBar.showBlueprint_coursesAPIs')
    .addItem('Courses','SideBar.showCoursesAPIs')
    .addItem('Discussion_topics','SideBar.showDiscussion_topicsAPIs')
    .addItem('Enrollment_terms','SideBar.showEnrollment_termsAPIs')
    .addItem('Files','SideBar.showFilesAPIs')
    .addItem('Gradebook_history','SideBar.showGradebook_historyAPIs')
    .addItem('Groups','SideBar.showGroupsAPIs')
    .addItem('Logins','SideBar.showLoginsAPIs')
    )
    .addSubMenu(ui.createMenu('M-Z')
      .addItem('Modules','SideBar.showModulesAPIs')
      .addItem('Outcome_groups','SideBar.showOutcome_groupsAPIs')
      .addItem('Outcome_imports','SideBar.showOutcome_importsAPIs')
      .addItem('Outcome_results','SideBar.showOutcome_resultsAPIs')
      .addItem('Outcomes','SideBar.showOutcomesAPIs')
      .addItem('Pages','SideBar.showPagesAPIs')
      .addItem('Progress','SideBar.showProgressAPIs')
      .addItem('Quiz_assignment_overrides','SideBar.showQuiz_assignment_overridesAPIs')
      .addItem('Quiz_extensions','SideBar.showQuiz_extensionsAPIs')
      .addItem('Result','SideBar.showResultAPIs')
      .addItem('Roles','SideBar.showRolesAPIs')
      .addItem('Rubrics','SideBar.showRubricsAPIs')
      .addItem('Score','SideBar.showScoreAPIs')
      .addItem('Submissions','SideBar.showSubmissionsAPIs')
      .addItem('Users','SideBar.showUsersAPIs')
    )
  )
  //tools
  .addSeparator()
  .addItem("Shift dates","shiftDates")
  .addItem("Increase number of days","increaseDays")
  .addItem("Calculate date diff","calculateDateDiff")
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
  //config
  .addSeparator()
  .addSubMenu(ui.createMenu('Config')
      //.addItem('check settings', 'checkTokens')
      .addItem('Set token', 'setToken')
      .addItem('Set host', 'setHost')
      .addItem('Test settings','testConfig'))
  //.addSeparator()
  .addToUi();
}

