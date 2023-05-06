const personalDataRouter = require("express").Router();

const controller = require("../../../../controllers/main/user/personal-data/personal-data.controller");

personalDataRouter.get("/", controller.all);
personalDataRouter.post("/", controller.create);


module.exports = personalDataRouter;