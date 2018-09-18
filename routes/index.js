const { Router } = require('express');
const router = Router();

router.use(require('./root'));
router.use(require('./countdown'))

module.exports = router;