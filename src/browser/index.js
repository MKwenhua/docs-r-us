import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { buildClientStore } from '../shared/store'
import MainContainer from 'container/MainContainer'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = buildClientStore(preloadedState)
hydrate(
  <Provider store={store}>
     <BrowserRouter >
       <MainContainer />
     </BrowserRouter>
   </Provider>, document.getElementById('root')
);
