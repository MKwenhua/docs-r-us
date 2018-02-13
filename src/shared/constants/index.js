import {
  CONNECTED,
  DISCONNECTED,
  TOP_NAV_ICON_CLICKED
} from './TopNavActions';
import {
  EDIT_APPOINTMENT_STATUS,
  APPOINTMENT_VIEW_BACK,
  EDIT_APPOINTMENT_EVENT,
  CLOSE_APPOINTMENT_MODAL,
  REQUEST_APPOINTMENT_CHANGE,
  APPOINTMENT_RECORD_UPDATED
} from './AppointmentModalActions';

import {
  UPDATE_GEO_COORDINATES,
  TOGGLE_PROXIMITY_SEARCH,
  UPDATE_SEARCH_RESULTS
} from './SearchActions';

const CHANGE_VIEW = 'CHANGE_VIEW';
const EXIT_PATIENT_VIEW = 'EXIT_PATIENT_VIEW';
const PATIENT_FILES_DROPPED = 'PATIENT_FILES_DROPPED'
const PATIENT_FILES_UPLOADED = 'PATIENT_FILES_UPLOADED'
const PATIENT_FILE_REMOVED = 'PATIENT_FILE_REMOVED'
const PATIENT_FILES_UPLOADING = 'PATIENT_FILES_UPLOADING';
const CANCEL_FILE_UPLOAD = 'CANCEL_FILE_UPLOAD';
const PATIENT_TAB_SELECTED = 'PATIENT_TAB_SELECTED';
const SEARCH_INPUT_UPDATE = 'SEARCH_INPUT_UPDATE';
const PATIENTS_VIEW_RESET = 'PATIENTS_VIEW_RESET';
const VIEW_APPOINTMENT = 'VIEW_APPOINTMENT';

const ONLINE_CONNECTION_CHANGE = 'ONLINE_CONNECTION_CHANGE';

//Resources
const CDN_URI = 'https://dq8llwxgkllay.cloudfront.net/';

export {
  CONNECTED,
  CHANGE_VIEW,
  DISCONNECTED,
  EXIT_PATIENT_VIEW,
  CLOSE_APPOINTMENT_MODAL,
  EDIT_APPOINTMENT_EVENT,
  PATIENT_FILES_DROPPED,
  PATIENT_FILES_UPLOADED,
  PATIENT_FILE_REMOVED,
  VIEW_APPOINTMENT,
  APPOINTMENT_VIEW_BACK,
  PATIENT_FILES_UPLOADING,
  CANCEL_FILE_UPLOAD,
  EDIT_APPOINTMENT_STATUS,
  APPOINTMENT_RECORD_UPDATED,
  REQUEST_APPOINTMENT_CHANGE,
  PATIENT_TAB_SELECTED,
  SEARCH_INPUT_UPDATE,
  PATIENTS_VIEW_RESET,
  TOP_NAV_ICON_CLICKED,
  ONLINE_CONNECTION_CHANGE,

  UPDATE_GEO_COORDINATES,
  TOGGLE_PROXIMITY_SEARCH,
  UPDATE_SEARCH_RESULTS,

  CDN_URI
}
