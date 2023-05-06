const { PersonalData } = require("../../../../models/models")


exports.all = async (req, res) => {

    const personalData = await PersonalData.findAll();

    return personalData;
}

exports.create = async (req, res) => {
    
    const personalData = await PersonalData.create(req.body);


}