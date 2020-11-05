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

/*
router.post('/', async (_req, _res) => {
  // create user
  // put him on the session
});
*/

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/mapa',
    failureRedirect: '/login',
  })
);

router.delete('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
