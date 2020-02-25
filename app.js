'use strict';

// Config envs
require('dotenv').config();

// Configure express
const path = require('path');
const express = require('express');
const app = express();

// Config static files
app.use(express.static(path.join(__dirname, 'public')));

// Config api routes
const routes = require('./config/routes');

app.use('/api/v1', routes);

// Exports whole app
module.exports = app;
