'use strict';

const CustomerInstance = require('../service/basicModelService/customer');
const Employees = require("../model").Employees;//model
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('customer');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const auth = require('../lib/auth');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');
const moment = require('moment');

//新增客户
exports.insertCustomer = (req, res) => {
    if(!req.body.userName || !req.body.password ){
        return Promise.reject({
            message: statusMsg[40004] + ',userName,password为必需参数',
            status: 40004,
        })
    }
    let contents = {};
    contents = req.body;
    if(contents.mobile){
        contents.mobile = util.ReplaceEnglish(contents.mobile);
    }
    contents.userName = contents.userName ? contents.userName.replace(/\s+/g, "") : null;
    contents.trueName = contents.trueName ? contents.trueName.replace(/\s+/g, "") : null;
    contents.password = util.encryptPass(contents.password);
    contents.registerDate = moment().unix();
    contents.registerIP = req.connection.remoteAddress;
    contents.userFreeStatus = 0;
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
    let where = {};
    if(Number(req.query.type) === 1){//释放库
        where.userFreeStatus = {$gt:0,$lt:3};
    }else if(Number(req.query.type) === 2){
        where.userFreeStatus = 3;//冷冻库
    }else{
        where.userFreeStatus = 0;//正常
    }
    let options = {};
    options.include = [
        { model: Employees, attributes: ['userName'] }
    ]
    options.attributes = ['trueName','mobile','registerDate'];
    options.limit = req.query.limit ? req.query.limit : 20;
    options.offset = req.query.offset ? req.query.offset : 0;
    
    if(req.query.mobile) where.mobile = {$like:'%' + req.query.mobile + '%'};
    if(req.query.trueName) where.trueName = {$like:'%' + req.query.trueName + '%'};
    if(req.query.interestLevel) where.interestLevel = req.query.interestLevel;
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

//编辑客户
exports.updateCustomer = (req, res) => {
    if(Number(req.body.id) === null){
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001
        })
    }
    let id = req.body.id;
    let contents = {};
    contents = req.body;
    if(contents.userName)  contents.userName = contents.userName.replace(/\s+/g, "");
    if(contents.trueName)  contents.trueName = contents.trueName.replace(/\s+/g, "");
    if(contents.password)  contents.password = util.encryptPass(contents.password);
    delete contents['id'];
    return CustomerInstance.updateRecords(contents,{id:id})
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

//客户删除
exports.delCustomer = (req, res) => {
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
    return CustomerInstance.batchDeleteRecords({id:{$in:idsArr}})
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

//客户登陆
exports.login = (req, res) => {
    let body = req.body;
    let options = {
        userName: Joi.string().required(),
        password: Joi.string().required(),
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let userName = params.userName;
    let password = util.encryptPass(params.password);

    return CustomerInstance.findRecords({ userName: userName })
        .then((data) => {
            if (!data) {
                return Promise.reject({
                    message: statusMsg[40009],
                    status: 40009
                })
            }
            if (password !== data.password) {
                return Promise.reject({
                    message: statusMsg[40008],
                    status: 40008
                })
            }
            let userName = data.userName;
            let id = data.id;
            let token = auth.sign({ userName: userName, id: id });
            //签名存储
            return redisService.setToken(token, id)
                .then((info) => {
                    data.token = token;
                    let contents = {};
                    //信息更新
                    contents.lastLoginDate = moment().unix();
                    contents.lastLoginIP = req.connection.remoteAddress;
                    return CustomerInstance.updateRecords(contents,{id:id})
                    .then(()=>{
                        data.lastLoginDate = moment();
                        data.lastLoginIP = req.connection.remoteAddress;
                        return Promise.resolve(data);
                    })
                })
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

//释放客户
exports.freeCustomer = (req, res) => {
    if(Number(req.body.id) === null){
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001
        })
    }
    let id = req.body.id;
    return CustomerInstance.incrementRecords('userFreeStatus',{id:req.query.id})
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