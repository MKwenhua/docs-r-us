const bCrypt = require('bcrypt-nodejs');

const {
  GetUserType
} = require('../db');

const isValidPassword = (userpass, password) => (
  bCrypt.compareSync(password, userpass)
);

const SignupAuth = (req, email, password, done) => {
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
};

const SigninAuth = (req, email, password, done) => {
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
};

const DeserializeUser = ({ userType, id }, done) => {
  GetUserType(userType).findById(id).then(user => {
    if (user) {
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  });
}

module.exports = {
  SignupAuth,
  SigninAuth,
  DeserializeUser
};
