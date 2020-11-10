'use strict';

const path = require('path');
const router = require('express').Router();
const { sequelize, Op, RecyclingStation } = require(path.join(
  __dirname,
  'app/models'
));

router.get('/localizations', function (req, res) {
  const name = req.query.name;
  const queryParams = name
    ? { where: { name: { [Op.iLike]: `%${name}%` } } }
    : {};

  RecyclingStation.findAll(queryParams).then((data) => {
    const localizations = data.map((station) => {
      return {
        type: 'Feature',
        properties: {
          popupContent: `
          ${station.name}
          <br>
          <button class="btn btn-md btn-primary btn-block">Ir para</button>
          `,
        },
        geometry: station.localization,
      };
    });

    res.json(localizations);
  });
});

router.get('/report', function (req, res) {
  RecyclingStation.findAll({
    attributes: [
      [sequelize.fn('SUM', sequelize.col('electronic')), 'electronic'],
      [sequelize.fn('SUM', sequelize.col('glass')), 'glass'],
      [sequelize.fn('SUM', sequelize.col('metal')), 'metal'],
      [sequelize.fn('SUM', sequelize.col('paper')), 'paper'],
      [sequelize.fn('SUM', sequelize.col('plastic')), 'plastic'],
    ],
  }).then((data) => {
    res.json(data[0]);
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

router.post('/', (req, res) => {
  RecyclingStation.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((data) => {
      res.status(400).send({ errors: data.errors.map((e) => e.message) });
    });
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

module.exports = router;