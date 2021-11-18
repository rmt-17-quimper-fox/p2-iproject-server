const { Brand, Shoe } = require('../models');

class BrandController {
  static async getBrands(req, res, next) {
    try {
      const brands = await Brand.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: Shoe,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      });
      res.status(200).json(brands);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BrandController;
