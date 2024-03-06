const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  // sign a token with jwt id
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
