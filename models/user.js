"use strict";
const { Model } = require("sequelize");
const { passwordHash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task);
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: { msg: `Email cannot be null` },
          notEmpty: { msg: `Email must not be empty` },
          isEmail: {
            msg: `incorrect email format. Example: examples@mail.com`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `Password cannot be null` },
          notEmpty: { msg: `Password cannot be empty` },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user, option) => {
          user.password = passwordHash(user.password);
        },
      },
    }
  );
  return User;
};
