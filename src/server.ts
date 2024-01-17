import 'module-alias/register';
import { createServer, Server } from 'http';
import runServer from './app';
import sequelize from '@lib/database';
import config from '@config';

const app = runServer();
const httpServer: Server = createServer(app);

const HOST: string = config.HOST;
const PORT: number = config.PORT;

sequelize.authenticate()
    .then(() => {
        console.log('\x1b[34m', 'Database connection has been established successfully.');
        httpServer.listen(PORT, () => {
            console.log('\x1b[33m', `APP RUNNING AT (HOST: ${HOST}|PORT: ${PORT})`)
            console.log('\x1b[0m')
        })
    })
    .catch((error: Error) => {
        console.error('\x1b[31m%s\x1b[0m', 'Unable to connect to the database:', error);
        process.exit(1);
    });