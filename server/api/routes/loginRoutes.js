const express = require("express");
const router = express.Router();
const mechanicController = require("../controllers/mechanicController");
const userController = require("../controllers/userController");

// Route for mechanic login
router.post("/mechanic/login", mechanicController.postMechanic);

// Route for user login
router.post("/user/login", userController.postUser);

// Route to get mechanic by username or email
router.get("/mechanic/:identifier", mechanicController.getMechanic);

// Route to get user by username or email
router.get("/user/:identifier", userController.getUser);

// router.post("/forgot-password", userController.forgotPassword);

module.exports = router;
