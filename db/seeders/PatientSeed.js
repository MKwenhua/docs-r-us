const bCrypt = require('bcrypt-nodejs');
const faker = require('faker');

const buildEmail = name => (
  `${name.split(' ')[0].toLowerCase()}.${name.split(' ')[1].toLowerCase()}@example.com`
);

const birthYear = () => Math.floor(Math.random() * 50) + 1940;
const birthMonth = i => (i % 12) + 1;

const randomBirthDate = (start, end) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
)

const PatientObject = name => ({
  fullName: faker.name.findName(),
  email: faker.internet.email(),
  birthday: randomBirthDate(new Date(1940, 1, 1), new Date(1990, 12, 1)),
  password: bCrypt.hashSync('baja', bCrypt.genSaltSync(8), null)
})

module.exports = [
  {
    fullName: 'Random Person',
    email: 'rando@aol.com',
    birthday: new Date(1988, 6, 20),
    password: bCrypt.hashSync('baja', bCrypt.genSaltSync(8), null)
  }
].concat(new Array(70).fill(8).map(PatientObject))
