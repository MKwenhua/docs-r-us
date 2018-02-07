const faker = require('faker');
const puroseList = [
  'Check Up',
  'Vaccination',
  'Chillin',
  'Drugs',
  'Sick'
];

const appointmentTitles = [
  'Read Something on WebMD, and Freaking Out!',
  'Need Health Evaluation For Visa',
  'I Saw a vague RX commercial, would like to try it out',
  'Need Doctor Note to explain absence',
  'Had a sore throat for a few days',
  'Jaw keeps locking at night'
]

const timeNow = new Date();
// const randomDateDay = () => (
//   new Date(new Date(2017, Math.floor((Math.random() * 12) + 10), Math.floor(Math.random() * 30), Math.floor((Math.random() * 18) + 9)).getTime() + Math.random() * (timeNow.getTime() - timeNow.getTime())).getTime()
// )
//

const randomDateDay = () => (
  new Date(2018,Math.floor(Math.random() * 3), Math.floor(Math.random() * 28), Math.floor(Math.random() * 8) + 9)
)
module.exports = (Appointment, doctors, patients) => {
  let dr_zaiusAppointments = 0;
  let drZadiusDates = {}
  while (dr_zaiusAppointments < 40) {
    let randomTime = randomDateDay();
    while(drZadiusDates[randomTime.getTime()]){
      randomTime = randomDateDay()
    }
    drZadiusDates[randomTime.getTime()] = true;
    Appointment.create({
      date: randomTime,
      time: randomTime,
      title: appointmentTitles[Math.floor(Math.random() * appointmentTitles.length)],
      purpose: puroseList[Math.floor(Math.random() * puroseList.length)],
      description: faker.lorem.sentence(),
      doctorId: doctors[0].id,
      patientId: patients[Math.floor(Math.random() * patients.length)].id

     }).then(appt => console.log('\n Appointment Has beeen made:', appt.toJSON(), '\n')
      ).catch(err => console.log('\n Appointment error:',err))
     dr_zaiusAppointments += 1;
  }

  let dr_zoidbergAppointments = 0;
  let drZoidbergDates = {};
  while (dr_zoidbergAppointments < 10) {
    let randomTime = randomDateDay();
    while(drZoidbergDates[randomTime.getTime()]){
      randomTime = randomDateDay()
    }
    drZoidbergDates[randomTime.getTime()] = true;
    Appointment.create({
      date: randomTime,
      time: randomTime,
      title: appointmentTitles[Math.floor(Math.random() * appointmentTitles.length)],
      purpose: puroseList[Math.floor(Math.random() * puroseList.length)],
      description:  faker.lorem.sentence(),
      doctorId: doctors[1].id,
      patientId: patients[Math.floor(Math.random() * patients.length)].id

     }).then(appt => console.log('\n Appointment Has beeen made:', appt.toJSON(), '\n')
     ).catch(err => console.log('\n Appointment error:',err))
     dr_zoidbergAppointments += 1;
  }

}
