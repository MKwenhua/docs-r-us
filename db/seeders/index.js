const DoctorSeed = require('./DoctorSeed.js');
const PatientSeed = require('./PatientSeed.js');

module.exports = ({Doctor, Patient, Appointment}) => {
  Doctor.bulkCreate(DoctorSeed).then(() => {
    console.log('Doctors Seeded:');
  });
  Patient.bulkCreate(PatientSeed).then((res) => {
    console.log('Patients Seeded:');
  });
}
