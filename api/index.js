const {
 UpdateAppointment
} = require('./appointments');
const {
  UploadToS3
} = require('../helpers/s3_uploads.js');


module.exports = () => {

  app.put('/appointments/:id', UpdateAppointment)

  app.post('/patients/:id', UploadToS3);

}
