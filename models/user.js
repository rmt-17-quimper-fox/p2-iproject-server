'use strict';
const { hashPassword } = require('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        notNull: {
          msg: "Username is required"
        },
        notEmpty: {
          msg: "Username is required"
        }
      }
    },
    email: {
      allowNull: false,
      unique: {
        args: true,
        msg: "Email must be unique"
      },
      type: DataTypes.STRING,
      validate : {
        notNull: {
          msg: "Email is required"
        },
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: 'Email must be in email format'
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        },
        len: {
          args: [5],
          msg: 'Password must be 5 characters minimal'
        }
      }
    },
    token: {
      allowNull: false,
      type: DataTypes.STRING,
      validate : {
        notNull: {
          msg: "Token is required"
        },
        notEmpty: {
          msg: "Token is required"
        }
      }
    },
    star: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
      validate : {
        notNull: {
          msg: "Star is required"
        },
        notEmpty: {
          msg: "Star is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    const hashedPassword = hashPassword(user.password);
    user.password = hashedPassword;
  })
  return User;
};