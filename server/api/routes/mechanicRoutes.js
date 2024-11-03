const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');

// Route for creating a new mechanic
router.post('/esignup', mechanicController.createMechanic);
router.get('/bookingSlot/getAllMechanics', mechanicController.getAllMechanics);

// Route for getting mechanic count
router.get('/mechanicCount/getAllMechanics', mechanicController.getAllMechanicsCount);

module.exports = router;
