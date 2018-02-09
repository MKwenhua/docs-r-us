const getObjectId = obj => obj.id;
const indexEntity = (entitiesLookup, entity, i) => {
  entitiesLookup.byId[entity.id] = entity;
  entitiesLookup.allIds.push(entity.id);
  return entitiesLookup;
}

const indexResource = list => list.reduce(indexEntity, {
  byId: {},
  allIds: [],
  resource: list
});

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
  topNav: {
    dropdown: null,
    navStuck: false,
    avatar: userData.photo,
    name: userData.fullName,
    notifications: {
      notSeen: 3,
      list: [
        'notifcation 1',
        'notifcation 2',
        'notifcation 3',
      ]
    },
    settings: {

    }
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
