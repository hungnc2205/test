module.exports = (sequelize, DataTypes) => {
    const Bill = sequelize.define('bill', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        billNo: {
            field: 'bill_no',
            type: DataTypes.STRING,
            required: true
        },
        roomId: {
            field: 'room_id',
            type: DataTypes.NUMBER
        },
        roomMoney: {
            field: 'room_money',
            type: DataTypes.STRING
        },
        waterMoney:{
            field: 'water_money',
            type: DataTypes.STRING
        },
        electricMoney: {
            field: 'electric_money',
            type: DataTypes.STRING
        },
        waterNumber: {
            field: 'water_number',
            type: DataTypes.NUMBER
        },
        electricNumber: {
            field: 'electric_number',
            type: DataTypes.NUMBER
        },
        totalValue: {
            field: 'total_value',
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
    }, {
        freezeTableName: true
    });

    return Bill;
}