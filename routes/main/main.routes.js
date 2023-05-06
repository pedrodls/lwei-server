const typeAccountRouter = require("./type-account/type-account.routes")
const userRouter = require("./users/user.routes")

const mainRouter = require("express").Router()


mainRouter.get("/", (req, res) => {
    res.json(401)
})

mainRouter.use("/type-accounts", typeAccountRouter)

mainRouter.use("users", userRouter)

module.exports = mainRouter 