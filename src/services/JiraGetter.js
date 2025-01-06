function getJiraProjectData(projectJiraCode) {
    // REFACTOR idea: move API hit in listTasksWithSubtasks here
    const jiraBaseUrl = `https://company.atlassian.net`;
    const apiUrl = `${jiraBaseUrl}/rest/api/2/issue/${projectJiraCode}`;
    
    const options = {
      method: "GET",
      headers: {
        "Authorization": `Basic ${Utilities.base64Encode("username@company.com:api_access_token")}`,
        "Accept": "application/json"
      }
    };
  
    const response = UrlFetchApp.fetch(apiUrl, options);
    const data = JSON.parse(response.getContentText());

    
  // Map response to desired JSON structure
  const formattedData = {
    key: data.key,
    summary: data.fields.summary,
  };

  return formattedData;
}