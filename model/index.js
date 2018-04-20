'use strict';

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("config");

const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password,config.mysql.options);
let db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (/\.\w+?$/.exec(file)[0] == ".js") && (file !== "index.js");
    })
    .forEach(function (file) {
        let model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);    
    }
});

db.PotDb = sequelize;
db.Sequelize = Sequelize;
//sequelize.sync({force:true});
module.exports = db;