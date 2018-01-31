const env = process.env;
const contentTypes = require('./content-types');
const sysInfo = require('./sys-info');

const ProccessInfo = (req, res) => {
  let url = req.url;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.end(JSON.stringify(sysInfo[url.slice(6)]()));
}

const ProcessHealth = (req, res) => {
  res.writeHead(200);
  res.end();
}

module.exports = {
  ProccessInfo,
  ProcessHealth
}
