function generateRandomNumbers(numRows, numCols) {
  // Generate random numbers for each row
  var data = [];
  for (var i = 0; i < numRows; i++) {
    var row = [];
    for (var j = 0; j < numCols; j++) {
      row.push(Math.floor(Math.random() * 100)); // Generates a random number between 0 and 99
    }
    data.push(row);
  }

  return data;
}

function changeNumberSheet(randomNumberList) {
  // Get the active sheet
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1GrbSH2AoUBIbndqOf6yB3LvCTnx49-3tWq242SZxwdI/edit").getSheets()[0];

  // Clear the sheet before running the script
  sheet.clear();

  // Add the generated data to the sheet
  const numRows = randomNumberList.length;
  const numCols = randomNumberList[0].length;
  sheet.getRange(1, 1, numRows, numCols).setValues(randomNumberList);

  // Add a timestamp of execution in the next available column (last column)
  var timestamp = new Date();
  sheet.getRange(numRows + 1, numCols + 1).setValue('Timestamp: ' + timestamp);
}

// Make function available for Apps Script and `gas-local`
if (typeof global !== 'undefined') {
  global.generateRandomNumbers = generateRandomNumbers;
}