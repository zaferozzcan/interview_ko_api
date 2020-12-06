const express = require("express");

const Subject = require("../models/subjectModel");

const subjectRouter = express.Router();

subjectRouter.get("/:id", (req, res) => {
  Subject.findOne({ userId: req.params.id }, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ error: err.message });
    }
  });
});

subjectRouter.post("/new/", (req, res) => {
  console.log("new subj body", req.body);
  Subject.create(req.body, (err, data) => {
    if (!err) {
      return res
        .status(201)
        .json({ message: "new subject's created!", data: data });
    } else {
      return res.status(400).json({ error: err.message });
    }
  });
});

module.exports = subjectRouter;
