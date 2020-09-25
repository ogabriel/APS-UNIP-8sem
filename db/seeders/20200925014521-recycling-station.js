'use strict';

const { QueryInterface } = require("sequelize/types");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const usersQuery = await QueryInterface.sequelize.query(
      'SELECT id FROM "Users" u'
    );

    const users = usersQuery[0];

    return queryInterface.bulkInsert(
      'RecyclingStation',
      [
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
        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    const stationsQuery = await queryInterface.sequelize.query(
      `SELECT s.id FROM "RecyclingStations" s
      JOIN "Users" u ON u.id = s."UserId"`
    );

    const stations = stationsQuery[0];

    if (plants.length < 1) {
      return 0;
    } else {
      return await queryInterface.bulkDelete('RecyclingStations', [
        { id: [plants[0].id, plants[1].id]},
      ]);
    }
  },
};
