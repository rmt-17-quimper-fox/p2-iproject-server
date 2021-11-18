'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {foreignKey: 'UserId'})
      Order.belongsTo(models.Category, {foreignKey: "CategoryId"})
    }
  };
  Order.init({
    sender: DataTypes.STRING,
    address: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    isCleaned: DataTypes.BOOLEAN,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};