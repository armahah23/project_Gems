const User = require("../schemas/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Payment = require("../schemas/paymentSchema");

// Create a new user
exports.createUser = async (req, res) => {
  const { username, password, email, phone, fullname, address } = req.body;

  try { 
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new instance of the user model
    const newUser = new User({
      username,
      password: hashedPassword, // Save hashed password
      email,
      phone,
      fullname,
      address
    });
    
    // Save the user to the database
    await newUser.save();
    
    res.status(201).send({ message: 'Customer profile created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create customer profile' });
  }
};

// User login
exports.postUser = async (req, res) => {
  const { identifier, password } = req.body;

  // Check if input fields are empty
  if (!identifier || !password) {
    return res.status(400).json({
      status: "FAILED",
      message: "Empty input fields",
    });
  }

  try {
    // Find the user by username or email
    const data = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (data) {
      const hashedPassword = data.password;

      // Compare the provided password with the stored hashed password
      const result = await bcrypt.compare(password, hashedPassword);

      if (result) {
        // Generate JWT token
        const token = jwt.sign({ id: data._id }, 'your_jwt_secret', { expiresIn: '1h' });

        return res.status(200).json({
          status: "SUCCESS",
          message: "Login successful",
          token: token,
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
        message: "Invalid username or email",
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

// Get user by username or email
exports.getUser = async (req, res) => {
  const { identifier } = req.params;

  try {
    // Find user by either username or email
    const userData = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (userData) {
      res.status(200).json({
        status: "SUCCESS",
        message: "User data fetched successfully",
        data: userData,
      });
    } else {
      res.status(404).json({
        status: "FAILED",
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILED",
      message: "An error occurred while fetching user data",
    });
  }
};



// Post payment Details
exports.postPayment = async (req, res) => {
  const {  cardnumber, cardholdername, expireddate, cvv, amount } = req.body;

  try { 
    // Hash cvv before saving
    const hashedCvv = await bcrypt.hash(cvv, 10);

    if (cardnumber!==12){
      return res.json({
        status: "FAILED",
        message: "Invalid card number",
      });
    }
    
    // Create a new instance of the user model
    const newPayment = new Payment({
      cardnumber,
      cardholdername,
      expireddate,
      cvv: hashedCvv, // Save hashed cvv
      amount
    });
     
    // Save the mechanic to the database
    await newPayment.save();
    
    
    res.status(201).send({ message: 'Payment Details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to save payment details' });
  }
}