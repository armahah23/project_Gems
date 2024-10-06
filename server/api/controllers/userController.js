const user = require("../schemas/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Create a new user
exports.createUser = async (req, res) => {
  const { username, password, email, phone, firstname, lastname, address } = req.body;

  try { 
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new instance of the user model
    const newUser = new user({
      username,
      password: hashedPassword, // Save hashed password
      email,
      phone,
      firstname,
      lastname,
      address
    });
    
    // Save the mechanic to the database
    await newUser.save();
    
    
    res.status(201).send({ message: 'Customer profile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create customer profile' });
  }
};