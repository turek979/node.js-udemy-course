const fs = require("fs");

const requestHandler = (request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    response.write("<html>");
    response.write("<head><title>Enter Message</title></head>");
    response.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>'
    );
    response.write("</html>");
    return response.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
        response.statusCode = 302; // Status code for redirection
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  } else {
    // console.log(request.url, request.method, request.headers);
    // process.exit(); <- it unregisters from the event loop, basically shutting the server down
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My First Page</title></head>");
    response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    response.write("</html>");
    response.end(); // Ends a response and sends it.
  }
};

// There are multiple ways to export.

// This is the first way. You can export created objects on the spot.
// module.exports = {}

module.exports = requestHandler;

// This is another way. You can export many things this way.
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// }

// If you do it like this then the recieving end will get an object and you will have to reference exactly what you want
// (routes.someText)

// Another less efficient way is to individually assings multiple exports
// module.exports.handler = requestHandler;
// module.exports.someText - 'Some text';

//You can use a shortcut for this by ommiting keyword (module). 
// exports.handler = requestHandler;