const jwt = require('jsonwebtoken');

const {
    User,
    Op
} = require('../../../models/models');
const { jwtConstants } = require('../constants/constants');
const {
    expiredSessionMessage
} = require('../default-messages/default-messages');

require('dotenv').config()


exports.ip = (req) => req.headers[jwtConstants.ip] ||
    req.connection.remoteAddress;


exports.userVerifyToken = async (req, res) => {

    // verify cookies activity if is still in time

    if (!(req.headers[jwtConstants.session] == undefined))

        jwt.verify(req.headers[jwtConstants.session].split(' ')[1], process.env.TOKENSECRETKEY,
            async (err, decode) => {

                if (err)
                    expiredSessionMessage(res)
                else {

                    req.decode = decode

                    if (decode.ip == this.ip(req)) {

                        // Verify only cookie here

                        
                       /*  const session = await User.findOne({
                            where: {
                                email: decode.email,
                                isActive: true
                            }
                        }).then(data => data).catch(() => false)

                        if (session)
                            // Set a logical here
                            res.status(200).json({
                                code: 200,
                                message: 'Sessão Activa'
                            })
                        else
                            expiredSessionMessage(res) */


                    } else
                        expiredSessionMessage(res)

                }
            }
        );
    else
        expiredSessionMessage(res)


}

/* exports.validateUserAuthToken = async (req, res, next) => {

    let token = this.ip(req);

    if (token == undefined)
        res.status(403).end('Não tem sessão iniciada');
    else
    if (typeof token !== 'string' && token.split(' ').length < 2) {
        res.status(403).end('Não tem sessão iniciada');
    } else {
        jwt.verify(token.split(' ')[1], process.env.TOKENSECRETKEY,
            async (err, decode) => {

                if (err)
                                        expiredSessionMessage(res)

                else {
                    
                    req.decode = decode

                    //In fault to see the session expired 

                    if (decode.ip == this.ip(req))
                        next()
                    else
                    expiredSessionMessage(res)
                }
            }
        )
    }

} */