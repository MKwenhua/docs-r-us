import { combineReducers, createStore } from 'redux';
import setMainReducer from './main'

const serverStoreBuilder = (state) => setMainReducer(state);

const clientStoreBuilder = (state) => setMainReducer(state);

export {
  serverStoreBuilder,
  clientStoreBuilder
}
