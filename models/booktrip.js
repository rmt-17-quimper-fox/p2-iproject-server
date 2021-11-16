"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookTrip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookTrip.belongsTo(models.User, { foreignKey: "UserId" });
      BookTrip.belongsTo(models.TourPackage, { foreignKey: "TourPackageId" });
    }
  }
  BookTrip.init(
    {
      TourPackageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "TourPackage can't be empty",
          },
        },
        references: {
          model: "TourPackage",
          key: "id",
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "UserID cant be empty",
          },
        },
        references: {
          model: "Users",
          key: "id",
        },
      },
      pax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BookTrip",
    }
  );
  return BookTrip;
};
