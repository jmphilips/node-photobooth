'use strict'

const { cameraStart } = require('../services/camera');

module.exports.index = (_, res) => res.render('index');

module.exports.create = (({ body }, res, err) => {
  cameraStart(body);
  res.redirect('/countdown');
})