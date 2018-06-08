console.log("Starting app.");

const fs = require("fs");
const os = require("os");

let user = os.userInfo();
// console.log(user);

// con callback
fs.appendFile("greetings.txt", "Hello " + user.username + "!\n", (err) => {
  if (err)
    console.log(err);
});
// sin callback
fs.appendFileSync("greetings.txt", `Hello ${user.username}\n`);