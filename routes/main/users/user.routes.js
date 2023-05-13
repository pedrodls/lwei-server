const userRouter = require("express").Router();

const controller = require("../../../controllers/main/user/user.controller");
const { googleOauth } = require("../../../providers/google/auth.connection");

userRouter.get("/", controller.all);
userRouter.post("/", controller.create);
userRouter.post("/authenticate", controller.authentication);
userRouter.get("/google/admin/auth", controller.authWithGoogle);
userRouter.get("/google/auth", googleOauth);


module.exports = userRouter;