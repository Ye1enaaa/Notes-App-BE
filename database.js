const Sequelize = require('sequelize');

const sequelize = new Sequelize('notesweb','root','', {
    dialect: 'mysql'
});

module.exports = sequelize;

//Checking Connection
// async function connectIng() {
//     await sequelize.authenticate();
//     console.log('200')
// }

// connectIng();