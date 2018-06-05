console.log("Starting notes.js");

const addNote = (title, body) => {
  console.log("Adding note", title, body);
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