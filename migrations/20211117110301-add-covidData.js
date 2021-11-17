"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "TourPackages",
      "covidData",
      Sequelize.JSON
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("TourPackages", "covidData");
  },
};
