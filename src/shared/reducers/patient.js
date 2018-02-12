import {
  CONNECTED,
  TOGGLE_PROXIMITY_SEARCH,
  UPDATE_GEO_COORDINATES,
  UPDATE_SEARCH_RESULTS
} from 'constants';

export default (initialState) => (function reducer(state = initialState, action) {
  switch (action.type) {
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
            ...action.payload
          }
        }
      }
    default:
      return state;
  }
  return state
})
