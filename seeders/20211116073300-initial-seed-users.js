"use strict";

const { hashPassword } = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        { email: "admin@mail.com", password: hashPassword("admin"), role: 'Admin'},
        { email: "user@mail.com", password: hashPassword("user"), role: 'User'},
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
