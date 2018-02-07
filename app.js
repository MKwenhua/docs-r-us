const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('./config/passport.js')(app);

//Session Related Actions
const {
  isLoggedIn,
  LogOut,
  SignUpHandler,
  SignInHandler
} = require('./helpers/session.js')(passport);

//Static HTML Responses
const {
  DoctorLogin,
  PatientLogin
} = require('./static');

//React SSR Render Actions
const {
  IndexRoute
} = require('./react_pages');

//This is used for server health checks, which may be useful if running a cluster
const {
  ProccessInfo,
  ProcessHealth
} = require('./system_health');

app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', isLoggedIn, IndexRoute);

app.get(/\/(patients|calendar|appointments|profile)/, isLoggedIn, IndexRoute);

app.get('/appointment/:id', isLoggedIn, IndexRoute);

app.get('/patient/:id', isLoggedIn, IndexRoute);

//These Routes are static
app.get('/signin', DoctorLogin);

app.post('/signup', SignUpHandler);

app.post('/signin', SignInHandler);

app.get('/logout', LogOut);

app.post('/patient/login', PatientLogin)

//These Routes Are For Checking Server Health
app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

module.exports = app;
