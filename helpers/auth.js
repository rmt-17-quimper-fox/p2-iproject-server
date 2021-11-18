const jwt = require('jsonwebtoken');
const key = process.env.JWT_SECRET;

const getJwtToken = (payload) => {
    return jwt.sign(payload, key);
};
const getPayload = (jwtToken) => {
    return jwt.verify(jwtToken, key);
};

module.exports = {
    getJwtToken, getPayload
};