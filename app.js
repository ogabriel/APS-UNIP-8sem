'use strict';

// Config envs
require('dotenv').config();

// Configure express
const path = require('path');
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const app = express();

// Configure json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure views
app.set('view engine', 'ejs');

// Configure DELETE and PUT on forms
app.use(methodOverride('_method'));

// Configure session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'aps8',
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Config static files
app.use(express.static(path.join(__dirname, 'public')));

// Config api routes
const routes = require(path.join(__dirname, './config/routes'));
app.use('/', routes);

// Exports whole app
module.exports = app;
