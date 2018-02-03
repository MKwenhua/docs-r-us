import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { buildClientStore } from '../shared/store'
import MainContainer from 'container/MainContainer'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
const link = createHttpLink({ uri: 'http://localhost:5000/graphql', fetch: fetch });

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = buildClientStore(preloadedState)
hydrate(
  <Provider store={store}>
     <ApolloProvider client={client}>
     <BrowserRouter >
       <MainContainer />
     </BrowserRouter>
   </ApolloProvider>
   </Provider>, document.getElementById('root')
);
