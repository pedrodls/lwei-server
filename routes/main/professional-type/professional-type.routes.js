const professionalTypeRoute = require("express").Router();

const controller = require("../../../controllers/main/professional-type/professional-type.controller");

professionalTypeRoute.get("/", controller.all);
professionalTypeRoute.post("/", controller.create);


module.exports = professionalTypeRoute;