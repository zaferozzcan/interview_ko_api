const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: { type: String, min: 4, required: true, unique: true },
  answer: { type: String, required: true },
  tech: { type: String, required: true },
  level: { type: String, required: true },
  source: { type: String },
  timesFaved: { type: Number, default: 0 },
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
