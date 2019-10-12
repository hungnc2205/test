const db = require('../config/sequelize');

let UnitPriceService = {};

UnitPriceService.findAll = () => {
    return db.UnitPrice.findAll().then(unitPrices => {
        return {
            status: true,
            info: unitPrices
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

UnitPriceService.create = (unitPrice) => {

    return db.UnitPrice.create(unitPrice).then(unitPrices => {
        return {
            status: true,
            info: unitPrices
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

UnitPriceService.getUnitPriceLatest = () => {
    db.UnitPrice.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(unitPrices => {
        return {
            status: true,
            info: unitPrices
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

module.exports = UnitPriceService;
