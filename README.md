# CanvasAPI-Google-Sheets-Add-on-
Google sheets add-on invoking Canvas LMS API

This project is based on James Jones' Google Sheets script that provides Canvas API functionality for other scripts. 
It is currently under developing and not intended for production usage. Just for FUN!

To see how to use clasp, check https://developers.google.com/apps-script/guides/clasp.

For developers, check out the source code JSDoc @ https://googleaddondoc.azurewebsites.net/index.html

The add-on is not ready for public testing. It is currently only available to Cedarville University users.

You need a Google Apps Scirpt project to work on. When you create a GAS project and pull files from Google, you will have a .clasp.json file with the scriptid for your project created in your folder.

The steps are:

1. Clone the git repository in a folder
2. npm --install packages
3. Create a new GAS project
4. Login with clasp
5. Clone your new project from GAS (it will create a new .clasp.json file)
6. Push code to your GAS project

In vscode folder

+ Login: clasp login
+ Create a project: clasp create [--title <title>] [--type <type>] [--rootDir dir] [--parentId <id>]
+ Clone a project: clasp clone <scriptId|scriptURL> [versionNumer]
+ To pull codes: clasp pull [--versionNumber]
+ To push codes: clasp push [--watch] [--force]
+ To generate js doc: jsdoc ./ -r -d docs

clasp reference:

+ clasp login [--no-localhost] [--creds <file>] [--status]  
+ clasp logout  
+ clasp create [--title <title>] [--type <type>] [--rootDir dir] [--parentId <id>]  
+ clasp clone <scriptId | scriptURL> [versionNumber] [--rootDir dir]  
+ clasp pull [--versionNumber]  
+ clasp push [--watch] [--force]  
+ clasp status [--json]  
+ clasp open [scriptId] [--webapp] [--creds] [--addon] [--deploymentId <id>]  
+ clasp deployments  
+ clasp deploy [--versionNumber <version>] [--description <description>] [--deploymentId <id>]  
+ clasp undeploy [deploymentId] [--all]  
+ clasp version [description]  
+ clasp versions  
+ clasp list  
