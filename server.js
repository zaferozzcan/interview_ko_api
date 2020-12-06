require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3030;

// DATABASE
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

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", require("./routers/userRouter"));
app.use("/subjects", require("./routers/subjectRouter"));

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
