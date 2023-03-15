require('dotenv').config();

module.exports = {
    dev: {
        HOST: process.env.DEV_HOST,
        USER: process.env.DEV_USER,
        PASSWORD: process.env.DEV_PASSWORD,
        DB: process.env.DEV_DB,
        DIALECT:  process.env.DEV_DIALECT,
        POOL: {
            max: 5,
            min: 0, 
            acquire: 30000,
            idle: 10000
        }
    },
    prod: {
        HOST: process.env.PROD_HOST,
        USER: process.env.PROD_USER,
        PASSWORD: process.env.PROD_PASSWORD,
        DB: process.env.PROD_DB,
        DIALECT:  process.env.PROD_DIALECT,
        POOL: {
            max: 5,
            min: 0, 
            acquire: 30000,
            idle: 10000
        }
    }
}[process.env.ENV.toLowerCase()];