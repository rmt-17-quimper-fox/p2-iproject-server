"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TourPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TourPackage.hasOne(models.BookTrip, { foreignKey: "TourPackageId" });
    }
  }
  TourPackage.init(
    {
      destinationName: DataTypes.STRING,
      availableSeat: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      temperature: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TourPackage",
    }
  );
  return TourPackage;
};
