'use strict';

const BaseService = require("../basicMysqlService");
const Service = function () { };
Service.prototype = new BaseService("客户来源", require("../../model").CustomerFrom);

module.exports = new Service();
