'use strict';

module.exports = function (sequelize, DataTypes) {
    const Employees = sequelize.define("Employees", {
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
        sex:DataTypes.STRING,
        birthDate:DataTypes.STRING,
        mobile:DataTypes.STRING,//手机
        workCode:DataTypes.STRING,//工号
        wechatQRCodeUrl:DataTypes.STRING,//微信二维码
        entryDate:DataTypes.STRING,//入职
        regularDate:DataTypes.STRING,//转正
        post:DataTypes.STRING,//岗位
        departmentId:DataTypes.INTEGER,//部门
        education:DataTypes.STRING,//学历
        school:DataTypes.STRING,
        specialty:DataTypes.STRING,//专业
        payScale:DataTypes.STRING,//工资标准
        address:DataTypes.STRING,//家庭地址
        phone:DataTypes.STRING,//联系电话
        role:DataTypes.INTEGER,//角色
        email:DataTypes.STRING,//邮箱
        isUse:DataTypes.INTEGER,//权限那块的是否启用
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "employees",
    });
    // Employees.associate = function (models) {
    //     Employees.belongsToMany(models.Department, {through: 'EmployeesDepatment', foreignKey:'employeesId'});
    // }
    Employees.associate = function (models) {
        Employees.belongsTo(models.Department, {foreignKey:'departmentId'});
        Employees.belongsTo(models.Role, {foreignKey:'role'});
        Employees.hasMany(models.LeaveDetail, {foreignKey:'uid'});
        Employees.hasMany(models.Customer, {foreignKey:'belongSale'});
        Employees.hasMany(models.customerConsult, {foreignKey:'salePerson'});
        Employees.hasMany(models.NeedVisited, {foreignKey:'salesMan'})
    }
    return Employees;
}
