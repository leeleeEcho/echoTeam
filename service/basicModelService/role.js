'use strict';

const BaseService = require("../basicMysqlService");
const Service = function () { };
Service.prototype = new BaseService("角色", require("../../model").Role);

module.exports = new Service();
