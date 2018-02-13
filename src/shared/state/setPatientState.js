const setPatientState = ({ doctors, appointments, ...currentUser}) => ({
    appointments,
    currentUser,
    online: true,
    searchNearby: {
      on: true,
      onLoadDataFetched: false,
      fetching: false,
      position: {
        lat: 41.889671799999995,
        long: -87.6308846
      },
      withinKM: 3,
      hospitals: [],
      doctors: []
    },
    connected: false
})

export default setPatientState;
