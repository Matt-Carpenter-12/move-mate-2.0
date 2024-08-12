const router = require("express").Router();
const { Workout } = require("../../models/Workout");
const {
  getWorkouts,
  createWorkout,
} = require("../../controllers/workoutControllers");

router.route("/").get(getWorkouts).post(createWorkout);

router.post("/workoutId/exercises", async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.workoutId },
      { $addToSet: { exercises: req.body } },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ message: "workout not found " });
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.error(error);
  }
});
router.post("");
module.exports = router;
