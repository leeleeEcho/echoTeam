'use strict';

const dutyDetailInstance = require('../service/basicModelService/dutyDetail');
const Promise = require('bluebird');
const logger = require('../lib/initLogger').logger.getLogger('dutyDetail');
const redisService = require('../service/redisService');
const util = require('../lib/util');
const _ = require('lodash');
const statusMsg = require('../lib/statusMessage').msg;

exports.updateDutyDetai = (req,res)=>{
    if(!req.body.employeesDetail){
        return Promise.reject({
            message: '未接收到更新内容',
            status: 40005,
        })
    }
    if(typeof req.body.employeesDetail  !== 'string'){
        return Promise.reject({
            message: '员工列表必须是逗号隔开的字符串',
            status: 40004,
        })
    }
    let employeesDetail = util.ReplaceEnglish(req.body.employeesDetail);//逗号隔开的字符串
    let dutyDetail = req.body.type ? req.body.type : '';
    let value = {};
    if(req.body.id){
        value =  {id:req.body.id,employeesDetail:employeesDetail,dutyType:dutyDetail};
    }else{
        value =  {employeesDetail:employeesDetail,dutyType:req.body.type};
    }
    let options = {};
    options.fields = ['employeesDetail'];
    options.validate = true;
    return dutyDetailInstance.upsertRecordsByField(value,options)
    .then((data)=>{
        Promise.resolve(data);
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

//获取值班详情
exports.getDutyDetail = (req,res)=>{
    let options = {};
    options.attributes = { exclude: ['createdAt','updatedAt'] };
    return dutyDetailInstance.findAllRecords({},options)
        .then((data) => {
            _.each(data,item => {
                item.dutyType = dutyDetailInstance.getDutyType( item.dutyType );
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