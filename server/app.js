const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const User = require("./api/schemas/userDetails"); // Correctly import the User model

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
app.use("/api", require("./api/routes/adminRoutes"));

app.use("/api", require("./api/routes/userRoutes"));

// app.use("/api", require("./api/routes/bookingRoutes"));

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
