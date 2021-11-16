var jwt = require('jsonwebtoken');

function sign(payload) {
    var token = jwt.sign(payload, 'shhhhh');
    return token
}

function verify(token) {
    var decoded = jwt.verify(token, 'shhhhh');
    return decoded
}

module.exports = {
    sign,
    verify
}