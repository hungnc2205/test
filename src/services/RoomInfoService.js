const db = require('../config/sequelize');

const RoomInfoService = {};

RoomInfoService.findAll = () => {
    return db.RoomInfo.findAll().then(roomInfos => {
        return {
            status: true,
            info: roomInfos
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

RoomInfoService.create = (roomInfo) => {
    return db.RoomInfo.create(roomInfo).then(roomInfo => {
        return {
            status: true,
            info: roomInfo
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });
}

RoomInfoService.findByRoom = (roomId) => {

    let query = 'SELECT A.electric_number, A.water_number, A.created_at, B.room_money, B.name FROM room_info A INNER JOIN room B ON A.room_id = B.id WHERE B.id = :roomId ORDER BY A.created_at DESC';

    return db.sequelize.query(query, {
        replacements: { roomId: roomId },
        type: db.sequelize.QueryTypes.SELECT
    }).then(roomInfos => {
        return {
            status: true,
            info: roomInfos
        }
    }).catch(error => {
        return {
            status: false,
            info: error
        }
    });

}


module.exports = RoomInfoService;