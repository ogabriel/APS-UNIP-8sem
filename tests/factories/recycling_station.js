const faker = require('faker');

const { userParams } = require('./user');
const { RecyclingStation, User } = require('../../app/models');

const defaultOptions = {
  name: faker.name.findName(),
  localization: {
    type: 'Point',
    coordinates: [faker.address.latitude(), faker.address.longitude()],
  },
  plastic_kg: faker.random.float(),
  metal_kg: faker.random.float(),
  glass_kg: faker.random.float(),
  paper_kg: faker.random.float(),
  electronic_kg: faker.random.float(),

  User: userParams(),
};

const stationParams = (options) => ({ ...defaultOptions, ...options });

exports.stationParams = (options = {}) => stationParams(options);

exports.createStation = async (options = {}) =>
  await RecyclingStation.create(stationParams(options), { include: [User] });

exports.buildStation = async (options = {}) =>
  await RecyclingStation.build(stationParams(options), { include: User });
