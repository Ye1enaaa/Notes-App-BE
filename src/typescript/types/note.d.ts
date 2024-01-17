import { Model } from 'sequelize';

export interface INote extends Model {
    title: string;
    body: string;
}
