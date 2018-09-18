'use strict'

const { Router } = require('express');

const { snap } = require('../controllers/camera');

const router = Router();

router.get('/snap', snap);

module.exports = router;