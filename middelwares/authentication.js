const { verifToken } = require('../helpers/formatJwt');
const { User } = require('../models');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: 'not_authenticated' };
    }

    const user = verifToken(access_token);
    const foundUser = await User.findOne({
      where: { id: user.id, email: user.email },
    });

    if (!foundUser) {
      throw { name: 'invalid_token' };
    }

    req.user = {
      id: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
