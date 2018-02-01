const LocalStrategy = require('passport-local').Strategy;
const {
  SignupAuth,
  SigninAuth,
  DeserializeUser
} = require('./auth');


module.exports = (passport) => {

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
}
