'use strict';

module.exports = function (sequelize, DataTypes) {
    const LeaveDetail = sequelize.define("LeaveDetail", {
        leaveType:DataTypes.INTEGER,//请假类型
        leaveStartDate:DataTypes.STRING,//请假时间
        leaveEndDate:DataTypes.STRING,//请假时间
        leaveTime:DataTypes.INTEGER,//请假时长
        leaveStatus:DataTypes.INTEGER,//请假状态
        leaveReason:DataTypes.STRING,//请假原因
        checkUser:DataTypes.STRING,//审核人
        uid:DataTypes.INTEGER,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "leave_detail",
    }); 
    LeaveDetail.associate = function (models) {
        LeaveDetail.belongsTo(models.Employees, {foreignKey:'uid'});
    }
    return LeaveDetail;
}