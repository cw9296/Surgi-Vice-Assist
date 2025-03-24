//setting up the express router
const express = require('express');
const profileController = require('../controllers/profileController');

//router for user operations
const router = express.Router();

//generic route
router.post('/retrieve', profileController.PickUpWhereLeftOff);


module.exports = router;