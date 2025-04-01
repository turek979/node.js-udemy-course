
# NPM scripts

When you initialize a node project, in the "pakckage.json" file you can define your scripts to shorten then commands.
The keys and values must be in quotation marks. "some-script": "node some command".
You can run them by writing 'npm run some-script'.
The "start" script is one of the special cases as it can get executet with only 'npm start'.

# Third party packages

Node has a cloud repository that has multiple third party dependencies. 
You can install them by using 'npm install packagename'.
Packages and info can be found on npmjs.com.
Dependencies should be separted into production and developer.
You can install a dev dependency by adding '--save-dev' for instance 'npm install nodemon --save-dev'.
You can install a prod dependency by adding only '--save' for instance 'npm install nodemon --save'.
Using '-g' would install this dependency globally.
Just writing 'npm install' would install the newest version of dependencies defined in package.json.

# Nodemon

Nodemon is a package that listens to changes in the codebase and restarts the server when it detects such changes.
It can be run by using 'nodemon' instead of 'node' when running your server i.e. 'nodemon app.js' 
It will only work in the terminal if it is installed globally as terminal looks for global dependencies.
To make it work locally, create a script in "package.json" and use the script. ("start": "nodemon app.js")