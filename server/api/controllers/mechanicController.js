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
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    // Check if input fields are empty
    if (!username || !password) {
      return res.json({
        status: "FAILED",
        message: "Empty input fields",
      });
    }
  
    try {
      // Find the mechanic by username
      const data = await mechanic.find({ username: username });
  
      if (data.length) {
        const hashedPassword = data[0].password; // Corrected the variable name to 'hashedPassword'
        
        // Compare the provided password with the stored hashed password
        const result = await bcrypt.compare(password, hashedPassword);
  
        if (result) {
          return res.json({
            status: "SUCCESS",
            message: "Login successful",
            data: data,
          });
        } else {
          return res.json({
            status: "FAILED",
            message: "Invalid password",
          });
        }
      } else {
        return res.json({
          status: "FAILED",
          message: "Invalid username",
        });
      }
    } catch (error) {
      return res.json({
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
    const { userId } = req.params.id;

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
}