const Admin = require("../schemas/adminSchema");

// Controller functions for handling requests
// exports.getUser = (req, res) => {
//   const userId = req.params.id;

//   if (userId) {
//     res.send(`Fetching details for user ID: ${userId}`);
//   } else {
//     res.send("Fetching all users");
//   }
// };

exports.createAdmin = async (req, res) => {
    const { username, password, email, phone, fullname} = req.body;
  
    try { 
        // Create a new instance of the User model
        const newAdmin = new Admin({
            username,
            password,
            email,
            phone,
            fullname,
        });
        
        // Save the user to the database
        await newAdmin.save();
        
        res.status(201).send({ message: 'Admin profile setted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create admin' });
    }
};
