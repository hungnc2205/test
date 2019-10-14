const db = require('../config/sequelize');
const UnitPriceService = require('../services/UnitPriceService');
const RoomInfoService = require('../services/RoomInfoService');

const BillService = {}

BillService.create = async (roomId) => {

    let unitPrices = await UnitPriceService.getUnitPriceLatest();
    let roomInfos = await RoomInfoService.findByRoom(roomId);

    let waterPrice = unitPrices.info[0].waterPrice;
    let electricPrice = unitPrices.info[0].electricPrice;
    let internetPrice = unitPrices.info[0].internetPrice;

    let roomName = roomInfos.info[0].name;
    let electricNumSpent = roomInfos.info[0].electric_number - roomInfos.info[1].electric_number;
    let waterNumSpent = roomInfos.info[0].water_number - roomInfos.info[1].water_number;
    let year = roomInfos.info[0].created_at.split('-')[0];
    let month = roomInfos.info[0].created_at.split('-')[1];
    let roomMoney = roomInfos.info[0].room_money;
    let totalValue = parseFloat(waterNumSpent * waterPrice) + parseFloat(electricNumSpent * electricPrice) + parseFloat(internetPrice) + parseFloat(roomMoney);

    // calculate money
    let bill = {
        billNo: `P_${roomName}_${year}-${month}`,
        roomId: roomId,
        waterMoney: waterNumSpent * waterPrice,
        electricMoney: electricNumSpent * electricPrice,
        waterNumber: waterNumSpent,
        electricNumber: electricNumSpent,
        roomMoney: roomMoney,
        totalValue: totalValue
    }

    return db.Bill.create(bill).then(bill => {
        return {
            status: true,
            info: bill
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    })

}

module.exports = BillService;