const { Router } = require('express');
const router = Router();

router.use(require('./root'));
router.use(require('./countdown'))
router.use(require('./camera'))

module.exports = router;