const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, db) => {
  const {
    SignupAuth,
    SigninAuth,
    DeserializeUser
  } = require('./auth')(db);

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
