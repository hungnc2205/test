module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
            required: true
        },
        visibility: {
            field: 'visibility',
            type: DataTypes.BOOLEAN
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

    return Role;
}