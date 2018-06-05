console.log("Starting app.js");

const fs = require("fs");
const os = require("os");

const notes = require("./notes.js");

const user = os.userInfo();
const res = notes.addNote();

// console.log(res);
console.log(notes.addition(7, -3));

// let greeting = `Hello ${user.username}! You are ${notes.age}.\n`;
//
// fs.appendFile("greetings.txt", greeting, (err) => {
//   if (err)
//     throw err;
// });