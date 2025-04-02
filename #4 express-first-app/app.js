const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require ('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();


// app.use((req, res, next) => {
//     // console.log('Im the middleware');
//     next(); // It allows the request to continue to next middleware in line.
//     // Either call next or sends a response, if not the request will be stuck on this middleware. 
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);