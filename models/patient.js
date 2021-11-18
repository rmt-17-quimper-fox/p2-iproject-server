'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.User)
      Patient.belongsTo(models.Class)
      Patient.hasOne(models.PatientDetail)
    }
  };
  Patient.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    createdAt:DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    ClassId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};