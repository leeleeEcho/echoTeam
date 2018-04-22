'use strict';

const EmailInstance = require('../service/basicModelService/email');
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('email');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');
const moment = require('moment');

//新增邮件
exports.insertEmail = (req, res) => {
    let body = req.body;
    let options = {
        templateTitle: Joi.string().required(),
        alias: Joi.string().required(),
        emailTitle:Joi.string().required(),
        content: Joi.string().required()
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let contents = {};
    contents.templateTitle = params.templateTitle.replace(/\s+/g, "");
    contents.alias = params.alias.replace(/\s+/g, "");
    contents.emailTitle = params.emailTitle.replace(/\s+/g, "");
    contents.content = params.content.replace(/\s+/g, "");
    return EmailInstance.insertRecords(contents)
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

//邮件列表
exports.getEmail = (req, res) => {
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    return EmailInstance.findAllRecords({},options)
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


//编辑客户
exports.updateEmail = (req, res) => {
    if(Number(req.body.id) === null){
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001
        })
    }
    let id = req.body.id;
    let contents = {};
    if(req.body.templateTitle)  contents.templateTitle = req.body.templateTitle.replace(/\s+/g, "");
    if(req.body.alias)  contents.alias = req.body.alias.replace(/\s+/g, "");
    if(req.body.emailTitle)  contents.emailTitle = req.body.emailTitle.replace(/\s+/g, "");
    if(req.body.content)  contents.content = req.body.content;
    return EmailInstance.updateRecords(contents,{id:id})
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

//邮件删除
exports.delEmail = (req, res) => {
    let body = req.body;
    let options = {
        ids: Joi.string().required()
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let idsArr = params.ids.split(',');//英文逗号隔开
    return EmailInstance.batchDeleteRecords({id:{$in:idsArr}})
        .then((data) => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            logger.error(error.message + ',' + error.error);
            return Promise.reject({
                message: error.message,
                status: 50001,
                error: error.error
            })
        })
}