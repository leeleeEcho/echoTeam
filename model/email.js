'use strict';

module.exports = function (sequelize, DataTypes) {
    const Email = sequelize.define("Email", {
        templateTitle:DataTypes.STRING,//模板标题
        alias:DataTypes.STRING,//别名
        emailTitle:DataTypes.STRING,//邮件标题
        content:DataTypes.STRING,//内容
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "email",
    }); 
 
    return Email;
}