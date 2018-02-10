const {
  DoctorStyles,
  PatientStyles
} = require('./templates');

const LoginPageTemplate = ({title, action, signup, type, customStyles}) => `
    <!DOCTYPE html>
    <head>
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/xing-icon.png">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      ${customStyles}
    </head>
    <body>
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <div id="loginHeadline" class="content">
              <i class="xing icon"></i>
              <span>Log-in to your account</span>
            </div>
          </h2>
          <form class="ui large form" action="${action}" method="post" name="signin">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address">
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password" name="password" placeholder="Password">
                </div>
              </div>
              <button class="ui fluid large teal submit button" type="submit">Login</button>
            </div>

            <div class="ui error message"></div>
            <input type="hidden" name="userType" value="${type}">
          </form>

          <div class="ui message">
            New to us? <a href="${signup}">Sign Up</a>
          </div>
        </div>
      </div>
    </body>
  </html>
`
const LoginPageDoctor = LoginPageTemplate({
  title: 'Doctor Login',
  action: '/signin',
  type: 'doctor',
  signup: '/signup',
  customStyles: DoctorStyles
}).replace(/(\n|\s\s+)/g, ' ');

const LoginPagePatient = LoginPageTemplate({
  title: 'Patient Login',
  action: '/patient/signin',
  type: 'patient',
  signup: '/booking/signup',
  customStyles: PatientStyles
}).replace(/(\n|\s\s+)/g, ' ');

module.exports = {
  LoginPageDoctor,
  LoginPagePatient
}
