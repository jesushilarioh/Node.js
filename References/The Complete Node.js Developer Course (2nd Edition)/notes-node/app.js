console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
const command = argv._[0]; // Same as --> process.argv[2];

console.log("Command: ", command);
// console.log("Process:", process.argv);
console.log("Yargs:", argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }

} else if (command === 'list') {
  notes.getAll();

} else if (command === "read") {
  let note = notes.getNote(argv.title)
  if (note) {
    console.log("Note read");
    notes.logNote(note);
  } else {
    console.log("Note not read");
  }

} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "Note removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}