"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile), User.hasMany(models.Watchlist);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Email is required" },
          notNull: { msg: "Email is required" },
          isEmail: { msg: "Please provide a valid email" },
        },
        unique: { msg: "Email must be unique" },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password is required" },
          notNull: { msg: "Password is required" },
          len: {
            args: { min: 5 },
            msg: "Password length must be at least 5 characters.",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'User',
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate(newUser) {
          newUser.password = hashPassword(newUser.password);
        },
      },
    }
  );
  return User;
};
