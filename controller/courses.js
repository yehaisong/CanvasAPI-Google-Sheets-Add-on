/**
 * @fileoverview
 * @author hye@cedarville.edu (Haisong Ye)
 */

/**
 * Show the sidebar for courses APIs
 */
function showCoursesGuide()
{
  SideBar.show("Courses");
}

/**
 * The Courses class
 */
class Courses
{
  /**
   * Update a course's info. Currently, only updates course start date (start_at) and end_date (end_at)
   * @param {object} course A course object with at least id, start_at, and end_at info
   * @returns {object} A course object
   */
  static updateCourse(course)
  {
    const action=Helper.getAPIAction2(APIAction.COURSES.UPDATE_A_COURSE);
    //opts
    const opts={
      "id":course.id,
      "course":{
        "start_at":Helper.getISODate(course.start_at),
        "end_at": Helper.getISODate(course.end_at)
      }
    }
    return canvasAPI(action.endpoint,opts);
  }

  /**
   * Get courses by ids
   * "GET /api/v1/courses/:id"
   * @param {number} id Course id
   */
  static getCourseById(id)
  {
    //get get_single_course action
    let action=Helper.getAPIAction2(APIAction.COURSES.GET_SINGLE_COURSE);
    //call canvasAPI
    let course=canvasAPI(action.endpoint,{"id":id});
    return course;
  }
}


