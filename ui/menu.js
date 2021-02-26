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
  //.addSubMenu(ui.createMenu('Bulk operations')
  //  .addItem("Change course date","SideBar.showUpdateCourseDatesSideBar")
  //  .addItem("Create course migration","SideBar.showCreateCourseMigrationSideBar"))
  //.addSeparator()
  //apis
  .addItem("Customized functions","SideBar.showAllAPIs")
  .addSubMenu(ui.createMenu('Raw APIs by group')
    .addSubMenu(ui.createMenu('A-B')
      .addItem('Api_token_scopes','SideBar.showApi_token_scopesAPIs')
      .addItem('Account_domain_lookups','SideBar.showAccount_domain_lookupsAPIs')
      .addItem('Account_notifications','SideBar.showAccount_notificationsAPIs')
      .addItem('Account_reports','SideBar.showAccount_reportsAPIs')
      .addItem('Accounts','SideBar.showAccountsAPIs')
      .addItem('Admins','SideBar.showAdminsAPIs')
      .addItem('Analytics','SideBar.showAnalyticsAPIs')
      .addItem('Announcement_external_feeds','SideBar.showAnnouncement_external_feedsAPIs')
      .addItem('Announcements','SideBar.showAnnouncementsAPIs')
      .addItem('Appointment_groups','SideBar.showAppointment_groupsAPIs')
      .addItem('Assignment_extensions','SideBar.showAssignment_extensionsAPIs')
      .addItem('Assignment_groups','SideBar.showAssignment_groupsAPIs')
      .addItem('Assignments','SideBar.showAssignmentsAPIs')
      .addItem('Authentication_providers','SideBar.showAuthentication_providersAPIs')
      .addItem('Authentications_log','SideBar.showAuthentications_logAPIs')
      .addItem('Blueprint_courses','SideBar.showBlueprint_coursesAPIs')
      .addItem('Bookmarks','SideBar.showBookmarksAPIs')
      .addItem('Brand_configs','SideBar.showBrand_configsAPIs')
    )
    .addSubMenu(ui.createMenu('C-D')
      .addItem('Calendar_events','SideBar.showCalendar_eventsAPIs')
      .addItem('Collaborations','SideBar.showCollaborationsAPIs')
      .addItem('Comm_messages','SideBar.showComm_messagesAPIs')
      .addItem('Communication_channels','SideBar.showCommunication_channelsAPIs')
      .addItem('Conferences','SideBar.showConferencesAPIs')
      .addItem('Content_exports','SideBar.showContent_exportsAPIs')
      .addItem('Content_migrations','SideBar.showContent_migrationsAPIs')
      .addItem('Content_security_policy_settings','SideBar.showContent_security_policy_settingsAPIs')
      .addItem('Content_shares','SideBar.showContent_sharesAPIs')
      .addItem('Conversations','SideBar.showConversationsAPIs')
      .addItem('Course_audit_log','SideBar.showCourse_audit_logAPIs')
      .addItem('Course_quiz_extensions','SideBar.showCourse_quiz_extensionsAPIs')
      .addItem('Courses','SideBar.showCoursesAPIs')
      .addItem('Custom_gradebook_columns','SideBar.showCustom_gradebook_columnsAPIs')
      .addItem('Discussion_topics','SideBar.showDiscussion_topicsAPIs')
      .addItem('Document_previews','SideBar.showDocument_previewsAPIs')
    )
    .addSubMenu(ui.createMenu('E-J')
      .addItem('Enrollment_terms','SideBar.showEnrollment_termsAPIs')
      .addItem('Enrollments','SideBar.showEnrollmentsAPIs')
      .addItem('Error_reports','SideBar.showError_reportsAPIs')
      .addItem('External_tools','SideBar.showExternal_toolsAPIs')
      .addItem('Favorites','SideBar.showFavoritesAPIs')
      .addItem('Feature_flags','SideBar.showFeature_flagsAPIs')
      .addItem('Files','SideBar.showFilesAPIs')
      .addItem('Grade_change_log','SideBar.showGrade_change_logAPIs')
      .addItem('Gradebook_history','SideBar.showGradebook_historyAPIs')
      .addItem('Grading_periods','SideBar.showGrading_periodsAPIs')
      .addItem('Grading_standards','SideBar.showGrading_standardsAPIs')
      .addItem('Group_categories','SideBar.showGroup_categoriesAPIs')
      .addItem('Groups','SideBar.showGroupsAPIs')
      .addItem('History','SideBar.showHistoryAPIs')
      .addItem('Image_search','SideBar.showImage_searchAPIs')
      .addItem('Immersive_reader','SideBar.showImmersive_readerAPIs')
      .addItem('Jw_ts','SideBar.showJw_tsAPIs')
    )
    .addSubMenu(ui.createMenu('L-O')
      .addItem('Late_policy','SideBar.showLate_policyAPIs')
      .addItem('Line_items','SideBar.showLine_itemsAPIs')
      .addItem('Live_assessments','SideBar.showLive_assessmentsAPIs')
      .addItem('Logins','SideBar.showLoginsAPIs')
      .addItem('Media_objects','SideBar.showMedia_objectsAPIs')
      .addItem('Moderated_grading','SideBar.showModerated_gradingAPIs')
      .addItem('Modules','SideBar.showModulesAPIs')
      .addItem('Names_and_role','SideBar.showNames_and_roleAPIs')
      .addItem('Notification_preferences','SideBar.showNotification_preferencesAPIs')
      .addItem('Originality_reports','SideBar.showOriginality_reportsAPIs')
      .addItem('Outcome_groups','SideBar.showOutcome_groupsAPIs')
      .addItem('Outcome_imports','SideBar.showOutcome_importsAPIs')
      .addItem('Outcome_results','SideBar.showOutcome_resultsAPIs')
      .addItem('Outcomes','SideBar.showOutcomesAPIs')
    )
    .addSubMenu(ui.createMenu('P')
      .addItem('Pages','SideBar.showPagesAPIs')
      .addItem('Peer_reviews','SideBar.showPeer_reviewsAPIs')
      .addItem('Plagiarism_detection_platform_assignments','SideBar.showPlagiarism_detection_platform_assignmentsAPIs')
      .addItem('Plagiarism_detection_platform_users','SideBar.showPlagiarism_detection_platform_usersAPIs')
      .addItem('Plagiarism_detection_submissions','SideBar.showPlagiarism_detection_submissionsAPIs')
      .addItem('Planner','SideBar.showPlannerAPIs')
      .addItem('Poll_sessions','SideBar.showPoll_sessionsAPIs')
      .addItem('Poll_choices','SideBar.showPoll_choicesAPIs')
      .addItem('Poll_submissions','SideBar.showPoll_submissionsAPIs')
      .addItem('Polls','SideBar.showPollsAPIs')
      .addItem('Proficiency_ratings','SideBar.showProficiency_ratingsAPIs')
      .addItem('Progress','SideBar.showProgressAPIs')
      .addItem('Public_jwk','SideBar.showPublic_jwkAPIs')
    )
    .addSubMenu(ui.createMenu('Q-R')
      .addItem('Quiz_assignment_overrides','SideBar.showQuiz_assignment_overridesAPIs')
      .addItem('Quiz_extensions','SideBar.showQuiz_extensionsAPIs')
      .addItem('Quiz_ip_filters','SideBar.showQuiz_ip_filtersAPIs')
      .addItem('Quiz_question_groups','SideBar.showQuiz_question_groupsAPIs')
      .addItem('Quiz_questions','SideBar.showQuiz_questionsAPIs')
      .addItem('Quiz_reports','SideBar.showQuiz_reportsAPIs')
      .addItem('Quiz_statistics','SideBar.showQuiz_statisticsAPIs')
      .addItem('Quiz_submission_events','SideBar.showQuiz_submission_eventsAPIs')
      .addItem('Quiz_submission_files','SideBar.showQuiz_submission_filesAPIs')
      .addItem('Quiz_submission_questions','SideBar.showQuiz_submission_questionsAPIs')
      .addItem('Quiz_submission_user_list','SideBar.showQuiz_submission_user_listAPIs')
      .addItem('Quiz_submissions','SideBar.showQuiz_submissionsAPIs')
      .addItem('Quizzes','SideBar.showQuizzesAPIs')
      .addItem('Result','SideBar.showResultAPIs')
      .addItem('Roles','SideBar.showRolesAPIs')
      .addItem('Rubrics','SideBar.showRubricsAPIs')
    )
    .addSubMenu(ui.createMenu('S-W')
      .addItem('Sis_import_errors','SideBar.showSis_import_errorsAPIs')
      .addItem('Sis_imports','SideBar.showSis_importsAPIs')
      .addItem('Sis_integration','SideBar.showSis_integrationAPIs')
      .addItem('Score','SideBar.showScoreAPIs')
      .addItem('Search','SideBar.showSearchAPIs')
      .addItem('Sections','SideBar.showSectionsAPIs')
      .addItem('Services','SideBar.showServicesAPIs')
      .addItem('Shared_brand_configs','SideBar.showShared_brand_configsAPIs')
      .addItem('Submission_comments','SideBar.showSubmission_commentsAPIs')
      .addItem('Submissions','SideBar.showSubmissionsAPIs')
      .addItem('Tabs','SideBar.showTabsAPIs')
      .addItem('User_observees','SideBar.showUser_observeesAPIs')
      .addItem('Users','SideBar.showUsersAPIs')
      .addItem('Webhooks_subscriptions','SideBar.showWebhooks_subscriptionsAPIs')
      //.addItem('E_pub_exports','SideBar.showE_pub_exportsAPIs')
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

