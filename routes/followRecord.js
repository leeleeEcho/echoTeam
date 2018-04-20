'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/followRecord');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

//部门跟踪记录
router.post('/insertRecord', function (req, res) {
    return controller.insertRecord(req, res)
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

//获取跟踪记录
router.get('/getRecord', function (req, res) {
    return controller.getRecord(req, res)
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
