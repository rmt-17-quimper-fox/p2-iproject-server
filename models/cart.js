'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, { foreignKey: 'AuthorId' });
      Cart.belongsTo(models.Shoe, { foreignKey: 'ShoeId' });
    }
  }
  Cart.init(
    {
      ShoeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'ShoeId is required' },
          notEmpty: { msg: 'ShoeId is required' },
        },
      },
      AuthorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'AuthorId is required' },
          notEmpty: { msg: 'AuthorId is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
