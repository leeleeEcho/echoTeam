'use strict';

module.exports = function (sequelize, DataTypes) {
    const CustomerFrom = sequelize.define("CustomerFrom", {
        from:DataTypes.STRING,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "customer_from",
    }); 
    CustomerFrom.associate = function (models) {
        CustomerFrom.hasMany(models.Customer, {foreignKey:'customerFrom'});
    }
    return CustomerFrom;
}