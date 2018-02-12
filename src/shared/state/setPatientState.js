const setPatientState = ({ doctors, appointments, ...currentUser}) => ({
    doctors,
    appointments,
    currentUser,
    searchNearby: {
      on: true,
      withinKM: 3
    },
    connected: false
})

export default setPatientState;
