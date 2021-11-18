'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [
      {
      name: 'Plastic',
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      name: 'Paper',
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      name: 'Glass',
      createdAt: new Date(),
      updatedAt: new Date()
      },{
      name: 'Metal',
      createdAt: new Date(),
      updatedAt: new Date()
      },{
        name: 'Organic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert("Categories", data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
