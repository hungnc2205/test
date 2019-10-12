module.exports = (sequelize, DataTypes) => {
    const UnitPrice = sequelize.define('unit_price', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        waterPrice: {
            field: 'water_price',
            type: DataTypes.STRING,
            required: true
        },
        electricPrice: {
            field: 'electric_price',
            type: DataTypes.BOOLEAN
        },
        internetPrice: {
            field: 'internet_price',
            type: DataTypes.STRING,
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

    return UnitPrice;
}