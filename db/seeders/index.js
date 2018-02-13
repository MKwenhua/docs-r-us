const Promise = require('bluebird');
const DoctorSeed = require('./DoctorSeed.js');
const PatientSeed = require('./PatientSeed.js');
const AppointmentSeed = require('./AppointmentSeed.js');
const HospitalSeed = require('./HospitalSeed.js');
const { Op } = require('sequelize');
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
      client.get("hospitalList", function(err, reply) {
        console.log(reply);

        HospitalSeed(Hospital, JSON.parse(reply))
        Hospital.findAll({
          where: {
            id: {
               [Op.or]: [2, 7, 18, 38, 76, 62, 66, 61, 73, 77, 44, 65, 75]
             }
          }
        }).then(hospitals => {
          doctors.forEach(doc => {
            doc.setHospital(hospitals[Math.floor(Math.random() * hospitals.length)]).then(rel => {
                console.log('association created')
            }).catch(err => console.log('association error',err))
          })
        })
      });

      console.log('promise All Seeded:');
    }).catch(err => console.log(err));
  });
}
