const Promise = require('bluebird');
const DoctorSeed = require('./DoctorSeed.js');
const PatientSeed = require('./PatientSeed.js');
const AppointmentSeed = require('./AppointmentSeed.js');

module.exports = ({Doctor, Patient, Appointment}) => {
  const promises = [
    Doctor.bulkCreate(DoctorSeed),
    Patient.bulkCreate(PatientSeed)
  ];
  Promise.all(promises).then(results => {
    const doctors = results[0].map(doc => doc.dataValues);
    const patients = results[1].map(p => p.dataValues);
    AppointmentSeed(Appointment,doctors, patients );
    console.log('promise All Seeded:');
  });
}
