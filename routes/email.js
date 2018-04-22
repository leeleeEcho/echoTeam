'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/email');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;


router.post('/insertEmail', function (req, res) {
    return controller.insertEmail(req, res)
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

router.get('/getEmail', function (req, res) {
    return controller.getEmail(req, res)
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

router.patch('/updateEmail', function (req, res) {
    return controller.updateEmail(req, res)
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

router.delete('/delEmail', function (req, res) {
    return controller.delEmail(req, res)
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