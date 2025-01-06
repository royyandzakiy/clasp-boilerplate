function getDataFromDataSource(projectKey) {
  const apiUrl = `https://company.atlassian.net/rest/api/2/issue/${projectKey}`; // this example uses atlassian.net, but it could be anything
  
  const options = {
    method: "GET",
    headers: {
      "Authorization": `Basic ${Utilities.base64Encode("username@company_email.com:api_access_token")}`,
      "Accept": "application/json"
    }
  };

  const response = UrlFetchApp.fetch(apiUrl, options);

  return response.getContentText();
}

function formatData(dataRaw) {
  const data = JSON.parse(dataRaw);
    
  // Map response to desired JSON structure
  const formattedData = {
    projectKey: data.key,
    projectSummary: data.fields.summary,
  };

  return formattedData;
}

// Make function available for Apps Script and `gas-local`
if (typeof global !== 'undefined') {
  global.getDataFromDataSource = getDataFromDataSource;
  global.formatData = formatData;
}