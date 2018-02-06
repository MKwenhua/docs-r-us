const setPatientState = ({ doctors, appointments, ...currentUser}) => ({
    doctors,
    appointments,
    currentUser,
    connected: false
})

export default setPatientState;
