/**
 * @fileoverview This file defines SideBar class and json configs for sidebars.
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Prepare sidebar
 */
class SideBar{
  

  /**
   * Show api by group
   * @param {string} name The name of the api controller
   */
  static show(name)
  {
    let actions=Helper.getControllerActions(name);
    //Helper.log(actions);
    if(actions!=null){
      var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/api_sidebar');
      htmlTemplate.data=actions;
      SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(name));
    }
  }

  static showApi_token_scopesAPIs(){SideBar.show('api_token_scopes');}
  static showAccount_domain_lookupsAPIs(){SideBar.show('account_domain_lookups');}
  static showAccount_notificationsAPIs(){SideBar.show('account_notifications');}
  static showAccount_reportsAPIs(){SideBar.show('account_reports');}
  static showAccountsAPIs(){SideBar.show('accounts');}
  static showAdminsAPIs(){SideBar.show('admins');}
  static showAnalyticsAPIs(){SideBar.show('analytics');}
  static showAnnouncement_external_feedsAPIs(){SideBar.show('announcement_external_feeds');}
  static showAnnouncementsAPIs(){SideBar.show('announcements');}
  static showAppointment_groupsAPIs(){SideBar.show('appointment_groups');}
  static showAssignment_extensionsAPIs(){SideBar.show('assignment_extensions');}
  static showAssignment_groupsAPIs(){SideBar.show('assignment_groups');}
  static showAssignmentsAPIs(){SideBar.show('assignments');}
  static showAuthentication_providersAPIs(){SideBar.show('authentication_providers');}
  static showAuthentications_logAPIs(){SideBar.show('authentications_log');}
  static showBlueprint_coursesAPIs(){SideBar.show('blueprint_courses');}
  static showBookmarksAPIs(){SideBar.show('bookmarks');}
  static showBrand_configsAPIs(){SideBar.show('brand_configs');}
  static showCalendar_eventsAPIs(){SideBar.show('calendar_events');}
  static showCollaborationsAPIs(){SideBar.show('collaborations');}
  static showComm_messagesAPIs(){SideBar.show('comm_messages');}
  static showCommunication_channelsAPIs(){SideBar.show('communication_channels');}
  static showConferencesAPIs(){SideBar.show('conferences');}
  static showContent_exportsAPIs(){SideBar.show('content_exports');}
  static showContent_migrationsAPIs(){SideBar.show('content_migrations');}
  static showContent_security_policy_settingsAPIs(){SideBar.show('content_security_policy_settings');}
  static showContent_sharesAPIs(){SideBar.show('content_shares');}
  static showConversationsAPIs(){SideBar.show('conversations');}
  static showCourse_audit_logAPIs(){SideBar.show('course_audit_log');}
  static showCourse_quiz_extensionsAPIs(){SideBar.show('course_quiz_extensions');}
  static showCoursesAPIs(){SideBar.show('courses');}
  static showCustom_gradebook_columnsAPIs(){SideBar.show('custom_gradebook_columns');}
  static showDiscussion_topicsAPIs(){SideBar.show('discussion_topics');}
  static showDocument_previewsAPIs(){SideBar.show('document_previews');}
  static showEnrollment_termsAPIs(){SideBar.show('enrollment_terms');}
  static showEnrollmentsAPIs(){SideBar.show('enrollments');}
  static showError_reportsAPIs(){SideBar.show('error_reports');}
  static showExternal_toolsAPIs(){SideBar.show('external_tools');}
  static showFavoritesAPIs(){SideBar.show('favorites');}
  static showFeature_flagsAPIs(){SideBar.show('feature_flags');}
  static showFilesAPIs(){SideBar.show('files');}
  static showGrade_change_logAPIs(){SideBar.show('grade_change_log');}
  static showGradebook_historyAPIs(){SideBar.show('gradebook_history');}
  static showGrading_periodsAPIs(){SideBar.show('grading_periods');}
  static showGrading_standardsAPIs(){SideBar.show('grading_standards');}
  static showGroup_categoriesAPIs(){SideBar.show('group_categories');}
  static showGroupsAPIs(){SideBar.show('groups');}
  static showHistoryAPIs(){SideBar.show('history');}
  static showImage_searchAPIs(){SideBar.show('image_search');}
  static showImmersive_readerAPIs(){SideBar.show('immersive_reader');}
  static showJw_tsAPIs(){SideBar.show('jw_ts');}
  static showLate_policyAPIs(){SideBar.show('late_policy');}
  static showLine_itemsAPIs(){SideBar.show('line_items');}
  static showLive_assessmentsAPIs(){SideBar.show('live_assessments');}
  static showLoginsAPIs(){SideBar.show('logins');}
  static showMedia_objectsAPIs(){SideBar.show('media_objects');}
  static showModerated_gradingAPIs(){SideBar.show('moderated_grading');}
  static showModulesAPIs(){SideBar.show('modules');}
  static showNames_and_roleAPIs(){SideBar.show('names_and_role');}
  static showNotification_preferencesAPIs(){SideBar.show('notification_preferences');}
  static showOriginality_reportsAPIs(){SideBar.show('originality_reports');}
  static showOutcome_groupsAPIs(){SideBar.show('outcome_groups');}
  static showOutcome_importsAPIs(){SideBar.show('outcome_imports');}
  static showOutcome_resultsAPIs(){SideBar.show('outcome_results');}
  static showOutcomesAPIs(){SideBar.show('outcomes');}
  static showPagesAPIs(){SideBar.show('pages');}
  static showPeer_reviewsAPIs(){SideBar.show('peer_reviews');}
  static showPlagiarism_detection_platform_assignmentsAPIs(){SideBar.show('plagiarism_detection_platform_assignments');}
  static showPlagiarism_detection_platform_usersAPIs(){SideBar.show('plagiarism_detection_platform_users');}
  static showPlagiarism_detection_submissionsAPIs(){SideBar.show('plagiarism_detection_submissions');}
  static showPlannerAPIs(){SideBar.show('planner');}
  static showPoll_sessionsAPIs(){SideBar.show('poll_sessions');}
  static showPoll_choicesAPIs(){SideBar.show('poll_choices');}
  static showPoll_submissionsAPIs(){SideBar.show('poll_submissions');}
  static showPollsAPIs(){SideBar.show('polls');}
  static showProficiency_ratingsAPIs(){SideBar.show('proficiency_ratings');}
  static showProgressAPIs(){SideBar.show('progress');}
  static showPublic_jwkAPIs(){SideBar.show('public_jwk');}
  static showQuiz_assignment_overridesAPIs(){SideBar.show('quiz_assignment_overrides');}
  static showQuiz_extensionsAPIs(){SideBar.show('quiz_extensions');}
  static showQuiz_ip_filtersAPIs(){SideBar.show('quiz_ip_filters');}
  static showQuiz_question_groupsAPIs(){SideBar.show('quiz_question_groups');}
  static showQuiz_questionsAPIs(){SideBar.show('quiz_questions');}
  static showQuiz_reportsAPIs(){SideBar.show('quiz_reports');}
  static showQuiz_statisticsAPIs(){SideBar.show('quiz_statistics');}
  static showQuiz_submission_eventsAPIs(){SideBar.show('quiz_submission_events');}
  static showQuiz_submission_filesAPIs(){SideBar.show('quiz_submission_files');}
  static showQuiz_submission_questionsAPIs(){SideBar.show('quiz_submission_questions');}
  static showQuiz_submission_user_listAPIs(){SideBar.show('quiz_submission_user_list');}
  static showQuiz_submissionsAPIs(){SideBar.show('quiz_submissions');}
  static showQuizzesAPIs(){SideBar.show('quizzes');}
  static showResultAPIs(){SideBar.show('result');}
  static showRolesAPIs(){SideBar.show('roles');}
  static showRubricsAPIs(){SideBar.show('rubrics');}
  static showSis_import_errorsAPIs(){SideBar.show('sis_import_errors');}
  static showSis_importsAPIs(){SideBar.show('sis_imports');}
  static showSis_integrationAPIs(){SideBar.show('sis_integration');}
  static showScoreAPIs(){SideBar.show('score');}
  static showSearchAPIs(){SideBar.show('search');}
  static showSectionsAPIs(){SideBar.show('sections');}
  static showServicesAPIs(){SideBar.show('services');}
  static showShared_brand_configsAPIs(){SideBar.show('shared_brand_configs');}
  static showSubmission_commentsAPIs(){SideBar.show('submission_comments');}
  static showSubmissionsAPIs(){SideBar.show('submissions');}
  static showTabsAPIs(){SideBar.show('tabs');}
  static showUser_observeesAPIs(){SideBar.show('user_observees');}
  static showUsersAPIs(){SideBar.show('users');}
  static showWebhooks_subscriptionsAPIs(){SideBar.show('webhooks_subscriptions');}
  static showE_pub_exportsAPIs(){SideBar.show('e_pub_exports');}
  static showPollsAPIs(){SideBar.show('polls');}
  static showProficiency_ratingsAPIs(){SideBar.show('proficiency_ratings');}
  static showProgressAPIs(){SideBar.show('progress');}
  static showPublic_jwkAPIs(){SideBar.show('public_jwk');}
  static showQuiz_assignment_overridesAPIs(){SideBar.show('quiz_assignment_overrides');}
  static showQuiz_extensionsAPIs(){SideBar.show('quiz_extensions');}
  static showQuiz_ip_filtersAPIs(){SideBar.show('quiz_ip_filters');}
  static showQuiz_question_groupsAPIs(){SideBar.show('quiz_question_groups');}
  static showQuiz_questionsAPIs(){SideBar.show('quiz_questions');}
  static showQuiz_reportsAPIs(){SideBar.show('quiz_reports');}
  static showQuiz_statisticsAPIs(){SideBar.show('quiz_statistics');}
  static showQuiz_submission_eventsAPIs(){SideBar.show('quiz_submission_events');}
  static showQuiz_submission_filesAPIs(){SideBar.show('quiz_submission_files');}
  static showQuiz_submission_questionsAPIs(){SideBar.show('quiz_submission_questions');}
  static showQuiz_submission_user_listAPIs(){SideBar.show('quiz_submission_user_list');}
  static showQuiz_submissionsAPIs(){SideBar.show('quiz_submissions');}
  static showQuizzesAPIs(){SideBar.show('quizzes');}
  static showResultAPIs(){SideBar.show('result');}
  static showRolesAPIs(){SideBar.show('roles');}
  static showRubricsAPIs(){SideBar.show('rubrics');}
  static showSis_import_errorsAPIs(){SideBar.show('sis_import_errors');}
  static showSis_importsAPIs(){SideBar.show('sis_imports');}
  static showSis_integrationAPIs(){SideBar.show('sis_integration');}
  static showScoreAPIs(){SideBar.show('score');}
  static showSearchAPIs(){SideBar.show('search');}
  static showSectionsAPIs(){SideBar.show('sections');}
  static showServicesAPIs(){SideBar.show('services');}
  static showShared_brand_configsAPIs(){SideBar.show('shared_brand_configs');}
  static showSubmission_commentsAPIs(){SideBar.show('submission_comments');}
  static showSubmissionsAPIs(){SideBar.show('submissions');}
  static showTabsAPIs(){SideBar.show('tabs');}
  static showUser_observeesAPIs(){SideBar.show('user_observees');}
  static showUsersAPIs(){SideBar.show('users');}
  static showWebhooks_subscriptionsAPIs(){SideBar.show('webhooks_subscriptions');}
  static showE_pub_exportsAPIs(){SideBar.show('e_pub_exports');}

  /**
   * Show update course dates side bar.  
   * Deprecated
   */
  static showUpdateCourseDatesSideBar()
  {
    const title="Change Course Dates";
    let htmlTemplate=HtmlService.createTemplateFromFile('ui/template/updateCourseDates');
    htmlTemplate.data=SpreadsheetApp.getActiveRange().getA1Notation();
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(title));
  }

  /**
   * Show update course dates side bar.  
   * Deprecated
   */
  static showCreateCourseMigrationSideBar()
  {
    const title="Create Course Migrations";
    let htmlTemplate=HtmlService.createTemplateFromFile('ui/template/createContentMigrations');
    //htmlTemplate.data=SpreadsheetApp.getActiveRange().getA1Notation();
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(title));
  }

  /**
   * Show all apis in a sidebar
   */
  static showAllAPIs()
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/allapis');
    htmlTemplate.data=CANVASAPIS;
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Customized Functions"));
  }

  /**
   * Show all raw apis in a sidebar
   */
  static showAllRawAPIs()
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/allrawapis');
    htmlTemplate.data=RAWCANVASAPIS;
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Raw APIs"));
  }



}