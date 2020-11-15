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
      {
        name: 'Breno',
        email: 'breno@unip.com',
        // password
        password:
          '$2b$10$v0iYG9szdm3FHSi4bjrkPOiwcEu5Tgs7SviIXeqwlY/oW.r/we21q',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gabriel',
        email: 'gabriel@unip.com',
        // password
        password:
          '$2b$10$WghTtAwm9Oe/mmEIFamlaef3Spc3EqyHH6JytGWiwqbgQ2f8rVCEW',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jessica',
        email: 'jessica@unip.com',
        // password
        password:
          '$2b$10$qLEv9aQtdRvYR.aihin9euEQFAiGfp5QrL27w2c3kxrQaPfiODAhS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{}], {});
  },
};
