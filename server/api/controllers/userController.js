const User = require("../schemas/userDetails");

// Controller functions for handling requests
// exports.getUser = (req, res) => {
//   const userId = req.params.id;

//   if (userId) {
//     res.send(`Fetching details for user ID: ${userId}`);
//   } else {
//     res.send("Fetching all users");
//   }
// };

exports.createUser = async (req, res) => {
    const { username, password, email, phone, firstname, lastname, idnumber, address } = req.body;
  
    try { 
        // Create a new instance of the User model
        const newUser = new User({
            username,
            password,
            email,
            phone,
            firstname,
            lastname,
            idnumber,
            address
        });
        
        // Save the user to the database
        await newUser.save();
        
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create user' });
    }
};
