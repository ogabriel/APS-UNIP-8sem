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

router.put('/:id/add_plastic', (req, res) => {
  const id = req.params.id,
    g = req.body.g;

  if (!isNaN(id) && !isNaN(g)) {
    RecyclingStation.increment({ plastic: g }, { where: { id: id } }).then(
      (data) => {
        const station = data[0][0][0];

        if (station) {
          res.json(station);
        } else {
          res.status(404).send();
        }
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_metal', (req, res) => {
  const id = req.params.id,
    g = req.body.g;

  if (!isNaN(id) && !isNaN(g)) {
    RecyclingStation.increment({ metal: g }, { where: { id: id } }).then(
      (data) => {
        const station = data[0][0][0];

        if (station) {
          res.json(station);
        } else {
          res.status(404).send();
        }
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_glass', (req, res) => {
  const id = req.params.id,
    g = req.body.g;

  if (!isNaN(id) && !isNaN(g)) {
    RecyclingStation.increment({ glass: g }, { where: { id: id } }).then(
      (data) => {
        const station = data[0][0][0];

        if (station) {
          res.json(station);
        } else {
          res.status(404).send();
        }
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_paper', (req, res) => {
  const id = req.params.id,
    g = req.body.g;

  if (!isNaN(id) && !isNaN(g)) {
    RecyclingStation.increment({ paper: g }, { where: { id: id } }).then(
      (data) => {
        const station = data[0][0][0];

        if (station) {
          res.json(station);
        } else {
          res.status(404).send();
        }
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

router.put('/:id/add_electronic', (req, res) => {
  const id = req.params.id,
    g = req.body.g;

  if (!isNaN(id) && !isNaN(g)) {
    RecyclingStation.increment({ electronic: g }, { where: { id: id } }).then(
      (data) => {
        const station = data[0][0][0];

        if (station) {
          res.json(station);
        } else {
          res.status(404).send();
        }
      }
    );
  } else {
    res.status(400).send('Wrong type of data');
  }
});

module.exports = router;
