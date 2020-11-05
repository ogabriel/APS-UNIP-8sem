'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersQuery = await queryInterface.sequelize.query(
      'SELECT u.id FROM "Users" u ORDER BY u.id LIMIT 2'
    );

    const users = usersQuery[0];

    return queryInterface.bulkInsert('RecyclingStations', [
      {
        name: 'Recicloptero',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.635906 -23.554604)'
        ),
        plastic: 200,
        metal: 350,
        glass: 700,
        paper: 1420,
        electronic: 130,
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
        plastic: 1080,
        metal: 2160,
        glass: 360,
        paper: 180,
        electronic: 720,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'RecyclingStations',
      [{ name: ['Recicloptero', 'R3 reciclagem'] }],
      {}
    );
  },
};
