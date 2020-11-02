'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersQuery = await queryInterface.sequelize.query(
      'SELECT u.id FROM "Users" u ORDER BY u.id LIMIT 2'
    );

    const users = usersQuery[0];

    return queryInterface.bulkInsert('RecyclingStation', [
      {
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
    const stationsQuery = await queryInterface.sequelize.query(
      'SELECT rs.id FROM "RecyclingStations" rs ORDER BY rs.id LIMIT 2'
    );

    const stations = stationsQuery[0];

    if (stations.length < 1) {
      return 0;
    } else {
      return await queryInterface.bulkDelete('RecyclingStations', [
        { id: [stations[0].id, stations[1].id] },
      ]);
    }
  },
};
