'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PatientDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heartrate: {
        type: Sequelize.INTEGER
      },
      SpO2: {
        type: Sequelize.INTEGER
      },
      PatientId: {
        type: Sequelize.INTEGER,
      references: {
        model: 'Patients',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
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
    await queryInterface.dropTable('PatientDetails');
  }
};