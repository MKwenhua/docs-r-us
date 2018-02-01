const bCrypt = require('bcrypt-nodejs');

const RandomNames = [
  "Rose Bryant",
  "Evelyn Rivera",
  "Jean Jackson",
  "Lawrence Williams",
  "Cheryl Clark",
  "Donna Alexander",
  "Terry Collins",
  "Martin Garcia",
  "Helen Griffin",
  "Shawn Johnson",
  "Carl Lopez",
  "Irene Young",
  "Roy Wright",
  "Amy Walker",
  "Kathleen Diaz",
  "Janice Allen",
  "Stephen Jenkins",
  "Daniel Hernandez",
  "Mildred Robinson",
  "Randy Nelson",
  "Frank Davis",
  "Doris Brooks",
  "Louise Miller",
  "Frances Flores",
  "Henry Washington",
  "Heather Hill",
  "Joe Martin",
  "Patricia Carter",
  "Jesse Barnes",
  "Earl Perry",
  "Angela Hughes",
  "Ralph Perez",
  "Marilyn Cook",
  "John Gonzales",
  "Sarah Martinez",
  "Lois Bell",
  "Gregory Campbell",
  "Karen Phillips",
  "Emily Bailey",
  "Tina Patterson",
  "Gary Peterson",
  "Dorothy Ross",
  "Robert Henderson",
  "Ruth Wilson",
  "Douglas Kelly",
  "Julia Butler",
  "Paul Turner",
  "Jason Adams",
  "Walter Harris",
  "Aaron Russell"
];

const buildEmail = name => (
  `${name.split(' ')[0].toLowerCase()}.${name.split(' ')[1].toLowerCase()}@example.com`
);

const birthYear = () => Math.floor(Math.random() * 50) + 1940;
const birthMonth = i => (i % 12) + 1;

const randomBirthDate = (start, end) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
)

const PatientObject = name => ({
  fullName: name,
  email: buildEmail(name),
  birthday: randomBirthDate(new Date(1940, 1, 1), new Date(1990, 12, 1)),
  password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
})

module.exports = [
  {
    fullName: 'Random Person',
    email: 'rando@aol.com',
    birthday: new Date(1988, 6, 20),
    password: bCrypt.hashSync('tacobell', bCrypt.genSaltSync(8), null)
  }
].concat(RandomNames.map(PatientObject))
