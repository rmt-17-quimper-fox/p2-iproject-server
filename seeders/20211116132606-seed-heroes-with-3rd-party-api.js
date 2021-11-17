"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Roles", [
      {
        title: "midlaner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "carry",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "offlaner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "support",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "hardsupport",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
