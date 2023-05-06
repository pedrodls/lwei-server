const { userSetToken } = require("../generate/jwt.generate")

exports.UserAuth = async (req, res) => {

    const user = req.user

    let data = userSetToken(req, user)

    return  res.json(data);

}