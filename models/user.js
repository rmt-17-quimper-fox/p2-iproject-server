'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Shoe, { foreignKey: 'AuthorId' });
      User.hasMany(models.Cart, { foreignKey: 'AuthorId' });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Username is required' },
          notEmpty: { msg: 'Username is required' },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Email already Exist',
        },
        validate: {
          notNull: { msg: 'Email are required' },
          notEmpty: { msg: 'Email are required' },
          isEmail: { msg: 'Please enter a valid email address' },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password are required' },
          notEmpty: { msg: 'Password are required' },
          len: { args: [5], msg: 'Minimum Password 5 character' },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Role is required' },
          notEmpty: { msg: 'Role is required' },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Address is required' },
          notEmpty: { msg: 'Address is required' },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Phone number is required' },
          notEmpty: { msg: 'Phone number is required' },
          isNumeric: { msg: 'Phone number is a numeric' },
          len: { args: [8], msg: 'Minimum phone number 8 digits' },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (instance, options) => {
          instance.password = hashPassword(instance.password);
        },
      },
    }
  );
  return User;
};
