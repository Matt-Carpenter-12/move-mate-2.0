const router = require('express').Router();
const { createUser, getSingleUser, login } = require('../../controllers/user-controllers');
const { authMiddleware } = require('../../utils/auth');
const User = require('../../models/User');

//Route for Signup
router.route('/signup').post(createUser);

//Route for Login
router.route('/login').post(login);

//Route for profile (requires authentication middleware)
router.route('/me').get(authMiddleware, getSingleUser);


//TODO: make a route for /api/users/:id/form
//make route that creates a new formSchema based on req.body from client and add to User model based on user Id
router.post('/:id/form', async (req,res) => {
  try{
    const userId = req.params.id;
    const form = req.body

    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message: 'User not found.'});
    }
    user.form.push(form);
    await user.save;
    res.status(200).json({ message: 'Form data added successfully', user });

  } catch (error) {
    res.status(500).json({ message: 'server error'});
    console.error(error)
  }
  
}) 

module.exports = router;
