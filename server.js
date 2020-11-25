require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const db = mongoose.connection;
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("👉🏼The connection with mongod is established🤟🏼🎼");
  }
);
// database error checks
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

app.get("/", (req, res) => {
  res.send("hello world");
});

// controllers
const technology_controller = require("./controllers/technology_controller");
const { use } = require("./controllers/technology_controller");
app.use("/t", technology_controller);

const user_controller = require("./controllers/user_controller");
app.use("/u", user_controller);

app.listen(3040, () => {
  console.log("server is running on port 3040");
});
