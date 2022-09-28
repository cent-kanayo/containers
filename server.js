const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/config");
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect(config.MONGODB_CONNSTRING)
  .then(() => {
    console.log("Connected to dv");
    app.listen(PORT, function () {
      console.log("Your node js server is running on PORT:", PORT);
    });
  })
  .catch((e) => console.log(e));

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const Note = mongoose.model("Note", noteSchema);
app.get("/", function (req, res) {
  res.json({ hello: "world" });
});

app.post("/notes", async function (req, res) {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (error) {
    console.log(error);
  }
});

app.get("/notes", async function (req, res) {
  try {
    const note = await Note.find();
    res.json(note);
  } catch (error) {
    console.log(error);
  }
});
