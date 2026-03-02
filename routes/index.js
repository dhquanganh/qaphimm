const express = require('express');
const homeController = require('../controllers/homeController');
const homeRouter = require('./homeRouter');

/* GET home page. */
function router(app) {
    app.use('/', homeRouter);
}

module.exports = router;
