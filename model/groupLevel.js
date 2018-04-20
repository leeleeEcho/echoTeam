'use strict';

module.exports = function (sequelize, DataTypes) {
    const GroupLevel = sequelize.define("GroupLevel", {
        groupName:DataTypes.STRING,//组别名称
        level:DataTypes.INTEGER,//等级值
        upgradePoints:DataTypes.STRING,//升级积分
        initialCash:DataTypes.DECIMAL,//初始金额
        initialPoints:DataTypes.INTEGER,//初始积分
        discount:DataTypes.FLOAT,//折扣,
        registerGroup:DataTypes.STRING,//注册组
        status:DataTypes.INTEGER,//启用                                                                          
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true, 
            tableName: "group_level",
    }); 
    GroupLevel.associate = function (models) {
        GroupLevel.hasMany(models.Customer, {foreignKey:'belongGroup'});
    }
    return GroupLevel;
}