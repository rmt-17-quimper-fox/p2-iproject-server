const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  return bycrpt.hashSync(password, 8);
};

const comparePassword = (password, hash) => {
  return bycrpt.compareSync(password, hash);
};

module.exports = { hashPassword, comparePassword };
