'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/dutyDetail');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

//值班详情创建或更新
router.patch('/updateDutyDetai', function (req, res) {
    return controller.updateDutyDetai(req, res)
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

router.get('/getDutyDetail', function (req, res) {
    return controller.getDutyDetail(req, res)
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
