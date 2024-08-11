const router = require('express').Router();
const userRoutes = require('./userroutes');
const workoutRoutes = require('./workouts');

router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;
