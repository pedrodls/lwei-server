const { userSetToken } = require("../generate/jwt.generate")



exports.localUserAuth = async (req, res) => {

    const user = {}

    let data = userSetToken(req, user)

    // Manipulate the cookies here

}