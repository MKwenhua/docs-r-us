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
  // Doctor.findOne({
  //   where: {
  //     email: 'zoidberg@aol.com'
  //   }
  // }).then(doc => {
  //   Patient.findOne({
  //     where: {
  //       email: 'julia.butler@example.com'
  //     }
  //   }).then(pat => {
  //     Appointment.create({
  //       date: new Date(),
  //       time: new Date(),
  //       purpose: 'Qdoba',
  //        description: 'feel sick 2',
  //        doctorId: doc.id,
  //        patientId: pat.id
  //
  //      }).then(appt => {
  //        console.log('\n Appointment Has beeen made:', appt.toJSON(), '\n');
  //      }).catch(err => {
  //        console.log('\n Appointment error:',err);
  //      })
  //   })
  // })
  console.log('DB Synced');
}).catch(error => {
  console.log('DB sync error', error);
})

module.exports = RDS_Models;
