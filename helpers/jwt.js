const jwt = require('jsonwebtoken');

const genToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SIGNATURE);
};

const verifToken = (token) => {
  return jwt.verify(token, process.env.JWT_SIGNATURE);
};

module.exports = { genToken, verifToken };
