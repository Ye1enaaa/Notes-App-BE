const { Sequelize } = require("sequelize");
const sequelize = require("../lib/database");

const User = sequelize.define('user', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

//Syncing Table
//Notes: {force: true} -> drop it first, {alter: true} -> alter table

User.sync().then((data) => {
    console.log('Table Created!')
}).catch((err) => {
    console.log('Error')
})

module.exports = User;