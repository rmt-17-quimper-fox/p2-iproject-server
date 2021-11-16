const { Brand, User, Cart, Shoe } = require('../models');

class ShoesController {
  static async getShoes(req, res, next) {
    try {
      const shoes = await Shoe.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Brand,
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
          {
            model: User,
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
        ],
      });
      res.status(200).json(shoes);
    } catch (err) {
      next(err);
    }
  }

  static async postShoes(req, res, next) {
    try {
    } catch (error) {}
  }
}

module.exports = ShoesController;
