'use strict';

const moment = require('moment');
const date = moment().format('YYYYMMDD');

module.exports = {
    mysql: {
        database: 'potSale',
        username: 'root',
        //password: '123456',
        password: '',
        options: {
            host: '127.0.0.1',
            dialect: 'mysql',
            timezone: '+08:00',
            pool: {
                'maxConnections': 15
            }
        }
    },
    redis: {
        host: '127.0.0.1',
        password:'123456',
        port: 6379,
        db: 1
    },
    log: {
        path: `/../logs/${date}.log`
    }
};
