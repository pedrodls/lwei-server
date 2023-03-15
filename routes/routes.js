const mainRouter = require('./main/main.routes')

const router = require('express').Router()


router.use("/main", mainRouter)

router.use("/teste", (req, res) => {
    res.json(200)
})

module.exports = router