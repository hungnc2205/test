var router = require('express').Router();

router.use(require('./auth'));
router.use(require('./product'));

module.exports = router;