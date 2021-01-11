const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const payment = require('./getAccount')
const updateAccount = require('./updateAccount')
const getSku = require('./getSku')
const getAddress = require('./getAddress')
const updateAddress = require('./updateAddress')
const updateSku = require('./updateSku')

module.exports = ((server) => {
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    payment(server)
    updateAccount(server)
    getSku(server)
    getAddress(server)
    updateAddress(server)
    updateSku(server)
})
