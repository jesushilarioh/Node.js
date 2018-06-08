console.log("Starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  // console.log("Adding note", title, body);

  let notes = [];
  let note = { // Represent new note
    title,
    body
  };

  // (Sychronous) file read
  try {
    let notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (err) {

  }

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log("Fetching all notes");
}

const getNote = (title) => {
  console.log("Reading Note: ", title);
};

const removeNote = (title) => {
  console.log("Removing Note: ", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};