module.exports = (sequelize) => {
  const db = {
    Doctor: sequelize.import('./Doctor'),
    Patient: sequelize.import('./Patient'),
    Hospital:  sequelize.import('./Hospital'),
    Appointment: sequelize.import('./Appointment'),
  };

  Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;

  return db;
}
