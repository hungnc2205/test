var router = require('express').Router();

router.use(require('./auth'));
router.use(require('./role'));
router.use(require('./user'));

module.exports = router;