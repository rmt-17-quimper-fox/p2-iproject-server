'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Listing.belongsTo(models.Mountain, {foreignKey: "MountainId"})
      Listing.belongsTo(models.User, {foreignKey:"UserId"})
    }
  };
  Listing.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MountainId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};