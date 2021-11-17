'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.User, { foreignKey: 'userId' });
      Recipe.hasMany(models.Comment, { foreignKey: 'recipeId' });
    }
  };
  Recipe.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        notNull: {
          msg: "Title is required"
        },
        notEmpty: {
          msg: "Title is required"
        }
      }
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        notNull: {
          msg: "ImageUrl is required"
        },
        notEmpty: {
          msg: "ImageUrl is required"
        }
      }
    },
    ingredients: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate : {
        notNull: {
          msg: "Ingredients is required"
        },
        notEmpty: {
          msg: "Ingredients is required"
        }
      }
    },
    instructions: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate : {
        notNull: {
          msg: "Instructions is required"
        },
        notEmpty: {
          msg: "Instructions is required"
        }
      }
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
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};