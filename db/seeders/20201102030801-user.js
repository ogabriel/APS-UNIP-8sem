'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john@doe.com',
        // password
        password:
          '$2b$10$ZnLTx/BzinVUYau1G1OAreZ0yyoKkA9XsROiMG1ndiNzMNdvpy4ke',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Doe',
        email: 'jane@doe.com',
        // password
        password:
          '$2b$10$jR2Lp11D4wD1VfubaWBNZ.cOK0CxnDaZI7/pBzvHxGLsqhrOlYo82',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Users',
      [{ email: ['john@doe.com', 'jane@doe.com'] }],
      {}
    );
  },
};
