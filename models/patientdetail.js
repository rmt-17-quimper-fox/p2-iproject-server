'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientDetail.belongsTo(models.Patient)
    }
  };
  PatientDetail.init({
    heartrate: DataTypes.INTEGER,
    SpO2: DataTypes.INTEGER,
    PatientId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PatientDetail',
  });
  return PatientDetail;
};