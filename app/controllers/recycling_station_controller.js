'use strict';

const router = require('express').Router();
const { RecyclingStation } = require('../models');

router.get('/', function (req, res) {
    RecyclingStation.findAll().then((data) => {
        req.json(data);
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

router.post('/', async (req, res) => {

});

router.post('/', async (req, res) => {

});

router.post('/', async (req, res) => {

});

router.post('/', async (req, res) => {

});

router.post('/', async (req, res) => {

});