'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersRole extends Model {
    static associate(models) {
      // define association here
    }
  };
  UsersRole.init({
    UserId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersRole',
  });
  return UsersRole;
};