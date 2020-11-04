const faker = require('faker');

const { userParams } = require('./user');
const { RecyclingStation, User } = require('../../app/models');

const kgOptions = { min: 0, max: 1000000, precision: 0.001 };

const defaultOptions = {
  name: faker.name.findName(),
  localization: {
    type: 'Point',
    coordinates: [faker.address.latitude(), faker.address.longitude()],
    discovered: false,
  },
  plastic_kg: faker.random.number(kgOptions),
  metal_kg: faker.random.number(kgOptions),
  glass_kg: faker.random.number(kgOptions),
  paper_kg: faker.random.number(kgOptions),
  electronic_kg: faker.random.number(kgOptions),

  User: userParams(),
};

const stationParams = (options) => ({ ...defaultOptions, ...options });

exports.stationParams = (options = {}) => stationParams(options);

exports.createStation = async (options = {}) =>
  await RecyclingStation.create(stationParams(options), { include: [User] });

exports.buildStation = async (options = {}) =>
  await RecyclingStation.build(stationParams(options), { include: User });
