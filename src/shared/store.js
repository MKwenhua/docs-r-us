import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {
  serverStoreBuilder,
  clientStoreBuilder
} from './reducers'

const composedStore = compose(
  applyMiddleware(logger)
);

const buildClientStore = (state) => composedStore(createStore)(clientStoreBuilder(state));
const buildServerStore = (state) => createStore(serverStoreBuilder(state));

export {
  buildClientStore,
  buildServerStore
}
