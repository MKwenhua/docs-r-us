if (!process.env.HEROKU) {
  require('dotenv').config();
}
const Sequelize = require('sequelize');
const {
  RDS_DB_NAME,
  DATABASE_URL
} = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  language: 'en'
})

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
