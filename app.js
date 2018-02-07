const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('./config/passport.js')(app);

//Render Actions
const {
  isLoggedIn,
  LogOut,
  SignUpHandler,
  SignInHandler
} = require('./helpers/session.js')(passport);
const {
  DoctorLogin,
  PatientLogin
} = require('./static');
const {
  IndexRoute
} = require('./react_pages');

app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', isLoggedIn, IndexRoute);

app.get(/\/(patients|calendar|appointments|profile)/, isLoggedIn, IndexRoute);

app.get('/appointment/:id', isLoggedIn, IndexRoute);

app.get('/patient/:id', isLoggedIn, IndexRoute);

app.get('/signin', DoctorLogin);

app.post('/signup', SignUpHandler);

app.post('/signin', SignInHandler);

app.get('/logout', LogOut);

app.post('/patient/login', PatientLogin)


//Initialize the API
require('./api');


module.exports = app;
