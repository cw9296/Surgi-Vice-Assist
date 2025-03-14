//setting up the express router
const express = require('express');
const userController = require('../controllers/userController');

//router for user operations
const router = express.Router();

//generic route
router.get('/', userController.sendResponse);

//Defining routes to functions
router.post('/createAccount', userController.createAccount); //Handles authentication of a user.

module.exports = router;