const bCrypt = require('bcrypt-nodejs');
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

const RandomNames = [
  "Demetrice Stanfield",
  "Marylee Preston",
  "Sharri Dejesus",
  "Lupita Raynor",
  "Yasmine Cortes",
  "Lorrine Beyer",
  "Dan Felton",
  "Tyra Devito",
  "Coral Connell",
  "Clair Seay",
  "Sid Stamper",
  "Rocio Anders",
  "Leo Schott",
  "Felicita Robins",
  "Nelly Downey",
  "Sook Davison",
  "Tambra Hurd",
  "Jeanett Hanna",
  "Chu Crocker",
  "Marcell Seifert",
  "Tyrell Oconnell",
  "Nickole Poore",
  "Eusebio Steed",
  "Leida Baughman",
  "Takako Baptiste"
];

const buildEmail = name => (
  `${name.split(' ')[0].toLowerCase()}.${name.split(' ')[1].toLowerCase()}@hospital.com`
);

const DoctorObject = name => ({
  fullName: name,
  email: buildEmail(name),
  specialty: Specialties[Math.floor(Math.random() * Specialties.length)],
  password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
})

module.exports = [
  {
    fullName: 'Cornelius Zaius',
    email: 'dr.zaius@hopkins.edu',
    photo: 'dr_zaius.jpg',
    specialty: 'Neurosurgery',
    password: bCrypt.hashSync('bb', bCrypt.genSaltSync(8), null)
  },
  {
    fullName: 'John A. Zoidberg',
    email: 'zoidberg@aol.com',
    photo: 'zoidberg-photo.jpg',
    specialty: 'Pathology',
    password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
  }
].concat(RandomNames.map(DoctorObject))
