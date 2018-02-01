const sequelize = require('./pg_connection.js');

const {
  Doctor,
  Patient,
  Appointment
} = require('./schema');

const GetUserType = (userType) => (userType === 'doctor' ? Doctor : Patient);

module.exports = {
  Doctor,
  Patient,
  Appointment,
  GetUserType
};
