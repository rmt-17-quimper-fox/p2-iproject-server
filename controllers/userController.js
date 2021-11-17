const { comparePassword } = require('../helpers/bcrypt');
const { genToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
  static async postRegister(req, res, next) {
    try {
      const { username, email, password, address, phoneNumber } = req.body;

      const newUser = {
        username,
        email,
        password,
        role: 'customer',
        address,
        phoneNumber,
      };

      const createdUser = await User.create(newUser);

      res.status(201).json({
        id: createdUser.id,
        email: createdUser.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async postLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({
        where: { email },
      });

      if (!foundUser) {
        throw { name: 'invalid_user' };
      }

      if (!comparePassword(password, foundUser.password)) {
        throw { name: 'invalid_user' };
      }

      const dataGenToken = {
        id: foundUser.id,
        email: foundUser.email,
      };
      const newToken = genToken(dataGenToken);
      res.status(200).json({
        access_token: newToken,
        id: foundUser.id,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
