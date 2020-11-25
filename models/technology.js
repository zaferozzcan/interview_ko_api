const mongoose = require("mongoose");
const technologySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  area: { type: String, required: true },
  description: { type: String },
  timesClicked: { type: Number, default: 0 },
  question: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question",
    },
  ],
});

const Technology = mongoose.model("technology", technologySchema);

module.exports = Technology;
