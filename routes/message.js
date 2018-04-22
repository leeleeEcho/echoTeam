'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/Message');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;


router.post('/insertMessage', function (req, res) {
    return controller.insertMessage(req, res)
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

router.get('/getMessage', function (req, res) {
    return controller.getMessage(req, res)
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
                more:error.error        
            });
        })
});

router.patch('/updateMessage', function (req, res) {
    return controller.updateMessage(req, res)
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
                more:error.error        
            });
        })
});

router.delete('/delMessage', function (req, res) {
    return controller.delMessage(req, res)
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
                more:error.error        
            });
        })
});

module.exports = router;