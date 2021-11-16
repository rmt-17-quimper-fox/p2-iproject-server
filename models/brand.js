'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brand.hasMany(models.Shoe, { foreignKey: 'BrandId' });
    }
  }
  Brand.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Brand name is required' },
          notEmpty: { msg: 'Brand name is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Brand',
    }
  );
  return Brand;
};
