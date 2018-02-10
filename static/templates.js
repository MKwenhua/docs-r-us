const SpecialtyOptions = [
  "Pathology",
  "General Surgery",
  "Cardiothoracic Surgery",
  "Transplant Surgery",
  "Surgical Endocrinology",
  "Orthopedic Surgery",
  "Neurosurgery",
  "Ophthalmology",
  "Dermatology",
  "Neurology",
  "Radiology",
  "Anesthesiology",
  "Psychiatry",
  "Pediatrics",
  "Family Practice",
  "Radiation Oncology",
  "Emergency Medicine"
].map(specialty => `<option value="${specialty}">${specialty}</option>`).join('\n');

const DoctorStyles = `
  <style>
    body {
      background: rgb(27, 28, 29);
      color: #fff;
    }
    body > .grid {
      height: 100%;
    }
    .ui.segment {
      background: rgb(27, 28, 29);
    }
    .ui.message {
      background: rgb(27, 28, 29);
      color: #fff;
      border: 1px solid #fff;
    }
    .image {
      margin-top: -100px;
    }
    .column {
      max-width: 450px;
    }
    #loginHeadline {
      display: flex;
      align-items: center;
    }
    #loginHeadline i {
      font-size: 2em;
      margin-bottom: -20px;
    }
  </style>
`
const PatientStyles = `
  <style>
    body > .grid {
      height: 100%;
    }
    .image {
      margin-top: -100px;
    }
    .column {
      max-width: 450px;
    }
    #loginHeadline {
      display: flex;
      align-items: center;
    }
    #loginHeadline i {
      font-size: 2em;
      margin-bottom: -20px;
    }
  </style>
`
const DoctorSignupForm = `
<form class="ui large form" action="/signup" method="post" name="signup">
  <div class="ui stacked segment">
    <div class="field">
      <label style="color:#fff;text-align:left;">Full Name</label>
      <div class="ui left icon input">
        <i class="user icon"></i>
        <input type="text" name="fullName" placeholder="Full Name">
      </div>
    </div>
    <div class="field">
      <label style="color:#fff;text-align:left;">E-mail Address</label>
      <div class="ui left icon input">
        <i class="mail icon"></i>
        <input type="text" name="email" >
      </div>
    </div>
    <div class="field">
      <label style="color:#fff;text-align:left;">Specialization</label>
      <select name="specialty">
        ${SpecialtyOptions}
      </select>
    </div>
    <div class="field">
      <label style="color:#fff;text-align:left;">Password</label>
      <div class="ui left icon input">
        <i class="lock icon"></i>
        <input type="password" name="password">
      </div>
    </div>
    <button class="ui fluid large teal submit button" type="submit">Sign Up</button>
  </div>

  <div class="ui error message"></div>
  <input type="hidden" name="userType" value="doctor">
</form>
`

const PatientSignupForm = `
<form class="ui large form" style="text-align:left;" action="/patient/signup" method="post" name="signup">
  <div class="ui stacked segment">
    <div class="field">
      <label>Full Name</label>
      <div class="ui left icon input">
        <i class="user icon"></i>
        <input type="text" name="fullName" placeholder="Full Name">
      </div>
    </div>
    <div class="field">
      <label>E-mail Address</label>
      <div class="ui left icon input">
        <i class="mail icon"></i>
        <input type="text" name="email" >
      </div>
    </div>
    <div class="field">
      <label>Birth Date</label>
      <input type="date" name="birthday">
    </div>
    <div class="field">
      <label>Password</label>
      <div class="ui left icon input">
        <i class="lock icon"></i>
        <input type="password" name="password">
      </div>
    </div>
    <button class="ui fluid large teal submit button" type="submit">Sign Up</button>
  </div>

  <div class="ui error message"></div>
  <input type="hidden" name="userType" value="patient">
</form>
`
module.exports = {
  DoctorStyles,
  PatientStyles,
  DoctorSignupForm,
  PatientSignupForm
}
