const typeAccountRouter = require("express").Router();

const controller = require("../../../controllers/main/type-account/type-account.controller");

typeAccountRouter.get("/", controller.all);
typeAccountRouter.post("/", controller.create);


module.exports = typeAccountRouter;