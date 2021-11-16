'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersHero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsersHero.init({
    UserId: DataTypes.INTEGER,
    HeroId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersHero',
  });
  return UsersHero;
};