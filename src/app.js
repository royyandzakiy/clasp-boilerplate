function app() {
    // example 1: generating a sheet with random numbers
    changeNumberSheet(generateRandomNumbers(10,15));
    
    // example 2: acquiring data from jira, then reformatting the data
    // console.log(JSON.stringify(getDataFromDataSource("SIDH-123"))); // this will obviously fail because of the wrong atlassian url, username, API access token
}