const faker = require('faker');

const { userParams } = require('./user');
const { RecyclingStation, User } = require('../../app/models');

const numberOptions = { min: 1, max: 1000000 };

const defaultOptions = {
  name: faker.name.findName(),
  coordinates: [faker.address.latitude(), faker.address.longitude()],
  plastic: faker.random.number(numberOptions),
  metal: faker.random.number(numberOptions),
  glass: faker.random.number(numberOptions),
  paper: faker.random.number(numberOptions),
  electronic: faker.random.number(numberOptions),

  User: userParams(),
};

const stationParams = (options) => ({ ...defaultOptions, ...options });

exports.stationParams = (options = {}) => stationParams(options);

exports.createStation = async (options = {}) =>
  await RecyclingStation.create(stationParams(options), { include: [User] });

exports.buildStation = async (options = {}) =>
  await RecyclingStation.build(stationParams(options), { include: User });
