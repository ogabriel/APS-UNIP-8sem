const faker = require('faker');

const { userParams } = require('./user');
const { RecyclingStation, User } = require('../../app/models');

const numberOptions = { min: 0, max: 1000000, precision: 0.001 };

const defaultOptions = {
  name: faker.name.findName(),
  localization: {
    type: 'Point',
    coordinates: [faker.address.latitude(), faker.address.longitude()],
    discovered: false,
  },
  plastic_kg: faker.random.number(numberOptions),
  metal_kg: faker.random.number(numberOptions),
  glass_kg: faker.random.number(numberOptions),
  paper_kg: faker.random.number(numberOptions),
  electronic_kg: faker.random.number(numberOptions),

  User: userParams(),
};

const stationParams = (options) => ({ ...defaultOptions, ...options });

exports.stationParams = (options = {}) => stationParams(options);

exports.createStation = async (options = {}) =>
  await RecyclingStation.create(stationParams(options), { include: [User] });

exports.buildStation = async (options = {}) =>
  await RecyclingStation.build(stationParams(options), { include: User });
