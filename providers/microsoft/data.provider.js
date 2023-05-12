require('isomorphic-fetch')
const { Client } = require('@microsoft/microsoft-graph-client');
const { readFileSync } = require('fs');

// Replace with your app registration details and access token
const filePath = '/lwei-teste/lwei.xlsx';

const getToken = require('./oauth.graphApi')

module.exports = async (req, res) => {
    // Create Graph client instance
  
    let accessToken = await getToken().then(data => data)

    const graphClient = Client.init({
      authProvider: (done) => {
        done(null, accessToken.token);
      },
    });
  
    // Construct Excel file URL
    const driveId = 'me'; // Use 'me' for OneDrive personal or 'users/{user_id}' for OneDrive for Business
    const url = `drives/${driveId}/root:${filePath}:/content`;
  
    // Make GET request to Excel file URL
    const response = await graphClient.api(url).get();
  
    // Parse Excel file content and extract data
    const fileContent = readFileSync(response.body).toString();
    // You can use a library like 'exceljs' to parse the Excel file content
  
    console.log(fileContent);
  
  };
