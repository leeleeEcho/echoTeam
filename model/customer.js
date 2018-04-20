'use strict';

module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
        userName: DataTypes.STRING,
        sex:DataTypes.STRING,
        birthDate:DataTypes.STRING,
        mobile:DataTypes.STRING,//手机，以中文逗号隔开字符串
        QQ:DataTypes.STRING,
        weChat:DataTypes.STRING,
        email:DataTypes.STRING,//邮箱
        address:DataTypes.STRING,//详细地址
        province:DataTypes.STRING,//省份
        city:DataTypes.STRING,//城市
        belongSale:DataTypes.INTEGER,//归属销售，员工表id，外键
        customerFrom:DataTypes.INTEGER,//外键,客户来源
        interestLevel:DataTypes.INTEGER,//意向程度
        nextVixitTime:DataTypes.STRING,//下次回访时间
        belongGroup:DataTypes.INTEGER,//所属组别，外键
        userStatus:DataTypes.INTEGER,//用户状态
        trueName:DataTypes.STRING,//姓名
        password:DataTypes.STRING,
        cash:DataTypes.DECIMAL,//金额
        points:DataTypes.INTEGER,//积分
        registerDate:DataTypes.DATE,
        registerIP:DataTypes.STRING,//ip
        lastLoginDate:DataTypes.DATE,//上次登陆日期
        lastLoginIP:DataTypes.STRING,//上次登录ip
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE,
    }, {
            freezeTableName: true,
            tableName: "customer",
    });
    Customer.associate = function (models) {
        Customer.belongsTo(models.CustomerFrom, {foreignKey:'customerFrom'});
        Customer.belongsTo(models.Employees, {foreignKey:'belongSale'});
        Customer.belongsTo(models.GroupLevel, {foreignKey:'belongGroup'})
    }

    return Customer;
}
