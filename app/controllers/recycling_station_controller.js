'use strict';

const router = require('express').Router();
const { RecyclingStation } = require('../models');

router.get('/', function (req, res) {
  RecyclingStation.findAll().then((data) => {
    res.json(data);
  });
});

router.get('/localization', function (req, res) {
  RecyclingStation.findAll().then((data) => {
    const localizations = data.map((station) => {
      return {
        type: 'Feature',
        geometry: station.localization,
      };
    });
    res.json(localizations);
  });
});

router.post('/', async (req, res) => {
  const recyclingStation = await RecyclingStation.create(req.body);
  res.json(recyclingStation);
});

/* Possibly incorrect */
router.put('/', async (req, res) => {
  const recyclingStation = await RecyclingStation.update(req.body);
  res.json(recyclingStation);
});

//router.post('/add_plastic', async (req, res) => {});

//router.post('/add_metal', async (req, res) => {});

//router.post('/add_glass', async (req, res) => {});

//router.post('/add_paper', async (req, res) => {});

//router.post('/add_electronic', async (req, res) => {});

module.exports = router;
