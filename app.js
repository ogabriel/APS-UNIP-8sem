'use strict';

// Config envs
require('dotenv').config();

// Configure express
const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();

// Configura json
app.use(express.json());

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'aps8',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
>>>>>>> add session config

// Config static files
app.use(express.static(path.join(__dirname, 'public')));

// Config api routes
const routes = require('./config/routes');

app.use('/api/v1', routes);

// Exports whole app
module.exports = app;
