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

sequelize.query("SELECT 1 FROM `users` LIMIT 1", { type: QueryTypes.SELECT })
    .then(() => {
        // Table exists, just sync
        return User.sync();
    })
    .catch(() => {
        // Table doesn't exist, sync and log
        return User.sync().then(() => console.log('Table Created!'));
    })
    .catch((err) => {
        console.log('Error', err)
    });

module.exports = User;