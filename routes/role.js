'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/role');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

//角色添加
router.post('/insertRole', function (req, res) {
    return controller.insertRole(req, res)
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

//角色删除
router.delete('/deleteRole', function (req, res) {
    return controller.deleteRole(req, res)
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
