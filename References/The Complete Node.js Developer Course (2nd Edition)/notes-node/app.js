const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
}
const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
}
// const argv = yargs.argv;
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help()
  .argv;

const command = argv._[0]; // Same as --> process.argv[2];

// console.log("Command: ", command);
// console.log("Process:", process.argv);
// console.log("Yargs:", argv);

// ADD
// ADD
// ADD
if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }

// LIST
// LIST
// LIST
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Pinting ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));

// READ
// READ
// READ
} else if (command === "read") {
  let note = notes.getNote(argv.title)
  if (note) {
    console.log("Note read");
    notes.logNote(note);
  } else {
    console.log("Note not read");
  }

// REMOVE
// REMOVE
// REMOVE
} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "Note removed" : "Note not found";
  console.log(message);

// ELSE
// ELSE
// ELSE
} else {
  console.log("Command not recognized");
}