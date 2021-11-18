'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Patients', [
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Minggu, 14 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Senin, 15 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Selasa, 16 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt:'Rabu, 17 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt:'Kamis, 18 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 2,
        UserId: 2,
        createdAt:'Kamis, 18 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt:'Kamis, 18 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Male",
        ClassId: 1,
        UserId: 2,
        createdAt:'Kamis, 18 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Wasri",
        age: 56,
        gender: "Male",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 18 Novenber 2021',
        updatedAt: new Date()
      },
      {
        name: "Yuri",
        age: 26,
        gender: "Female",
        ClassId: 3,
        UserId: 2,
        createdAt: 'Rabu, 18 Novenber 2021',
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Patients', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
