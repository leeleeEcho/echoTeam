'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/employees');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;

router.get('/allEmployeesMsg', function (req, res) {
    return controller.getEmployees(req, res)
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

router.get('/EmployeesMsg', function (req, res) {
    return controller.getOneEmployees(req, res)
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

router.post('/insertEmployees', function (req, res) {
    return controller.insertEmployees(req, res)
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

router.put('/updateEmployees', function (req, res) {
    return controller.updateEmployees(req, res)
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

router.delete('/delEmployees', function (req, res) {
    return controller.delEmployees(req, res)
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


router.put('/updateEmployeesDepartment', function (req, res) {
    return controller.updateEmployeesDepartment(req, res)
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

router.post('/addRole', function (req, res) {
    return controller.addRole(req, res)
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
