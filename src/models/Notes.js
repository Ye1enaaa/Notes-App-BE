const { Sequelize } = require("sequelize");
const sequelize = require("../lib/database");

const Notes = sequelize.define('notes', {
    title:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    }
})

Notes.sync().then((data) => {
    console.log('Table Created')
}).catch((err) => {
    console.error(err)
})

module.exports = Notes;