//setting up the express router
const express = require('express');
const authController = require('../controllers/authController');


//router for auth operations
const router = express.Router();

//Defining routes to functions
router.put('/', authController.authUser); //Handles authentication of a user.

module.exports = router;