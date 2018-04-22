'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("短信",require("../../model").Message);

module.exports = new Service();