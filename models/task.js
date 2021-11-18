"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User);
    }
  }
  Task.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `Name cannot be empty` },
          notEmpty: { msg: `Name cannot be empty` },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `Location cannot be empty` },
          notEmpty: { msg: `Location cannot be empty` },
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: `Date cannot be empty` },
        },
      },
      description: DataTypes.TEXT,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
