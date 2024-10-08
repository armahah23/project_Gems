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

  firstname: {
    type: String,
    required: true,
    trim: true,  // Adding trim to remove extra spaces
  },

  lastname: {
    type: String,
    required: true,
    trim: true,  // Adding trim to remove extra spaces
  },

  phone: {
    type: String,
    required: true,
    trim: true,  // Adding trim to remove extra spaces
  },

  address: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zipCode: { type: String, trim: true },
    country: { type: String, trim: true },
  },
});

// Create the user model
const User = mongoose.model("User", userSchema);

module.exports = User;