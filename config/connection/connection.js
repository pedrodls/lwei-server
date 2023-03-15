require('dotenv').config();

const Sequelize = require('sequelize')
const dbConfig = require('./database');

//-----------------------------------------------------------
//-----------------Conexão com o Banco de Dados--------------

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: null,
  pool: {
    max: dbConfig.POOL.max,
    min: dbConfig.POOL.min,
    acquire: dbConfig.POOL.acquire,
    iddle: dbConfig.POOL.idle
  }
})

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  Op: Sequelize.Op
}