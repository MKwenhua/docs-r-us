const PROCESS_PORT = process.env.PORT || 5000;
const { app, passport } = require('./app');
const { DoctorLogin, PatientLogin, isLoggedIn, LogOut } = require('./static');
const { IndexRoute } = require('./react_pages');
const db = require('./db');
const {
  uploadToS3
} = require('./helpers/s3_uploads.js')(db);

app.get('/', isLoggedIn, IndexRoute);
app.get(/\/(patients|appointments|profile)/, isLoggedIn, IndexRoute);
app.get('/appointment/:id', isLoggedIn, IndexRoute);
app.get('/patient/:id', isLoggedIn, IndexRoute);

app.post('/patients/:id', uploadToS3);

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

require('./config/passport.js')(passport, db);

app.listen(PROCESS_PORT, () => {
  console.log(`Application worker ${process.pid} at Port: ${PROCESS_PORT} has started`);
});
