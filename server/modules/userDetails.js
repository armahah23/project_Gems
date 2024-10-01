const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: false,
  },

  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
});

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;
