'use strict';

const CustomerFromInstance = require('../service/basicModelService/customerFrom');//实例
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('customerFrom');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');

//添加客户来源
exports.insertCustomerFrom = (req, res) => {
    let contents = {};
    if (req.body.from) contents.from = req.body.from.replace(/\s+/g, "");
    return CustomerFromInstance.insertRecords(contents)
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

//获取客户来源详情
exports.getCustomerFrom = (req,res)=>{
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    return CustomerFromInstance.findAllRecords({},options)
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