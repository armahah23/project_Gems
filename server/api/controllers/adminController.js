const Admin = require("../schemas/adminSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Admin login
exports.postAdmin = async (req, res) => {
  const { identifier, password } = req.body;

  // Check if input fields are empty
  if (!identifier || !password) {
    return res.status(400).json({
      status: "FAILED",
      message: "Empty input fields",
    });
  }

  try {
    // Find the admin by username or email
    const data = await Admin.findOne({
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

// Get admin by username or email
exports.getAdmin = async (req, res) => {
  const { identifier } = req.params;

  try {
    // Find admin by either username or email
    const adminData = await Admin.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (adminData) {
      res.status(200).json({
        status: "SUCCESS",
        message: "Admin data fetched successfully",
        data: adminData,
      });
    } else {
      res.status(404).json({
        status: "FAILED",
        message: "Admin not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILED",
      message: "An error occurred while fetching admin data",
    });
  }
};
