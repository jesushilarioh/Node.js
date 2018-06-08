console.log("Starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  // console.log("Adding note", title, body);

  let notes = [];
  let note = { // Represent new note
    title,
    body
  };

  // FETCH NOTES
  // (Sychronously) file read
  try {
    let notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (err) {

  }

  // const duplicateNotes = notes.filter((note) => {
  //     return note.title === title; // Bool value
  // });
  // Same as vvvvvvv

  // (duplicateNotes) is a Boolean value
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    // UPDATE NOTES with new note with .push()
    notes.push(note);
    // SAVE NOTES by writing to file
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