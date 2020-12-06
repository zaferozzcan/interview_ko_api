const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  area: { type: String, required: true },
  userId: { type: String, required: true },
  timesClicked: { type: Number, default: 0 },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
