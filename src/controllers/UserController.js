const User = require("../models/Users");

const UserController = {
    addUser: async (req, res) => {
        const {name, password, age} = req.body;
        const user = User.create({
            name: name,
            password: password,
            age: age
        })

        res.status(200).json({
            msg:'Success'
        })
    },

    fetchUsers: async (req, res) => {
        const users = await User.findAll();
        res.status(200).json({
            users: users
        })
    }
}

module.exports = UserController