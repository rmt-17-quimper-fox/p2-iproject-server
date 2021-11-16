const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

function hashPassword(password) {
    return bcrypt.hashSync(password, salt); 
}

function checkPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
    hashPassword,
    checkPassword
}