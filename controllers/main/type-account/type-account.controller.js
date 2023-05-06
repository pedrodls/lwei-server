const { TypeAccount } = require("../../../models/models");



exports.all = async (req, res) => {

    const typeAccount = await TypeAccount.findAll();

    return  res.json(typeAccount);
}

exports.create = async (req, res) => {
    
    const typeAccount = await TypeAccount.create(req.body).catch(err => data);

    res.json(typeAccount)

}