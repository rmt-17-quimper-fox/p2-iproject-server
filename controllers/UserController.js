const { checkPassword } = require("../helpers/bcrypt");
const { User } = require("../models");
const { signToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password, rank } = req.body;
      const newUser = await User.create({ name, email, password, rank });
      res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        rank: newUser.rank,
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { name: "badRequest", message: "Please enter your email!" };
      }
      if (!password) {
        throw { name: "badRequest", message: "Please enter your password!" };
      }
      const foundUser = await User.findOne({ where: { email } });
      if (!foundUser || !checkPassword(password, foundUser.password)) {
        throw { name: "unauthorized", message: "invalid email/password" };
      }
      const access_token = signToken({
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        rank: foundUser.rank,
      });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
