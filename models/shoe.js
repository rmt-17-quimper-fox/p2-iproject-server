'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shoe.belongsTo(models.User, { foreignKey: 'AuthorId' });
      Shoe.belongsTo(models.Brand, { foreignKey: 'BrandId' });
      Shoe.hasMany(models.Cart, { foreignKey: 'ShoeId' });
    }
  }
  Shoe.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Shoe name is required' },
          notEmpty: { msg: 'Shoe name is required' },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Price is required' },
          notEmpty: { msg: 'Price is required' },
          isNumeric: { msg: 'Price is a numeric' },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Image url is required' },
          notEmpty: { msg: 'Image url is required' },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Stock is required' },
          notEmpty: { msg: 'Stock is required' },
          isNumeric: { msg: 'Stock is a numeric' },
        },
      },
      BrandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'BrandId is required' },
          notEmpty: { msg: 'BrandId is required' },
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
      modelName: 'Shoe',
    }
  );
  return Shoe;
};
