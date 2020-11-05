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
*/

router.put('/:id/add_plastic', async (req, res) => {
  const id = req.params.id;
  const kg = req.body.kg;

  if (!isNaN(id) && !isNaN(kg)) {
    RecyclingStation.increment({ plastic_kg: kg }, { where: { id: id } }).then(
      (data) => {
        res.json(data);
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_metal', async (req, res) => {
  const id = req.params.id;
  const kg = req.body.kg;

  if (!isNaN(id) && !isNaN(kg)) {
    RecyclingStation.increment({ metal_kg: kg }, { where: { id: id } }).then(
      (data) => {
        res.json(data);
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_glass', async (req, res) => {
  const id = req.params.id;
  const kg = req.body.kg;

  if (!isNaN(id) && !isNaN(kg)) {
    RecyclingStation.increment({ glass_kg: kg }, { where: { id: id } }).then(
      (data) => {
        res.json(data);
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_paper', async (req, res) => {
  const id = req.params.id;
  const kg = req.body.kg;

  if (!isNaN(id) && !isNaN(kg)) {
    RecyclingStation.increment({ paper_kg: kg }, { where: { id: id } }).then(
      (data) => {
        res.json(data);
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_electronic', async (req, res) => {
  const id = req.params.id;
  const kg = req.body.kg;

  if (!isNaN(id) && !isNaN(kg)) {
    RecyclingStation.increment(
      { electronic_kg: kg },
      { where: { id: id } }
    ).then((data) => {
      res.json(data);
    });
  } else {
    res.status(400).send('Wrong type of data');
  }
});

module.exports = router;
