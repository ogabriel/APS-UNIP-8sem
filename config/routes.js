const Router = require('express').Router();

// require controllers
const UserController = require('../app/controllers/user_controller');
const RecyclingStationController = require('../app/controllers/recycling_station_controller');

// add use controllers
Router.use('/users', UserController);
Router.use('/recyclingstations', RecyclingStationController);

module.exports = Router;
