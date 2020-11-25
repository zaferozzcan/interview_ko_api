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
      type: Schema.Types.ObjectId,
      ref: "technology",
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
