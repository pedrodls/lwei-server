const spreadSheetsRouter = require("../providers/spreadsheets.routes")
const professionalTypeRoute = require("./professional-type/professional-type.routes")
const typeAccountRouter = require("./type-account/type-account.routes")
const userRouter = require("./users/user.routes")

const mainRouter = require("express").Router()


mainRouter.get("/", (req, res) => {
    res.json(401)
})

mainRouter.use("/type-accounts", typeAccountRouter)

mainRouter.use("/professional-type", professionalTypeRoute)

mainRouter.use("/users", userRouter)

mainRouter.use("/spreedsheets", spreadSheetsRouter)

module.exports = mainRouter 