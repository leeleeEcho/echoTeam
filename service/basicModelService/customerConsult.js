'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("客户咨询",require("../../model").customerConsult);

module.exports = new Service();