'use strict';

module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define("Role", {
        role:DataTypes.STRING,
        auth:DataTypes.STRING,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "role",
    });
    Role.associate = function (models) {
        Role.hasMany(models.Employees, {foreignKey:'role'});
    }
    return Role;
}