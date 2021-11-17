'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tweet.init({
    content: DataTypes.STRING,
    location: DataTypes.STRING,
    reply: DataTypes.INTEGER,
    retweet: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};