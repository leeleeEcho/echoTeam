'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/customerFrom');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;


router.post('/insertCustomerFrom', function (req, res) {
    return controller.insertCustomerFrom(req, res)
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

router.get('/getCustomerFrom', function (req, res) {
    return controller.getCustomerFrom(req, res)
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
