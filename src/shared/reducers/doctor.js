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
  VIEW_APPOINTMENT,
  EDIT_APPOINTMENT_STATUS,
  EDIT_APPOINTMENT_EVENT,
  CLOSE_APPOINTMENT_MODAL,
  APPOINTMENT_RECORD_UPDATED,
  REQUEST_APPOINTMENT_CHANGE,
  SEARCH_INPUT_UPDATE,
  PATIENTS_VIEW_RESET,
  APPOINTMENT_VIEW_BACK,
  PATIENT_TAB_SELECTED
} from 'constants';

export default(initialState) => (function reducer(state = initialState, action) {
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
    case DISCONNECTED:
      {
        return {
          ...state,
          connected: false
        }
        break;
      }
    case VIEW_APPOINTMENT:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {
              syncing: false,
              step: 'view',
              ...action.payload
            }
          }
        }
      }
    case EDIT_APPOINTMENT_EVENT:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {
              ...state.calendarView.selectedEvent,
              response: action.payload
            }
          }
        }
      }
    case EDIT_APPOINTMENT_STATUS:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {
              ...state.calendarView.selectedEvent,
              step: 'confirm',
              status: action.payload
            }
          }
        }
      }
    case REQUEST_APPOINTMENT_CHANGE:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {
              ...state.calendarView.selectedEvent,
              syncing: true
            }
          }
        }
      }
    case APPOINTMENT_VIEW_BACK:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {
              ...state.calendarView.selectedEvent,
              step: 'view',
              status: 'pending'
            }
          }
        }
      }
    case CLOSE_APPOINTMENT_MODAL:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {}
          }
        }
      }
    case APPOINTMENT_RECORD_UPDATED:
      {
        return {
          ...state,
          calendarView: {
            ...state.calendarView,
            selectedEvent: {}
          },
          appointments: {
            ...state.appointments,
            byId: {
              ...state.appointments.byId,
              [action.id]: {
                ...state.appointments.byId[action.id],
                ...action.payload
              }
            }
          }
        }
      }
    case SEARCH_INPUT_UPDATE:
      {
        return {
          ...state,
          patientsView: {
            ...state.patientsView,
            ...action.payload
          }
        }
      }
    case PATIENTS_VIEW_RESET:
      {
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
    case PATIENT_TAB_SELECTED:
      {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            display: action.payload
          }
        }
      }
    case EXIT_PATIENT_VIEW:
      {
        return {
          ...state,
          patientProfile: {
            files: [],
            syncing: false,
            display: 'info'
          }
        }
      }
    case CANCEL_FILE_UPLOAD:
      {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: [],
            syncing: false
          }
        }
      }
    case PATIENT_FILES_DROPPED:
      {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: action.payload
          }
        }
      }
    case PATIENT_FILE_REMOVED:
      {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            files: action.payload
          }
        }
      }
    case PATIENT_FILES_UPLOADING:
      {
        return {
          ...state,
          patientProfile: {
            ...state.patientProfile,
            syncing: true
          }
        }
      }
    case PATIENT_FILES_UPLOADED:
      {
        return {
          ...state,
          patients: {
            ...state.patients,
            byId: {
              ...state.patients.byId,
              [action.patientId]: {
                ...state.patients.byId[action.patientId],
                ...action.payload
              }
            }
          },
          patientProfile: {
            ...state.patientProfile,
            files: [],
            syncing: false,
            display: 'records'
          }
        }
      }
    case PATIENT_FILES_DROPPED:
      {
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
})
