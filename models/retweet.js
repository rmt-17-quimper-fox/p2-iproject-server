'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Retweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Retweet.belongsTo(models.User, {
        foreignKey: `UserId`
      })
      Retweet.belongsTo(models.Tweet, {
        foreignKey: `TweetId`
      })
    }
  };
  Retweet.init({
    UserId: DataTypes.INTEGER,
    TweetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Retweet',
  });
  return Retweet;
};