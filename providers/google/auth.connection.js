const { google } = require("googleapis");

const fs = require("fs");

const creds = fs.readFileSync("credentials.json");

async function authConnection() {

  const auth = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );

  auth.setCredentials(JSON.parse(creds));

  return auth;
}

exports.googleOauth = async (req, res, next) => {

  const auth = await authConnection();

  const { code } = req.query;

  const {tokens} = await auth.getToken(code)

  auth.setCredentials(tokens)

  fs.writeFileSync("credentials.json", JSON.stringify(tokens))

  
  res.send(tokens);

};

exports.authConnect = async (req, res, next) => {
  const auth = await authConnection();

  const url = auth.generateAuthUrl({
    acessType: "offline",
    scope: ["https://www.googleapis.com/auth/userinfo.profile"],
  });

  res.redirect(url)
};
