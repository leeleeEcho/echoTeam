'use strict';

const EmployeesInstance = require('../service/basicModelService/employees');
const FollowRecordInstance = require('../service/basicModelService/followRecord');
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('followRecord');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');

//添加留言或备注
exports.insertRecord = (req,res) => {
    let body = req.body;
    let options = {
        name: Joi.string().required(),
        mobile: Joi.string().required(),
        sex: Joi.string().required(),
        message: Joi.string().required(),
        type:Joi.string().required(),
        QQ:Joi.string(),
        uid:Joi.string()
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let contents = {};
    contents.name = params.name.replace(/\s+/g, "");
    contents.mobile = params.mobile;
    contents.type = params.type;
    contents.sex = params.sex;
    contents.message = params.message.replace(/\s+/g, "");
    if(params.QQ) contents.QQ = params.QQ;
    if(params.uid) contents.uid = params.uid;
    return FollowRecordInstance.insertRecords(contents)
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

//获取记录详情
exports.getRecord = (req,res)=>{ 
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    options.order = [['type','asc']];
    let where = {};
    if(req.query.uid) where.uid = req.query.uid;
    if(req.query.mobile) where.mobile = {$like:'%' + req.query.mobile + '%'};
    return FollowRecordInstance.findAllRecords(where,options)
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