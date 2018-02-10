const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('./config/passport.js')(app);

//Session Related Actions
const {
  isLoggedIn,
  LogOut,
  SignUpHandler,
  SignInHandler,
  SignUpBookingHandler,
  SignInBookingHandler
} = require('./helpers/session.js')(passport);

//Static HTML Responses
const {
  DoctorLogin,
  PatientLogin,
  DoctorSignup,
  PatientSignup
} = require('./static');

//React SSR Render Actions
const {
  RoutingPortal
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

app.get('/', isLoggedIn, RoutingPortal);

app.get(/^\/(patients|calendar|appointments|profile)/, isLoggedIn, RoutingPortal);

app.get('/appointment/:id', isLoggedIn, RoutingPortal);

app.get('/patient/:id', isLoggedIn, RoutingPortal);

//These Routes are static
app.get('/signin', DoctorLogin);

app.post('/signin', SignInHandler);

app.get('/signup', DoctorSignup);

app.post('/signup', SignUpHandler);

app.get('/booking/signin', PatientLogin);

app.post('/booking/signin', SignInBookingHandler)

app.get('/booking/signup', PatientSignup);

app.post('/booking/signup', SignUpBookingHandler)


app.get('/logout', LogOut);

//Initialize the API
require('./api')(app);

//These Routes Are For Checking Server Health
app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

module.exports = app;
