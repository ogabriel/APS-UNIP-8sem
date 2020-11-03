'use strict';

const router = require('express').Router();
const { User } = require('../models');

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

router.put('/login', async (req, res) => {
  // put him on the session
});

router.put('/logout', async (req, res) => {
  // remove him from the session
});
});
*/

module.exports = router;
