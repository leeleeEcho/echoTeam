'use strict';

const BaseService = require("../basicMysqlService");
const Service = function(){};
Service.prototype = new BaseService("回访",require("../../model").NeedVisited);

module.exports = new Service();