const Router = require('express').Router();

// require controllers
const UserController = require('../app/controllers/user_controller');

// add use controllers
Router.use('/users', UserController);

module.exports = Router;
