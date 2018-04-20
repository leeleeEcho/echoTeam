'use strict';

const jwt = require('jsonwebtoken');
const secret = 'user_login';   //加密密钥
const expiresIn = '24h'; //失效时间暂定24小时
const Joi = require('joi');
const logger = require('./initLogger').logger.getLogger('auth');
const AppErr = require('../lib/statusMessage').AppErr;
const EmployeesInstance = require('../service/basicModelService/employees');//实例

//  不需要做身份认证的几个接口
const notVerifyPath = [
    '/employees/login',
];

/**
 * 加密用户部分数据，并生成token
 * @param par
 */
function sign(par) {
    let userName = par.userName;    //用户名
    let id = par.id;      //用户Id

    return jwt.sign({userName, id}, secret, {expiresIn: expiresIn})
}

/**
 *  验证签名
 */
function decoded(req,res,next) {
    let path = req.path;
    if (notVerifyPath.indexOf(path) >= 0) {
        return next();
    }
    let token = req.header('authorization');
    if(!token){
        return next(new AppErr(40010,400));
    }
    token = token.substring(7, token.length);
    try {
        let signInfo = jwt.verify(token, secret);
        return EmployeesInstance.findRecords({id:signInfo.id,})
        .then((data)=>{
            if(!data){
                return next(new AppErr(40011,401));
            }
            req.user = {id:signInfo.id,userName:signInfo.userName};
            next();
        })   
    } catch (e) {
        logger.error('验证签名出错，原因为：' + e.stack);
        return next(new AppErr(40011,401));
    }
    next();
}

module.exports = {
    //  签名
    sign: sign,
    //  验签
    decoded: decoded
};