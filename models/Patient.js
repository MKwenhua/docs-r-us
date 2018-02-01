
module.exports = ({sequelize, Sequelize}) => {

  const Patient = sequelize.define('patient', {
    id: {
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

  return Patient;
}
