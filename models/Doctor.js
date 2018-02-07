
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('doctor', {
    fullName: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: 'password'
    },
    userType: {
      type: DataTypes.STRING,
      defaultValue: 'doctor'
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'default_doctor_photo.png'
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    rating: DataTypes.DECIMAL,
    info: DataTypes.JSONB,
    specialty: DataTypes.STRING,
    degree: DataTypes.STRING,
    degreeDate: DataTypes.DATEONLY,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  });

  Doctor.associate = ({Appointment, Patient}) => {
    Doctor.hasMany(Appointment, {as: 'appointments'});
    Doctor.belongsToMany(Patient, {through: Appointment});
  };

  return Doctor;
}
