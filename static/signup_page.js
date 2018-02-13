const {
  DoctorStyles,
  PatientStyles,
  DoctorSignupForm,
  PatientSignupForm
} = require('./templates');

const SignupPageTemplate = ({title, signUpFrom, othersignup, login, customStyles}) => `
    <!DOCTYPE html>
    <head>
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/xing-icon.png">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      ${customStyles}
      <style>
        #login-button {
          position: fixed;
          top: 15px;
          right: 10px;
          background-color: transparent;
          box-shadow: 0 0 0 2px #00b5ad inset!important;
          color: #00b5ad!important;
          border-color: #00b5ad;
        }
      </style>
    </head>
    <body>
      <a href="${othersignup.href}" class="ui inverted teal button" id="login-button">${othersignup.text}</a>
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <div id="loginHeadline" class="content">
              <i class="xing icon"></i>
              <span>Sign up for an account</span>
            </div>
          </h2>
          ${signUpFrom}
          <div class="ui message">
            Already Have an Account?  <a href="${login}">Sign In</a>
          </div>
        </div>
      </div>
    </body>
  </html>
`
const SignupPageDoctor = SignupPageTemplate({
  title: 'Doctor Signup',
  signUpFrom: DoctorSignupForm,
  login: '/signin',
  othersignup: {
    href: '/booking/signup',
    text: 'Patient Sign Up'
  },
  customStyles: DoctorStyles
}).replace(/(\n|\s\s+)/g, ' ');

const SignupPagePatient = SignupPageTemplate({
  title: 'Patient Signup',
  signUpFrom: PatientSignupForm,
  othersignup: {
    href: '/signup',
    text: 'Doctor Sign Up'
  },
  login: '/booking/signin',
  customStyles: PatientStyles
}).replace(/(\n|\s\s+)/g, ' ');

module.exports = {
  SignupPageDoctor,
  SignupPagePatient
}
