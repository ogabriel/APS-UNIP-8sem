const db = require('../app/models');

beforeEach(async () => {
  return await db.sequelize.sync({ force: true, logging: false });
});
