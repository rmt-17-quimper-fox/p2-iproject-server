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
      const { name, price, imgUrl, stock, BrandId } = req.body;

      const AuthorId = req.user.id;

      const newShoe = { name, price, imgUrl, stock, BrandId, AuthorId };

      const createShoe = await Shoe.create(newShoe);

      res.status(201).json(createShoe);
    } catch (error) {
      next(error);
    }
  }

  static async getShoeById(req, res, next) {
    try {
      const shoeId = req.params.id;

      const shoe = await Shoe.findByPk(shoeId, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Brand,
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
        ],
      });

      if (!shoe) {
        throw { name: 'shoe_not_found' };
      }
      res.status(200).json(shoe);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ShoesController;
