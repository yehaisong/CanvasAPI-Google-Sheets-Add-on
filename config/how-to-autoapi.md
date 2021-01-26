How to generate autoapi?
1. Add a api controller in the "insterested" list of get_apis.py
2. Run get_apis.py
3. Check if new apis are generated in files config/rawapi.js and config/rawenum.js
4. Add menu item and show APIs function
5. Add show APIs function in the SiderBar.js file (you will find examples there)
6. Enjoy the automated apis

Limitations
1. Multi level objects was not supported, for example, paramerter course[user][name] will not work. Still working on it.
