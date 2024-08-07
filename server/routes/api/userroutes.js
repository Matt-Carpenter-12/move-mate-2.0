const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controllers');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

//TODO: make a route for /api/users/:id/form
//make route that creates a new formSchema based on req.body from client and add to User model based on user Id 

module.exports = router;
