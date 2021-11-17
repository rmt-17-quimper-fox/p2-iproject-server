'use strict';

const replayTweets = require('../database/replayTweetDB.json');

replayTweets.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ReplayTweets', replayTweets, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ReplayTweets', null, {});

  }
};

