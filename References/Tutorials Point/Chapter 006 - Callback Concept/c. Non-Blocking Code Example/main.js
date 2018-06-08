// Create an instance of fs into (fs)
const fs = require('fs');

// Use readFile() method: 1st arg = 'file path', 2nd arg = callback function
fs.readFile('../b. Blocking Code Example/input.txt', (err, data) => {
	// Decisiont (if) statement
	if (err)
		return console.error(err);
	
	// Log (data), 2nd callback arg, from txt file to console as a string.
	console.log(data.toString());
});

// Explain program termination
console.log("Program Ended");
