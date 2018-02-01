const Sequelize = require('sequelize');
const sequelize = require('./pg_connection.js');
const bCrypt = require('bcrypt-nodejs');

const Doctor = sequelize.define('doctor', {
  fullName: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    defaultValue: 'password'
  },
  userType: {
    type: Sequelize.STRING,
    defaultValue: 'doctor'
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: 'default_doctor_photo.png'
  },
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
    //autoIncrement: true
  },
  rating: Sequelize.DECIMAL,
  info: Sequelize.JSONB,
  specialty: Sequelize.STRING,
  degree: Sequelize.STRING,
  degreeDate: Sequelize.DATEONLY,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ]
});

const Appointment = sequelize.define('appointment', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  canceled: Sequelize.BOOLEAN,
  date: {
    type: Sequelize.DATEONLY
  },
  purpose: Sequelize.TEXT,
  time: {
    type: Sequelize.DATE
  },
  description: {
    type: Sequelize.STRING
  }
});

const Patient = sequelize.define('patient', {
  id: {
    //autoIncrement: true,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  fullName: {
    type: Sequelize.STRING,
    unique: true
  },
  userType: {
    type: Sequelize.STRING,
    defaultValue: 'patient'
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  doctorNotes: Sequelize.JSONB,
  records: Sequelize.JSONB,
  phone: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    defaultValue: 'password'
  },
  birthday: Sequelize.DATEONLY
}, {
  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ]
});

Doctor.hasMany(Appointment, {as: 'appointments'});
Patient.hasMany(Appointment, {as: 'appointments'});
Doctor.belongsToMany(Patient, {through: Appointment});
Patient.belongsToMany(Doctor, {through: Appointment});

// force: true will drop the table if it already exists
Doctor.sync({force: true}).then(() => Doctor.create({
  fullName: 'John A. Zoidberg',
  email: 'zoidberg@aol.com',
  photo: 'zoidberg-photo.jpg',
  specialty: 'Pathology',
  password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
})).then(doc => {
  console.log(doc.toJSON());
});
//
// // force: true will drop the table if it already exists
Patient.sync({force: true}).then(() => Patient.create({
  fullName: 'Random Person',
  email: 'rando@aol.com',
  birthday: new Date(1988, 6, 20),
  password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
})).then(doc => {
  console.log(doc.toJSON());
});

Appointment.sync({force: true}).then(() => {
  console.log('Appointment synced!')
})

module.exports = {
  Doctor,
  Patient,
  Appointment
}
