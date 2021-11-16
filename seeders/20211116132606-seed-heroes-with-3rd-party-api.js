'use strict';
const axios = require('axios')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { data } = await axios({
      url: 'https://api.opendota.com/api/heroes/',
      method: 'get'
    })
    const seed = data.map(el => {
      return { 
        name: el.localized_name, 
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    })
    await queryInterface.bulkInsert('Heros', seed)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Heros', null, {});
  }
};
