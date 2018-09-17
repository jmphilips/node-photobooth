'use strict'

const { Router } = require('express');

const { index, create } = require('../controllers/home');

const router = Router();

router.get('/', index);
router.post('/', create)

module.exports = router;