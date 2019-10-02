module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        visibility: {
            type: DataTypes.BOOLEAN
        }
    },{
        freezeTableName: true
    });
    
    return Role;
}