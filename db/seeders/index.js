const Promise = require('bluebird');
const DoctorSeed = require('./DoctorSeed.js');
const PatientSeed = require('./PatientSeed.js');
const AppointmentSeed = require('./AppointmentSeed.js');
const HospitalSeed = require('./HospitalSeed.js');
const client = require('../../config/redis_client.js');

module.exports = ({Doctor, Patient, Appointment, Hospital}) => {
  client.get('hospitalList', (err, reply) => {
    if (err) {
      console.log('redis Error: ', err);
    }
    const promises = [
      Doctor.bulkCreate(DoctorSeed),
      Patient.bulkCreate(PatientSeed)
    ];
    Promise.all(promises).then(results => {
      const doctors = results[0].map(doc => doc.dataValues);
      const patients = results[1].map(p => p.dataValues);
      AppointmentSeed(Appointment, doctors, patients);
      HospitalSeed(Hospital,JSON.parse(reply))
      console.log('promise All Seeded:');
    }).catch(err => console.log(err));
  });
}
