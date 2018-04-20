'use strict';

const Joi = require('joi'); 
const crypto = require('crypto');
const moment = require('moment');
const request = require('request');
const util = require('util');
const Promise = require('bluebird');

exports.paramsValidate = (param,options) => {
    let paramSchema = Joi.object().keys(options);
    let result = Joi.validate(param, paramSchema);
    if (result.error) {
        let errMsg = result.error.details[0].message;
        let msg = { message: errMsg, status: 40004 };
        return msg;
    }
    let values = result.value;
    return values;
}

exports.encryptPass = (password)=>{
    let key = 'secretForPassword123456@#$';//防止用户密码太短或过于简单，不安全
    let hmac = crypto.createHmac('sha1', key);
    hmac.update(password);
    let passkey = hmac.digest('hex');
    return passkey;
}

exports.formatDate = (date,format)=>{
    if(date === null) return "";
    format = format || "YYYY-MM-DD HH:mm:ss";
    return moment(date).add(8,"h").format(format);
};

exports.ReplaceEnglish = (string) =>{
    let newString = ''; 
    while(string.indexOf(",") !== -1){  //寻找每一个英文逗号，并替换
        newString = string.replace(/,/g,'，');
        string = newString;
     }
    return newString;
}

//根据ip获取去地址，到城市粒度即可
exports.getIpInfo = (ip) => {
    return new Promise(function (resolve, reject) {
        let sina_server = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=';
        let url = sina_server + ip;
        request.get(url, function (err, response, body) {
            if (err) return reject(err);
            if (body) {
                return resolve(JSON.parse(body));
            }
            return reject({ message: '获取城市信息失败', status: 500 });
        })
    })
}