const bcrypt = require("bcrypt");

function checkPassword(plain_password, hashed_password) {
  return bcrypt.compareSync(plain_password, hashed_password);
}
function passwordHash(plain_password) {
  let newSalt = bcrypt.genSaltSync(13);
  let hashed_password = bcrypt.hashSync(plain_password, newSalt);

  return hashed_password;
}

module.exports = { checkPassword, passwordHash };
