
import requests
import json
import cc
import os
from pathlib import Path

#docurl="https://canvas.instructure.com/doc/api"
#response = json.loads(requests.get("https://cedarville.test.instructure.com/doc/api/courses.json").text)
#json_str=json.dumps(response, indent=2)
#print(json_str)
#type(response)

jsoutput=Path(__file__).parent / "../config/rawapi.js"
enumoutput=Path(__file__).parent / "../config/rawenum.js"

baseurl="https://canvas.instructure.com/doc/api"
response = json.loads(requests.get(baseurl+"/api-docs.json").text)
include_all=True
interested=["accounts",
            "admins",
            "analytics",
            "announcements",
            "assignment_groups",
            "assignments",
            "blueprint_courses",
            "content_migrations",
            "courses",
            "discussion_topics",
            "enrollment_terms",
            "files",
            "gradebook_history",
            "groups",
            "logins",
            "modules",
            "outcome_groups",
            "outcome_imports",
            "outcome_results",
            "outcomes",
            "pages",
            "progress",
            "quiz_assignment_overrides",
            "quiz_extensions",
            "result",
            "roles",
            "rubrics",
            "score",
            "submissions",
            "users"]

rawapienum="\r\n/**\r\n * Raw Canvas API actions\r\n * @returns {string} controller.action\r\n \r\n */const RawAPIAction={ \r\n"
controllerenum="/**\r\n * @fileoverview This file defines Canvas API enums \r\n * @author hye@cedarville.edu (Haisong Ye)\r\n */ \r\n \r\n/**\r\n * Canvas API Controllers\r\n * @returns {string} controller\r\n \r\n */const APIController={ \r\n"

controllers={}

for api in response["apis"]:
    name=api["path"].replace("(","").replace(")","").replace("/","").replace(".json","")
    if include_all or (name in interested):
        #print(name)
        controller=cc.Controller(name,[])
        controller.deserialize(baseurl+api["path"])
        print(controller.name)
        ##save each controller to a file
        #controller.dumpscript(os.path.join("../config/apis",controller.name+".js"),False)
        ##combine all controller to a file
        controllers[controller.name]=controller.serialize(False)
        ##prepare enums
        controllerenum+="\t"+controller.name.upper()+":'"+controller.name+"',\r\n"
        rawapienum+="\t"+controller.name.upper()+":{\r\n"
        for action in controller.actions:
            rawapienum+="\t\t"+action.name.upper()+":'"+controller.name+"."+action.name+"',\r\n"
        rawapienum+="\t},\r\n"
       
rawapienum+="};"
controllerenum+="};"

with open(enumoutput,"w") as outfile:
    outfile.write(controllerenum + rawapienum)

##create rawapis.js file
js_str=json.dumps(controllers,indent=2)
    
with open(jsoutput,"w") as outfile:
    outfile.write("/** \r\n * @fileoverview This file defines original Canvas api \r\n * @author hye@cedarville.edu (Haisong Ye) \r\n */\r\n")
    outfile.write("const RAWCANVASAPIS = "+js_str)

        
#single controller test
#controller=cc.Controller(response["resourcePath"].replace("/",""),[])
#controller.deserialize("https://cedarville.test.instructure.com/doc/api/courses.json")

#dump
#controller.dumpscript(controller.name+".js",False)

# for action in controller.actions:
#     print(action.displayname)
#     for param in action.params:
#         print (param.name)

#models
#modelnames=response["models"].keys()
# for model in modelnames:
#     print (model)
