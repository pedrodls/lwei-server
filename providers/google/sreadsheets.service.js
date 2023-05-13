const { google } = require("googleapis");


exports.getMetaData = async (req, res, next) => {

  const auth = new google.auth.GoogleAuth({
    keyFile:'credentials.json',
    scopes: [process.env.SCOPES],
  });

  const sheets = google.sheets({ version: "v4", auth });
  
  const values = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SPREADSHEETS_API,
    range: 'ordens'
  })

const dataModel = {
  "id_negociacao": '',
  "titulo": '',
  "valor_nominal": '',
  "taxa_cupao": '',
  "data_emissao": '',
  "data_maturidade": '',
  "ultima_cotacao": '',
  "compra": {
    "Quantidade": '',
    "Preço": ''
  },
  "venda": {
    "Quantidade": '',
        "Preço": ''
  }
} 


for (let i = 0; i < values.data.values.length; i++) {
  
  if(i > 1){
    if(values.data.values[i].length > 0){
      const data = values.data.values[i];

      dataModel.id_negociacao = data[0]
      dataModel.titulo = data[1]

      console.log(dataModel);

    }
  }
  
}
  res.status(200).send(values.data.values);

};
