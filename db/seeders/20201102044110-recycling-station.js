'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersQuery = await queryInterface.sequelize.query(
      'SELECT u.id FROM "Users" u ORDER BY u.id LIMIT 2'
    );

    const users = usersQuery[0];

    return queryInterface.bulkInsert('RecyclingStation', [
      {
        name: 'Recicloptero',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.635906 -23.554604)'
        ),
        plastic_kg: 200,
        metal_kg: 350,
        glass_kg: 700,
        paper_kg: 1420,
        electronic_kg: 130,
        UserId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'R3 reciclagem',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.633706 -23.554604)'
        ),
        plastic_kg: 1080,
        metal_kg: 2160,
        glass_kg: 360,
        paper_kg: 180,
        electronic_kg: 720,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'RecyclingStation',
      [{ name: ['Recicloptero', 'R3 reciclagem'] }],
      {}
    );
  },
};
