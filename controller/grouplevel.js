'use strict';

const GroupLevelInstance = require('../service/basicModelService/groupLevel');
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('groupLevel');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');

//添加客户组别
exports.insertGroupLevel = (req, res) => {
    let contents = {};
    if (req.body.groupName) contents.groupName = req.body.groupName.replace(/\s+/g, "");;
    if (req.body.level) contents.level = req.body.level;
    if (req.body.upgradePoints) contents.upgradePoints = req.body.upgradePoints;
    if (req.body.initialCash) contents.initialCash = req.body.initialCash;
    if (req.body.initialPoints) contents.initialPoints = req.body.initialPoints;
    if (req.body.discount) contents.discount = req.body.discount;
    if (req.body.registerGroup) contents.registerGroup = req.body.registerGroup;
    contents.status = req.body.status ? req.body.status : 0;
    return GroupLevelInstance.insertRecords(contents)
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

//获取客户组别详情
exports.getGroupLevel = (req,res)=>{
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    return GroupLevelInstance.findAllRecords({},options)
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

//添加客户组别
exports.updateGroupLevel = (req, res) => {
    let body = req.body;
    let options = {
        id: Joi.string().required(),
        groupName: Joi.string(),
        level: Joi.string(),
        upgradePoints: Joi.string(),
        initialCash: Joi.string(),
        initialPoints: Joi.string(),
        discount: Joi.string(),
        registerGroup: Joi.string(),
        status: Joi.string(),
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let contents = {};
    if (params.groupName) contents.groupName = params.groupName.replace(/\s+/g, "");;
    if (params.level) contents.level = params.level;
    if (params.upgradePoints) contents.upgradePoints = params.upgradePoints;
    if (params.initialCash) contents.initialCash = params.initialCash;
    if (params.initialPoints) contents.initialPoints = params.initialPoints;
    if (params.discount) contents.discount = params.discount;
    if (params.registerGroup) contents.registerGroup = params.registerGroup;
    if (params.status) contents.status = params.status ? params.status : 0;
    let id = params.id;
    return GroupLevelInstance.updateRecords(contents,{id:id})
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