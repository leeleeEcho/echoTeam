'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("客户",require("../../model").Customer);

Service.prototype.getUserStatus = (status) => {
    status = Number(status);
    let statusDetai = '';
    switch (status) {
        case 1:
            statusDetai = '待验证';
            break;
        case 2:
            statusDetai = '待审核';
            break;
        case 3:
            statusDetai = '禁用';
            break;
        case 4:
            statusDetai = '最新';
            break;
        default:
            statusDetai = '正常';
            break;
    }
    return statusDetai;
}

Service.prototype.getUserInsLevel = (status) => {
    status = Number(status);
    let statusDetai = '';
    switch (status) {
        case 1:
            statusDetai = '无意向';
            break;
        case 2:
            statusDetai = '有意向';
            break;
        default:
            statusDetai = '意向大';
            break;
    }
    return statusDetai;
}

module.exports = new Service();