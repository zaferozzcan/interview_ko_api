require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

// CORS
const whitelist = ["http://localhost:3040", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

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

// controllers
const technology_controller = require("./controllers/technology_controller");
const { use } = require("./controllers/technology_controller");
app.use("/t", technology_controller);

const user_controller = require("./controllers/user_controller");
app.use("/u", user_controller);

app.listen(3040, () => {
  console.log("server is running on port 3040");
});
