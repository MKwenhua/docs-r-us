if (!process.env.HEROKU) {
  require('dotenv').config();
}
const PROCESS_PORT = process.env.PORT || 5000;

const app = require('./app');

app.listen(PROCESS_PORT, () => {
  console.log(`Application worker ${process.pid} at Port: ${PROCESS_PORT} has started`);
});
