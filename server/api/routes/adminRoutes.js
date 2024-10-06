const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); // Import the controller

// Route with optional 'id' parameter, calling the controller function
// router.get('/user/:id?', userController.getUser);

// Route for creating a new user
router.post('/asignup', adminController.createAdmin);

module.exports = router;