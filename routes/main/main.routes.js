const mainRouter = require("express").Router()


mainRouter.get("/", (req, res) => {
    res.json(401)
})

module.exports = mainRouter 