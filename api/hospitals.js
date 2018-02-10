const Sequelize = require('sequelize');
const db = require('../db');


const UpdateHospital = (req, res) => {
  db.Hospital.findById(req.params.id).then(hospital => (
    hospital.updateAttributes(req.body).then(ok => res.json(
      Object.assign({}, hospital.dataValues, req.body)))
  ))
}

const CreateHospital = (req, res) => {
  db.Hospital.create(req.body).then(newHospital =>  res.json(newHospital));
}

const AllHospitals = (req, res) => {
  db.Hospital.all().then(hospital =>  res.json(hospital));
}

const distanceWithin = ({lat, long}, distance) => `SELECT * FROM "hospitals" WHERE (st_dwithin(position, ST_SetSRID(ST_MakePoint(${long}, ${lat}), 4326), ${distance}));`;

const metersApproximateDegree = meters =>  0.00001 * (meters/1.11)

const NearbyHospitals = (req, res, next) => {
  let coords = {
    lat: 41.889671799999995,
    long: -87.6308846
  }
  db.Hospital.findAll({
    where: Sequelize.where(
      Sequelize.fn('ST_DWithin',
        Sequelize.col('position'),
          Sequelize.fn('ST_SetSRID',
            Sequelize.fn('ST_MakePoint',
              coords.long, coords.lat),
          4326),
      metersApproximateDegree(3000)),
      true),
      include: [
        {
          model: db.Doctor,
          as: 'doctors'
        }
      ]
  })
  .then(hospitals => res.send(hospitals))
  .catch(next)
}

const Hospital = (req, res) => {
  db.Hospital.findById(req.params.id).then(hospital =>  res.json(hospital));
}


module.exports = {
  UpdateHospital,
  CreateHospital,
  AllHospitals,
  Hospital,
  NearbyHospitals
}
