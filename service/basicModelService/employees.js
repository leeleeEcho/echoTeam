'use strict';

const BaseService = require("../basicMysqlService");
const Service = function () { };
Service.prototype = new BaseService("员工", require("../../model").Employees);

// Service.prototype.getRole = (type) => {
//     type = Number(type);
//     let typeDetai = '';
//     switch (type) {
//         case 1:
//             typeDetai = '管理员';
//             break;
//         case 2:
//             typeDetai = '销售部';
//             break;
//         case 3:
//             typeDetai = '行政部';
//             break;
//         case 4:
//             typeDetai = '运营部';
//             break;
//         case 5:
//             typeDetai = '财务部';
//             break;
//         default:
//             typeDetai = '测试';
//             break;
//     }
//     return typeDetai;
// }

module.exports = new Service();