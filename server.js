const ProceessPort = process.env.PORT || 5000;
const express = require('express');
const sequelize = require('./db');
const {
  ProccessInfo,
  ProcessHealth
} = require('./system_health')
const {
  OrangutanPage
} = require('./static')
const {
  IndexRoute
} = require('./react_pages.js');

const app = express();

app.use(express.static('public'));


app.get('/', IndexRoute);

app.get('/bajablast', OrangutanPage);

app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);


app.listen(ProceessPort, () => {
  console.log(`Application worker ${process.pid} at Port: ${ProceessPort} has started`);
});
