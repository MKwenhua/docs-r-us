const {
  LoginPageDoctor,
  LoginPagePatient
} = require('./login_page');

const {
  SignupPageDoctor,
  SignupPagePatient
} = require('./signup_page');

const DoctorLogin = (req, res) => {
  res.send(LoginPageDoctor);
  res.end();
}

const PatientLogin = (req, res) => {
  res.send(LoginPagePatient);
  res.end();
}

const DoctorSignup = (req, res) => {
  res.send(SignupPageDoctor);
  res.end();
}

const PatientSignup = (req, res) => {
  res.send(SignupPagePatient);
  res.end();
}

module.exports = {
  DoctorLogin,
  PatientLogin,
  DoctorSignup,
  PatientSignup
}
