'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("请假",require("../../model").LeaveDetail);

Service.prototype.getLeaveType = (type) => {
    type = Number(type);
    let typeDetai = '';
    switch(type) {
        case 1:
            typeDetai = '事假';
            break;
        case 2:
            typeDetai = '病假';
            break;
        case 3:
            typeDetai = '调休';
            break;
        default:
            typeDetai = '旷工';;
            break;
    }
    return typeDetai;
}

Service.prototype.getLeaveStatus = (type) => {
    type = Number(type);
    let statusDetai = '';
    switch(type) {
        case 1:
            statusDetai = '审核中';
            break;
        case 2:
            statusDetai = '拒绝';
            break;
        default:
            statusDetai = '批准';;
            break;
    }
    return statusDetai;
}

module.exports = new Service();