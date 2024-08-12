const { Workout } = require("../models/Workout");

module.exports = {
  async getWorkouts(req, res) {
    try {
      const allworkouts = await Workout.find();
      res.json(allworkouts);
    } catch (error) {
      res.status(400).json(error);
      console.error(error.message);
    }
  },
  async createWorkout(req, res) {
    const workoutBody = await Workout.create(req.body);
    res.json(workoutBody);
  },
};
