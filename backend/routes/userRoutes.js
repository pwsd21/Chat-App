const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");

const router = express.Router();

router.route("/").post(registerUser); // Registration
router.post("/login", authUser); // Login

module.exports = router;
