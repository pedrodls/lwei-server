const jwt = require('jsonwebtoken');

const {
    User
} = require('../../../models/models');
const {
    ip
} = require('../verify-session/verify-session');

require('dotenv').config();

exports.generateUserAuthToken = ({
    id,
    typeAccountId,
    email,
    ip
}) => {

    let token = 'Bearer ' + jwt.sign({
        id,
        typeAccountId,
        email,
        ip
    }, process.env.TOKENSECRETKEY);

    return token;
}

exports.userSetToken = (req, user) => {

    user.ip = ip(req);

    let token = this.generateUserAuthToken(user)

    return {
        data: {
            user: {
                id: user.id,
                email: user.email,
                authAccount: user.typeAccount.id,
                userName: req.userName,
                avatar: req.avatar
            },
            error: false,
            status: 200
        },
        token: token
    };

}