'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/leaveDetail');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

//请假申请
router.post('/applyLeave', function (req, res) {
    return controller.applyLeave(req, res)
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

router.get('/getLeaveDetail', function (req, res) {
    return controller.getLeaveDetail(req, res)
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

//请假审批
router.patch('/checkLeave', function (req, res) {
    return controller.checkLeave(req, res)
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
