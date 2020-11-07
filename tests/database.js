const db = require('../app/models');

// beforeEach(async () => {
//   return await db.sequelize.sync({ force: true });
// });

afterEach(async () => {
  const models = Object.values(db.sequelize.models);

  return await models.forEach((tableName) => {
    tableName.destroy({ truncate: true, cascade: true, logging: null });
  });
});
