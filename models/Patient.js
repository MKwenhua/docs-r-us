
module.exports = (sequelize, DataTypes) => {

  const Patient = sequelize.define('patient', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    fullName: {
      type: DataTypes.STRING,
      unique: true
    },
    userType: {
      type: DataTypes.STRING,
      defaultValue: 'patient'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    doctorNotes: DataTypes.JSONB,
    records: DataTypes.JSONB,
    phone: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      defaultValue: 'password'
    },
    birthday: DataTypes.DATEONLY
  }, {
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  });

  Patient.associate = ({Appointment, Doctor}) => {
    // 1 to many with board
    Patient.hasMany(Appointment, {as: 'appointments'});
    Patient.belongsToMany(Doctor, {through: Appointment});
  };


  return Patient;
}
