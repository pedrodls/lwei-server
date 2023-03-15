const router = require("express").Router();

const controller = require("../../../controllers/main/user/user.controller");

router.get("/", controller.all);

/* router.post("/", controller.create); */

/* router.post("/authenticate", controller.authentication, UserHelper.userSetToken);

router.post("/verify_token", UserHelper.userVerifyToken);

router.get("/disable/:id", controller.disable);

router.post("/update", controller.update);

router.post("/remote-view-access", controller.remoteViewAccess);

router.post("/confirm_user", controller.confirmUser); */

module.exports = router;