const { Brand, User, Cart, Shoe } = require('../models');
const { Op } = require('sequelize');

class ShoesController {
  static async getShoes(req, res, next) {
    try {
      const { name } = req.query;
      const obj = {
        where: {},
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
      };

      if (name) {
        obj.where.name = { [Op.like]: `%${name}%` };
      }

      const shoes = await Shoe.findAll(obj);
      res.status(200).json(shoes);
    } catch (err) {
      console.log(err);
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

  static async deleteShoeById(req, res, next) {
    try {
      const shoeId = req.params.id;
      const shoe = await Shoe.findByPk(shoeId);

      if (!shoe) {
        throw { name: 'shoe_not_found' };
      }

      const result = await Shoe.destroy({ where: { id: shoeId } });

      res.status(200).json({ message: `${shoe.name} Success to delete` });
    } catch (error) {
      next(error);
    }
  }

  static async patchStock(req, res, next) {
    try {
      const stock = req.body.stock;
      const shoeId = req.params.id;
      const shoe = await Shoe.findByPk(shoeId);

      if (!shoe) {
        throw { name: 'shoe_not_found' };
      }

      const result = await Shoe.update({ stock }, { where: { id: shoeId } });

      res.status(200).json({ message: 'stock has been updated' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ShoesController;
