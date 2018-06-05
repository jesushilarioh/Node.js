console.log("Starting notes.js");

module.exports.age = 35;
module.exports.addNote = () => {
  console.log("addNote");
  return "New note"
};
// console.log(module);

module.exports.addition = (a, b) => {
  return a + b;
};