'use strict';

const posts = require('../database/postDB.json');

posts.forEach(el => {
  el.createdAt = new Date();
  el.updatedAt = new Date()
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', posts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};

