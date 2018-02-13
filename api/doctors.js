const db = require('../db');

const UpdateDoctor = (req, res) => {
  db.Doctor.findById(req.params.id).then(doctor => (
    patient.updateAttributes(req.body).then(ok => res.json(
      Object.assign({}, doctor.dataValues, req.body)))
  ))
}

const CreateDoctor = (req, res) => {
  db.Doctor.create(req.body).then(newDoctor =>  res.json(newDoctor));
}

const AllDoctors = (req, res) => {
  db.Doctor.all().then(doctors =>  res.json(doctors));
}

const Doctor = (req, res) => {
  db.Doctor.findById(req.params.id).then(doctor =>  res.json(doctor));
}


module.exports = {
  UpdateDoctor,
  CreateDoctor,
  AllDoctors,
  Doctor
}
