const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: { type: String, unique: true, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  technology: [
    {
      name: { type: String, required: true, unique: true },
      area: { type: String, required: true },
      description: { type: String },
      timesClicked: { type: Number, default: 0 },
      questions: [
        {
          question: { type: String, min: 4, required: true, unique: true },
          answer: { type: String, required: true },
          tech: { type: String, required: true },
          level: { type: String, required: true },
          source: { type: String },
          timesFaved: { type: Number, default: 0 },
        },
      ],
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
