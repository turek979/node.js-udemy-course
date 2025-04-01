// call it "server.js" or "app.js"

const http =  require('http');

const routes = require('./routes'); // You can omit ".js" since node will automatically attach it.


// When looking for a path '/' it will look for the file in the root directory of the project, 
// './' is the current directory or relative path, not using a slash will look for core packages


const server = http.createServer(routes);

// createServer method takes a function as a first argument and executes it for every incoming request

server.listen(3000);