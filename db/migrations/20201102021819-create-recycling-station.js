'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RecyclingStations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      localization: {
        type: Sequelize.GEOMETRY('POINT'),
      },
      plastic_kg: {
        type: Sequelize.FLOAT,
      },
      metal_kg: {
        type: Sequelize.FLOAT,
      },
      glass_kg: {
        type: Sequelize.FLOAT,
      },
      paper_kg: {
        type: Sequelize.FLOAT,
      },
      electronic_kg: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RecyclingStations');
  },
};
