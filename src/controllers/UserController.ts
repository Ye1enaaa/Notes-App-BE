import User from '@models/Users';
import { Request, Response } from 'express';

export default {
    addUser: async (req: Request, res: Response) => {
        const {name, password, age}: any = req.body;
        const user = User.create({
            name: name,
            password: password,
            age: age
        })

        res.status(200).json({
            msg:'Success'
        })
    },

    fetchUsers: async (req: Request, res: Response) => {
        const users = await User.findAll();
        res.status(200).json({
            users: users
        })
    }
}