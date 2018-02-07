const bCrypt = require('bcrypt-nodejs');
const {
  Patient,
  Appointment,
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
      return done(null, false, {message: 'email does not exist'});
    }

    if (!isValidPassword(user.password, password)) {
      return done(null, false, {message: 'Incorrect password.'});
    }

    return done(null, user.get());

  }).catch(err => done(null, false, {message: 'Something Happened'}));
};

const DeserializeUser = ({ userType, id }, done) => {
  GetUserType(userType).findOne({
    where: {
      id: id
    },
    include: [
      {
        model: Appointment,
        as: 'appointments'
      }, {
        model: Patient,
        through: Appointment
      }
    ]
  }).then(user => {
    if (user) {
      done(null, user);
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
