'use strict';

const redis = require('redis');
const config = require('config');
const _ = require('lodash');
const Promise=require('bluebird');

const redisConfig = config.redis;

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

let retry_strategy = function(options) {
  console.log(options);
  return 1000;
};

redisConfig.retry_strategy = retry_strategy;
let client = redis.createClient(redisConfig);

client.on('error', (err) => {
    console.log('redis connect error:' , err);
  });
  client.on('ready', (err) => {
    console.log('redis client ready:redisClient');
  });
  exports.redisClient = client;