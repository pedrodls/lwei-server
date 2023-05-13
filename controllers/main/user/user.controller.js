const passHash = require("../../../app/generate/passHash");

const {
  User,
  ProfessionalData,
  PersonalData,
  AddressData,
  TypeAccount,
} = require("../../../models/models");

const bcrypt = require("bcrypt");

const dataProvider = require("../../../providers/google/auth.connection");

exports.all = async (req, res) => {};

const invalidCredencial = (res) => {
  return res.status(404).json({
    error: true,
    message: "Credenciais Inválidas",
    status: 404,
  });
};

const bloquedCredencial = (res) => {
  return res.status(404).json({
    error: true,
    message: "Credenciais Bloqueadas",
    status: 404,
  });
};

exports.authWithGoogle = async (req, res, next) => {
  await dataProvider.authConnect(req, res, next);
};

exports.authentication = async (req, res, next) => {
  let countUserFound = 0;

  const users = await User.findAll({
    where: {
      email: req.body.email,
      isActive: true,
    },
    include: [
      {
        model: TypeAccount,
        as: "typeAccount",
      },
      {
        model: PersonalData,
        as: "personalData",
      },
    ],
  })
    .then((u) => u)
    .catch((err) => []);

  if (users.length === 0) invalidCredencial(res);
  else
    users.forEach(async (user) => {
      countUserFound++;

      if (
        (await bcrypt.compare(req.body.password, user.password)) &&
        req.body.email === user.email
      ) {
        if (user.isActive) {
          req.user = user;

          next();
        } else bloquedCredencial(res);
      } else if (countUserFound === users.length) invalidCredencial(res);
    });
};

exports.create = async (req, res) => {
  let { professionalData, personalData, addressData } = req.body;

  req.body.password = await passHash().then((data) => {
    req.body.realPassword = data[0].password;

    return data[0].passHashed;
  });

  professionalData = await ProfessionalData.create(professionalData);

  personalData = await PersonalData.create(personalData);

  addressData = await AddressData.create(addressData);

  req.body.professionalDataId = professionalData.id;
  req.body.personalDataId = personalData.id;
  req.body.addressDataId = addressData.id;

  const user = await User.create(req.body).catch((err) => err);

  console.log(req.body.realPassword);

  return res.json(user);
};
