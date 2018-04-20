let express = require('express');
let router = express.Router();
const auth = require('../lib/auth');

//router.use('/',auth.decoded);//jwt
router.use('/dutyDetail',require('./dutyDetail'));//值班
router.use('/employees',require('./employees'));//员工
router.use('/department',require('./department'));//部门
router.use('/leaveDetail',require('./leaveDetail'));//请假
router.use('/customer',require('./customer'));//客户
router.use('/customerFrom',require('./customerFrom'));//客户来源
router.use('/role',require('./role'));//角色
router.use('/followRecord',require('./followRecord'));//跟踪记录
router.use('/customerConsult',require('./customerConsult'));//客户咨询
router.use('/groupLevel',require('./groupLevel'));//客户组别

module.exports = router;
