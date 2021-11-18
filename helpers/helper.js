const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = "IPROJECT"

let comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

let saltPass = (password) => {
    return bcrypt.hashSync(password, 10)
}

let jwtSign = (payload) => {
    return jwt.sign(payload, privateKey)
}

let verifyData = (payload) => {
    return jwt.verify(payload, privateKey)
}

module.exports = {comparePassword, saltPass, jwtSign, verifyData}