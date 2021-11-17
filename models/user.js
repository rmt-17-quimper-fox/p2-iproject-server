"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Account, { foreignKey: "AccountId" });
      User.hasOne(models.BookTrip, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User can't be empty",
          },
        },
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      AccountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "GenreId can't be empty",
          },
        },
        references: {
          model: "Accounts",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
