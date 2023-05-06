const userRouter = require("express").Router();

const controller = require("../../../controllers/main/user/user.controller");

userRouter.get("/", controller.all);

module.exports = userRouter;