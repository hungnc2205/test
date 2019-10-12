const UnitPriceService = require('../services/UnitPriceService');

const UnitPriceController = {};

UnitPriceController.findAll = async (req, res) => {

    let result = await UnitPriceService.findAll();

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })

}

UnitPriceController.create = async (req, res) => {
    
    let result = await UnitPriceService.create(req.body);

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

UnitPriceController.getUnitPriceLatest = async (req, res) => {

    let result = await UnitPriceService.getUnitPriceLatest();

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}

module.exports = UnitPriceController;