
const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    muscleGroup: String,
    description: String,
    instuctions: String,
});

module.exports = mongoose.model("workout", workoutSchema);