const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
    config.sequelize.database,
    config.sequelize.username,
    config.sequelize.password, {
    host: config.sequelize.host,
    dialect: config.sequelize.dialect
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully !');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Role = require('../models/Role')(sequelize, Sequelize);
db.User = require('../models/User')(sequelize, Sequelize);
db.UnitPrice = require('../models/UnitPrice')(sequelize, Sequelize);
db.Room = require('../models/Room')(sequelize, Sequelize);
db.RoomInfo = require('../models/RoomInfo')(sequelize, Sequelize);
db.Bill = require('../models/Bill')(sequelize, Sequelize);

module.exports = db;