const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Im the middleware');
    next(); // It allows the request to continue to next middleware in line.
    // Either call next or sends a response, if not the request will be stuck on this middleware. 
});

app.use((req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
});

const server = http.createServer(app);

server.listen(3000);