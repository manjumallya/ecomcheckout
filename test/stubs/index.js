const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


module.exports = ((server) => {
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
}
