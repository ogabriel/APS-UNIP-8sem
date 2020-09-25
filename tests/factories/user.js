const faker = require('faker');
const { User } = require('../../app/models');

const defaultOptions = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
};

const userParams = (options) => ({ ...defaultOptions, ...options });

exports.userParams = (options = {}) => userParams(options);

exports.createUser = async (options = {}) =>
    await User.create(userParams(options));

exports.buildUser = async (options = {}) =>
    await User.build(userParams(options));