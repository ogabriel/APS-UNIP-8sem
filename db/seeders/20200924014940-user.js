'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'User',
      [
        {
          name: 'John Doe',
          email: 'john@doe.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      [
        {
          name: 'Jane Doe',
          email: 'jane@doe.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', [{email: 'john@doe.com'}], {});
  },
};
