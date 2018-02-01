const bCrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;

const isValidPassword = (userpass, password) => bCrypt.compareSync(password, userpass);



module.exports = (GetUserType) => {
  const LocalSignupStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {

    GetUserType(req.body.userType).findOne({
      where: {
        email: email
      }
    }).then(user => {

      if (user) {
        return done(null, false, {message: 'That email is already taken'});
      }

      GetUserType(req.userType).create({
        email: email,
        password: bCrypt.hashSync(password, bCrypt.genSaltSync(8), null),
        fullName: req.body.fullName
      }).then(newUser => !newUser ? done(null, false) : done(null, newUser));

    });

  })

  const LocalSigninStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {

    GetUserType(req.body.userType).findOne({
      where: {
        email: email
      }
    }).then(user => {

      if (!user) {
        return done(null, false, {message: 'Email does not exist'});
      }

      if (!isValidPassword(user.password, password)) {

        return done(null, false, {message: 'Incorrect password.'});

      }

      return done(null, user.get());

    }).catch(err => done(null, false, {message: 'Something went wrong with your Signin'}));

  })

  const DeserializeUser = ({ userType, id }, done) => {
    GetUserType(userType).findById(id).then(user => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });

  }

  return (passport) => {

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser(DeserializeUser);

    passport.use('local-signup', LocalSignupStrategy);
    passport.use('local-signin', LocalSigninStrategy);
  }
}
