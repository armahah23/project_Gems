const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route for creating a new booking
router.post('/booking', bookingController.createBooking);

// Route for getting user details
router.get('/user/:userId', bookingController.getUserDetails);

module.exports = router;