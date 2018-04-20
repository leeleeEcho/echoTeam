'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/grouplevel');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

//部门添加
router.post('/insertGroupLevel', function (req, res) {
    return controller.insertGroupLevel(req, res)
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

router.get('/getGroupLevel', function (req, res) {
    return controller.getGroupLevel(req, res)
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

router.patch('/updateGroupLevel', function (req, res) {
    return controller.updateGroupLevel(req, res)
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
