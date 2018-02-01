const OrangutanPageContent = require('./orangutan');
const {
  LoginPageDoctor,
  LoginPagePatient
} = require('./login_page');

const OrangutanPage = (req, res) => {
  res.send(OrangutanPageContent);
  res.end();
}

const DoctorLogin = (req, res) => {
  res.send(LoginPageDoctor);
  res.end();
}

const PatientLogin = (req, res) => {
  res.send(LoginPagePatient);
  res.end();
}

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/signin');
}

const LogOut = (req,res) => {
  req.session.destroy(err => {
    res.redirect('/')
  });
}


module.exports = {
  OrangutanPage,
  DoctorLogin,
  PatientLogin,
  isLoggedIn,
  LogOut
}
