const Sequelize = require('sequelize');

function createDatabaseConnection(database, username, password, options) {
    const sequelize = new Sequelize(database, username, password, options);
    return sequelize;
}

const sequelize = createDatabaseConnection('notesweb','root','', {
    dialect: 'mysql'
});

module.exports = sequelize;