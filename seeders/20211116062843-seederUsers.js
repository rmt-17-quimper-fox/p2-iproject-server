'use strict';

const { hash } = require('../helpers/bcrypt.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: `Emilia`,
          lastName: `Mia`,
          username: `emilia`,
          email: `emilia@gmail.com`,
          password: hash(`admin`),
          profilePic: `https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png`,
          retweet: 0,
          following: 0,
          followers: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
