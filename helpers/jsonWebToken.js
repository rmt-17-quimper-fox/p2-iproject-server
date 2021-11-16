const jwt = require('jsonwebtoken')

function signToken(userDetails) {
  return jwt.sign(userDetails, process.env.JWT_SIGNATURE);
}

function verifyToken(access_token) {
  return jwt.verify(access_token, process.env.JWT_SIGNATURE);
}

module.exports = { signToken, verifyToken };
