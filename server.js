const ProceessPort = process.env.PORT || 5000;
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const {Doctor, Patient, Appointment, GetUserType} = require('./db');
const {ProccessInfo, ProcessHealth} = require('./system_health')
const { DoctorLogin, PatientLogin, isLoggedIn, LogOut } = require('./static')
const {IndexRoute} = require('./react_pages.js');

const app = express();

//app.use(require('morgan')('combined'));
app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({ secret: 'think outside the bun', resave: true, saveUninitialized:true}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', isLoggedIn, IndexRoute);
app.get(/\/(patients|appointments|profile)/, isLoggedIn, IndexRoute);
app.get('/appointment/:id', isLoggedIn, IndexRoute);
app.get('/patient/:id', isLoggedIn, IndexRoute);

app.get('/signin', DoctorLogin);

app.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup'
}));

app.get('/logout', LogOut);

app.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/signin?error=true'
}));

app.post('/patient/login', PatientLogin)

app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

require('./config/passport.js')(passport)

app.listen(ProceessPort, () => {
  console.log(`Application worker ${process.pid} at Port: ${ProceessPort} has started`);
});
