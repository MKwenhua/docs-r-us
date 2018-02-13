const Promise = require('bluebird');
const DoctorSeed = require('./DoctorSeed.js');
const PatientSeed = require('./PatientSeed.js');
const AppointmentSeed = require('./AppointmentSeed.js');
const HospitalSeed = require('./HospitalSeed.js');
const Sequelize = require('sequelize');

module.exports = ({Doctor, Patient, Appointment, Hospital}) => {
  const promises = [
    Doctor.bulkCreate(DoctorSeed),
    Patient.bulkCreate(PatientSeed),
    Hospital.bulkCreate(HospitalSeed)
  ];
  Promise.all(promises).then(results => {
    const doctors = results[0].map(doc => doc.dataValues);
    const patients = results[1].map(p => p.dataValues);

    AppointmentSeed(Appointment, doctors, patients);
    Hospital.findAll({
      where: Sequelize.where(
        Sequelize.fn('ST_DWithin',
          Sequelize.col('position'),
            Sequelize.fn('ST_SetSRID',
              Sequelize.fn('ST_MakePoint', -87.6308846, 41.889671799999995),
            4326),
          0.045),
        true)
    }).then(hospitals => {
      results[0].forEach(doc => {
        doc.setHospital(hospitals[Math.floor(Math.random() * hospitals.length)]).then(rel => {
          console.log('association created')
        }).catch(err => console.log('association error', err))
      });
    }).catch(err => console.log('hospital Geo Search error', err));
    console.log('promise All Seeded:');
  }).catch(err => console.log(err));
}
