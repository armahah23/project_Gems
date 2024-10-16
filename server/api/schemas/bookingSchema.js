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
    model: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    mechanicId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mechanic',
        required: true,
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;