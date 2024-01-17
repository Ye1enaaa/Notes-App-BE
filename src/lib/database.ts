import { Sequelize } from 'sequelize';
import config from '@config'

const DATABASE = config.DATABASE;
const USERNAME = config.DATABASE_USERNAME;
const PASSWORD = config.DATABASE_PASSWORD;

function createDatabaseConnection(database: string, username: string, password: string, options: any): Sequelize {
  const sequelize = new Sequelize(database, username, password, options);
  return sequelize;
}

const sequelize: Sequelize = createDatabaseConnection(DATABASE, USERNAME, PASSWORD, {
  dialect: 'mysql',
  logging: false,
});
export default sequelize;