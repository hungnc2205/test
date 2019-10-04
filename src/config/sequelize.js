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
db.role = require('../models/role')(sequelize, Sequelize);
db.user = require('../models/user')(sequelize, Sequelize);

module.exports = db;