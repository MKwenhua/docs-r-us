import {
  CONNECTED,
  TOGGLE_PROXIMITY_SEARCH
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
    default:
      return state;
  }
  return state
})
