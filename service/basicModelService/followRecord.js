'use strict';

const BaseService = require("../basicMysqlService");
const Service = function () { };
Service.prototype = new BaseService("跟踪记录", require("../../model").FollowRecord);

module.exports = new Service();
