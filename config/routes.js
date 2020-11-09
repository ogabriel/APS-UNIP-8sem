const path = require('path');
const Router = require('express').Router();

// require controllers
const PageController = require(path.join(
  __dirname,
  'app/controllers/page_controller'
));
const UserController = require(path.join(
  __dirname,
  'app/controllers/api/v1/user_controller'
));
const RecyclingStationController = require(path.join(
  __dirname,
  'app/controllers/recycling_station_controller'
));

// add use controllers
Router.use('/', PageController);
Router.use('/api/v1/users', UserController);
Router.use('/api/v1/recycling_stations', RecyclingStationController);

module.exports = Router;
