import { Sequelize } from 'sequelize';

function createDatabaseConnection(database: string, username: string, password: string, options: any): Sequelize {
  const sequelize = new Sequelize(database, username, password, options);
  return sequelize;
}

const sequelize: Sequelize = createDatabaseConnection('notesweb','root','', {
  dialect: 'mysql'
});

export default sequelize;