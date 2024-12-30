function generateRandomNumbers() {
  // Get the active sheet
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit").getSheets()[0];
  
  // Clear the sheet before running the script
  sheet.clear();
  
  // Set the number of rows and columns for random number generation
  var numRows = 10; // Change as needed
  var numCols = 5; // Change as needed
  
  // Generate random numbers for each row
  var data = [];
  for (var i = 0; i < numRows; i++) {
    var row = [];
    for (var j = 0; j < numCols; j++) {
      row.push(Math.floor(Math.random() * 100)); // Generates a random number between 0 and 99
    }
    data.push(row);
  }
  
  // Add the generated data to the sheet
  sheet.getRange(1, 1, numRows, numCols).setValues(data);
  
  // Add a timestamp of execution in the next available column (last column)
  var timestamp = new Date();
  sheet.getRange(numRows + 1, numCols + 1).setValue('Timestamp: ' + timestamp);
}

// Make function available for Apps Script and `gas-local`
if (typeof global !== 'undefined') {
  global.generateRandomNumbers = generateRandomNumbers;
}