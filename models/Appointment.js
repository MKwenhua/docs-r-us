module.exports = (sequelize, DataTypes) => {

  const Appointment = sequelize.define('appointment', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    //status: DataTypes.ENUM('pending', 'rejected', 'accepted', 'canceled'),
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    response: DataTypes.STRING,
    date: {
      type: DataTypes.DATEONLY
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: 'Requesting Appointment'
    },
    purpose: DataTypes.STRING,
    time: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  Appointment.associate = ({Patient, Doctor}) => {
    Appointment.belongsTo(Doctor);
    Appointment.belongsTo(Patient);
  };

  return Appointment;
}
