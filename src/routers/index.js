const router = require('express').Router();

router.use(require('./AuthRouter'));
router.use(require('./RoleRouter'));
router.use(require('./UserRouter'));
router.use(require('./UnitPriceRouter'));

module.exports = router;