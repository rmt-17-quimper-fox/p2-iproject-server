const { verify } = require("../helpers/jwt");
const { User } = require("../models/");

async function Authenticate(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Unauthorized" };
    }

    const payload = verify(access_token);
    const response = await User.findOne({ where: { email: payload.email } });
    if (!response) {
      throw { name: "Unauthorized" };
    }

    req.user = {
      id: response.id,
      name: response.name,
      email: response.email,
    };
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = { Authenticate };
