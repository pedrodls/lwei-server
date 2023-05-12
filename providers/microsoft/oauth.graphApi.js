const { ClientSecretCredential } = require("@azure/identity");

// Replace with your Azure AD tenant ID, client ID, and client secret

const clientId = "25e18530-c798-4e3b-bbe4-b45513e46bee";
const clientSecret = "og28Q~D.A~DlphV_5hERjNiIo-KZjJUZ0ZMtBbZe";
const tenantId = "f8cdef31-a31e-4b4a-93e4-5f571e91255a";

module.exports = async () => {

  const credential = new ClientSecretCredential(
    tenantId,
    clientId,
    clientSecret
  );

  const token = await credential.getToken(
    "https://graph.microsoft.com/.default"
  ).then(data => data);

  return token;
};
