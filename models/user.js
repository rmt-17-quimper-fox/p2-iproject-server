'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Mountain, {through: models.Listing, foreignKey:"UserId"})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Username not empty" },
        notNull: { msg:"Username not null" }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg:"Wrong is Email" },
        notEmpty: { msg:"Email not empty" },
        notNull: { msg:"Email not null" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg:"Password not empty" },
        notNull: { msg: "Password not null" }
      },
      len: {
        args: [5, 10],
        msg: 'Password must between 5 and 10'
      }
    },
    role: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};