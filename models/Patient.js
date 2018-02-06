const ParseJson = data => {
   try {
     return JSON.parse(data);
   } catch(e) {
      return {};
   }
}

const updateRecords = (current, updated) => JSON.stringify(
  Object.assign({}, ParseJson(current), updated)
)

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
  }, {
    instanceMethods: {
      updateRecords: updated => JSON.stringify(
        Object.assign({}, ParseJson(this.records), updated)
      )
    }
  }
);

Patient.associate = ({Appointment, Doctor}) => {
  Patient.hasMany(Appointment, {as: 'appointments'});
  Patient.belongsToMany(Doctor, {through: Appointment});
};


  return Patient;
}
