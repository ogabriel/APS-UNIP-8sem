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
        allowNull: false,
        type: Sequelize.GEOMETRY('POINT'),
      },
      plastic: {
        type: Sequelize.INTEGER,
      },
      metal: {
        type: Sequelize.INTEGER,
      },
      glass: {
        type: Sequelize.INTEGER,
      },
      paper: {
        type: Sequelize.INTEGER,
      },
      electronic: {
        type: Sequelize.INTEGER,
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
