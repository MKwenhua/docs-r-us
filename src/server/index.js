import React from 'react';
import MainContainer from 'container/MainContainer';
import RenderPage from './render_page';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {buildServerStore, createProjectStore} from '../shared/store';
import defaultState from './defaultState';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const context = {
  serverSide: true
};


const IndexRoute = (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: '/graphql',
      fetch: fetch,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache()
  });
  const store = buildServerStore({...defaultState, currentUser: req.user })
  res.send(RenderPage(
    <Provider store={store}>
     <ApolloProvider client={client}>
    <StaticRouter location={req.url} context={context}>
      <MainContainer />
    </StaticRouter>
     </ApolloProvider>
  </Provider>,
  store.getState()
));

  res.end();
};

export {
  IndexRoute
}
