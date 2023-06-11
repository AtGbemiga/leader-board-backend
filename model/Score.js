const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    minlength: [3, "Must be 3 or more characters"],
    maxlength: [25, "Can't be more than 25 characters"],
  },
  exactScore: {
    type: Number,
    min: [1, "Must be at least 1"],
    max: [1000, "Can't exceed 1000"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Score", ScoreSchema);
