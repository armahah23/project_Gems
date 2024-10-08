const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js'); 

// Route for creating a new user
router.post('/usignup', userController.createUser);

// Route for user login
router.post('/login', userController.postUser); 

// Route to get user by ID (optional)
router.get('/user/?:id', userController.getUser);

// Route to post payment Details
router.post('/payment', userController.postPayment);
 
module.exports = router;
