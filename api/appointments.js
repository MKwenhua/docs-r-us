const db = require('../db');


const UpdateAppointment = (req, res) => {
  console.log('req', req.body);
  // db.Appointment.findById(req.params.id).then(appointment => (
  //   appointment.updateAttributes({records}).then(ok => res.json(records))
  // ))
  res.end('ok');
}



module.exports ={
  UpdateAppointment
}
