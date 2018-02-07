const PROCESS_PORT = process.env.PORT || 5000;
const app = require('./app');

//Initialize the API
require('./api');

app.listen(PROCESS_PORT, () => {
  console.log(`Application worker ${process.pid} at Port: ${PROCESS_PORT} has started`);
});
