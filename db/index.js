const sequelize = require('./pg_connection.js');
const db = require('../models')(sequelize);
const rebuildAndSeed = process.env.SEED_DB === 'true';

db.GetUserType = (userType) => (userType === 'doctor' ? db.Doctor : db.Patient);

db.sequelize.sync({force: rebuildAndSeed}).then(() => {
  if (rebuildAndSeed) {
    require('./seeders')(db);
  }
  console.log('DB Synced');
}).catch(error => console.log('DB sync error', error))



module.exports = db
