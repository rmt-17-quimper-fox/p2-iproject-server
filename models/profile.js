'use strict';
const { UserRefreshClient } = require('google-auth-library');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User),
      Profile.hasMany(models.ProfileGenre)
    }
  };
  Profile.init({
    username: {
      type: DataTypes.STRING,
      validate:{
        len: { args: { min: 5 }, msg: "Username length must be at least 5 characters." },
      },
      unique: {msg: "Username must be unique."}
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    shortBio: {
      type: DataTypes.TEXT,
    },
    favoriteGenre: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};