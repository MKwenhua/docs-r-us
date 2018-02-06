const addHours = date => h => (
  new Date(date.setHours(date.getHours() + h))
)

const getObjectId = obj => obj.id;
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
    events: appointments.map(({id, purpose, patientId, description, time}) => ({
     id,
     description,
     patientId,
     title: purpose,
     start: new Date(time).getTime(),
     end: addHours(new Date(time))(1).getTime()
    }))
  }
})

export default normalizeDoctorState;
