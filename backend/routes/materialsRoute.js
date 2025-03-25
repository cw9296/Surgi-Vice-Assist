//setting up the express router
const express = require('express');
const materialsController = require('../controllers/materialsController');

//router for user operations
const router = express.Router();

//generic route
router.post('/educational', materialsController.getEducationalMaterials);


module.exports = router;