 'use strict';

module.exports = function (sequelize, DataTypes) {
    const Department = sequelize.define("Department", {
        department:DataTypes.STRING,//部门
        departmentManager:DataTypes.STRING,//部门经理
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "department",
    }); 
    // n到m关系
    // Department.associate = function (models) {
    //     Department.belongsToMany(models.Employees, {through: 'EmployeesDepatment',foreignKey:'departmentId'});//要指定外键，不然就报错
    // }
    Department.associate = function (models) {
        Department.hasMany(models.Employees, {foreignKey:'departmentId'});
    }
    return Department;
}