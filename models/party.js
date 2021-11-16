'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Party.init({
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
    members_total: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },
    mode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Mode is required!"
        },
        notEmpty: {
          msg: "Mode is required!"
        }
      }
    },
    schedule: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "Invalid date format!"
        },
        isAfter: {
          args: new Date(),
          msg: "Date must be today or after today!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};