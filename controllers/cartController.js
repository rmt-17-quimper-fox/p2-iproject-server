const { Brand, User, Cart, Shoe } = require('../models');
const shoe = require('../models/shoe');

class CartController {
  static async postCart(req, res, next) {
    try {
      const ShoeId = req.params.shoeId;
      const AuthorId = req.user.id;

      const shoe = await Shoe.findByPk(ShoeId);

      if (!shoe) {
        throw { name: 'shoe_not_found' };
      }

      const createCart = await Cart.create({
        ShoeId,
        AuthorId,
      });

      res.status(201).json(createCart);
    } catch (error) {
      next(error);
    }
  }

  static async getCarts(req, res, next) {
    try {
      const AuthorId = req.user.id;
      const carts = await Cart.findAll({
        where: {
          AuthorId,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: {
          model: Shoe,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      });
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCart(req, res, next) {
    try {
      const ShoeId = req.params.shoeId;

      const shoe = await Cart.findOne({
        where: { ShoeId },
      });

      if (!shoe) {
        throw { name: 'shoe_not_found' };
      }

      const cartDelete = await Cart.destroy({
        where: { ShoeId },
      });

      res.status(200).json({ message: 'Delete Cart Success' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController;
