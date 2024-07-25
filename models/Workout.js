const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model("Workout", workoutSchema);
