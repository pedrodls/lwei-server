const userRouter = require("express").Router();

const { UserAuth } = require("../../../app/jwt/auth/auth");
const controller = require("../../../controllers/main/user/user.controller");

userRouter.get("/", controller.all);
userRouter.post("/", controller.create);
userRouter.post("/authenticate", controller.authentication, UserAuth);

module.exports = userRouter;