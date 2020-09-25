const faker = require('faker');

const { userParams } = require('./user');
const { RecyclingStation, User } = require('../../app/models');

const defaultOptions = {
    localization: {
        type: 'Point',
        coordinates: [faker.address.latitude(), faker.address.longitude()],
    },
    User: userParams(),
};

const stationParams = (options) => ({ ...defaultOptions, ...options });

exports.stationParams = (options = {}) => stationParams(options);

exports.createStation = async (options = {}) =>
    await RecyclingStation.create(stationParams(options), { include: [User] });

exports.buildStation = async (options = {}) =>
    await RecyclingStation.build(stationParams(options), { include: User});