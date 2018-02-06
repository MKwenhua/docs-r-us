const DB = require('./pg_connection.js');
const Doctor = require('../models/Doctor.js')(DB);
const Patient = require('../models/Patient.js')(DB);
const Appointment = require('../models/Appointment.js')(DB);

Appointment.belongsTo(Doctor);
Appointment.belongsTo(Patient);
Doctor.hasMany(Appointment, {as: 'appointments'});
Patient.hasMany(Appointment, {as: 'appointments'});
Doctor.belongsToMany(Patient, {through: Appointment});
Patient.belongsToMany(Doctor, {through: Appointment});

const RDS_Models = {
  Doctor,
  Patient,
  Appointment,
  DB
}

DB.sequelize.sync().then(() => {
  if (process.env.SEED_DB) {
    require('./seeders')(RDS_Models);
  }
  console.log('DB Synced');
}).catch(error => {
  console.log('DB sync error', error);
})

module.exports = RDS_Models;
