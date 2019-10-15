module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            field: 'id',
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            field: 'username',
            type: DataTypes.STRING
        },
        password: {
            field: 'password',
            type: DataTypes.STRING
        },
        fullName: {
            field: 'full_name',
            type: DataTypes.STRING
        },
        birthday: {
            field: 'birthday',
            type: DataTypes.DATE
        },
        identifyNumber: {
            field: 'identify_number',
            type: DataTypes.STRING
        },
        address: {
            field: 'address',
            type: DataTypes.STRING
        },
        phoneNumber: {
            field: 'phone_number',
            type: DataTypes.STRING
        },
        roomId: {
            field: 'room_id',
            type: DataTypes.NUMBER
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE
        },
        roleId: {
            field: 'role_id',
            type: DataTypes.NUMBER
        },
        startDate: {
            field: 'start_date',
            type: DataTypes.DATE
        },
        endDate: {
            field: 'end_date',
            type: DataTypes.DATE
        },
        visibility: {
            field: 'visibility',
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true
    })
    return User;
}