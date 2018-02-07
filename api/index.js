const app = require('../app');
const {
 UpdateAppointment
} = require('./appointments');
const {
  UploadToS3
} = require('../helpers/s3_uploads.js');

app.post('/appointments/:id', UpdateAppointment)

app.post('/patients/:id', UploadToS3);
