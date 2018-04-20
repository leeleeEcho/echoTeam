'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/department');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

//部门添加
router.post('/insertDepartment', function (req, res) {
    return controller.insertDepartment(req, res)
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

router.get('/getDepartmentDetail', function (req, res) {
    return controller.getDepartmentDetail(req, res)
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
