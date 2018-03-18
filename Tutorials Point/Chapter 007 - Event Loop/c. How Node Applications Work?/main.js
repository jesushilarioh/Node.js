// Instance of fs into (fs)
const fs = require("fs");

// async function: purpose to read file 'input.txt'
fs.readFile('../../Chapter 006 - Callback Concept/b. Blocking Code Example/input.txt', (err, data) => {
	// Decision (if) statement: if an error occurs while reading file
	if (err) {
		console.log(err.stack);
		return;

	}
	console.log(data.toString());
	
});
console.log("Program Ended");
