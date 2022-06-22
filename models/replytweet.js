'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReplyTweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReplyTweet.belongsTo(models.Tweet, {
        foreignKey: `ReplyId`
      })
    }
  };
  ReplyTweet.init({
    content: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    ReplyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReplyTweet',
  });
  return ReplyTweet;
};