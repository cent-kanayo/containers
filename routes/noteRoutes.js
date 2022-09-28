const { Router } = require("express");
const Note = require("../model/model");

const router = Router();

router.get("/", async (req, res) => {
  console.log("Hello");
  try {
    const note = await Note.find();
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({
      msg: "Something went wrong.",
    });
  }
});

router.post("/", async (req, res) => {
  console.log("Hello");
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({
      msg: "Something went wrong.",
    });
  }
});

module.exports = router;
