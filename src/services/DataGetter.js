function getDataFromDataSource() {
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

  // Set up the options for the request
  const options = {
    method: 'get', // HTTP GET request
    muteHttpExceptions: true, // Prevent errors from throwing exceptions
    headers: {} // No authorization headers needed
  };

  const response = UrlFetchApp.fetch(apiUrl, options);

  return response.getContentText();
}

function jokeStatement(dataString) {
  const data = JSON.parse(dataString);
    
  // Map response to desired JSON structure
  const joke = `${data.setup} ${data.punchline}`;

  return joke;
}

function printJoke() {
  return jokeStatement(getDataFromDataSource());
}

// Make function available for Apps Script and `gas-local`
if (typeof global !== 'undefined') {
  global.getDataFromDataSource = getDataFromDataSource;
  global.jokeStatement = jokeStatement;
  global.printJoke = printJoke;
}