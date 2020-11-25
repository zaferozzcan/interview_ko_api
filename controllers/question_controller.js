const express = require("express");
const Question = require("../models/question");
const questionRouter = express.Router();

questionRouter.get("/", (req, res) => {
  Question.find({}, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(400).json(err);
    }
  });
});

module.exports = questionRouter;
