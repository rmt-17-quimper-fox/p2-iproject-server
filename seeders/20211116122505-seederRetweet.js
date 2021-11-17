'use strict';

const retweets = require('../database/retweetDB.json');

retweets.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Retweets', retweets, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Retweets', null, {});

  }
};
