const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const loginRoutes = require("./api/routes/loginRoutes"); // Import login routes
const adminRoutes = require("./api/routes/adminRoutes"); // Import admin routes

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (using Mongoose)
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://0.0.0.0:27017/autocare")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

app.use("/api", require("./api/routes/mechanicRoutes"));
// app.use('/api', require('./api/routes/vehicleRoutes'));

// Use admin routes
app.use("/api", adminRoutes);

// Use login routes
app.use("/api", loginRoutes);

app.use("/api", require("./api/routes/userRoutes"));

// app.use("/api", require("./api/routes/bookingRoutes"));
app.post('/payment', (req, res) => {
  // Your payment logic here
  res.send('Payment processed');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
