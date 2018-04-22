'use strict';

module.exports = function (sequelize, DataTypes) {
    const NeedVisited = sequelize.define("NeedVisited", {
        uid:DataTypes.INTEGER,//需回访用户
        salesMan:DataTypes.INTEGER,//回访的销售
        status:DataTypes.INTEGER,//回访状态。0未回访，1已回访
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "need_visited",
    }); 
    NeedVisited.associate = function (models) {
        NeedVisited.belongsTo(models.Employees, {foreignKey:'salesMan'});
        NeedVisited.belongsTo(models.Customer, {foreignKey:'uid'});
    }

    return NeedVisited;
}