'use strict'

const { Router } = require('express');

const { index } = require('../controllers/countdown');

const router = Router();

router.get('/countdown', index)

module.exports = router;