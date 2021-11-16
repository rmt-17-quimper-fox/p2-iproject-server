"use strict";

const { hashPassword } = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        { email: "admin@mail.com", password: hashPassword("admin")},
        { email: "user@mail.com", password: hashPassword("user") },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
