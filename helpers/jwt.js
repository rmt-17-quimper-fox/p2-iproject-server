const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

function createToken(input) {
    return jwt.sign(input, SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, SECRET);
}

module.exports = { createToken, verifyToken }