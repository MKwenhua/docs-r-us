const {
 NearbyHospitals,
 AllHospitals,
 Hospital
} = require('./hospitals');
const {
 UpdateAppointment
} = require('./appointments');
const {
  UpdatePatient,
  CreatePatient,
  AllPatients,
  Patient
} = require('./patients');
const {
  UploadToS3
} = require('../helpers/s3_uploads.js');

module.exports = (app) => {

  app.post('/appointments/:id', UpdateAppointment)

  app.post('/api/patients/:id', UploadToS3);

  app.get('/api/nearby/hospitals', NearbyHospitals)

  app.get('/api/hospitals', AllHospitals);

  app.get('/api/hospitals/:id', Hospital);

  app.get('/api/patients', AllPatients);

}
