'use strict';

module.exports = function (sequelize, DataTypes) {
    const customerConsult = sequelize.define("customerConsult", {//未有账号用户电话提交咨询
        consultObject:DataTypes.STRING,//咨询对象
        author:DataTypes.STRING,
        number:DataTypes.INTEGER,//编号
        address:DataTypes.STRING,//地区,精确到城市
        ip:DataTypes.STRING,
        reqTime:DataTypes.DATE,//访问时间
        mobile:DataTypes.STRING,
        salePerson:DataTypes.INTEGER,//销售人员
        status:DataTypes.INTEGER,//0未回复,1已回复
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "customer_consult",
    }); 
    customerConsult.associate = function (models) {
        customerConsult.belongsTo(models.Employees, {foreignKey:'salePerson'});
    }
    return customerConsult;
}