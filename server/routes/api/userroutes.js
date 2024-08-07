const router = require('express').Router();
const { createUser, getSingleUser, login } = require('../../controllers/user-controllers');
const { authMiddleware } = require('../../utils/auth');


//Route for Signup
router.route('/signup').post(createUser);

//Route for Login
router.route('/login').post(login);

//Route for profile (requires authentication middleware)
router.route('/me').get(authMiddleware, getSingleUser);


//TODO: make a route for /api/users/:id/form
//make route that creates a new formSchema based on req.body from client and add to User model based on user Id 

module.exports = router;
