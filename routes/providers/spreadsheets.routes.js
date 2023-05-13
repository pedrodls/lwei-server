const spreadSheetsRouter = require("express").Router();

const controller = require('../../providers/google/sreadsheets.service');

spreadSheetsRouter.get("/", controller.getMetaData);


module.exports = spreadSheetsRouter;