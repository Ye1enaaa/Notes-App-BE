import { Model } from "sequelize";


export interface IUser extends Model {
    name: string;
    password: string;
    age: number
}