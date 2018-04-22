'use strict';

const visitedInstance = require('../service/basicModelService/needVisited');
const Employees = require("../model").Employees;//model
const Customer = require("../model").Customer;//model
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('needVisited');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');
const moment = require('moment');

//新增回访
exports.insertVisited = (req, res) => {
    let body = req.body;
    let options = {
        uid: Joi.string().required(),
        status: Joi.string()
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let contents = {};
    contents.uid = params.uid;
    contents.status = params.status ? params.status : 1;
    contents.salesMan = req.user.id;
    return visitedInstance.insertRecords(contents)
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            logger.error(error.message + ',' + error.error);
            return Promise.reject({
                message: error.message,
                status: 50002,
                error: error.error
            })
        })
}

//回访列表
exports.getVisited = (req, res) => {
    let options = {};
    options.include = [
        { model: Employees, attributes: ['userName'] },
        { model: Customer, attributes: ['trueName','mobile','registerDate'] }
    ] 
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    return visitedInstance.findAllRecords({},options)
        .then((data) => {
            _.each(data,item=>{
                item['Customer.mobile'] = item['Customer.mobile'].split('，')[0];
            })
            return Promise.resolve(data);
        })
        .catch((error) => {
            logger.error(error.message + ',' + error.error);
            return Promise.reject({
                message: error.message,
                status: 50004,
                error: error.error
            })
        })
}


//编辑回访状态
exports.updateVisited = (req, res) => {
    if(Number(req.body.id) === null || Number(req.body.status) === null){
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001
        })
    }
    return visitedInstance.updateRecords({status:req.body.status},{id:req.body.id})
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            logger.error(error.message + ',' + error.error);
            return Promise.reject({
                message: error.message,
                status: 40001,
                error: error.error
            })
        })
}