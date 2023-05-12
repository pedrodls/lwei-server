const userRouter = require("express").Router();

const { UserAuth } = require("../../../app/jwt/auth/auth");
const controller = require("../../../controllers/main/user/user.controller");
const { googleOauth } = require("../../../providers/google/auth.connection");

userRouter.get("/", controller.all);
userRouter.post("/", controller.create);
userRouter.get("/authenticate", controller.authentication);
userRouter.get("/google/auth", googleOauth);


module.exports = userRouter;