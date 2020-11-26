const mongoose = require("mongoose");
const technologySchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  area: { type: String, required: true },
  description: { type: String },
  timesClicked: { type: Number, default: 0 },
});

const Technology = mongoose.model("technology", technologySchema);

module.exports = Technology;
