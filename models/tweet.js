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
      Tweet.belongsTo(models.User, { 
        foreignKey: `UserId`})
      Tweet.belongsToMany(models.User, {
        through: models.Retweet
      })
      Tweet.hasMany(models.ReplyTweet, {
        foreignKey: `ReplayId`
      })
    }
  };
  Tweet.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Content is required" },
        notNull: { msg: "Content is required" },
      },
    },
    location: DataTypes.STRING,
    reply: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    retweet: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};