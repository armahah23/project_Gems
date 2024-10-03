const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./modules/userDetails'); // Import the user schema

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/autocare')
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("MongoDB connection error:", err));

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name: name,
      email: email,
      password: password
    });

    await newUser.save();
    console.log("User signed up:", newUser); // Logging the user data to the console
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error signing up:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
