const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    vehiclemake: {
        type: String,
        required: true,
    },
    vehicletype: {
        type: String,
        required: true,
    },
    vehiclenumber: {
        type: String,
        required: true,
    },
    manufecturedyear: {
        type: String,
        required: true,
    },
    preferreddate: {
        type: String,
        required: true,
    },
    preferredtime: {
        type: String,
        required: true,
    },
    vehicleownername: {
        type: String,
        required: true,
    },
    mobilenumber: {
        type: String,
        required: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;