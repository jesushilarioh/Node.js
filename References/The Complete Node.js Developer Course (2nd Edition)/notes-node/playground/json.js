// let obj = {
//   name: "Jesus"
// };
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
//
//
// let personString = '{"name": "Jesus", "age": "35"}';
//
// let person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

let originalNote = {
  title: "Some Title",
  body: "Qui pronus est ad misericordiam"
};

let originalNoteString = JSON.stringify(originalNote)

console.log(typeof originalNoteString);
console.log(originalNoteString);

fs.writeFileSync("notes.json", originalNoteString);

let noteString = fs.readFileSync("notes.json");
let note = JSON.parse(originalNoteString);

console.log(typeof note);
console.log(note.title);