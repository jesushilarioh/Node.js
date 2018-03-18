// create an instance of fs into (fs)
const fs = require('fs');

// Input contents of input.txt to (data) through (fs) instance
const data = fs.readFileSync('input.txt');

// Log (data) as a string onto the console.
console.log(data.toString());
// Explain that the program has ended.
console.log("Program Ended");
