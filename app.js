'use strict';

// Config envs
require('dotenv').config();

// Configure express
const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();

// Configura json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'aps8',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Config static files
app.use(express.static(path.join(__dirname, 'public')));

// Config api routes
const routes = require('./config/routes');

app.use('/api/v1', routes);

// Exports whole app
module.exports = app;
