const OrangutanPageContent = require('./orangutan');

const OrangutanPage = (req, res) => {
  res.send(OrangutanPageContent);
  res.end();
}

module.exports = {
  OrangutanPage
}
