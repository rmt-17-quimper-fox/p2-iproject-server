const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models/index");

class userController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({
        email,
        password,
      });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (!user) {
        throw { name: "UserNotFound" };
      }
      const passwordCheck = comparePassword(password, user.password);
      if (!passwordCheck) {
        throw { name: "UserNotFound" };
      }
      const payload = {
        id: user.id,
        email: user.email,
      };

      const token = createToken(payload);
      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async mojologin(req, res, next) {
    let emailMojo = "";
    const config = {
      apiKey: "3129be04-cebd-4e8a-9114-6bd198dfef04",
    };
    const ma = require("mojoauth-sdk")(config);
    const jwtToken = req.body.access_token;

    try {
      await ma.mojoAPI
        .verifyToken(jwtToken)
        .then(function (response) {
          emailMojo = response.identifier;
          console.log(emailMojo, "di promise");
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(emailMojo, "ini email mojo");
      const [user, created] = await User.findOrCreate({
        where: {
          email: emailMojo,
        },
        defaults: {
          password: "password",
        },
      });
      const payload = {
        id: user.id,
        email: user.email,
      };
      const tokenMojo = createToken(payload);
      res.status(200).json({
        access_token: tokenMojo,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = userController;
