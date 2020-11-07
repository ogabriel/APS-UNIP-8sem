'use strict';

const router = require('express').Router();
const { User } = require('../models');
const passport = require('../../config/passport');

router.get('/:id', function (req, res) {
  User.findByPk(req.params.id).then((data) => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send();
    }
  });
});

router.post('/', (req, res) => {
  const user_params = req.body;

  if (user_params.password == user_params.confirmation_password) {
    User.create(user_params)
      .then((data) => {
        res.json(data);
      })
      .catch((data) => {
        res.status(400).send({ errors: data.errors.map((e) => e.message) });
      });
  } else {
    res.status(400).send({ errors: ['Wrong password'] });
  }
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/mapa.html',
    failureRedirect: '/login.html',
  })
);

router.delete('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
