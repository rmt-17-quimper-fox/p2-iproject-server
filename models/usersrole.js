'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersRole extends Model {
    static associate(models) {
      UsersRole.belongsTo(models.User)
      UsersRole.belongsTo(models.Role)
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