'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mountains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bentuk: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tinggi_meter: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estimasi_letusan_terakhir: {
        type: Sequelize.STRING,
        allowNull: false
      },
      geolokasi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mountains');
  }
};