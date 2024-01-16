const express = require('express');

function runServer () {
    const app = express();

    app.use(express.json()).use(express.urlencoded({ extended: true }));

    const route = require('./routes');
    route(app);
}

module.exports = runServer;