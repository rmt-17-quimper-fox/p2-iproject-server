'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Comment.init({
    comments: {
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate : {
        notNull: {
          msg: "UserId is required"
        },
        notEmpty: {
          msg: "UserId is required"
        }
      }
    },
    recipeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate : {
        notNull: {
          msg: "RecipeId is required"
        },
        notEmpty: {
          msg: "RecipeId is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};