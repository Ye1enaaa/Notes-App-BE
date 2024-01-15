const User = require("../models/Users");

class UserController{
    async addUser(req, res){
        const {name, password, age} = req.body;
        const user = User.create({
            name: name,
            password: password,
            age: age
        })

        res.status(200).json({
            msg:'Success'
        })
    }

    async fetchUsers(req, res){
        const users = await User.findAll();
        res.status(200).json({
            users: users
        })
    }
}

module.exports = UserController