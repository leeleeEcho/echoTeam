'use strict';

const RoleInstance = require('../service/basicModelService/role');//实例
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('role');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const auth = require('../lib/auth');
const Joi = require('joi');

//添加角色
exports.insertRole = (req, res) => {
    let body = req.body;
    let options = {
        //auth: Joi.string().required(),
        role: Joi.string().required()
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let role = params.role;
    let contents = {};
    contents.role = role;
    contents.auth = params.auth ? params.auth : '';
    return RoleInstance.insertRecords(contents)
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

//删除角色,根据id数组多个一起删除
exports.deleteRole = (req, res) => {
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
    return RoleInstance.batchDeleteRecords({id:{$in:idsArr}})
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