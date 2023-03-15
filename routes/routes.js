
const router = require('express').Router()


router.use("/", (req, res) => {
    res.json(200)
})

module.exports = router