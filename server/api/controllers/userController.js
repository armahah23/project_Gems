const user = require("../schemas/userSchema");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Booking = require("../schemas/bookingSchema");


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