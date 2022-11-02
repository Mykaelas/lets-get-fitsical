const router = require("express").Router();
const {
  saveWorkout,
  deleteWorkout,
} = require("../../controllers/workout-controller");

router.route("/").get(authMiddleware, searchWorkouts);

router.route("/workouts/:workoutId").delete(authMiddleware, saveWorkout);
router.route("/workouts/:workoutId").delete(authMiddleware, deleteWorkout);

module.exports = router;
