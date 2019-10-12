const db = require('../config/sequelize');
const UnitPriceService = require('../services/UnitPriceService');

const BillService = {}

BillService.createBill = async (req, res) => {
    // get unit price
    let unitPrice = await UnitPriceService.getUnitPriceLatest();

    // calculate money

}

module.exports = BillService;