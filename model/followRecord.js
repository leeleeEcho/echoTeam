'use strict';

module.exports = function (sequelize, DataTypes) {
    const FollowRecord = sequelize.define("FollowRecord", {
        uid:DataTypes.INTEGER,//如果类型为备注，必须插入uid
        name:DataTypes.STRING,//称呼
        mobile:DataTypes.STRING,
        QQ:DataTypes.STRING,
        sex:DataTypes.STRING,
        type:DataTypes.INTEGER,//1表示留言，2表示备注
        message:DataTypes.STRING,//内容
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "follow_record"                                                                                                                                                                                 
    }); 
    return FollowRecord;
}