require('dotenv').config();
const Sequelize = require('sequelize');
const {
  RDS_DB_ENDPOINT,
  RDS_DB_NAME,
  RDS_PASSWORD,
  RDS_PORT
} = process.env;

const sequelize = new Sequelize(RDS_DB_NAME, 'root', RDS_PASSWORD, {
  host: RDS_DB_ENDPOINT,
  port: RDS_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: 'Amazon RDS'
  },
  pool: {
    maxConnections: 5,
    maxIdleTime: 30
  },
  language: 'en'
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
