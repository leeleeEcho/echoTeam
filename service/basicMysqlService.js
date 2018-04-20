'use strict';

/**
 * 基本service封装类,基本封装sequelize
 * 提供增删改查功能
 * 提供计数功能
 * 提供求和功能
 */
const sequelize = require("sequelize");
const _ = require("lodash");
const Promise = require("bluebird");
const statusMsg = require('../lib/statusMessage').msg;

let BaseService = function (name, Model) {
    if (name === undefined) return;
    this.modelName = name;
    this.model = Model;
    this.attributes = [];
    for (let i in Model.tableAttributes) {
        this.attributes.push(i);
    }
};
//根据条件查询一条记录
BaseService.prototype.findRecords = function (param, options) {
    if (!options) {
        options = {};
    }
    let { attributes = this.attributes, order = [], raw = true } = options;
    return this.model.find({
        where: param,
        attributes: attributes,
        order: order,
        raw: raw
    })
        .catch((error) => {
            console.log(error);
            return Promise.reject({
                message: this.modelName + statusMsg[50004],
                status: 50004,
                error: error
            })
        })
};
//根据条件查询记录
BaseService.prototype.findAllRecords = function (param, options) {
    if (!options) {
        options = {};
    }
    let {
        attributes = this.attributes,
        order = [],
        group = null,
        limit = 99999,
        offset = 0,
        raw = true,
        include = []
    } = options;
     return this.model.findAll({
        where: param,
        include:include,
        order: order,
        group: group,
        limit: limit,
        offset: offset,
        attributes: attributes,
        raw: raw
    }) 
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50004],
                status: 50004,
                error: error.stack
            })
        })
};
//根据条件进行分页查询 (默认分页20条记录)
BaseService.prototype.findAndCountAllRecords = function (param, options) {
    if (!options) {
        options = {};
    }
    let {
        attributes = this.attributes,
        order = [],
        limit = 20,
        offset = 0,
        raw = true
    } = options;
    options.limit = options.limit || 20;
    return this.model.findAndCountAll({
        where: param,
        order: order,
        limit: limit,
        offset: offset,
        attributes: attributes,
        raw: raw
    })
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50004],
                status: 50004,
                error: error.stack
            })
        })
};
//根据id更新记录
BaseService.prototype.updateRecords = function (value,where, options) {
    if (!options) {
        options = {};
    }
    if (where) {
        if (!where.id) {
            return Promise.reject({
                message: '更新表'+this.modelName + statusMsg[40001],
                status: 40001,
                error: null
            })
        }
    }
    return this.model.update(value, {
        where: where
    }, options)
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50003],
                status: 50003,
                error: error.stack
            })
        })
};
//根据字段更新记录
BaseService.prototype.updateRecordsByField = function (value,where, options) {
    if (!options) {
        options = {};
    }
    return this.model.update(value, {
        where: where
    }, options)
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50003],
                status: 50003,
                error: error.stack
            })
        })
};

//根据主键id创建或更新记录
BaseService.prototype.upsertRecordsByField = function (value, options) {
    if (!options) {
        options = {};
    }
    return this.model.upsert(value, options)//无法通过字段去更新
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50003],
                status: 50003,
                error: error.stack
            })
        })
};

//批量更新记录
BaseService.prototype.batchUpdateRecords = function (value, where, options) {
    if (!options) {
        options = {};
    }
    return this.model.update(value, {
        where: where
    }, options)
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50003],
                status: 50003,
                error: error.stack
            })
        })
};
//创建记录
BaseService.prototype.insertRecords = function (record, options) {
    if (!options) {
        options = {};
    }
    return this.model.create(record)
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50002],
                status: 50002,
                error: error.stack
            })
        })
};
//创建记录
BaseService.prototype.batchInsertRecords = function (records, options) {
    if (!options) {
        options = {};
    }
    return this.model.bulkCreate(records)
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50002],
                status: 50002,
                error: error.stack
            })
        })
};
//根据id删除记录
BaseService.prototype.deleteRecords = function (where, options) {
    if (!options) {
        options = {};
    }
    if (where) {
        if (!where.id) {
            return Promise.reject({
                message: this.modelName + statusMsg[50001],
                status: 50001,
                error: null
            })
        }
    }
    return this.model.destroy({
        where: where
    })
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50001],
                status: 50001,
                error: error.stack
            })
        })
};
//删除记录
BaseService.prototype.batchDeleteRecords = function (where, options) {
    if (!options) {
        options = {};
    }
    return this.model.destroy({
        where: where
    })
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50001],
                status: 50001,
                error: error.stack
            })
        })
};
//统计记录
BaseService.prototype.countRecords = function (where, options) {
    if (!options) {
        options = {};
    }
    return this.model.count({
        where: where
    })
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50005],
                status: 50005,
                error: error.stack
            })
        })
};
//指定列求和
BaseService.prototype.sumRecords = function (where, column, options) {
    if (!options) {
        options = {};
    }
    let col = _.find(this.attributes, (par) => {
        return par === column;
    });
    if (!col) {
        return Promise.reject({
            message: this.modelName + statusMsg[50005],
            status: 50005,
            error: null
        })
    }
    return this.findAll(where, {
        attributes: [
            [sequelize.fn('SUM', sequelize.col(col)), col]
        ]
    })
        .catch((error) => {
            return Promise.reject({
                message: this.modelName + statusMsg[50005],
                status: 50005,
                error: error
            })
        })
};

module.exports = BaseService;