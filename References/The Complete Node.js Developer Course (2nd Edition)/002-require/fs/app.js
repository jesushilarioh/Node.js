console.log("Starting app.");

const fs = require("fs");

// with callback (asychronously)
fs.appendFile("greetings.txt", "Hello World!\n", (err) => {
  if (err) {
    console.log(err);
  }
});

// without callback (sychronously)
fs.appendFileSync("greetings.txt", "Hello World!\n");