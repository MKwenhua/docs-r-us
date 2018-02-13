import {
  CONNECTED,
  DISCONNECTED,
  ONLINE_CONNECTION_CHANGE,
  TOGGLE_PROXIMITY_SEARCH,
  UPDATE_GEO_COORDINATES,
  UPDATE_SEARCH_RESULTS,
  HOSPITAL_PROFILE_ERROR,
  POPULATE_HOSPITAL_PROFILE,
  POPULATE_DOCTOR_PROFILE,
  RESET_DOCTOR_PROFILE,
  RESET_HOSPITAL_PROFILE,
  DOCTOR_PROFILE_ERROR
} from 'constants';

//These should be moved to another file or replace by THUNK
const indexDoctors = doctors => doctors.reduce((lookup, doctor) => {
  lookup[doctor.id] = doctor;
  return lookup;
}, {});

const mapProximityResults = hospitals => hospitals.reduce((nearbyResults, hospital, i) => ({
  hospitals: {
    ...nearbyResults.hospitals,
    [hospital.id]: hospital
  },
  doctors: {
    ...nearbyResults.doctors,
    ...indexDoctors(hospital.doctors)
  }
}), { hospitals: {}, doctors: {} });

export default(initialState) => (function reducer(state = initialState, action) {
    switch (action.type) {
      case ONLINE_CONNECTION_CHANGE:
        {
          return {
            ...state,
            online: action.payload
          }
        }
      case CONNECTED:
        {
          return {
            ...state,
            connected: true,
            socketId: action.payload
          }
          break;
        }
      case TOGGLE_PROXIMITY_SEARCH:
        {
          return {
            ...state,
            searchNearby: {
              ...state.searchNearby,
              on: !state.searchNearby.on
            }
          }
        }
      case HOSPITAL_PROFILE_ERROR: {
        return {
          ...state,
          hospitalProfile: {
            error: true
          }
        }
      }
      case RESET_DOCTOR_PROFILE: {
        return {
          ...state,
          doctorProfile: {
          }
        }
      }
      case RESET_HOSPITAL_PROFILE: {
        return {
          ...state,
          hospitalProfile: {
          }
        }
      }
      case POPULATE_HOSPITAL_PROFILE: {
        return {
          ...state,
          hospitalProfile: {
            ...state.hospitalProfile,
            hospital: action.payload
          }
        }
      }
      case POPULATE_DOCTOR_PROFILE: {
        return {
          ...state,
          doctorProfile: {
            ...state.doctorProfile,
            doctor: action.payload
          }
        }
      }
      case UPDATE_GEO_COORDINATES:
        {
          return {
            ...state,
            searchNearby: {
              ...state.searchNearby,
              fetching: true,
              position: {
                ...state.searchNearby.position,
                ...action.payload
              }
            }
          }
        }
      case UPDATE_SEARCH_RESULTS:
        {
          return {
            ...state,
            searchNearby: {
              ...state.searchNearby,
              onLoadDataFetched: true,
              fetching: false,
              ...mapProximityResults(action.payload)
            }
          }
        }
      default:
        return state;
    }
    return state
  })
