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
      discovered: {
        type: Sequelize.BOOELAN,
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
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        references: {
          key: 'id',
          model: 'Users',
        },
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
