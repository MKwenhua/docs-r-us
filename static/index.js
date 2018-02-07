const {
  LoginPageDoctor,
  LoginPagePatient
} = require('./login_page');

const DoctorLogin = (req, res) => {
  res.send(LoginPageDoctor);
  res.end();
}

const PatientLogin = (req, res) => {
  res.send(LoginPagePatient);
  res.end();
}

module.exports = {
  DoctorLogin,
  PatientLogin
}
