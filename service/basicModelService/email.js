'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("邮件",require("../../model").Email);

module.exports = new Service();