const jwt = require("jsonwebtoken");

function verify(access_token) {
  return jwt.verify(access_token, process.env.JWT_SIGNATURE);
}

function sign(payload) {
  let token = process.env.JWT_SIGNATURE;
  return jwt.sign(payload, token);
}

module.exports = { verify, sign };
