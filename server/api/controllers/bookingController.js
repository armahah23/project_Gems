const Booking = require('../schemas/bookingSchema');
const User = require('../schemas/userSchema'); // Import the User model

// Create a new booking
exports.createBooking = async (req, res) => {
    const { userId, vehiclemake, vehicletype, vehiclenumber, manufecturedyear, message, preferreddate, preferredtime } = req.body; // Assuming userId and booking details are passed in the request body
  
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
            userId: user._id, // Store the user ID
            vehicleownername: user.fullname, // Assuming 'fullname' is the field for the user's name
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

// Get user details
exports.getUserDetails = async (req, res) => {
    const { userId } = req.params;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Send user details
        res.status(200).send({
            userId: user._id,
            name: user.fullname,
            address: user.address,
            email: user.email,
            phone: user.phone
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch user details' });
    }
};