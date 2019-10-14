module.exports = (sequelize, DataTypes) => {
    const RoomInfo = sequelize.define('room_info', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        electricNumber: {
            field: 'electric_number',
            type: DataTypes.STRING
        },
        waterNumber: {
            field: 'water_number',
            type: DataTypes.STRING
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        },
        roomId: {
            field: 'room_id',
            type: DataTypes.NUMBER,
        },
        roomMaster: {
            field: 'roomMaster',
            type: DataTypes.NUMBER,
        }
    }, {
        freezeTableName: true
    });

    return RoomInfo;
}