'use strict';

const router = require('express').Router();
const { User } = require('../models');

router.get('/:id', function (req, res) {
  User.findByPk(req.params.id).then((data) => {
    res.json(data);
  });
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.put('/login', async (req, res) => {
  // void returning function
});

router.put('/logout', async (req, res) => {
  // void returning function
});

module.exports = router;
