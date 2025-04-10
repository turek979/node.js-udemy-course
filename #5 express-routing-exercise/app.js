const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const mainPageRoutes = require('./routes/main-page');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainPageRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
});

app.listen(3000);