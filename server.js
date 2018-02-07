const PROCESS_PORT = process.env.PORT || 5000;
const app = require('./app');
const {
  ProccessInfo,
  ProcessHealth
} = require('./system_health');


//These Routes Are For Checking Server Health
app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

app.listen(PROCESS_PORT, () => {
  console.log(`Application worker ${process.pid} at Port: ${PROCESS_PORT} has started`);
});
