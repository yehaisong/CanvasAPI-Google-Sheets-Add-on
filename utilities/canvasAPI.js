/**
 * @fileoverview This Google Sheets script will provide Canvas API functionality for other scripts.
 * @author james@richland.edu [James Jones]
 *   Disclaimer: I'm not a Javascript programmer, this works for me, hopefully it will work for you as well.
 *   It's probably not the most efficient way to do things.
 *   When you run it, it will ask you for permissions to access things. You should accept this if you want
 *   to accomplish anything useful.
 * @license Copyright 2015 James Jones
 *   I don't accept any responsibility for damage it may do. Feel free to modify this to meet your needs
 *   but it would be really awesome that if you contribute something, you share it back so others can benefit.
 *   If you know what you're doing with Google Apps and want to coordinate a team effort, let me know.
 *   Last updated 20150731T091500Z by James Jones
 *   Last updated 20201215 by Haisong Ye
 */

/**
 * @function userConfiguration This function specifies your Canvas instance and
 *           your access token Once you have ran the script once, you can remove
 *           the credentials. It uses Google's UserProperties() so it is
 *           specific to a user and a spreadsheet and sharing the spreadsheet
 *           with someone else should not transfer your credentials If you do
 *           not want Google to save them, then modify the function to just
 *           return the default values and don't mess with the PropertiesService
 *           stuff. The override variable will force the values to be overwritten
 *           just in case you mess something up. Otherwise it will only read them
 *           once.
 *
 */
function userConfiguration() {
	var userProperties = PropertiesService.getUserProperties();
  if(!userProperties.getProperty("host")) { 
    setHost_(); //config.gs
  }
  if(!userProperties.getProperty("token")) {
    setToken_(); //config.gs
  }
	return userProperties.getProperties();
}

/**
 * @function canvasAPI This function calls the CanvasAPI and returns any
 *           information as an object.
 * @param {string}
 *            endpoint - The endpoint from the Canvas API Documentation,
 *            including the GET, POST, PUT, or DELETE the /api/v1 version is
 *            optional and will add the value specified within the function as a
 *            default if not
 * @param {Object}
 *            [opts] - The parameters that need passed to the API call Variable
 *            substitution is done for values in the endpoint that begin with :
 *            SIS variables can be specified as ":sis_user_id: 123" rather than
 *            "user_id: ':sis_user_id:123'" Any other variables are added to the
 *            querystring for a GET or the payload for a PUT or POST
 * @param {Object[]}
 *            [filter] - An array containing values to return. This allows you
 *            to reduce storage by eliminating unnecessary objects
 */
function canvasAPI(endpoint, opts, filter) { //filter is not supported currently
	if (typeof endpoint === 'undefined') {
		return;
	}
	if (typeof opts === 'undefined') {
		opts = {};
	}
  
  Helper.log("opts :"+ JSON.stringify(opts));

	var PER_PAGE = 1000;
	var API_VERSION = 1;
    var _payload={};

	var endpointRegex = /^(GET|POST|PUT|DELETE|HEAD)\s+(.*)$/;
	var tokenRegex = new RegExp('^:([a-z_]+)$');
	var nextLinkRegex = new RegExp('<(.*?)>; rel="next"');
	var integerRegex = new RegExp('^[0-9]+$');

	try {
		var userProperties = userConfiguration();
		if (typeof userProperties.token === 'undefined') {
			throw ('No access token specified. See userConfiguration() function in the script source code.');
		}
		if (typeof userProperties.host === 'undefined') {
			throw ('No Canvas host specified. See userConfiguration() function in the script source code.');
		}
		var parms = {
			'headers' : {
				'Authorization' : 'Bearer ' + userProperties.token,
			},
      'muteHttpExceptions': true //added by hy
		};

		if (typeof endpoint !== 'string') {
			throw 'Endpoint specification must be a string. Received: '
					+ typeof endpoint;
		}

		var endpointMatches = endpointRegex.exec(endpoint);
		if (endpointMatches === null) {
			throw 'Invalid endpoint specified: ' + endpoint;
		}
		parms.method = endpointMatches[1].toLowerCase();
		var routes = endpointMatches[2].split('/');
		var route = [];
		for (var i = 0; i < routes.length; i++) {
			if (routes[i]) {
				if (route.length == 0 && routes[i] != 'api') {
					route.push('api');
					route.push('v' + API_VERSION);
					i++;
				}
				var matches = tokenRegex.exec(routes[i]);
				if (matches !== null) {
					if (typeof opts !== 'object') {
						throw 'Options is not an object but variable substitutions is needed';
					}
					var tokens = [ routes[i], matches[1], ':sis_' + matches[1],
							'sis_' + matches[1] ];
					var tokenMatch = false;
					var j = 0;
					while (!tokenMatch && j < tokens.length) {
						var token = tokens[j++];
						if (typeof opts[token] !== 'undefined') {
							tokenMatch = true;
							route.push(opts[token]);
							opts[token] = null;
						}
					}
					if (!tokenMatch) {
						throw 'Unable to find substitution for :' + matches[1]
								+ ' in ' + endpointMatches[2];
					}
				} else {
					route.push(routes[i]);
				}
			}
		}
		if (typeof opts === 'object') {
			if(opts["dlist"]!=null){
				//i want to use a list as the only parameter without a field name
				if (typeof _payload === 'undefined') {
					_payload = {};
				}
				_payload=opts["dlist"];
			}
			else{
				for ( var field in opts) {
					if (opts.hasOwnProperty(field) && opts[field] !== null
							&& !/^:/.test(field)) {
						
						if (typeof _payload === 'undefined') {
							_payload = {};
						}
						_payload[field] = opts[field];
					}
				}
			}
		}
	} catch (e) {
		Logger.log(e);
		return;
	}
	var url = '' + userProperties.host + '/' + route.join('/');
	
	if (typeof _payload === 'object' && parms.method == 'get') {
		if (!_payload.per_page) {
			_payload.per_page = PER_PAGE;
		}
		var queryStr;
		for ( var parm in _payload) {
			if (_payload.hasOwnProperty(parm)) {
				var item = _payload[parm];
				if (typeof item == 'object') {
					var itemtype = Object.prototype.toString.call(item);
					for ( var key in item) {
						if (item.hasOwnProperty(key)) {
							if (typeof queryStr === 'undefined') {
								queryStr = '?';
							} else {
								queryStr += '&';
							}
							queryStr += parm + '[';
							if (!integerRegex.test(key)) {
								queryStr += key;
							}
							queryStr += ']=' + item[key];
						}
					}
				} else {
					if (typeof queryStr === 'undefined') {
						queryStr = '?';
					} else {
						queryStr += '&';
					}
					queryStr += parm + '=' + item;
				}
			}
		}
		url += queryStr;
		url = encodeURI(url);
		_payload = null; //why is this important?
	}


  var data;
  
  /*added by hy*/
  if(parms.method!='get') //if get, do not set payload
  {
    parms.payload=JSON.stringify(_payload);
    parms.contentType='application/json';
  }
  
  
  while (url !== null) {
    Helper.log("Fetch: "+endpoint);
		var response = UrlFetchApp.fetch(url, parms );
        Utilities.sleep(1000); 
		url = null;
		if (response.getResponseCode() == 200) {
			var headers = response.getAllHeaders();
			if (typeof headers.Link !== undefined) {
        /*
        var links = headers.Link.split(',');
				*/
        if (typeof links === 'object') {
					for (var l = 0; l < links.length; l++) {
						var linkMatch = nextLinkRegex.exec(links[i]);
						if (linkMatch !== null) {
							url = linkMatch[1];
						}
					}        
        }
			}
            
			var json = JSON.parse(response.getContentText());
            data=json;
      /* commented by hy
           for ( var item in json) {
				if (json.hasOwnProperty(item)) {
					var entry = json[item];
					if (typeof filter !== 'undefined') {
						var row = {};
						for ( var j in filter) {
							if (filter.hasOwnProperty(j)) {
								var key = filter[j];
								row[key] = entry[key];
							}
						}
						data.push(row);
					} else {
                        data.push(entry)
					}
				}
			}*/
		}
    else if (response.getResponseCode()==404) {
      var json = JSON.parse(response.getContentText());
      Helper.log("404 error: " + json.errors[0].message);
      data=json.errors;
    }
    else{
      var json = JSON.parse(response.getContentText());
      //Helper.log("Response body: " + response.getContentText());
      data=json;
    }
	}
  Helper.log("return data: "+data);
	return data;
}





