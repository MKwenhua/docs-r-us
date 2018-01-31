import {
  CONNECTED,
  CHANGE_VIEW,
  DISCONNECTED
} from 'constants';

export default (initialState) => (
  function reducer(state = initialState, action) {
    switch (action.type) {
      case CONNECTED: {
          return {
            ...state,
            connected: true,
            socketId: action.payload
          }
          break;
        }
      case DISCONNECTED: {
          return {
            ...state,
            connected: false
          }
          break;
        }
    }
    return state
  }
)
