const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note must have a title"],
  },
  body: {
    type: String,
    required: [true, "Note must have a body"],
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
