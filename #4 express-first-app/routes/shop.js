const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    res.send('<h2>Shop route</h2>');
});

module.exports = router;