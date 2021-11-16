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
}

module.exports = UserController;
