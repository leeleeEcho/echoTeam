'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("值班",require("../../model").DutyDetail);

Service.prototype.getDutyType = (type) => {
    type = Number(type);
    let typeDetai = '';
    switch(type) {
        case 1:
            typeDetai = '周一到周五';
            break;
        case 2:
            typeDetai = '周六';
            break;
        case 3:
            typeDetai = '周日';
            break;
        default:
            typeDetai = '晚班';;
            break;
    }
    return typeDetai;
}

module.exports = new Service();