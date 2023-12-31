const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router(); // creating instance of express from router

router.route("/").post(registerUser).get(protect, allUsers); // Registration
router.post("/login", authUser); // Login

module.exports = router;
