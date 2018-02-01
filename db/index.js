const {
  Doctor,
  Patient,
  Appointment,
  DB
} = require('./schema');

const GetUserType = (userType) => (userType === 'doctor' ? Doctor : Patient);

module.exports = {
  Doctor,
  Patient,
  Appointment,
  GetUserType
};
