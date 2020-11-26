const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  User.find({}).exec(function (error, foundOrders) {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(200).json(foundOrders);
    }
  });
});

userRouter.post("/login", (req, res) => {
  // authenticate user

  const email = req.body.email;
  const user = { email: email };
  const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

userRouter.post("/signup", (req, res) => {
  User.create(req.body, (error, data) => {
    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(400).json(error);
    }
  });
});

module.exports = userRouter;
