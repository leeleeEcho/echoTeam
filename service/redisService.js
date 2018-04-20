'use strict';

const _ = require('lodash');
const moment = require('moment');
const Promise = require('bluebird');
const redisClient = require('../lib/redisConnect').redisClient;

const redisKey = {
    user: (uid) => { return "token:" + uid },
}

exports.setToken = (token,uid)=>{
    return redisClient.hsetAsync(redisKey.user(uid),token,moment().unix());
}