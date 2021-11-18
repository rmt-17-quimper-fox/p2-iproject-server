const jwt = require('jsonwebtoken')

function GenerateToken(payload) {
    return jwt.sign(payload, "Enigma")
}

function VerifyToken(access_token) {
    return jwt.verify(access_token, "Enigma")
}

module.exports = {
    GenerateToken,
    VerifyToken
}