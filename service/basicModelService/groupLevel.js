'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("会员组别",require("../../model").GroupLevel);

module.exports = new Service();