require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const loginRoutes = require("./api/routes/loginRoutes"); // Import login routes
const adminRoutes = require("./api/routes/adminRoutes"); // Import admin routes
const notificationRoutes = require("./api/routes/notificationRoutes");
const chatbotRoutes = require("./api/routes/chatbotRoutes");
const paymentRoutes = require("./api/routes/paymentRoutes");
const inventoryRoutes = require("./api/routes/inventoryRoutes");

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (using Mongoose)
mongoose.set("strictQuery", true);

// atlas
mongoose
  .connect("mongodb+srv://sfrafri:vrQAf177sh0CxBLC@cluster0.rnqxi.mongodb.net/autocare?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

// local

// mongoose
//   .connect("mongodb://0.0.0.0:27017/autocare")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Failed to connect to MongoDB", error));

app.use("/api", require("./api/routes/mechanicRoutes"));
// app.use('/api', require('./api/routes/vehicleRoutes'));

// Use admin routes
app.use("/api", adminRoutes);

// Use login routes
app.use("/api", loginRoutes);

//booking routes
app.use("/api", require("./api/routes/bookingRoutes"));

app.use("/api", require("./api/routes/userRoutes"));

app.use("/api", notificationRoutes);

app.use("/api", chatbotRoutes);

// payment routes
app.use("/api", paymentRoutes);

//handle and manage store
app.use("/api", inventoryRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
