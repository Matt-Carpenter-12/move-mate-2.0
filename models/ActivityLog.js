const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  activity: { type: String, required: true },
  duration: Number,
});

module.exports = mongoose.model("ActivityLog", activityLogSchema);
