const user = require("../schemas/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Booking = require("../schemas/bookingSchema");
const User = require("../schemas/userSchema");
const Payment = require("../schemas/paymentSchema");


// Create a new user
exports.createUser = async (req, res) => {
  const { username, password, email, phone, fullname, address } = req.body;

  try { 
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new instance of the user model
    const newUser = new user({
      username,
      password: hashedPassword, // Save hashed password
      email,
      phone,
      fullname,
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

//user login form post
exports.postUser = async (req, res) => {
  const { username, password } = req.body;
  
    // Check if input fields are empty
    if (!username || !password) {
      return res.json({
        status: "FAILED",
        message: "Empty input fields",
      });
    }
  
    try {
      // Find the user by username
      const data = await user.find({ username: username });
  
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

//user login form get
exports.getUser = async (req, res) => {
  const { userId } = req.params.id;

    try {
        if (userId) {
            // Fetch the user by ID from the database
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).send({ error: 'User not found' }); // Handle user not found
            }
            res.send(user); // Return the user details
        } else {
            // Fetch all users if no ID is provided
            const users = await User.find(); // Fetch all users
            res.send(users); // Return the list of users
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' }); // Handle server errors
    }
};


//create a new booking
exports.createBooking = async (req, res) => {
  const { userId, vehiclemake, vehicletype, vehiclenumber, manufecturedyear, message, preferreddate, preferredtime  } = req.body; // Assuming userId and booking details are passed in the request body

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const existingBooking = await Booking.findOne({ preferreddate, preferredtime });

    if (existingBooking) {
      return res.status(400).send({ error: 'Booking already exists for this date and time' });
    }

    // Create a new instance of the Booking model with user-related data
    const newBooking = new Booking({
      userId: user._id,                // Store the user ID
      vehicleownername: user.name,             
      mobilenumber: user.phone,           
      address: user.address,
      email: user.email,
      message,
      vehiclemake,
      vehiclenumber,
      vehicletype,
      preferreddate,
      preferredtime,
      manufecturedyear
    });

    // Save the booking to the database
    await newBooking.save();

    res.status(201).send({ message: 'Booking details stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create booking' });
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