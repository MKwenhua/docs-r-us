const getObjectId = obj => obj.id;
const parseJsonFields = patient =>  {
  console.log('\npatient.records', patient.records)
 return {
   ...patient,
  records: patient.records === null ? {} : JSON.parse(patient.records),
  doctorNotes: patient.doctorNotes === null ? {} : JSON.parse(patient.doctorNotes)
}
}

const indexEntity = (entitiesLookup, entity, i) => {
  entitiesLookup.byId[entity.id] = entity;
  entitiesLookup.allIds.push(entity.id);
  return entitiesLookup;
}
const indexResource = list => list.reduce(indexEntity, {byId: {}, allIds: [], resource: list});

const normalizeDoctorState = ({patients, appointments, ...userData}) => ({
  patients: indexResource(patients),
  appointments: indexResource(appointments),
  currentUser: {
    ...userData,
    appointmentIds: appointments.map(getObjectId),
    patientsIds: patients.map(getObjectId)
  },
  connected: false,
  patientProfile: {
    files: [],
    syncing: false,
    display: 'info'
  },
  patientsView: {
    typed: '',
    filters: [],
    suggestions: [],
    searchFocus: false
  },
  calendarView: {
    selectedEvent: {

    }
  }
})

export default normalizeDoctorState;
