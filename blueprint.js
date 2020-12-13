/*
hy 2020-12
for Canvas Blueprint
*/

/*
Get blueprint information
GET /api/v1/courses/:course_id/blueprint_templates/:template_id
Scope: url:GET|/api/v1/courses/:course_id/blueprint_templates/:template_id
Using 'default' as the template_id should suffice for the current implmentation (as there should be only one template per course). 
However, using specific template ids may become necessary in the future
*/
function get_blueprint_templates()
{
  var endpoint="GET /api/v1/courses/:course_id/blueprint_templates/default";
  //course id
  var cell=SpreadsheetApp.getCurrentCell();
  var course_id=cell.getValue();
  //options
  var opts = {
			'course_id' : course_id
		};
  
  var data=canvasAPI(endpoint,opts);
  var contents=parse_JSON_object(data);
  var cell=SpreadsheetApp.getCurrentCell();
  fillValuesFromJsonObject(cell.getRow()+1,cell.getColumn(),data);
}

/*
Update associated courses
PUT /api/v1/courses/:course_id/blueprint_templates/:template_id/update_associations
Send a list of course ids to add or remove new associations for the template. 
Cannot add courses that do not belong to the blueprint course's account. 
Also cannot add other blueprint courses or courses that already have an association with another blueprint course.
*/
function update_associated_courses()
{
  var endpoint="PUT /api/v1/courses/:course_id/blueprint_templates/default/update_associations";
  //course id
  var cell=SpreadsheetApp.getCurrentCell();
  var course_id=cell.getValue();
  var course_id_to_add=cell.getNextDataCell(SpreadsheetApp.Direction.NEXT).getValue();
  //options
  var opts = {
			'course_id': course_id,
            'course_ids_to_add' : [course_id_to_add],
            'course_ids_to_remove' : []
		};
  
  var data=canvasAPI(endpoint,opts);
  var rlt=data["Success"];
  var cell=SpreadsheetApp.getCurrentCell();
  fillValuesFromJsonObject(cell.getRow()+1,cell.getColumn(),data);
  
  //sync_associated_courses('initial sync',false,true,false);
}

/*
sync associated courses
POST /api/v1/courses/:course_id/blueprint_templates/:template_id/migrations
Begins a migration to push recently updated content to all associated courses. Only one migration can be running at a time.
*/
function sync_associated_courses(comment,send_notification,copy_settings,publish_after_initial_sync)
{
  var endpoint="POST /api/v1/courses/:course_id/blueprint_templates/default/migrations";
  //course id
  var cell=SpreadsheetApp.getCurrentCell();
  var course_id=cell.getValue();
  //options
  var opts = {
			'course_id': course_id,
            'comment':comment,
            'send_notification':send_notification,
            'copy_settings':copy_settings,
            'publish_after_initial_sync':publish_after_initial_sync
		};
  
  var data=canvasAPI(endpoint,opts);
  var cell=SpreadsheetApp.getCurrentCell();
  fillValuesFromJsonObject(cell.getRow()+1,cell.getColumn(),data);
}