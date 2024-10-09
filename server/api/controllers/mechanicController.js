const mechanic = require("../schemas/mechanicSchema.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Create a new mechanic
exports.createMechanic = async (req, res) => {
  const { username, password, email, phone, firstname, lastname, idnumber, address } = req.body;

  try { 
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new instance of the mechanic model
    const newMechanic = new mechanic({
      username,
      password: hashedPassword, // Save hashed password
      email,
      phone,
      firstname,
      lastname,
      idnumber,
      address
    });
    
    // Save the mechanic to the database
    await newMechanic.save();
    
    res.status(201).send({ message: 'Mechanic profile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create mechanic profile' });
  }
};


// Login user
exports.postUser = async (req, res) => {
  const { username, password } = req.body;

  // Check if input fields are empty
  if (!username || !password) {
    return res.status(400).json({
      status: "FAILED",
      message: "Empty input fields",
    });
  }

  try {
    // Find the mechanic by username
    const data = await Mechanic.findOne({ username: username }); // Use findOne instead of find

    if (data) {
      const hashedPassword = data.password;

      // Compare the provided password with the stored hashed password
      const result = await bcrypt.compare(password, hashedPassword);

      if (result) {
        return res.status(200).json({
          status: "SUCCESS",
          message: "Login successful",
          data: data,
        });
      } else {
        return res.status(401).json({
          status: "FAILED",
          message: "Invalid password",
        });
      }
    } else {
      return res.status(404).json({
        status: "FAILED",
        message: "Invalid username",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "FAILED",
      message: "An error occurred during login",
    });
  }
};


//   try {
//     const user = await Mechanic.findOne({ username, password });
//     if (!user) {
//       return res.status(400).send({ error: 'Invalid login credentials' });
//     }
    
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send({ error: 'Invalid login credentials' });
//     }
    
//     const token = jwt.sign({ _id: user._id }, 'secret'); // Consider moving the secret to an env variable
//     res.send({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).send({ error: 'Server error' });
//   }
// };


// Controller functions for handling requests
exports.getUser = async (req, res) => {
  const { id: userId } = req.params;  // Corrected destructuring

  try {
      if (userId) {
          // Fetch the user by ID from the database
          const user = await Mechanic.findById(userId);
          if (!user) {
              return res.status(404).send({ error: 'User not found' }); // Handle user not found
          }
          res.send(user); // Return the user details
      } else {
          // Fetch all users if no ID is provided
          const users = await Mechanic.find(); // Fetch all users
          res.send(users); // Return the list of users
      }
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Server error' }); // Handle server errors
  }
};
