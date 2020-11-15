'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersQuery = await queryInterface.sequelize.query(
      'SELECT u.id FROM "Users" u ORDER BY u.id LIMIT 5'
    );

    const users = usersQuery[0];

    return queryInterface.bulkInsert('RecyclingStations', [
      {
        name: 'UNIP reciclagem',
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
        name: 'Sucata de metal',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.633906 -23.554804)'
        ),
        metal: 10,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Reciclagem Só plastico',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.633811 -23.554504)'
        ),
        plastic: 1080,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sucata de eletrônicos',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.635512 -23.554310)'
        ),
        paper: 1420,
        electronic: 130,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Recicla Papel',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.635303 -23.554904)'
        ),
        paper: 1420,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Posto de reciclagem de vidro',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.635909 -23.554705)'
        ),
        glass: 700,
        UserId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'UNIP Paraiso - reciclagem',
        localization: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(-46.6396724 -23.572701)'
        ),
        plastic: 1000,
        metal: 1000,
        glass: 1000,
        paper: 1000,
        electronic: 1000,
        UserId: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'RecyclingStations',
      [{}],
      {}
    );
  },
};
