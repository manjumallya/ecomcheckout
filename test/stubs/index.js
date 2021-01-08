const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = ((server) => {
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());


    server.use('/portal/resources/ing', (req, res) => {
        res.sendFile(path.resolve(__dirname, `../../node_modules/@lion`));
    });

    server.use('/portal/resources/vendor',
        express.static(path.resolve(__dirname, '../../node_modules/@webcomponents')));
});
