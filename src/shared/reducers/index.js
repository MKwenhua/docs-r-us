import { combineReducers, createStore } from 'redux';
import setDoctorReducer from './doctor'

const serverStoreBuilder = state => setDoctorReducer(state);

const clientStoreBuilder = state => setDoctorReducer(state);

export {
  serverStoreBuilder,
  clientStoreBuilder
}
