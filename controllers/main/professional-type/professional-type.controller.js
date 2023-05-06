const { ProfessionalType } = require("../../../models/models");



exports.all = async (req, res) => {

    const professionalType = await ProfessionalType.findAll();

    return  res.json(professionalType);
}

exports.create = async (req, res) => {
    
    const professionalType = await ProfessionalType.create(req.body).catch(err => data);

    res.json(professionalType)

}