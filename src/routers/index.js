const router = require('express').Router();

router.use(require('./AuthRouter'));
router.use(require('./RoleRouter'));
router.use(require('./UserRouter'));
router.use(require('./UnitPriceRouter'));
router.use(require('./RoomRouter'));
router.use(require('./RoomInfoRouter'));
router.use(require('./BillRouter'))

module.exports = router;