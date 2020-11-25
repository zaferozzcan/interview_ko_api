const express = require("express");
const User = require("../models/user");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  User.find()
    .populate("technology")
    .exec(function (error, foundOrders) {
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(200).json(foundOrders);
      }
    });
});

userRouter.post("/new", (req, res) => {
  User.create(req.body, (error, data) => {
    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(400).json(error);
    }
  });
});

module.exports = userRouter;
