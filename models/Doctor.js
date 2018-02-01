
module.exports = ({sequelize, Sequelize}) => {

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

  return Doctor;
}
