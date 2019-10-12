const db = require('../config/sequelize');

let UnitPriceService = {};

UnitPriceService.findAll = (req, res) => {
    db.UnitPrice.findAll().then( unitPrices => {
        return res.status(200).json({
            data: unitPrices
        })
    });
}

UnitPriceService.create = (req, res) => {

    let unitPrice = req.body;

    db.UnitPrice.create(unitPrice).then(result => {
        return res.status(200).json({
            data: result
        })
    }).catch(err => {
        return res.status(500).json({
            name: err.name,
            code: err.parent.code,
            msg: err.parent.message
        })
    });
}

module.exports = UnitPriceService;
