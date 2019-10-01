const dataFake = require('../config/dataFake')

var productController = {};

productController.findAll = function(req, res){
    return res.status(200).json({
        data: dataFake.products
    })
}

module.exports = productController;