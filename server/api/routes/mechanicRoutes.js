const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');


// Route for creating a new mechnic
router.post('/esignup', mechanicController.createMechanic);
router.get('/getAllMechanics', mechanicController.getAllMechanics);


module.exports = router;
