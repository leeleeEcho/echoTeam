'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/needVisited');
const util = require('../lib/util');
const statusMessage = require('../lib/statusMessage').msg;


router.post('/insertVisited', function (req, res) {
    return controller.insertVisited(req, res)
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

router.get('/getVisited', function (req, res) {
    return controller.getVisited(req, res)
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

router.patch('/updateVisited', function (req, res) {
    return controller.updateVisited(req, res)
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