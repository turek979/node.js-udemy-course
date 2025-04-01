const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require ('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req, res, next) => {
//     // console.log('Im the middleware');
//     next(); // It allows the request to continue to next middleware in line.
//     // Either call next or sends a response, if not the request will be stuck on this middleware. 
// });

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000);