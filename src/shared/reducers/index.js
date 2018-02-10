import { combineReducers, createStore } from 'redux';
import setDoctorReducer from './doctor'
import setPatientReducer from './doctor'

const serverStoreBuilder = state => setDoctorReducer(state);

const clientStoreBuilder = state => setDoctorReducer(state);

const serverBookingStoreBuilder = state => setPatientReducer(state);

const clientBookingStoreBuilder = state => setPatientReducer(state);

export {
  serverStoreBuilder,
  clientStoreBuilder,
  serverBookingStoreBuilder,
  clientBookingStoreBuilder
}
