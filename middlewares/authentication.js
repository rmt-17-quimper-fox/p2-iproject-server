const { User } = require("../models/index");
const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  if (!req.headers.access_token) {
    throw { name: "InvalidToken" };
  }
  const { access_token: token } = req.headers;

  try {
    const payload = verifyToken(token);
    const foundUser = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email,
      },
    });

    if (!foundUser) {
      throw { name: "InvalidToken" };
    }

    req.user = {
      id: foundUser.id,
      email: foundUser.email,
    };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
