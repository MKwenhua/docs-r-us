const sequelize = require('./pg_connection.js');
const db = require('../models')(sequelize);
const rebuildAndSeed = process.env.SEED_DB === 'true';

db.GetUserType = (userType) => (userType === 'doctor' ? db.Doctor : db.Patient);

db.sequelize.sync({force: rebuildAndSeed}).then(() => {
  if (rebuildAndSeed) {
    require('./seeders')(db);
  }
  // db.Doctor.findOne({
  //   where: {
  //     email: 'zoidberg@aol.com'
  //   }
  // }).then(doc => {
  //   db.Patient.findOne({
  //     where: {
  //       email: 'julia.butler@example.com'
  //     }
  //   }).then(pat => {
  //     db.Appointment.create({
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



module.exports = db
