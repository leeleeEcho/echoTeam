'use strict';


module.exports = {
    "mysql": {
        "database": "potSale",
        "host": "127.0.0.1",
        "username": "",
        "password": "",
        "dialect": "mysql",
        "pool": {
            "maxConnections": 30
        }
    },
    "redis": {
        "host": "127.0.0.1",
        "port": 6379,
        "db": 1,
    }
};
