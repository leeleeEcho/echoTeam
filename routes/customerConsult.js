'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/customerConsult');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;


router.post('/insertCustomerConsult', function (req, res) {
    return controller.insertCustomerConsult(req, res)
        .then((data) => {
            res.json({
                data: data,
                status:200
            });
        })
        .catch((error) => {
            res.json({
                status:error.status,
                message: error.message,
                more:error.error ?  error.error : ''     
            });
        })
});

router.get('/getCustomerConsult', function (req, res) {
    return controller.getCustomerConsult(req, res)
        .then((data) => {
            res.json({
                data: data,
                status:200
            });
        })
        .catch((error) => {
            res.json({
                status:error.status,
                message: error.message,
                more:error.error ?  error.error : ''     
            });
        })
});

router.patch('/replyCustomerConsult', function (req, res) {
    return controller.replyCustomerConsult(req, res)
        .then((data) => {
            res.json({
                data: data,
                status:200
            });
        })
        .catch((error) => {
            res.json({
                status:error.status,
                message: error.message,
                more:error.error ?  error.error : ''     
            });
        })
});

module.exports = router;
