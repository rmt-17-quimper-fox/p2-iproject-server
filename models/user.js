'use strict';
const {
  Model
} = require('sequelize');
const { hashingPassword } = require('../helpers/bcrypt');
const nodemailer = require("nodemailer");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Ranking, { foreignKey: 'UserId' })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: 'Name is required' },
        notNull: { msg: 'Name is required' },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Email is required' },
        notNull: { msg: 'Email is required' },
        isEmail: true
      }
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: { msg: 'Password is required' },
        notNull: { msg: 'Password is required' },
      }
    }
  }, {
    hooks: {
      beforeCreate: (Instance) => {
        Instance.password = hashingPassword(Instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};