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



module.exports = router;
