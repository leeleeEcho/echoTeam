'use strict';

module.exports = function (sequelize, DataTypes) {
    const Message = sequelize.define("Message", {
        templateTitle:DataTypes.STRING,//模板标题
        alias:DataTypes.STRING,//别名
        content:DataTypes.STRING,//内容
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "message",
    }); 
 
    return Message;
}