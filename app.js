const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const app = express();
const {
  ProccessInfo,
  ProcessHealth
} = require('./system_health');

app.use(express.static('public'));
app.use(cors('*'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({secret: 'think outside the bun', resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());


app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

module.exports = {
  app, passport
}
