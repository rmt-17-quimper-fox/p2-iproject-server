'use strict';
const { hashPassword } = require('../helpers/bcrypt')
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
      User.belongsToMany(models.Party, { through: models.PartiesUser, as: "parties" })
      User.hasMany(models.UsersHero)
      User.hasMany(models.Party, { foreignKey: "partyLeaderId", as: "parties" })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required!"
        },
        notEmpty: {
          msg: "Name is required!"
        }
      }
    },
    email: {
      unique: {
        msg: "Email must be unique!"
      },
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email is required!"
        },
        notEmpty: {
          msg: "Email is required!"
        },
        isEmail: {
          msg: "Invalid email format!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required!"
        },
        notEmpty: {
          msg: "Password is required!"
        },
        len: {
          args: [6],
          msg: "Password must be longer than 5 characters!"
        }
      }
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Rank is required!"
        },
        notEmpty: {
          msg: "Rank is required!"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};