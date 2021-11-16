const bcrypt = require('bcryptjs')

function hashingPassword(password) {
    return bcrypt.hashSync(password, 5);
}

function comparePassword(password, hashingPassword) {
    return bcrypt.compareSync(password, hashingPassword);
}

module.exports = { hashingPassword, comparePassword }