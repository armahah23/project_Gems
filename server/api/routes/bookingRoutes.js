const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route for creating a new booking
router.post('/booking', bookingController.createBooking);

// Route for getting user details
router.get('/user/:userId', bookingController.getUserDetails);
router.get('/booking/:userId', bookingController.getBooking);
router.get('/bookingById/:bookingId', bookingController.bookingById);
router.get('/bookingForMechanic/:userId', bookingController.bookingForMechanic);
router.post('/acceptBooking/:bookingId', bookingController.acceptBooking);
router.post('/rejectBooking/:bookingId', bookingController.rejectBooking);

module.exports = router;