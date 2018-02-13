import {
  CONNECTED,
  DISCONNECTED,
  ONLINE_CONNECTION_CHANGE,
  TOGGLE_PROXIMITY_SEARCH,
  UPDATE_GEO_COORDINATES,
  UPDATE_SEARCH_RESULTS
} from 'constants';

const mapProximityResults = hospitals => hospitals.reduce((nearbyResults, hospital) => ({
  ...nearbyResults,
  doctors: nearbyResults.doctors.concat(hospital.doctors)
}), {hospitals: hospitals, doctors: []})

export default (initialState) => (function reducer(state = initialState, action) {
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
