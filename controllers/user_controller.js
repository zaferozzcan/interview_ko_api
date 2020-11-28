const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
  // const loggingUser = User.findOne({ email: req.body.email });
  // console.log("logging user", loggingUser);
  // if (loggingUser == null) {
  //   res.status(400).send("Cannot find the user");
  // }
  // try {
  //   if (bcrypt.compareSync(req.body.password, loggingUser.password)) {
  //     res.send("Success");
  //     console.log("user logged in");
  //   } else {
  //     res.send("Password did not match!");
  //   }
  // } catch {
  //   res.status(500).send();
  // }

  User.findOne({ email: req.body.email }, (err, data) => {
    if (err) {
      console.log(err);
      res.send(400).json(err);
    } else {
      if (data) {
        console.log(data);
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json("Success");
          const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
          res.send({
            token: token,
            user: { id: user._id, name: user.name },
          });
          // create token
        } else {
          res.send("passport did not match");
        }
      } else {
        res.send(400).send("cannot fond user");
      }
    }
  });

  // create token
  // const email = req.body.email;
  // const user = { email: email };
  // const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
  // res.json({ accessToken: accessToken });
});

userRouter.post("/signup", (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (error, data) => {
    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(400).json(error);
    }
  });
});

module.exports = userRouter;
