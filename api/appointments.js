const db = require('../db');

const UpdateAppointment = (req, res) => {
  db.Appointment.findById(req.params.id).then(appointment => (
    appointment.updateAttributes(req.body).then(ok => res.json(
      Object.assign({}, appointment.dataValues, req.body)))
  ))
}

const CreateAppointment = (req, res) => {
  db.Appointment.create(req.body).then(newAppointment =>  res.json(newAppointment));
}

const AllAppointments = (req, res) => {
  db.Appointment.all().then(appointments =>  res.json(appointments));
}

const FindAppointments = (req, res) => {
  const search = Object.keys(req.params).filter(k => k === 'patientId' || k === 'doctorId').reduce((obj, k) => {
    obj[k] = req.params[k];
    return obj;
  }, {})
  db.Appointment.findAll({
    where: search
  }).then(appointments =>  res.json(appointments));
}

const Appointment = (req, res) => {
  db.Appointment.findById(req.params.id).then(appointments =>  res.json(appointments));
}


module.exports = {
  UpdateAppointment,
  CreateAppointment,
  AllAppointments,
  FindAppointments,
  FindAppointments
}
