'use strict';

const util = require('util');
/**
 * 4开头为客户端行为出错，5开头为服务器错误
 */
let msg = {
    50001:'删除记录失败',
    50002:'保存记录失败',
    50003:'更新记录失败',
    50004:'查询记录失败',
    50005:'统计记录失败',
    50006:'获取城市信息失败',
    40001:'缺少主键id',
    40002:'记录已存在',
    40003:'该员工不存在',
    40004:'参数格式不对',
    40005:'未收到更新内容',
    40006:'无权进行当前操作',
    40007:'当前用户处于未启用状态！',
    40008:'用户名与密码不匹配',
    40009:'用户不存在',
    40010:'缺少token',
    40011:'无效token',
    40012:'记录不存在'
}

let AppErr = function(errcode, httpStatus, more) {
    Error.call(this, errcode);
    Error.captureStackTrace(this, this.constructor);
    this.message = msg[errcode] || '抱歉，遇到未知错误，请重试';
    this.status = httpStatus || 400;
   // this.errtext = msg[errcode] || '抱歉，遇到未知错误，请重试';
    this.more = more;
  };
  
  util.inherits(AppErr, Error);
  
  exports.AppErr = AppErr;
  exports.msg = msg;