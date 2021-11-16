'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ranking extends Model {
    static associate(models) {
      Ranking.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  };
  Ranking.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: 'Name is required' },
        notNull: { msg: 'Name is required' },
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: 'Score is required' },
        notNull: { msg: 'Score is required' },
      }
    },
    UserId:   {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: { msg: 'UserId is required' },
        notNull: { msg: 'UserId is required' },
      }
    }
  }, {
    sequelize,
    modelName: 'Ranking',
  });
  return Ranking;
};