// call it "server.js" or "app.js"

const http =  require('http');
const fs = require('fs');

// When looking for a path '/' it will look for the file in the root directory of the project, 
// './' is the current directory or relative path, not using a slash will look for core packages

function rqListener(request, response){
    const url = request.url;
    const method = request.method;
    if(url ==='/'){
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
        response.write('</html>');
        return response.end();
    } 
    if(url === '/message' && method === 'POST'){
        const body = [];
        request.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, error => {
                response.statusCode = 302;  // Status code for redirection
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }
    else {
    // console.log(request.url, request.method, request.headers);
    // process.exit(); <- it unregisters from the event loop, basically shutting the server down
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    response.write('</html>');
    response.end(); // Ends a response and sends it.
    }
}

const server = http.createServer(rqListener);

// createServer method takes a function as a first argument and executes it for every incoming request

server.listen(3000);