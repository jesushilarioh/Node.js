const fs = require("fs");

/* Example 1 loading a file asychronously*/
// Non-Blocking
fs.readFile("lorem.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log(data);
})


/* Example 2: loading a file sychronously */
// Blocking
try {
  let data = fs.readFileSync("lorem.txt", "utf8");
  console.log(data);
} catch (error) {
  console.log("Error: ", error.stack);
}