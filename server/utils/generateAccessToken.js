const jwt = require("jsonwebtoken");

function generateAccessToken(userId) {
  const payload = {
    userId: userId,
  };
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
}

module.exports = {
  generateAccessToken
}