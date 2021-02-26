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

  static showApi_token_scopesAPIs(){SideBar.showRawAPIs('api_token_scopes');}
  static showAccount_domain_lookupsAPIs(){SideBar.showRawAPIs('account_domain_lookups');}
  static showAccount_notificationsAPIs(){SideBar.showRawAPIs('account_notifications');}
  static showAccount_reportsAPIs(){SideBar.showRawAPIs('account_reports');}
  static showAccountsAPIs(){SideBar.showRawAPIs('accounts');}
  static showAdminsAPIs(){SideBar.showRawAPIs('admins');}
  static showAnalyticsAPIs(){SideBar.showRawAPIs('analytics');}
  static showAnnouncement_external_feedsAPIs(){SideBar.showRawAPIs('announcement_external_feeds');}
  static showAnnouncementsAPIs(){SideBar.showRawAPIs('announcements');}
  static showAppointment_groupsAPIs(){SideBar.showRawAPIs('appointment_groups');}
  static showAssignment_extensionsAPIs(){SideBar.showRawAPIs('assignment_extensions');}
  static showAssignment_groupsAPIs(){SideBar.showRawAPIs('assignment_groups');}
  static showAssignmentsAPIs(){SideBar.showRawAPIs('assignments');}
  static showAuthentication_providersAPIs(){SideBar.showRawAPIs('authentication_providers');}
  static showAuthentications_logAPIs(){SideBar.showRawAPIs('authentications_log');}
  static showBlueprint_coursesAPIs(){SideBar.showRawAPIs('blueprint_courses');}
  static showBookmarksAPIs(){SideBar.showRawAPIs('bookmarks');}
  static showBrand_configsAPIs(){SideBar.showRawAPIs('brand_configs');}
  static showCalendar_eventsAPIs(){SideBar.showRawAPIs('calendar_events');}
  static showCollaborationsAPIs(){SideBar.showRawAPIs('collaborations');}
  static showComm_messagesAPIs(){SideBar.showRawAPIs('comm_messages');}
  static showCommunication_channelsAPIs(){SideBar.showRawAPIs('communication_channels');}
  static showConferencesAPIs(){SideBar.showRawAPIs('conferences');}
  static showContent_exportsAPIs(){SideBar.showRawAPIs('content_exports');}
  static showContent_migrationsAPIs(){SideBar.showRawAPIs('content_migrations');}
  static showContent_security_policy_settingsAPIs(){SideBar.showRawAPIs('content_security_policy_settings');}
  static showContent_sharesAPIs(){SideBar.showRawAPIs('content_shares');}
  static showConversationsAPIs(){SideBar.showRawAPIs('conversations');}
  static showCourse_audit_logAPIs(){SideBar.showRawAPIs('course_audit_log');}
  static showCourse_quiz_extensionsAPIs(){SideBar.showRawAPIs('course_quiz_extensions');}
  static showCoursesAPIs(){SideBar.showRawAPIs('courses');}
  static showCustom_gradebook_columnsAPIs(){SideBar.showRawAPIs('custom_gradebook_columns');}
  static showDiscussion_topicsAPIs(){SideBar.showRawAPIs('discussion_topics');}
  static showDocument_previewsAPIs(){SideBar.showRawAPIs('document_previews');}
  static showEnrollment_termsAPIs(){SideBar.showRawAPIs('enrollment_terms');}
  static showEnrollmentsAPIs(){SideBar.showRawAPIs('enrollments');}
  static showError_reportsAPIs(){SideBar.showRawAPIs('error_reports');}
  static showExternal_toolsAPIs(){SideBar.showRawAPIs('external_tools');}
  static showFavoritesAPIs(){SideBar.showRawAPIs('favorites');}
  static showFeature_flagsAPIs(){SideBar.showRawAPIs('feature_flags');}
  static showFilesAPIs(){SideBar.showRawAPIs('files');}
  static showGrade_change_logAPIs(){SideBar.showRawAPIs('grade_change_log');}
  static showGradebook_historyAPIs(){SideBar.showRawAPIs('gradebook_history');}
  static showGrading_periodsAPIs(){SideBar.showRawAPIs('grading_periods');}
  static showGrading_standardsAPIs(){SideBar.showRawAPIs('grading_standards');}
  static showGroup_categoriesAPIs(){SideBar.showRawAPIs('group_categories');}
  static showGroupsAPIs(){SideBar.showRawAPIs('groups');}
  static showHistoryAPIs(){SideBar.showRawAPIs('history');}
  static showImage_searchAPIs(){SideBar.showRawAPIs('image_search');}
  static showImmersive_readerAPIs(){SideBar.showRawAPIs('immersive_reader');}
  static showJw_tsAPIs(){SideBar.showRawAPIs('jw_ts');}
  static showLate_policyAPIs(){SideBar.showRawAPIs('late_policy');}
  static showLine_itemsAPIs(){SideBar.showRawAPIs('line_items');}
  static showLive_assessmentsAPIs(){SideBar.showRawAPIs('live_assessments');}
  static showLoginsAPIs(){SideBar.showRawAPIs('logins');}
  static showMedia_objectsAPIs(){SideBar.showRawAPIs('media_objects');}
  static showModerated_gradingAPIs(){SideBar.showRawAPIs('moderated_grading');}
  static showModulesAPIs(){SideBar.showRawAPIs('modules');}
  static showNames_and_roleAPIs(){SideBar.showRawAPIs('names_and_role');}
  static showNotification_preferencesAPIs(){SideBar.showRawAPIs('notification_preferences');}
  static showOriginality_reportsAPIs(){SideBar.showRawAPIs('originality_reports');}
  static showOutcome_groupsAPIs(){SideBar.showRawAPIs('outcome_groups');}
  static showOutcome_importsAPIs(){SideBar.showRawAPIs('outcome_imports');}
  static showOutcome_resultsAPIs(){SideBar.showRawAPIs('outcome_results');}
  static showOutcomesAPIs(){SideBar.showRawAPIs('outcomes');}
  static showPagesAPIs(){SideBar.showRawAPIs('pages');}
  static showPeer_reviewsAPIs(){SideBar.showRawAPIs('peer_reviews');}
  static showPlagiarism_detection_platform_assignmentsAPIs(){SideBar.showRawAPIs('plagiarism_detection_platform_assignments');}
  static showPlagiarism_detection_platform_usersAPIs(){SideBar.showRawAPIs('plagiarism_detection_platform_users');}
  static showPlagiarism_detection_submissionsAPIs(){SideBar.showRawAPIs('plagiarism_detection_submissions');}
  static showPlannerAPIs(){SideBar.showRawAPIs('planner');}
  static showPoll_sessionsAPIs(){SideBar.showRawAPIs('poll_sessions');}
  static showPoll_choicesAPIs(){SideBar.showRawAPIs('poll_choices');}
  static showPoll_submissionsAPIs(){SideBar.showRawAPIs('poll_submissions');}
  static showPollsAPIs(){SideBar.showRawAPIs('polls');}
  static showProficiency_ratingsAPIs(){SideBar.showRawAPIs('proficiency_ratings');}
  static showProgressAPIs(){SideBar.showRawAPIs('progress');}
  static showPublic_jwkAPIs(){SideBar.showRawAPIs('public_jwk');}
  static showQuiz_assignment_overridesAPIs(){SideBar.showRawAPIs('quiz_assignment_overrides');}
  static showQuiz_extensionsAPIs(){SideBar.showRawAPIs('quiz_extensions');}
  static showQuiz_ip_filtersAPIs(){SideBar.showRawAPIs('quiz_ip_filters');}
  static showQuiz_question_groupsAPIs(){SideBar.showRawAPIs('quiz_question_groups');}
  static showQuiz_questionsAPIs(){SideBar.showRawAPIs('quiz_questions');}
  static showQuiz_reportsAPIs(){SideBar.showRawAPIs('quiz_reports');}
  static showQuiz_statisticsAPIs(){SideBar.showRawAPIs('quiz_statistics');}
  static showQuiz_submission_eventsAPIs(){SideBar.showRawAPIs('quiz_submission_events');}
  static showQuiz_submission_filesAPIs(){SideBar.showRawAPIs('quiz_submission_files');}
  static showQuiz_submission_questionsAPIs(){SideBar.showRawAPIs('quiz_submission_questions');}
  static showQuiz_submission_user_listAPIs(){SideBar.showRawAPIs('quiz_submission_user_list');}
  static showQuiz_submissionsAPIs(){SideBar.showRawAPIs('quiz_submissions');}
  static showQuizzesAPIs(){SideBar.showRawAPIs('quizzes');}
  static showResultAPIs(){SideBar.showRawAPIs('result');}
  static showRolesAPIs(){SideBar.showRawAPIs('roles');}
  static showRubricsAPIs(){SideBar.showRawAPIs('rubrics');}
  static showSis_import_errorsAPIs(){SideBar.showRawAPIs('sis_import_errors');}
  static showSis_importsAPIs(){SideBar.showRawAPIs('sis_imports');}
  static showSis_integrationAPIs(){SideBar.showRawAPIs('sis_integration');}
  static showScoreAPIs(){SideBar.showRawAPIs('score');}
  static showSearchAPIs(){SideBar.showRawAPIs('search');}
  static showSectionsAPIs(){SideBar.showRawAPIs('sections');}
  static showServicesAPIs(){SideBar.showRawAPIs('services');}
  static showShared_brand_configsAPIs(){SideBar.showRawAPIs('shared_brand_configs');}
  static showSubmission_commentsAPIs(){SideBar.showRawAPIs('submission_comments');}
  static showSubmissionsAPIs(){SideBar.showRawAPIs('submissions');}
  static showTabsAPIs(){SideBar.showRawAPIs('tabs');}
  static showUser_observeesAPIs(){SideBar.showRawAPIs('user_observees');}
  static showUsersAPIs(){SideBar.showRawAPIs('users');}
  static showWebhooks_subscriptionsAPIs(){SideBar.showRawAPIs('webhooks_subscriptions');}
  static showE_pub_exportsAPIs(){SideBar.showRawAPIs('e_pub_exports');}
  static showPollsAPIs(){SideBar.showRawAPIs('polls');}
  static showProficiency_ratingsAPIs(){SideBar.showRawAPIs('proficiency_ratings');}
  static showProgressAPIs(){SideBar.showRawAPIs('progress');}
  static showPublic_jwkAPIs(){SideBar.showRawAPIs('public_jwk');}
  static showQuiz_assignment_overridesAPIs(){SideBar.showRawAPIs('quiz_assignment_overrides');}
  static showQuiz_extensionsAPIs(){SideBar.showRawAPIs('quiz_extensions');}
  static showQuiz_ip_filtersAPIs(){SideBar.showRawAPIs('quiz_ip_filters');}
  static showQuiz_question_groupsAPIs(){SideBar.showRawAPIs('quiz_question_groups');}
  static showQuiz_questionsAPIs(){SideBar.showRawAPIs('quiz_questions');}
  static showQuiz_reportsAPIs(){SideBar.showRawAPIs('quiz_reports');}
  static showQuiz_statisticsAPIs(){SideBar.showRawAPIs('quiz_statistics');}
  static showQuiz_submission_eventsAPIs(){SideBar.showRawAPIs('quiz_submission_events');}
  static showQuiz_submission_filesAPIs(){SideBar.showRawAPIs('quiz_submission_files');}
  static showQuiz_submission_questionsAPIs(){SideBar.showRawAPIs('quiz_submission_questions');}
  static showQuiz_submission_user_listAPIs(){SideBar.showRawAPIs('quiz_submission_user_list');}
  static showQuiz_submissionsAPIs(){SideBar.showRawAPIs('quiz_submissions');}
  static showQuizzesAPIs(){SideBar.showRawAPIs('quizzes');}
  static showResultAPIs(){SideBar.showRawAPIs('result');}
  static showRolesAPIs(){SideBar.showRawAPIs('roles');}
  static showRubricsAPIs(){SideBar.showRawAPIs('rubrics');}
  static showSis_import_errorsAPIs(){SideBar.showRawAPIs('sis_import_errors');}
  static showSis_importsAPIs(){SideBar.showRawAPIs('sis_imports');}
  static showSis_integrationAPIs(){SideBar.showRawAPIs('sis_integration');}
  static showScoreAPIs(){SideBar.showRawAPIs('score');}
  static showSearchAPIs(){SideBar.showRawAPIs('search');}
  static showSectionsAPIs(){SideBar.showRawAPIs('sections');}
  static showServicesAPIs(){SideBar.showRawAPIs('services');}
  static showShared_brand_configsAPIs(){SideBar.showRawAPIs('shared_brand_configs');}
  static showSubmission_commentsAPIs(){SideBar.showRawAPIs('submission_comments');}
  static showSubmissionsAPIs(){SideBar.showRawAPIs('submissions');}
  static showTabsAPIs(){SideBar.showRawAPIs('tabs');}
  static showUser_observeesAPIs(){SideBar.showRawAPIs('user_observees');}
  static showUsersAPIs(){SideBar.showRawAPIs('users');}
  static showWebhooks_subscriptionsAPIs(){SideBar.showRawAPIs('webhooks_subscriptions');}
  static showE_pub_exportsAPIs(){SideBar.showRawAPIs('e_pub_exports');}

  /**
   * Show update course dates side bar
   */
  static showUpdateCourseDatesSideBar()
  {
    const title="Change Course Dates";
    let htmlTemplate=HtmlService.createTemplateFromFile('ui/template/updateCourseDates');
    htmlTemplate.data=SpreadsheetApp.getActiveRange().getA1Notation();
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle(title));
  }

  /**
   * Show update course dates side bar
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



}