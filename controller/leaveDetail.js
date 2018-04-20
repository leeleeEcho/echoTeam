'use strict';

const LeaveDetailInstance = require('../service/basicModelService/leaveDetail');
const Employees = require("../model").Employees;//model
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('leaveDetail');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const Joi = require('joi');
const moment = require('moment');

//提交请假申请
exports.applyLeave = (req, res) => {
    let body = req.body;
    let options = {
        leaveType: Joi.string().required(),
        leaveStartDate: Joi.string().required(),
        leaveEndDate: Joi.string().required(),
       // leaveTime: Joi.string().required(),//程序计算
       // leaveStatus: Joi.string().required(),//开始默认1，初始状态
        leaveReason: Joi.string().required(),
        checkUser: Joi.string().required(),
        uid: Joi.string().required(),
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let leaveReason = params.leaveReason.replace(/\s+/g, "");//去掉所有空格
    let contents = {};
    contents.leaveType = params.leaveType;
    contents.leaveStartDate = params.leaveStartDate;
    contents.leaveEndDate = params.leaveEndDate;
    contents.leaveTime = (moment( params.leaveEndDate).unix() - moment( params.leaveStartDate).unix()) / 3600;
    contents.leaveStatus = 2;
    contents.leaveReason = leaveReason;
    contents.checkUser = params.checkUser;
    contents.uid = params.uid;
    return LeaveDetailInstance.insertRecords(contents)
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

//获取请假详情
exports.getLeaveDetail = (req,res)=>{
    let options = {};
    options.include = [{ model: Employees, attributes: ['userName'] }]
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    options.limit = req.body.limit ? req.body.limit : 20;
    options.offset = req.body.offset ? req.body.offset : 0;
    let where = {};
    if(req.query.uid){
        where.id = req.query.uid;
    }
    if(req.query.checkUser){
        where.checkUser = req.query.checkUser;
    }
    if(req.query.leaveStartDate){
        where.leaveStartDate = {$gte:req.query.leaveStartDate};
    }
    if(req.query.leaveEndDate){
        where.leaveEndDate = {$lte:req.query.leaveEndDate};
    }
    return LeaveDetailInstance.findAllRecords(where,options)
        .then((data) => {
            _.each(data,item => {
                item.leaveStatus =  LeaveDetailInstance.getLeaveStatus(item.leaveStatus);
                item.leaveType =  LeaveDetailInstance.getLeaveType(item.leaveType);
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

//审批请假申请
exports.checkLeave = (req,res) => {
    let body = req.body;
    let options = {
        id: Joi.string().required(),
        leaveStatus: Joi.string().required()
    }
    let params = util.paramsValidate(body, options);
    if (params.status && params.status === 40004) {
        return Promise.reject({
            message: params.message,
            status: 40004
        })
    }
    let id = params.id;
    let leaveStatus = params.leaveStatus;

    //登陆用户与审批人一致才可以审批
    let token = req.header('authorization');
    let userName = req.user.userName;
    return LeaveDetailInstance.findRecords({ id: id })
        .then((data) => {
            if(!data){
                return Promise.reject({
                    message: statusMsg[40012],
                    status: 40012
                })
            }
            let checkUser = data.checkUser;
            if (userName !== checkUser) {
                return Promise.reject({
                    message: statusMsg[40006],
                    status: 40006
                })
            }
            return LeaveDetailInstance.updateRecords({ leaveStatus: leaveStatus }, { id: id })
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