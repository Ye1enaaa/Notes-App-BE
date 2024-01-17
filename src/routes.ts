import { Application } from 'express';
import cors from 'cors';
import noteRouter from '@routes/note.route';
import userRouter from '@routes/user.route';

export default async function routes (app: Application) {
    app.use(cors());

    app.use('/notes', noteRouter);
    app.use('/users', userRouter);
}