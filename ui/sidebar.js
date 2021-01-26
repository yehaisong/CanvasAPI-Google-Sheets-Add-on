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

  static showAccountsAPIs(){SideBar.show('accounts');}
  static showAdminsAPIs(){SideBar.show('admins');}
  static showAnalyticsAPIs(){SideBar.show('analytics');}
  static showAnnouncementsAPIs(){SideBar.show('announcements');}
  static showAssignment_groupsAPIs(){SideBar.show('assignment_groups');}
  static showAssignmentsAPIs(){SideBar.show('assignments');}
  static showBlueprint_coursesAPIs(){SideBar.show('blueprint_courses');}
  static showCoursesAPIs(){SideBar.show('courses');}
  static showDiscussion_topicsAPIs(){SideBar.show('discussion_topics');}
  static showEnrollment_termsAPIs(){SideBar.show('enrollment_terms');}
  static showFilesAPIs(){SideBar.show('files');}
  static showGradebook_historyAPIs(){SideBar.show('gradebook_history');}
  static showGroupsAPIs(){SideBar.show('groups');}
  static showLoginsAPIs(){SideBar.show('logins');}
  static showModulesAPIs(){SideBar.show('modules');}
  static showOutcome_groupsAPIs(){SideBar.show('outcome_groups');}
  static showOutcome_importsAPIs(){SideBar.show('outcome_imports');}
  static showOutcome_resultsAPIs(){SideBar.show('outcome_results');}
  static showOutcomesAPIs(){SideBar.show('outcomes');}
  static showPagesAPIs(){SideBar.show('pages');}
  static showProgressAPIs(){SideBar.show('progress');}
  static showQuiz_assignment_overridesAPIs(){SideBar.show('quiz_assignment_overrides');}
  static showQuiz_extensionsAPIs(){SideBar.show('quiz_extensions');}
  static showResultAPIs(){SideBar.show('result');}
  static showRolesAPIs(){SideBar.show('roles');}
  static showRubricsAPIs(){SideBar.show('rubrics');}
  static showScoreAPIs(){SideBar.show('score');}
  static showSubmissionsAPIs(){SideBar.show('submissions');}
  static showUsersAPIs(){SideBar.show('users');}

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
   * Show all apis in a sidebar
   */
  static showAllAPIs()
  {
    var htmlTemplate=HtmlService.createTemplateFromFile('ui/template/allapis');
    htmlTemplate.data=CANVASAPIS;
    SpreadsheetApp.getUi().showSidebar(htmlTemplate.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("Canvas APIs"));
  }



}