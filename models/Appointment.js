
module.exports = ({sequelize, Sequelize}) => {

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

  return Appointment;
}
