'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("部门",require("../../model").Department);

module.exports = new Service();