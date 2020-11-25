const express = require("express");
const Technology = require("../models/technology");
const Question = require("../models/question");

const technologyRouter = express.Router();

// get route
technologyRouter.get("/", (req, res) => {
  Technology.find({})
    .populate("question")
    .exec(function (error, foundOrders) {
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(200).json(foundOrders);
      }
    });
});

technologyRouter.post("/:new", (req, res) => {
  Technology.create(req.body).exec((error, data) => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = technologyRouter;
