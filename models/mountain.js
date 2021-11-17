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
    }
  };
  Mountain.init({
    nama: DataTypes.STRING,
    bentuk: DataTypes.STRING,
    tinggi_meter: DataTypes.STRING,
    estimasi_letusan_terakhir: DataTypes.STRING,
    geolokasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mountain',
  });
  return Mountain;
};