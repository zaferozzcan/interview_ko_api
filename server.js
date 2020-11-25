const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3040, () => {
  console.log("server is running on port 3040");
});
