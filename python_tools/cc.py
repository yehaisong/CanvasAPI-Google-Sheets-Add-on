import requests
import json
import os

class Controller:
    def __init__(self,name,actions):
        self.name = name
        self.actions=actions
    
    def serialize(self,withcontrollername):
        _actions=[]
        for action in self.actions:
            _action={}
            _action["display_name"]=action.displayname
            _action["controller"]=self.name
            _action["description"]=action.description
            _action["name"]=action.name
            _action["endpoint"]=action.endpoint
            _action["reference"]=action.reference
            _action["params"]=[]
            for param in action.params:
                _param={}
                _param["name"]=param.name
                _param["type"]=param.type
                _param["default_value"]=param.default_value
                _param["desc"]=param.desc
                _param["example"]=param.example
                _action["params"].append(_param)
            _actions.append(_action)
        if withcontrollername:
            _controller={}
            _controller[self.name]=_actions
            return _controller
        else:
            return _actions

    def dumpscript(self,filename,withcontrollername):
        js=self.serialize(False)
        js_str=json.dumps(js,indent=2)

        with open(filename,"w") as outfile:
            outfile.write("/** \r\n * @fileoverview This file defines "+self.name+" original Canvas api \r\n * @author hye@cedarville.edu (Haisong Ye) \r\n */\r\n")
            outfile.write("const "+self.name.upper()+"_APIS = "+js_str)

    def dumpjson(self,filename,withcontrollername):
        js=self.serialize(False)
        with open(filename,"w") as outfile:
            json.dump(js,outfile)


    def deserialize(self,url):
        docurl="https://canvas.instructure.com/doc/api"
        response = json.loads(requests.get(url).text)

        #controller
        self.name=response["resourcePath"].replace("/","")
        #actions
        self.actions=[]
        for api in response["apis"]:
            for operation in api["operations"]:
                action=Action(operation["summary"], #display name
                                operation["nickname"], #name
                                operation["notes"], #description
                                operation["method"]+" "+api["path"].replace("{",":").replace("}",""), #endpoint
                                docurl+response["resourcePath"]+".html", #reference url
                                []) #parameters
                #parameters
                for p in operation["parameters"]:
                    param=Param(p["name"].replace("]","").replace("[","."), #name
                                    p["type"], #data type
                                    "", #default_value
                                    p["description"], #desc
                                    (""if "enum" not in p else p["enum"] )) #example
                    if param.type=="array":
                        param.name=param.name+"[]"
                    action.params.append(param)
                #add action to controller
                self.actions.append(action)


class Action:
    def __init__(self,displayname,name,description,endpoint,reference,params):
        self.name=name
        self.endpoint=endpoint
        self.reference=reference
        self.params=params
        self.description=description
        self.displayname=displayname

class Param:
    def __init__(self,name,datatype,default_value,desc,example):
        self.name=name
        self.type=datatype
        self.default_value=default_value
        self.desc=desc
        self.example=example