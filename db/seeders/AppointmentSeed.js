
const puroseList = [
  'Check Up',
  'Vaccination',
  'Chillin',
  'Drugs',
  'Sick',
  'Read Something on WebMD'
];
const timeNow = new Date();
const randomDateDay = () => (
  new Date(new Date(2017, Math.floor((Math.random() * 12) + 10), Math.floor(Math.random() * 30), Math.floor((Math.random() * 18) + 9)).getTime() + Math.random() * (timeNow.getTime() - timeNow.getTime())).getTime()
)


module.exports = (Appointment, doctors, patients) => {
  let dr_zaiusAppointments = 0;
  while (dr_zaiusAppointments < 20) {
    let randomTime = randomDateDay();
    Appointment.create({
      date: randomTime,
      time: randomTime,
      purpose: puroseList[Math.floor(Math.random() * puroseList.length)],
      description: ' A series of disappointing acquisitions wasn’t the only thing leading investors to declare the notion a failure, but it certainly didn’t help.',
      doctorId: doctors[0].id,
      patientId: patients[Math.floor(Math.random() * patients.length)].id

     }).then(appt => {
       console.log('\n Appointment Has beeen made:', appt.toJSON(), '\n');
     }).catch(err => {
       console.log('\n Appointment error:',err);
     })
     dr_zaiusAppointments += 1;
  }

  let dr_zoidbergAppointments = 0;
  while (dr_zoidbergAppointments < 8) {
    let randomTime = randomDateDay();
    Appointment.create({
      date: randomTime,
      time: randomTime,
      purpose: puroseList[Math.floor(Math.random() * puroseList.length)],
      description: ' A series of disappointing acquisitions wasn’t the only thing leading investors to declare the notion a failure, but it certainly didn’t help.',
      doctorId: doctors[1].id,
      patientId: patients[Math.floor(Math.random() * patients.length)].id

     }).then(appt => {
       console.log('\n Appointment Has beeen made:', appt.toJSON(), '\n');
     }).catch(err => {
       console.log('\n Appointment error:',err);
     })
     dr_zoidbergAppointments += 1;
  }

}
