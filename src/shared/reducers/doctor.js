import {
  CONNECTED,
  CHANGE_VIEW,
  DISCONNECTED,
  EXIT_PATIENT_VIEW,
  PATIENT_FILES_DROPPED,
  PATIENT_FILES_UPLOADING,
  PATIENT_FILES_UPLOADED,
  PATIENT_FILE_REMOVED,
  CANCEL_FILE_UPLOAD,
  SEARCH_INPUT_UPDATE,
  PATIENTS_VIEW_RESET,
  PATIENT_TAB_SELECTED
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
      case SEARCH_INPUT_UPDATE: {
        return {
          ...state,
          patientsView: {
            ...state.patientsView,
            ...action.payload
          }
        }
      }
      case PATIENTS_VIEW_RESET: {
        return {
          ...state,
          patientsView: {
            typed: '',
            filters: [],
            suggestions: [],
            searchFocus: false
          } 
        }
      }
      case PATIENT_TAB_SELECTED: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            display: action.payload
          }
        }
      }
      case EXIT_PATIENT_VIEW: {
        return {
          ...state,
          patientProfile: {
            files: [],
            syncing: false,
            display: 'info'
          }
        }
      }
      case CANCEL_FILE_UPLOAD: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: [],
            syncing: false
          }
        }
      }
      case PATIENT_FILES_DROPPED: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: action.payload
          }
        }
      }
      case PATIENT_FILE_REMOVED: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: action.payload
          }
        }
      }
      case PATIENT_FILES_UPLOADING: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            syncing: true
          }
        }
      }
      case PATIENT_FILES_UPLOADED: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: [],
            syncing: false
          }
        }
      }
      case PATIENT_FILES_DROPPED: {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: action.payload
          }
        }
      }
    }
    return state
  }
)
