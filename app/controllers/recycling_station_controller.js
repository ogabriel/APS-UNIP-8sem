'use strict';

const router = require('express').Router();
const { RecyclingStation } = require('../models');

router.get('/localizations', function (req, res) {
  RecyclingStation.findAll().then((data) => {
    const localizations = data.map((station) => {
      return {
        type: 'Feature',
        properties: {
          popupContent: null,
        },
        geometry: station.localization,
      };
    });

    res.json(localizations);
  });
});

router.get('/:id', function (req, res) {
  RecyclingStation.findByPk(req.params.id).then((data) => {
    if (data) {
      res.json(data);
    } else {
      res.status(404).send();
    }
  });
});

/*
router.post('/', async (req, res) => {
  RecyclingStation.create(req.body).then((data) =>{
    res.json(data);
  });
});

router.post('/:id/add_plastic', async (req, res) => {});

router.post('/:id/add_metal', async (req, res) => {});

router.post('/:id/add_glass', async (req, res) => {});

router.post('/:id/add_paper', async (req, res) => {});

router.post('/:id/add_electronic', async (req, res) => {});
*/

module.exports = router;
