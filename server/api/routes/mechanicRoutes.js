const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');

// Route for creating a new mechnic
router.post('/esignup', mechanicController.createMechanic);

// Route for user login
router.post('/login', mechanicController.postUser); 

// Route to get user by ID (optional)
router.get('/login', mechanicController.getUser);

module.exports = router;
