const { google } = require("googleapis");

exports.getMetaData = async (req, res, next) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: [process.env.SCOPES],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const values = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SPREADSHEETS_API,
    range: "ordens",
  });

  const dataModel = {
    id_negociation: "",
    title_type: "",
    nominal_value: "",
    cupon: "",
    createdAt: "",
    maturity_date: "",
    last_cotation: "",
    shop: {
      amount: "",
      price: "",
    },
    sell: {
      amount: "",
      price: "",
    },
  };

  const data_list = [];

  for (let i = 2; i < values.data.values.length; i++) {

    const data = values.data.values[i];

    if (values.data.values[i].length > 0) {

      dataModel.id_negociation = data[0].toString().trim();

      dataModel.title_type = data[1];

      dataModel.nominal_value = data[2];

      dataModel.cupon = data[3];

      dataModel.createdAt = data[4];

      dataModel.maturity_date = data[5];

      dataModel.last_cotation = data[6];

      dataModel.shop.price = data[7];

      dataModel.shop.amount = data[8];

      dataModel.sell.price = data[9];

      dataModel.sell.amount = data[10];

      data_list.push(dataModel);

    }
  }

  res.status(200).send(data_list);
};
