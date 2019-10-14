const BillService = require('../services/BillService');

const BillController = {};

BillController.create = async (req, res) => {

    let result = await BillService.create(req.body.roomId);

    if (!result.status) {
        return res.status(500).json({
            error: result.info
        })
    }

    return res.status(200).json({
        data: result.info
    })
}


module.exports = BillController;