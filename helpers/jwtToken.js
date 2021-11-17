var jwt = require('jsonwebtoken');

function sign(payload) {
    var token = jwt.sign(payload, process.env.JWT_SIGNATURE);
    return token
}

function verify(token) {
    var decoded = jwt.verify(token, process.env.JWT_SIGNATURE);
    return decoded
}

module.exports = {
    sign,
    verify
}