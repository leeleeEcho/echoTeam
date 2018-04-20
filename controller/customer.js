'use strict';

const CustomerInstance = require('../service/basicModelService/customer');
const Employees = require("../model").Employees;//model
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('customer');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');
const moment = require('moment');

//新增客户
exports.insertCustomer = (req, res) => {
    let contents = {};
    //不确定必需字段，所以来啥存啥
    // if (req.body.userName) contents.userName = req.body.userName.replace(/\s+/g, "");
    // if (req.body.sex) contents.sex = req.body.sex;
    // if (req.body.birthDate) contents.birthDate = req.body.birthDate;
    // if (req.body.mobile) contents.mobile = req.body.mobile;
    // if (req.body.QQ) contents.QQ = req.body.QQ;
    // if (req.body.weChat) contents.weChat = req.body.weChat;
    // if (req.body.email) contents.email = req.body.email;
    // if (req.body.address) contents.address = req.body.address;
    // if (req.body.province) contents.province = req.body.province;
    // if (req.body.city) contents.city = req.body.city;
    // if (req.body.belongSale) contents.belongSale = req.body.belongSale;
    // if (req.body.customerFrom) contents.customerFrom = req.body.addcustomerFromress;
    // if (req.body.interestLevel) contents.interestLevel = req.body.interestLevel;
    // if (req.body.nextVixitTime) contents.nextVixitTime = req.body.nextVixitTime;
    // if (req.body.belongGroup) contents.belongGroup = req.body.belongGroup;
    // if (req.body.userStatus) contents.userStatus = req.body.userStatus;
    // if (req.body.trueName) contents.trueName = req.body.trueName.replace(/\s+/g, "");
    // if (req.body.password) contents.password = req.body.password;
    // if (req.body.cash) contents.cash = req.body.cash;
    // if (req.body.points) contents.points = req.body.points;
    contents = req.body;
    contents.userName = req.body.userName.replace(/\s+/g, "");
    contents.trueName = req.body.trueName.replace(/\s+/g, "");
    contents.password = util.encryptPass(contents.password);
    contents.registerDate = moment();
    contents.registerIP = req.connection.remoteAddress;
    //contents.lastLoginDate = req.body.lastLoginDate;
    //contents.lastLoginIP = req.body.lastLoginIP;
    return CustomerInstance.insertRecords(contents)
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

//客户列表
exports.getCustomer = (req, res) => {
    let options = {};
    options.include = [
        { model: Employees, attributes: ['userName'] }
    ]
    options.attributes = ['trueName','mobile','registerDate'];
    options.limit = req.body.limit ? req.body.limit : 20;
    options.offset = req.body.offset ? req.body.offset : 0;
    let where = {};
    return CustomerInstance.findAllRecords(where, options)
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

//todo 新增客户，添加的备注要更新到跟踪记录表。uid关联。更新不需要再添加记录，有其他入口

