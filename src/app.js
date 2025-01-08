
function app() {
    // example 1: generating a sheet with random numbers
    runRandomGenerator(10,15); // spreadsheet link: https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit?gid=0#gid=0
    
    // example 2: acquiring data from jira, then reformatting the data
    console.log(printJoke()); // this will obviously fail because of the wrong atlassian url, username, API access token
}