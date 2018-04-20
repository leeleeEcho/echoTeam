'use strict';

const customerConsultInstance = require('../service/basicModelService/customerConsult');//实例
const Employees = require("../model").Employees;//model
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('customerConsult');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');
const moment = require('moment');

//添加客户咨询信息
exports.insertCustomerConsult = (req, res) => {
    let body = req.body;
    let options = {
        consultObject: Joi.string().required(),
        author: Joi.string().required(),
        number: Joi.string().required(),
        mobile: Joi.string().required(),
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let contents = {};
    contents.consultObject = params.consultObject;
    contents.author = params.author;
    contents.number = params.number;
    contents.mobile = params.mobile;
    contents.status = 0;
    contents.ip = req.connection.remoteAddress;
    contents.reqTime = moment();
    return util.getIpInfo(contents.ip)
        .then((data) => {
            if(data instanceof Object){
                contents.address = data.city;
            }   
            return customerConsultInstance.insertRecords(contents)
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
        })
        .catch((error) => {
            logger.error(error.message + ',' + error.error);
            return Promise.reject({
                message: statusMsg[50006],
                status: 50006,
                error: error.error
            })
        })
}

//获取客户咨询详情
exports.getCustomerConsult = (req,res)=>{
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    options.order = [['status','asc']];
    return customerConsultInstance.findAllRecords({},options)
        .then((data) => {
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

//回复客户咨询
exports.getCustomerConsult = (req,res)=>{
    let options = {};
    options.include = [
        { model: Employees, attributes: ['userName'] },
    ]
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    options.order = [['status','asc']];
    return customerConsultInstance.findAllRecords({},options)
        .then((data) => {
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

//回复客户咨询，更改状态，录入销售人员信息
exports.replyCustomerConsult = (req,res) => {
    let body = req.body;
    let options = {
        id: Joi.string().required(),
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let id = params.id;
    let token = req.header('authorization');
    let uid = req.user.id;
    return customerConsultInstance.updateRecords({ status: 1, salePerson: uid }, { id: id })
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            logger.error(error.message + ',' + error.error);
            return Promise.reject({
                message: error.message,
                status: 50003,
                error: error.error
            })
        })
}