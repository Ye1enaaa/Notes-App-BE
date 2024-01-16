const { createServer } = require('http');
const runServer = require('./app');
const dbConnection = require('./lib/database');

const app = runServer();
const httpServer = createServer(app);

const HOST = 'localhost';
const PORT = 5000;


dbConnection.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        httpServer.listen(PORT, () => {
            console.log('\x1b[33m', `APP RUNNING AT (HOST: ${HOST}|PORT: ${PORT})`)
            console.log('\x1b[0m')
        })
    })
    .catch(error => {
        console.error('\x1b[31m%s\x1b[0m', 'Unable to connect to the database:', error);
        process.exit(1);
    });