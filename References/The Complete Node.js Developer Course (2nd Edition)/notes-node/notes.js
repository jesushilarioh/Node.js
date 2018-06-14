console.log("Starting notes.js");

const fs = require("fs");

// LOCAL FUNCTIONS
// LOCAL FUNCTIONS
// LOCAL FUNCTIONS
const fetchNotes = () => {
  // (Sychronously) file read
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

// EXPORT FUNCTIONS
// EXPORT FUNCTIONS
// EXPORT FUNCTIONS
const addNote = (title, body) => {
  // console.log("Adding note", title, body);

  let notes = fetchNotes();
  let note = { // Represent new note
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    // UPDATE NOTES with new note with .push()
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log("Fetching all notes");
}

const getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
  // console.log("Reading Note: ", title);
};

const removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;

};

const logNote = (note) => {
  // Break on this line and use repl to output note
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};