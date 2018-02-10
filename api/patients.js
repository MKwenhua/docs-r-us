const db = require('../db');

const UpdatePatient = (req, res) => {
  db.Patient.findById(req.params.id).then(patient => (
    patient.updateAttributes(req.body).then(ok => res.json(
      Object.assign({}, patient.dataValues, req.body)))
  ))
}

const CreatePatient = (req, res) => {
  db.Patient.create(req.body).then(newPatient =>  res.json(newPatient));
}

const AllPatients = (req, res) => {
  db.Patient.all().then(patients =>  res.json(patients));
}

const Patient = (req, res) => {
  db.Patient.findById(req.params.id).then(patient =>  res.json(patient));
}


module.exports = {
  UpdatePatient,
  CreatePatient,
  AllPatients,
  Patient
}
