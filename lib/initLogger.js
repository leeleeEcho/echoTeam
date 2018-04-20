'use strict';

const log4js = require("log4js");
const config = require("config");
const isProduction = process.env.NODE_ENV === "production";

log4js.configure(
  {
    appenders: {
      console: {
        type: 'console',
      },
      file: {
        type: 'file',
        filename: __dirname + config.log.path,//文件目录，当目录文件或文件夹不存在时，会自动创建
        encoding: 'utf-8',//default "utf-8"，文件的编码
        category: 'log_file',
        encoding: 'utf-8',
      },
      dateFile: {
        type: 'dateFile',
        filename: __dirname + config.log.path,
        pattern: 'yyyy-MM-dd-hh'
      },
      out: {
        type: 'stdout'
      }
    },
    categories: {
      default: {
        appenders: isProduction ? ['file', 'dateFile', 'out'] : ['console', 'file', 'dateFile', 'out'],
        level: isProduction ? 'info' : 'all'
      }
    }
  }
);


exports.logger = log4js;
