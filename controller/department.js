'use strict';

const EmployeesInstance = require('../service/basicModelService/employees');
const DepartmentInstance = require('../service/basicModelService/department');
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('department');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;

//添加部门
exports.insertDepartment = (req, res) => {
    let contents = {};
    if (req.body.department) contents.department = req.body.department.replace(/\s+/g, "");
    return DepartmentInstance.insertRecords(contents)
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

//获取部门详情
exports.getDepartmentDetail = (req,res)=>{
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    return DepartmentInstance.findAllRecords({},options)
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