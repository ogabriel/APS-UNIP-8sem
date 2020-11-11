'use strict';

const path = require('path');
const router = require('express').Router();
const { authRedirect, fowardRedirect } = require(path.join(
  process.cwd(),
  'config/auth'
));

router.get('/login.html', fowardRedirect, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'private/login.html'));
});

router.get('/criar_usuario.html', fowardRedirect, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'private/criar_usuario.html'));
});

router.get('/mapa.html', authRedirect, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'private/mapa.html'));
});

router.get('/estacao_de_reciclagem.html', authRedirect, (req, res) => {
  res.sendFile(path.join(process.cwd(), 'private/estacao_de_reciclagem.html'));
});

module.exports = router;
