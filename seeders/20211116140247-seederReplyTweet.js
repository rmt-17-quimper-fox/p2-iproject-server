'use strict';

const replyTweets = require('../database/replyTweetDB.json');

replyTweets.forEach(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ReplyTweets', replyTweets, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ReplyTweets', null, {});
  }
};

