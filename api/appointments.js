const db = require('../db');


const UpdateAppointment = (req, res) => {
  console.log('\n UpdateAppointment req \n', req.body, '\n');
  db.Appointment.findById(req.params.id).then(appointment => (
    appointment.updateAttributes(req.body).then(ok => res.json(
      Object.assign({}, appointment.dataValues, req.body)))
  ))
}



module.exports = {
  UpdateAppointment
}
