'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mountain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mountain.belongsToMany(models.User, {through: models.Listing, foreignKey:"MountainId"})
    }
  };
  Mountain.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Nama not empty" },
        notNull: { msg:"Nama not null" }
      }
    },
    bentuk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Bentuk not empty" },
        notNull: { msg:"Bentuk not null" }
      }
    },
    tinggi_meter: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Tinggi Meter not empty" },
        notNull: { msg:"Tinggi Meter not null" }
      }
    },
    estimasi_letusan_terakhir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Estimasi Letusan Terakhir not empty" },
        notNull: { msg:"Estimasi Letusan Terakhir not null" }
      }
    },
    geolokasi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Geolokasi not empty" },
        notNull: { msg:"Geolokasi not null" }
      }
    },
  }, {
    sequelize,
    modelName: 'Mountain',
  });
  return Mountain;
};