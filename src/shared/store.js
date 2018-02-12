import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {
  serverStoreBuilder,
  clientStoreBuilder,
  serverBookingStoreBuilder,
  clientBookingStoreBuilder
} from './reducers'

const composedStore = compose(
  applyMiddleware(logger)
);

const buildClientStore = (state) => composedStore(createStore)(clientStoreBuilder(state));
const buildServerStore = (state) => createStore(serverStoreBuilder(state));

const buildBookingClientStore = (state) => composedStore(createStore)(clientBookingStoreBuilder(state));
const buildBookingServerStore = (state) => createStore(serverBookingStoreBuilder(state));

export {
  buildClientStore,
  buildServerStore,
  buildBookingClientStore,
  buildBookingServerStore
}
