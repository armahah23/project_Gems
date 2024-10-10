const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');

// Route for creating a new mechnic
router.post('/esignup', mechanicController.createMechanic);

// Route for user login
router.post('/login', mechanicController.postMechanic); 

// Route to get user by username or email
router.get('/user/:identifier', mechanicController.getMechanic);

module.exports = router;
