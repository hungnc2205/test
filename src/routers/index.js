var router = require('express').Router();

router.use(require('./auth'));
router.use(require('./role'));

module.exports = router;