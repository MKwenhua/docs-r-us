const app = require('../app');
const {
 NearbyHospitals,
 AllHospitals
} = require('./hospitals');
const {
 UpdateAppointment
} = require('./appointments');
const {
  UploadToS3
} = require('../helpers/s3_uploads.js');

app.post('/appointments/:id', UpdateAppointment)

app.post('/patients/:id', UploadToS3);

app.get('/nearby/hospitals', NearbyHospitals)

app.get('/hospitals', AllHospitals)
