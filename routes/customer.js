'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/customer');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;


router.post('/insertCustomer', function (req, res) {
    return controller.insertCustomer(req, res)
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

router.get('/getCustomer', function (req, res) {
    return controller.getCustomer(req, res)
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

router.patch('/updateCustomer', function (req, res) {
    return controller.updateCustomer(req, res)
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

router.delete('/delCustomer', function (req, res) {
    return controller.delCustomer(req, res)
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

router.post('/login', function (req, res) {
    return controller.login(req, res)
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

router.patch('/freeCustomer', function (req, res) {
    return controller.freeCustomer(req, res)
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