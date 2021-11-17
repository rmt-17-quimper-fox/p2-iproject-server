"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn("BookTrips", "status", {
        type: Sequelize.STRING,
      });
      await queryInterface.addColumn("BookTrips", "external_id", {
        type: Sequelize.STRING,
      });
      await queryInterface.addColumn("BookTrips", "idXendit", {
        type: Sequelize.STRING,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn("BookTrips", "status");
      await queryInterface.removeColumn("BookTrips", "external_id");
      await queryInterface.removeColumn("BookTrips", "idXendit");
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
