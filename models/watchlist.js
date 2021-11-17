'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    static associate(models) {
      Watchlist.belongsTo(models.User)
    }
  };
  Watchlist.init({
    UserId: DataTypes.INTEGER,
    SerialId: DataTypes.INTEGER,
    serialTitle: DataTypes.STRING,
    serialNextAir: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Watchlist',
  });
  return Watchlist;
};