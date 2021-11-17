'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PartiesUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PartiesUser.belongsTo(models.User)
      PartiesUser.belongsTo(models.Party)
    }
  };
  PartiesUser.init({
    PartyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: "pending"
    }
  }, {
    sequelize,
    modelName: 'PartiesUser',
  });
  return PartiesUser;
};