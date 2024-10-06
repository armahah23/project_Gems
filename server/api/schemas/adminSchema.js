const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;