const bCrypt = require('bcrypt-nodejs');
const faker = require('faker');
const Specialties = [
  "General Surgery",
  "Cardiothoracic Surgery",
  "Transplant Surgery",
  "Surgical Endocrinology",
  "Orthopedic Surgery",
  "Neurosurgery",
  "Ophthalmology",
  "Dermatology",
  "Neurology",
  "Pathology",
  "Radiology",
  "Anesthesiology",
  "Psychiatry",
  "Pediatrics",
  "Family Practice",
  "Radiation Oncology",
  "Emergency Medicine"
];

const buildEmail = name => (
  `${name.split(' ')[0].toLowerCase()}.${name.split(' ')[1].toLowerCase()}@hospital.com`
);

const DoctorObject = name => ({
  fullName: faker.name.findName(),
  email: faker.internet.email(),
  specialty: Specialties[Math.floor(Math.random() * Specialties.length)],
  password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
})

module.exports = [
  {
    fullName: 'Cornelius Zaius',
    email: 'dr.zaius@hopkins.edu',
    photo: 'dr_zaius.jpg',
    specialty: 'Neurosurgery',
    password: bCrypt.hashSync('baja', bCrypt.genSaltSync(8), null)
  },
  {
    fullName: 'John A. Zoidberg',
    email: 'zoidberg@aol.com',
    photo: 'zoidberg-photo.jpg',
    specialty: 'Pathology',
    password: bCrypt.hashSync('baja', bCrypt.genSaltSync(8), null)
  }
].concat(new Array(50).fill(8).map(DoctorObject))
