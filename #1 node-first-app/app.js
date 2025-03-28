// call it "server.js" or "app.js"

const http =  require('http');

// When looking for a path '/' it will look for the file in the root directory of the project, 
// './' is the current directory or relative path, not using a slash will look for core packages

function rqListener(request, response){
    console.log(request.url, request.method, request.headers);
    // process.exit(); <- it unregisters from the event loop, basically shutting the server down
}

const server = http.createServer(rqListener);

// createServer method takes a function as a first argument and executes it for every incoming request

server.listen(3000);