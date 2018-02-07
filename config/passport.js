const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const {
  SignupAuth,
  SigninAuth,
  DeserializeUser
} = require('./auth');

module.exports = (app) => {
app.use(session({secret: 'think outside the bun', resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors('*'));

const LocalSignupStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, SignupAuth)

const LocalSigninStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, SigninAuth)

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(DeserializeUser);

passport.use('local-signup', LocalSignupStrategy);
passport.use('local-signin', LocalSigninStrategy);

  return passport;
}
