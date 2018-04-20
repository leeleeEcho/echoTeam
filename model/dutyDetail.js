'use strict';

module.exports = function (sequelize, DataTypes) {
    const DutyDetail = sequelize.define("DutyDetail", {
        dutyType:DataTypes.INTEGER,//1,2,3,4,1表示工作日，2表示周六，3表示周日，4表示晚班
        employeesDetail:DataTypes.STRING,//员工数组
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "duty_detail",
    }); 
    return DutyDetail;
}