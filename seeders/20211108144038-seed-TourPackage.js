"use strict";
const fs = require("fs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync("./data/tourpackage.json", "utf-8"));
    data.forEach((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("TourPackages", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TourPackages", null, {});
  },
};
