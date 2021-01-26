import requests
import json

response = json.loads(requests.get("https://canvas.instructure.com/doc/api/api-docs.json").text)
json_str=json.dumps(response, indent=2)
#print(json_str)
type(response)

baseurl="https://canvas.instructure.com/doc/api"

#endpoints
for api in response["apis"]:
        print("GET "+baseurl+api["path"]+" HTTP/1.1")