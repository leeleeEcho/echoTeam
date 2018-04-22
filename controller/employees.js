'use strict';

const EmployeesInstance = require('../service/basicModelService/employees');//实例
const Department = require("../model").Department;//model
const Role = require("../model").Role;//model
//const Employees =require("../model").Employees;
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('employees');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;
const auth = require('../lib/auth');
const Joi = require('joi');

//员工列表
exports.getEmployees = (req, res) => {
    let options = {};
    options.include = [
        { model: Department, attributes: ['department'] },
        { model: Role, attributes: ['role','auth'] }
    ]
    options.attributes =  { exclude: ['departmentId','role','createdAt','updatedAt'] };
    // options.include = [{
    //     model: Department,
    //     attributes:['department'],
    //     through: {
    //      attributes: ['departmentId']
    //     }
    //   }]
    options.limit = req.body.limit ? req.body.limit : 20;
    options.offset = req.body.offset ? req.body.offset : 0;
    let where = {};
    if(req.query.departmentId){
        where = {departmentId:req.query.departmentId};
    }
    return EmployeesInstance.findAllRecords(where, options)
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

//获取单个员工信息
exports.getOneEmployees = (req, res) => {
    let options = {};
    options.include = [
        { model: Department, attributes: ['department'] },
        { model: Role, attributes: ['role','auth'] }
    ]
    options.attributes =  { exclude: ['departmentId','role','createdAt','updatedAt'] };
    let where = {};
    if(req.query.departmentId) where.departmentId = req.query.departmentId;
    return EmployeesInstance.findRecords(where, options)
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

//添加员工
exports.insertEmployees = (req, res) => {
    let contents = {};
    contents = req.body;
    contents.userName = req.body.userName.replace(/\s+/g, "");
    contents.password = util.encryptPass(contents.password);
    return EmployeesInstance.insertRecords(contents)
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

//更新员工信息
exports.updateEmployees = (req, res) => {
    let contents = {};
    if (!req.body.id) {
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001,
            error: null
        })
    }
    if (req.body.userName) contents.userName = req.body.userName.replace(/\s+/g, "");;
    if (req.body.password) contents.password = util.encryptPass(req.body.password);
    if (req.body.sex) contents.sex = req.body.sex;
    if (req.body.birthDate) contents.birthDate = req.body.birthDate;
    if (req.body.mobile) contents.mobile = req.body.mobile;
    if (req.body.workCode) contents.workCode = req.body.workCode;
    if (req.body.wechatQRCodeUrl) contents.wechatQRCodeUrl = req.body.wechatQRCodeUrl;
    if (req.body.entryDate) contents.entryDate = req.body.entryDate;
    if (req.body.regularDate) contents.regularDate = req.body.regularDate;
    if (req.body.post) contents.post = req.body.post;
    if (req.body.departmentId) contents.departmentId = req.body.departmentId;
    if (req.body.education) contents.education = req.body.education;
    if (req.body.school) contents.school = req.body.school;
    if (req.body.specialty) contents.specialty = req.body.specialty;
    if (req.body.payScale) contents.payScale = req.body.payScale;
    if (req.body.address) contents.address = req.body.address;
    if (req.body.phone) contents.phone = req.body.phone;

    return EmployeesInstance.updateRecords(contents, { id: req.body.id })
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

//员工删除
exports.delEmployees = (req, res) => {
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
    return EmployeesInstance.batchDeleteRecords({id:{$in:idsArr}})
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

//更新员工部门
exports.updateEmployeesDepartment = (req, res) => {
    if (!req.body.userName) {
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001,
            error: null
        })
    }
    let userName = req.body.userName.replace(/\s+/g, "");
    let contents = {};
    contents.departmentId = req.body.departmentId;

    return EmployeesInstance.updateRecordsByField(contents, { userName: userName })
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

//添加员工到部门
exports.updateEmployeesDepartment = (req, res) => {
    if (!req.body.userName) {
        return Promise.reject({
            message: statusMsg[40001],
            status: 40001,
            error: null
        })
    }
    let userName = req.body.userName.replace(/\s+/g, "");
    //检查员工是否存在
    return EmployeesInstance.findRecords({ userName: userName }, { attributes: ['userName'] })
        .then((data) => {
            if (!data) {
                return Promise.reject({
                    message: statusMsg[40003],
                    status: 40003,
                })
            }
            //存在，添加
            let contents = {};
            contents.departmentId = req.body.departmentId;
            return EmployeesInstance.updateRecordsByField(contents, { userName: userName })
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
                });
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

//添加角色
exports.addRole = (req, res) => {
    let body = req.body;
    let options = {
        userName: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        role: Joi.string().required(),
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
    let role = params.role;
    let email = params.email;
    let isUse = body.isUse ? body.isUse : 1;//默认启用
    let contents = {};
    contents.userName = userName;
    contents.password = password;
    contents.email = email;
    contents.role = role;
    contents.isUse = isUse;
    return EmployeesInstance.insertRecords(contents)
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

//后台系统登陆
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

    return EmployeesInstance.findRecords({ userName: userName })
        .then((data) => {
            if (!data) {
                return Promise.reject({
                    message: statusMsg[40009],
                    status: 40009
                })
            }
            if (!data.isUse) {
                return Promise.reject({
                    message: statusMsg[40007],
                    status: 40007
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
            return redisService.setToken(token, id)
                .then((info) => {
                    data.token = token;
                    return Promise.resolve(data);
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