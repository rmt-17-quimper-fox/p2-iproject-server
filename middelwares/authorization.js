const { Shoe } = require('../models');

const authorization = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    const shoeId = req.params.id;

    const shoe = await Shoe.findByPk(shoeId);

    if (!shoe) {
      throw { name: 'shoe_not_found' };
    }

    if (role !== 'admin' && id !== shoe.AuthorId) {
      throw { name: 'Forbidden' };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authorization };
