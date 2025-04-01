const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
});

app.use((req, res, next) => {
    res.send('<h2>No users found</h2>');
});

app.listen(3000);