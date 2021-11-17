'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Tweet, { foreignKey: `UserId`})
      User.belongsToMany(models.Tweet, {
        through: models.Retweet
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Username is required" },
        notNull: { msg: "Username is required" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Email is required" },
        notEmpty: { msg: "Email is required" },
        isEmail: { msg: "Please enter valid Email"},
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password is required" },
        notNull: { msg: "Password is required" },
        min : { 
          args : 5,
          msg: "Password must have at least 5 characters"
        }
      },
    },
    profilePic: DataTypes.STRING,
    retweet: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate:  (user, option) => {
        user.password = hash(user.password);
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};