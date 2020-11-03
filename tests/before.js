const db = require('../app/models');

afterEach(async () => {
  const models = Object.values(db.sequelize.models);

  return await models.forEach((tableName) => {
    tableName.destroy({ truncate: true, cascade: true, logging: null });
  });
});
