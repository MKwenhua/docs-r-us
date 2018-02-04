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
// import { split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
const httpLink = createHttpLink({ uri: 'http://localhost:5000/graphql', fetch: fetch });

// import { WebSocketLink } from 'apollo-link-ws';
//
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:5000/subscriptions`,
//   options: {
//     reconnect: true
//   }
// });

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === 'OperationDefinition' && operation === 'subscription';
//   },
//   wsLink,
//   httpLink,
// );
// import { GraphQLClient } from 'graphql-request'
//
// const client = new GraphQLClient('http://localhost:5000/graphql')


const client = new ApolloClient({
  link: httpLink,
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
     <BrowserRouter  >
       <MainContainer />
     </BrowserRouter>
    </ApolloProvider>
   </Provider>, document.getElementById('root')
);
